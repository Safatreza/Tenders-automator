// API Route Tests
// Example test suite for Next.js API routes

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { GET, POST, PATCH, DELETE } from '@/app/api/tenders/route'
import { createMockTender, createMockSession } from '@/test/utils'

// Mock dependencies
vi.mock('next-auth', () => ({
  getServerSession: vi.fn()
}))

vi.mock('@/lib/auth', () => ({
  authOptions: {}
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    tender: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn()
    },
    auditLog: {
      create: vi.fn()
    }
  }
}))

vi.mock('@/lib/validators/schemas', () => ({
  CreateTenderSchema: {
    parse: vi.fn()
  },
  UpdateTenderSchema: {
    parse: vi.fn()
  }
}))

import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { CreateTenderSchema, UpdateTenderSchema } from '@/lib/validators/schemas'

const mockGetServerSession = vi.mocked(getServerSession)
const mockPrisma = vi.mocked(prisma)
const mockCreateTenderSchema = vi.mocked(CreateTenderSchema)
const mockUpdateTenderSchema = vi.mocked(UpdateTenderSchema)

describe('Tenders API Routes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('GET /api/tenders', () => {
    it('returns paginated tenders for authenticated user', async () => {
      const mockTenders = [
        createMockTender({ id: 'tender-1' }),
        createMockTender({ id: 'tender-2' })
      ]
      const mockSession = createMockSession()

      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findMany.mockResolvedValue(mockTenders)
      mockPrisma.tender.count.mockResolvedValue(2)

      const request = new NextRequest('http://localhost/api/tenders?page=1&limit=10')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.items).toHaveLength(2)
      expect(data.data.pagination).toEqual({
        page: 1,
        limit: 10,
        total: 2,
        pages: 1
      })
    })

    it('returns 401 for unauthenticated requests', async () => {
      mockGetServerSession.mockResolvedValue(null)

      const request = new NextRequest('http://localhost/api/tenders')
      const response = await GET(request)

      expect(response.status).toBe(401)
    })

    it('applies search filters correctly', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findMany.mockResolvedValue([])
      mockPrisma.tender.count.mockResolvedValue(0)

      const request = new NextRequest(
        'http://localhost/api/tenders?search=construction&status=APPROVED&sortBy=deadline&sortOrder=asc'
      )
      await GET(request)

      expect(mockPrisma.tender.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            AND: [
              {
                OR: [
                  { title: { contains: 'construction', mode: 'insensitive' } },
                  { description: { contains: 'construction', mode: 'insensitive' } },
                  { organization: { contains: 'construction', mode: 'insensitive' } }
                ]
              },
              { status: 'APPROVED' }
            ]
          }),
          orderBy: { deadline: 'asc' }
        })
      )
    })

    it('handles database errors gracefully', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findMany.mockRejectedValue(new Error('Database error'))

      const request = new NextRequest('http://localhost/api/tenders')
      const response = await GET(request)

      expect(response.status).toBe(500)
      const data = await response.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to fetch tenders')
    })
  })

  describe('POST /api/tenders', () => {
    it('creates tender for authenticated user', async () => {
      const mockSession = createMockSession()
      const newTenderData = {
        title: 'New Tender',
        description: 'Test description',
        organization: 'Test Org'
      }
      const createdTender = createMockTender(newTenderData)

      mockGetServerSession.mockResolvedValue(mockSession)
      mockCreateTenderSchema.parse.mockReturnValue(newTenderData)
      mockPrisma.tender.create.mockResolvedValue(createdTender)
      mockPrisma.auditLog.create.mockResolvedValue({} as any)

      const request = new NextRequest('http://localhost/api/tenders', {
        method: 'POST',
        body: JSON.stringify(newTenderData)
      })
      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(201)
      expect(data.success).toBe(true)
      expect(data.data).toEqual(createdTender)
    })

    it('returns 403 for unauthorized roles', async () => {
      const mockSession = createMockSession({ user: { role: 'VIEWER' } })
      mockGetServerSession.mockResolvedValue(mockSession)

      const request = new NextRequest('http://localhost/api/tenders', {
        method: 'POST',
        body: JSON.stringify({})
      })
      const response = await POST(request)

      expect(response.status).toBe(403)
    })

    it('validates request data', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockCreateTenderSchema.parse.mockImplementation(() => {
        throw new Error('Validation failed')
      })

      const request = new NextRequest('http://localhost/api/tenders', {
        method: 'POST',
        body: JSON.stringify({ title: '' })
      })
      const response = await POST(request)

      expect(response.status).toBe(400)
    })

    it('creates audit log entry', async () => {
      const mockSession = createMockSession()
      const newTenderData = {
        title: 'New Tender',
        description: 'Test description',
        organization: 'Test Org'
      }
      const createdTender = createMockTender(newTenderData)

      mockGetServerSession.mockResolvedValue(mockSession)
      mockCreateTenderSchema.parse.mockReturnValue(newTenderData)
      mockPrisma.tender.create.mockResolvedValue(createdTender)
      mockPrisma.auditLog.create.mockResolvedValue({} as any)

      const request = new NextRequest('http://localhost/api/tenders', {
        method: 'POST',
        body: JSON.stringify(newTenderData)
      })
      await POST(request)

      expect(mockPrisma.auditLog.create).toHaveBeenCalledWith({
        data: {
          action: 'CREATE_TENDER',
          entity: 'tender',
          entityId: createdTender.id,
          actorId: mockSession.user.id,
          at: expect.any(Date),
          diff: expect.any(Object)
        }
      })
    })
  })

  describe('PATCH /api/tenders/[id]', () => {
    it('updates tender with valid data', async () => {
      const mockSession = createMockSession()
      const existingTender = createMockTender()
      const updateData = { status: 'APPROVED' }
      const updatedTender = { ...existingTender, ...updateData }

      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findUnique.mockResolvedValue(existingTender)
      mockUpdateTenderSchema.parse.mockReturnValue(updateData)
      mockPrisma.tender.update.mockResolvedValue(updatedTender)
      mockPrisma.auditLog.create.mockResolvedValue({} as any)

      const request = new NextRequest(`http://localhost/api/tenders/${existingTender.id}`, {
        method: 'PATCH',
        body: JSON.stringify(updateData)
      })

      // Mock the dynamic route params
      const response = await PATCH(request, { params: { id: existingTender.id } })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.status).toBe('APPROVED')
    })

    it('returns 404 for non-existent tender', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findUnique.mockResolvedValue(null)

      const request = new NextRequest('http://localhost/api/tenders/non-existent', {
        method: 'PATCH',
        body: JSON.stringify({ status: 'APPROVED' })
      })

      const response = await PATCH(request, { params: { id: 'non-existent' } })

      expect(response.status).toBe(404)
    })
  })

  describe('DELETE /api/tenders/[id]', () => {
    it('deletes tender for authorized user', async () => {
      const mockSession = createMockSession({ user: { role: 'ADMIN' } })
      const existingTender = createMockTender()

      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findUnique.mockResolvedValue(existingTender)
      mockPrisma.tender.delete.mockResolvedValue(existingTender)
      mockPrisma.auditLog.create.mockResolvedValue({} as any)

      const request = new NextRequest(`http://localhost/api/tenders/${existingTender.id}`, {
        method: 'DELETE'
      })

      const response = await DELETE(request, { params: { id: existingTender.id } })

      expect(response.status).toBe(200)
    })

    it('returns 403 for unauthorized roles', async () => {
      const mockSession = createMockSession({ user: { role: 'ANALYST' } })
      mockGetServerSession.mockResolvedValue(mockSession)

      const request = new NextRequest('http://localhost/api/tenders/some-id', {
        method: 'DELETE'
      })

      const response = await DELETE(request, { params: { id: 'some-id' } })

      expect(response.status).toBe(403)
    })
  })

  describe('Query Parameter Handling', () => {
    it('handles pagination parameters correctly', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findMany.mockResolvedValue([])
      mockPrisma.tender.count.mockResolvedValue(0)

      const request = new NextRequest('http://localhost/api/tenders?page=2&limit=25')
      await GET(request)

      expect(mockPrisma.tender.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          skip: 25, // (page - 1) * limit
          take: 25
        })
      )
    })

    it('caps limit parameter at maximum', async () => {
      const mockSession = createMockSession()
      mockGetServerSession.mockResolvedValue(mockSession)
      mockPrisma.tender.findMany.mockResolvedValue([])
      mockPrisma.tender.count.mockResolvedValue(0)

      const request = new NextRequest('http://localhost/api/tenders?limit=1000')
      await GET(request)

      expect(mockPrisma.tender.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          take: 100 // Should be capped at 100
        })
      )
    })
  })
})