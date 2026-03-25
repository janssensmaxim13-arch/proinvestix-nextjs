'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, BadgeCheck, Fingerprint, Settings, ArrowRight } from 'lucide-react'

const modules = [
  {
    name: 'Maroc ID',
    description: 'Nationale digitale identiteit & verificatie',
    href: '/maroc-id',
    icon: BadgeCheck,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Identity Shield',
    description: 'Identiteitsbescherming & privacy',
    href: '/identities',
    icon: Fingerprint,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'Admin',
    description: 'Systeembeheer & gebruikersbeheer',
    href: '/admin',
    icon: Settings,
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
  },
]

export default function SecurityCategoryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
          <Lock className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Identity & Security</h1>
          <p className="text-muted-foreground">
            Identiteitsbeheer, beveiliging & administratie
          </p>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.href} href={module.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-blue-500/50 cursor-pointer group">
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
