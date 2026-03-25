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
  ChevronLeft,
  PanelLeftClose,
  PanelLeft,
  Menu,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  { name: "Governance & Integrity", href: "/category/governance", icon: Shield, color: "text-purple-500", bgColor: "bg-purple-500/10" },
  { name: "Financial Ecosystem", href: "/category/financial", icon: Wallet, color: "text-green-500", bgColor: "bg-green-500/10" },
  { name: "Sport Division", href: "/category/sport", icon: Award, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { name: "M6 Academy", href: "/category/m6-academy", icon: GraduationCap, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
  { name: "WC2030 & Diaspora", href: "/category/wc2030", icon: Globe, color: "text-red-500", bgColor: "bg-red-500/10" },
  { name: "Social Impact", href: "/category/social", icon: Heart, color: "text-pink-500", bgColor: "bg-pink-500/10" },
  { name: "Identity & Security", href: "/category/security", icon: Lock, color: "text-blue-500", bgColor: "bg-blue-500/10" },
]

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay - alleen zichtbaar als sidebar open is op mobiel */}
      {!isCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onToggle} />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300",
        isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-16" : "w-64 translate-x-0"
      )}>
        {/* Header met logo en toggle */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className={cn("flex items-center gap-2", isCollapsed && "lg:hidden")}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-green-600">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <span className="text-lg font-bold">ProInvestiX</span>
          </Link>
          
          {/* Logo alleen (collapsed mode) */}
          {isCollapsed && (
            <Link href="/dashboard" className="hidden lg:flex items-center justify-center w-full">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-green-600">
                <span className="text-lg font-bold text-white">P</span>
              </div>
            </Link>
          )}

          {/* Close knop voor mobiel */}
          <Button variant="ghost" size="icon" onClick={onToggle} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Collapse toggle knop - onderaan sidebar op desktop */}
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onToggle} 
          className={cn(
            "absolute bottom-4 hidden lg:flex items-center gap-2 text-muted-foreground hover:text-foreground",
            isCollapsed ? "left-1/2 -translate-x-1/2" : "left-4"
          )}
        >
          {isCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4" />
              <span className="text-xs">Inklappen</span>
            </>
          )}
        </Button>

        {/* Navigation */}
        <nav className="h-[calc(100vh-8rem)] overflow-y-auto p-4">
          {/* Dashboard link */}
          <Link
            href="/dashboard"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-4',
              pathname === '/dashboard' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              isCollapsed && "lg:justify-center lg:px-2"
            )}
            title={isCollapsed ? "Dashboard" : undefined}
          >
            <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>

          <div className="border-t my-4" />

          {!isCollapsed && (
            <p className="px-3 text-xs font-semibold uppercase text-muted-foreground mb-3">Categorieën</p>
          )}
          
          <div className="space-y-2">
            {categories.map((category) => {
              const isActive = pathname.startsWith(category.href)
              const Icon = category.icon
              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                    isActive ? `${category.bgColor} ${category.color}` : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    isCollapsed && "lg:justify-center lg:px-2"
                  )}
                  title={isCollapsed ? category.name : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-5 w-5 flex-shrink-0", isActive && category.color)} />
                    {!isCollapsed && <span>{category.name}</span>}
                  </div>
                  {!isCollapsed && <ChevronRight className={cn("h-4 w-4 transition-transform", isActive && "translate-x-1")} />}
                </Link>
              )
            })}
          </div>
        </nav>
      </aside>

      {/* Floating menu knop voor mobiel (altijd zichtbaar linksboven) */}
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={cn(
          "fixed top-4 left-4 z-50 lg:hidden shadow-lg bg-background",
          !isCollapsed && "hidden" // Verberg als sidebar open is
        )}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Floating toggle voor desktop als sidebar ingeklapt is */}
      {isCollapsed && (
        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className="fixed top-4 left-20 z-50 hidden lg:flex shadow-lg bg-background"
        >
          <PanelLeft className="h-4 w-4" />
        </Button>
      )}
    </>
  )
}
