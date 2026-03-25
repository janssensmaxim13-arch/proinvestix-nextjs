'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Trophy, ArrowLeftRight, GraduationCap, ShoppingCart, Shield, School, Gamepad2, ArrowRight } from 'lucide-react'

const modules = [
  {
    name: 'NTSP',
    description: 'National Talent Scouting Platform',
    href: '/talents',
    icon: Trophy,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    name: 'Transfers',
    description: 'Transfer management & compensatie',
    href: '/transfers',
    icon: ArrowLeftRight,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Academy',
    description: 'Jeugdopleiding & academies beheer',
    href: '/academies',
    icon: GraduationCap,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Transfer Market',
    description: 'Spelersmarkt & transfer listings',
    href: '/transfer-market',
    icon: ShoppingCart,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'FRMF',
    description: 'Federatie management & officiële zaken',
    href: '/frmf',
    icon: Shield,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'School Portal',
    description: 'Educatie & jeugdontwikkeling',
    href: '/school-portal',
    icon: School,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'FIFA Arena',
    description: 'E-Sports & gaming competities',
    href: '/fifa-arena',
    icon: Gamepad2,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
]

export default function SportCategoryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
          <Award className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Sport Division</h1>
          <p className="text-muted-foreground">
            Voetbal operaties, transfers en competities
          </p>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.href} href={module.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-orange-500/50 cursor-pointer group">
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
