'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Upload,
  Settings,
  Play,
  User,
  LogOut,
  Menu,
  X,
  Home
} from 'lucide-react'

export function Navigation() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (status === 'loading') {
    return (
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  if (!session) {
    return null // Don't show navigation on auth pages
  }

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Tenders', href: '/tenders', icon: FileText },
    { name: 'Ingest', href: '/ingest', icon: Upload },
    { name: 'Runs', href: '/runs', icon: Play },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  const isCurrentPath = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/auth/signin' })
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => router.push('/')}
                className="text-xl font-bold text-blue-600 hover:text-blue-700"
              >
                Tender Automator
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                const current = isCurrentPath(item.href)

                return (
                  <button
                    key={item.name}
                    onClick={() => router.push(item.href)}
                    className={`
                      inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                      ${current
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* User menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700">{session.user?.name || session.user?.email}</span>
              <Badge variant="outline" className="text-xs">
                {session.user?.role || 'Analyst'}
              </Badge>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const current = isCurrentPath(item.href)

                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      router.push(item.href)
                      setMobileMenuOpen(false)
                    }}
                    className={`
                      block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors
                      ${current
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <Icon className="h-4 w-4 mr-3" />
                      {item.name}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Mobile user menu */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-3">
                <User className="h-8 w-8 text-gray-400" />
                <div>
                  <div className="text-base font-medium text-gray-800">
                    {session.user?.name || session.user?.email}
                  </div>
                  <Badge variant="outline" className="text-xs mt-1">
                    {session.user?.role || 'Analyst'}
                  </Badge>
                </div>
              </div>
              <div className="mt-3 px-4">
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}