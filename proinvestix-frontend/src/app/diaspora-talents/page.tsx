'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Users, 
  MapPin, 
  Star,
  Search,
  UserPlus,
  Flag,
  TrendingUp
} from 'lucide-react'

export default function DiasporaTalentsPage() {
  const stats = [
    { label: 'Diaspora Talenten', value: '2,847', icon: Users, color: 'text-blue-500' },
    { label: 'Landen', value: '34', icon: Globe, color: 'text-green-500' },
    { label: 'Gescout', value: '456', icon: Star, color: 'text-yellow-500' },
    { label: 'Gecontracteerd', value: '89', icon: TrendingUp, color: 'text-purple-500' },
  ]

  const talents = [
    { name: 'Yassine El Moussaoui', country: 'Nederland', city: 'Amsterdam', age: 17, position: 'CM', rating: 4.5 },
    { name: 'Bilal Chakir', country: 'België', city: 'Brussel', age: 16, position: 'RW', rating: 4.2 },
    { name: 'Amine Bensaid', country: 'Frankrijk', city: 'Lyon', age: 18, position: 'ST', rating: 4.7 },
    { name: 'Rayan Amrani', country: 'Spanje', city: 'Barcelona', age: 17, position: 'LB', rating: 4.0 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Globe className="h-8 w-8 text-green-500" />
            Diaspora Talent Network
          </h1>
          <p className="text-muted-foreground mt-1">
            Marokkaanse talenten wereldwijd
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Zoeken
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Talent Toevoegen
          </Button>
        </div>
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

      {/* Talent List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Top Diaspora Talenten
          </CardTitle>
          <CardDescription>Hoogst gewaardeerde spelers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {talents.map((talent, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center text-white font-bold">
                    {talent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{talent.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {talent.city}, {talent.country}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Badge variant="outline">{talent.position}</Badge>
                  <span className="text-sm text-muted-foreground">{talent.age} jaar</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{talent.rating}</span>
                  </div>
                  <Button size="sm">Profiel</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
