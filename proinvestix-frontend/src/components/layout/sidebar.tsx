'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Shield,
  Wallet,
  Award,
  GraduationCap,
  Globe,
  Heart,
  Lock,
  ChevronRight,
} from 'lucide-react'

// =============================================================================
// NAVIGATION - Alleen categorieën (compact zoals Streamlit)
// =============================================================================

const categories = [
  {
    name: "Governance & Integrity",
    href: "/category/governance",
    icon: Shield,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Financial Ecosystem",
    href: "/category/financial",
    icon: Wallet,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Sport Division",
    href: "/category/sport",
    icon: Award,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "M6 Academy",
    href: "/category/m6-academy",
    icon: GraduationCap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "WC2030 & Diaspora",
    href: "/category/wc2030",
    icon: Globe,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Social Impact",
    href: "/category/social",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Identity & Security",
    href: "/category/security",
    icon: Lock,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
]

// =============================================================================
// MAIN SIDEBAR COMPONENT
// =============================================================================

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-green-600">
            <span className="text-lg font-bold text-white">P</span>
          </div>
          <span className="text-lg font-bold">ProInvestiX</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-4',
            pathname === '/dashboard'
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>

        {/* Divider */}
        <div className="border-t my-4" />

        {/* Categories */}
        <div className="space-y-2">
          <p className="px-3 text-xs font-semibold uppercase text-muted-foreground mb-3">
            Categorieën
          </p>
          
          {categories.map((category) => {
            const isActive = pathname.startsWith(category.href)
            const Icon = category.icon
            
            return (
              <Link
                key={category.href}
                href={category.href}
                className={cn(
                  'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? `${category.bgColor} ${category.color}`
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("h-5 w-5", isActive && category.color)} />
                  <span>{category.name}</span>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 transition-transform",
                  isActive && "translate-x-1"
                )} />
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
