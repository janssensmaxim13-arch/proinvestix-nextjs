'use client'

import { BackButton } from '@/components/ui/back-button'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Flag, Car, ArrowRight, Truck } from 'lucide-react'

const modules = [
  {
    name: 'FanDorpen',
    description: 'WK2030 internationale supporter villages',
    href: '/fandorpen',
    icon: Flag,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'Mobility',
    description: 'WK2030 transport & reisbeheer',
    href: '/mobility',
    icon: Car,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'PMA Logistics',
    description: 'Platform logistiek & supply chain',
    href: '/pma-logistics',
    icon: Truck,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
]

export default function WC2030CategoryPage() {
  return (
    <div className="space-y-6">
      <BackButton href="/dashboard" label="Terug naar Dashboard" />
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
          <Globe className="h-6 w-6 text-red-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">WC2030 & Diaspora</h1>
          <p className="text-muted-foreground">
            World Cup 2030 operaties & diaspora diensten
          </p>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.href} href={module.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-red-500/50 cursor-pointer group">
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
