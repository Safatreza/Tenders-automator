// NextAuth Configuration for Tender Automator
// Email magic link authentication with role-based access

import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import EmailProvider from 'next-auth/providers/email'
import { prisma } from './prisma'
import { sendMagicLinkEmail } from './email'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        try {
          await sendMagicLinkEmail(identifier, url)
        } catch (error) {
          console.error('Failed to send verification email:', error)
          throw new Error('Failed to send verification email')
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        // Get user with role from database
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { id: true, role: true, name: true, email: true },
        })

        if (dbUser) {
          session.user.id = dbUser.id
          session.user.role = dbUser.role
          session.user.name = dbUser.name
          session.user.email = dbUser.email
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        })
        if (dbUser) {
          token.role = dbUser.role
        }
      }
      return token
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Allow sign in for all verified emails
      return true
    },
  },
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async createUser({ user }) {
      // Log user creation in audit trail
      if (user.id) {
        await prisma.auditLog.create({
          data: {
            actorId: user.id,
            action: 'USER_CREATED',
            entity: 'User',
            entityId: user.id,
            diff: {
              before: null,
              after: {
                email: user.email,
                role: 'ANALYST', // Default role
              },
            },
          },
        })
      }
    },
    async signIn({ user, account, profile, isNewUser }) {
      // Log sign in event
      if (user.id) {
        await prisma.auditLog.create({
          data: {
            actorId: user.id,
            action: 'USER_SIGNIN',
            entity: 'User',
            entityId: user.id,
            diff: {
              timestamp: new Date().toISOString(),
              isNewUser,
              provider: account?.provider,
            },
          },
        })
      }
    },
  },
  debug: process.env.NODE_ENV === 'development',
}