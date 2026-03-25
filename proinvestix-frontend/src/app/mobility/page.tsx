'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Car, 
  Plane, 
  Train, 
  MapPin,
  Calendar,
  Users,
  Clock,
  Navigation
} from 'lucide-react'

export default function MobilityPage() {
  const stats = [
    { label: 'Actieve Reizen', value: '234', icon: Plane, color: 'text-blue-500' },
    { label: 'Transportbookings', value: '1,456', icon: Car, color: 'text-green-500' },
    { label: 'Reizigers', value: '3,892', icon: Users, color: 'text-purple-500' },
    { label: 'Bestemmingen', value: '48', icon: MapPin, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Car className="h-8 w-8 text-blue-500" />
            Mobility
          </h1>
          <p className="text-muted-foreground mt-1">
            WK2030 transport & reisbeheer
          </p>
        </div>
        <Button>
          <Navigation className="mr-2 h-4 w-4" />
          Plan Reis
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
        {/* Upcoming Trips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Aankomende Reizen
            </CardTitle>
            <CardDescription>Geplande transporten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { route: 'Casablanca → Rabat', type: 'Train', date: '2024-02-15', passengers: 45 },
                { route: 'Marrakech → Agadir', type: 'Bus', date: '2024-02-16', passengers: 32 },
                { route: 'Fes → Tangier', type: 'Train', date: '2024-02-17', passengers: 28 },
                { route: 'Airport Transfer', type: 'Shuttle', date: '2024-02-18', passengers: 156 },
              ].map((trip, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{trip.route}</p>
                    <p className="text-sm text-muted-foreground">{trip.date} • {trip.passengers} passagiers</p>
                  </div>
                  <Badge variant="outline">
                    {trip.type === 'Train' && <Train className="mr-1 h-3 w-3" />}
                    {trip.type === 'Bus' && <Car className="mr-1 h-3 w-3" />}
                    {trip.type === 'Shuttle' && <Car className="mr-1 h-3 w-3" />}
                    {trip.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transport Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5 text-green-500" />
              Transport Opties
            </CardTitle>
            <CardDescription>Beschikbare vervoersmiddelen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[
                { name: 'HSR (Sneltrein)', icon: Train, desc: 'Al Boraq hogesnelheidstrein', available: 12 },
                { name: 'Officiële Shuttles', icon: Car, desc: 'WK2030 shuttleservice', available: 45 },
                { name: 'Vliegtuig', icon: Plane, desc: 'Binnenlandse vluchten', available: 8 },
                { name: 'VIP Transport', icon: Car, desc: 'Privé vervoer', available: 24 },
              ].map((option, i) => (
                <Button key={i} variant="outline" className="justify-start h-auto py-3">
                  <option.icon className="mr-3 h-5 w-5 text-muted-foreground" />
                  <div className="text-left flex-1">
                    <p className="font-medium">{option.name}</p>
                    <p className="text-xs text-muted-foreground">{option.desc}</p>
                  </div>
                  <Badge variant="secondary">{option.available} beschikbaar</Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
