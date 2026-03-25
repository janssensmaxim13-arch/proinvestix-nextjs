'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  ArrowLeftRight,
  Ticket,
  Wallet,
  Heart,
  GraduationCap,
  CreditCard,
  Flag,
  Shield,
  Fingerprint,
  BadgeCheck,
  Brain,
  Ban,
  Newspaper,
  Building,
  Settings,
  ChevronDown,
  Award,
  Activity,
  Globe,
  Users,
  Gamepad2,
  School,
  ShoppingCart,
  UserCheck,
  Cpu,
  Network,
  GitBranch,
  Car,
  Heart as HandHeart,
  Lock,
  Stethoscope,
} from 'lucide-react'
import { useState } from 'react'

// =============================================================================
// TYPES
// =============================================================================

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: { title: string; href: string }[]
}

interface NavCategory {
  category: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  items: NavItem[]
}

// =============================================================================
// NAVIGATION STRUCTURE - Categorieën zoals Streamlit
// =============================================================================

const navigationCategories: NavCategory[] = [
  // -------------------------------------------------------------------------
  // GOVERNANCE & INTEGRITY
  // -------------------------------------------------------------------------
  {
    category: "Governance & Integrity",
    icon: Shield,
    color: "text-purple-500",
    items: [
      {
        title: 'MedShield',
        href: '/medshield',
        icon: Stethoscope,
      },
      {
        title: 'Consulaat',
        href: '/consulate',
        icon: Building,
        children: [
          { title: 'Documenten', href: '/consulate/documents' },
          { title: 'Afspraken', href: '/consulate/appointments' },
        ],
      },
      {
        title: 'NIL',
        href: '/nil',
        icon: Newspaper,
        children: [
          { title: 'Signalen', href: '/nil/signals' },
          { title: 'Factcards', href: '/nil/factcards' },
        ],
      },
    ]
  },

  // -------------------------------------------------------------------------
  // FINANCIAL ECOSYSTEM
  // -------------------------------------------------------------------------
  {
    category: "Financial Ecosystem",
    icon: Wallet,
    color: "text-green-500",
    items: [
      {
        title: 'TicketChain',
        href: '/tickets',
        icon: Ticket,
        children: [
          { title: 'Evenementen', href: '/events' },
          { title: 'Mijn Tickets', href: '/tickets' },
        ],
      },
      {
        title: 'AntiLobby',
        href: '/antilobby',
        icon: Ban,
      },
      {
        title: 'Wallet',
        href: '/wallets',
        icon: Wallet,
      },
      {
        title: 'Abonnementen',
        href: '/subscriptions',
        icon: CreditCard,
      },
    ]
  },

  // -------------------------------------------------------------------------
  // SPORT DIVISION
  // -------------------------------------------------------------------------
  {
    category: "Sport Division",
    icon: Award,
    color: "text-orange-500",
    items: [
      {
        title: 'NTSP',
        href: '/talents',
        icon: Award,
        children: [
          { title: 'Talenten', href: '/talents' },
          { title: 'Scouts', href: '/scouts' },
        ],
      },
      {
        title: 'Transfers',
        href: '/transfers',
        icon: ArrowLeftRight,
        children: [
          { title: 'Overzicht', href: '/transfers' },
          { title: 'Calculator', href: '/transfers/calculator' },
        ],
      },
      {
        title: 'Academy',
        href: '/academies',
        icon: GraduationCap,
      },
      {
        title: 'Transfer Market',
        href: '/transfer-market',
        icon: ShoppingCart,
      },
      {
        title: 'FRMF',
        href: '/frmf',
        icon: Shield,
        children: [
          { title: 'Scheidsrechters', href: '/frmf/referees' },
          { title: 'VAR Beslissingen', href: '/frmf/var-decisions' },
          { title: 'Spelers', href: '/frmf/players' },
        ],
      },
      {
        title: 'School Portal',
        href: '/school-portal',
        icon: School,
      },
      {
        title: 'FIFA Arena',
        href: '/fifa-arena',
        icon: Gamepad2,
      },
    ]
  },

  // -------------------------------------------------------------------------
  // M6 ACADEMY
  // -------------------------------------------------------------------------
  {
    category: "M6 Academy",
    icon: GraduationCap,
    color: "text-yellow-500",
    items: [
      {
        title: 'Player Identity',
        href: '/player-identity',
        icon: UserCheck,
      },
      {
        title: 'SoccerLab Performance',
        href: '/soccerlab',
        icon: Activity,
      },
      {
        title: 'Diaspora Talent Network',
        href: '/diaspora-talents',
        icon: Globe,
      },
      {
        title: 'AI Scouting Engine',
        href: '/ai-scouting',
        icon: Cpu,
      },
      {
        title: 'Academy Management',
        href: '/academy-management',
        icon: GraduationCap,
      },
      {
        title: 'Club Connect',
        href: '/club-connect',
        icon: Network,
      },
      {
        title: 'Platform Architecture',
        href: '/platform-architecture',
        icon: GitBranch,
      },
    ]
  },

  // -------------------------------------------------------------------------
  // WC2030 & DIASPORA
  // -------------------------------------------------------------------------
  {
    category: "WC2030 & Diaspora",
    icon: Globe,
    color: "text-red-500",
    items: [
      {
        title: 'FanDorpen',
        href: '/fandorpen',
        icon: Flag,
      },
      {
        title: 'Mobility',
        href: '/mobility',
        icon: Car,
      },
    ]
  },

  // -------------------------------------------------------------------------
  // SOCIAL IMPACT
  // -------------------------------------------------------------------------
  {
    category: "Social Impact",
    icon: Heart,
    color: "text-pink-500",
    items: [
      {
        title: 'Hayat',
        href: '/hayat',
        icon: Brain,
        children: [
          { title: 'Sessies', href: '/hayat/sessions' },
          { title: 'Crisis', href: '/hayat/crisis' },
        ],
      },
      {
        title: 'Inclusion',
        href: '/inclusion',
        icon: HandHeart,
      },
      {
        title: 'Anti-Hate',
        href: '/antihate',
        icon: Ban,
        children: [
          { title: 'Incidenten', href: '/antihate/incidents' },
          { title: 'Juridisch', href: '/antihate/legal' },
        ],
      },
    ]
  },

  // -------------------------------------------------------------------------
  // IDENTITY & SECURITY
  // -------------------------------------------------------------------------
  {
    category: "Identity & Security",
    icon: Lock,
    color: "text-blue-500",
    items: [
      {
        title: 'Maroc ID',
        href: '/maroc-id',
        icon: BadgeCheck,
        children: [
          { title: 'Mijn ID', href: '/maroc-id' },
          { title: 'Certificaten', href: '/maroc-id/certificates' },
        ],
      },
      {
        title: 'Identity Shield',
        href: '/identities',
        icon: Fingerprint,
      },
      {
        title: 'Admin',
        href: '/admin',
        icon: Settings,
        children: [
          { title: 'Gebruikers', href: '/admin/users' },
          { title: 'Sessies', href: '/admin/sessions' },
          { title: 'Audit Log', href: '/admin/audit' },
          { title: 'Instellingen', href: '/admin/settings' },
        ],
      },
    ]
  },
]

