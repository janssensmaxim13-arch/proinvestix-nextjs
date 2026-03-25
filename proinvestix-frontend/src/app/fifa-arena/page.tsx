'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Tv,
  Play,
  Calendar,
  Medal,
  Zap
} from 'lucide-react'

export default function FifaArenaPage() {
  const stats = [
    { label: 'Actieve Spelers', value: '12,456', icon: Users, color: 'text-blue-500' },
    { label: 'Toernooien', value: '89', icon: Trophy, color: 'text-yellow-500' },
    { label: 'Live Streams', value: '24', icon: Tv, color: 'text-red-500' },
    { label: 'Prijzenpot', value: '€125K', icon: Medal, color: 'text-green-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Gamepad2 className="h-8 w-8 text-purple-500" />
            FIFA Arena
          </h1>
          <p className="text-muted-foreground mt-1">
            E-Sports & gaming competities
          </p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
          <Play className="mr-2 h-4 w-4" />
          Join Tournament
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
        {/* Live Tournaments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Live Toernooien
            </CardTitle>
            <CardDescription>Nu bezig</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Morocco Pro League', players: 64, prize: '€10,000', status: 'Live' },
                { name: 'Casablanca Cup', players: 128, prize: '€5,000', status: 'Live' },
                { name: 'Youth Championship', players: 32, prize: '€2,500', status: 'Starting' },
              ].map((tournament, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{tournament.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {tournament.players} spelers • {tournament.prize}
                    </p>
                  </div>
                  <Badge variant={tournament.status === 'Live' ? 'destructive' : 'secondary'}>
                    {tournament.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Aankomend
            </CardTitle>
            <CardDescription>Geplande toernooien</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'WC 2030 Qualifier', date: '2024-03-01', prize: '€50,000' },
                { name: 'African Championship', date: '2024-03-15', prize: '€25,000' },
                { name: 'Community Cup', date: '2024-03-20', prize: '€1,000' },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="font-bold text-green-500">{event.prize}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
