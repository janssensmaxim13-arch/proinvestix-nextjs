'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { cn } from '@/lib/utils'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      
      <main className={cn(
        "transition-all duration-300 min-h-screen",
        isCollapsed ? "lg:pl-16" : "lg:pl-64",
        "pt-16 lg:pt-0" // Extra padding top op mobiel voor menu knop
      )}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