// =============================================================================
// COMPONENTS
// =============================================================================

function NavItemComponent({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
  const hasChildren = item.children && item.children.length > 0
  const Icon = item.icon

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <div className="flex items-center gap-3">
            <Icon className="h-4 w-4" />
            <span>{item.title}</span>
          </div>
          <ChevronDown
            className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
          />
        </button>
        {isOpen && item.children && (
          <div className="ml-7 mt-1 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',
                  pathname === child.href
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{item.title}</span>
    </Link>
  )
}

function CategorySection({ category }: { category: NavCategory }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const Icon = category.icon

  return (
    <div className="mb-4">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-3 py-2 mb-1"
      >
        <div className="flex items-center gap-2">
          <Icon className={cn("h-4 w-4", category.color)} />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category.category}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'h-3 w-3 text-muted-foreground transition-transform',
            !isExpanded && '-rotate-90'
          )}
        />
      </button>

      {/* Category Items */}
      {isExpanded && (
        <div className="space-y-1 ml-2">
          {category.items.map((item) => (
            <NavItemComponent key={item.href} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

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
      <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4 scrollbar-thin">
        {/* Dashboard - Always visible at top */}
        <div className="mb-4">
          <Link
            href="/dashboard"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/dashboard'
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Separator */}
        <div className="border-t mb-4" />

        {/* Categories */}
        {navigationCategories.map((category) => (
          <CategorySection key={category.category} category={category} />
        ))}
      </nav>
    </aside>
  )
}
