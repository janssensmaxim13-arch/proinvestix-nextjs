'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, UserCheck, Activity, Globe, Cpu, Building, Network, GitBranch, ArrowRight } from 'lucide-react'

const modules = [
  {
    name: 'Player Identity',
    description: 'Digitale spelersidentiteit & verificatie',
    href: '/player-identity',
    icon: UserCheck,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'SoccerLab Performance',
    description: 'Sportwetenschap & prestatie analyse',
    href: '/soccerlab',
    icon: Activity,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Diaspora Talent Network',
    description: 'Marokkaanse talenten wereldwijd',
    href: '/diaspora-talents',
    icon: Globe,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'AI Scouting Engine',
    description: 'Machine learning talent detectie',
    href: '/ai-scouting',
    icon: Cpu,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Academy Management',
    description: 'Beheer jeugdopleidingen & academies',
    href: '/academy-management',
    icon: Building,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Club Connect',
    description: 'Internationale club partnerships',
    href: '/club-connect',
    icon: Network,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Platform Architecture',
    description: 'Systeem infrastructuur & monitoring',
    href: '/platform-architecture',
    icon: GitBranch,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
  },
]

export default function M6AcademyCategoryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
          <GraduationCap className="h-6 w-6 text-yellow-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">M6 Academy</h1>
          <p className="text-muted-foreground">
            Mohammed VI Football Academy ecosysteem
          </p>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.href} href={module.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-yellow-500/50 cursor-pointer group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${module.bgColor} flex items-center justify-center mb-2`}>
                    <Icon className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {module.name}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
