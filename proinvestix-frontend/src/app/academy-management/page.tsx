'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Users, 
  Building, 
  Trophy,
  Calendar,
  TrendingUp,
  Star,
  Settings
} from 'lucide-react'

export default function AcademyManagementPage() {
  const stats = [
    { label: 'Academies', value: '24', icon: Building, color: 'text-blue-500' },
    { label: 'Spelers', value: '1,847', icon: Users, color: 'text-green-500' },
    { label: 'Coaches', value: '156', icon: GraduationCap, color: 'text-purple-500' },
    { label: 'Doorgestroomd', value: '234', icon: Trophy, color: 'text-yellow-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-blue-500" />
            Academy Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Beheer jeugdopleidingen & academies
          </p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Beheer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Academies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Top Academies
            </CardTitle>
            <CardDescription>Best presterende opleidingen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Mohammed VI Academy', city: 'Salé', players: 245, rating: 4.8 },
                { name: 'Raja Youth', city: 'Casablanca', players: 189, rating: 4.6 },
                { name: 'AS FAR Academy', city: 'Rabat', players: 156, rating: 4.5 },
                { name: 'Wydad Academy', city: 'Casablanca', players: 178, rating: 4.4 },
              ].map((academy, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{academy.name}</p>
                    <p className="text-sm text-muted-foreground">{academy.city} • {academy.players} spelers</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{academy.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Academy Agenda
            </CardTitle>
            <CardDescription>Geplande activiteiten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Inter-Academy Tournament', date: '2024-02-15', type: 'Competitie' },
                { name: 'Coaches Workshop', date: '2024-02-18', type: 'Training' },
                { name: 'Talent Selection Day', date: '2024-02-22', type: 'Scouting' },
                { name: 'Parent Meeting', date: '2024-02-25', type: 'Administratie' },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
