'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Users, 
  Star, 
  MapPin,
  Filter,
  Trophy,
  TrendingUp,
  Eye
} from 'lucide-react'

export default function NTSPPage() {
  const stats = [
    { label: 'Geregistreerde Talenten', value: '12,456', icon: Users, color: 'text-blue-500' },
    { label: 'Elite Prospects', value: '892', icon: Star, color: 'text-yellow-500' },
    { label: 'Scouting Regio\'s', value: '16', icon: MapPin, color: 'text-green-500' },
    { label: 'Actieve Scouts', value: '234', icon: Eye, color: 'text-purple-500' },
  ]

  const topTalents = [
    { name: 'Yassine El Amrani', age: 16, position: 'CAM', region: 'Casablanca', rating: 94, status: 'Elite' },
    { name: 'Bilal Chakir', age: 15, position: 'RW', region: 'Rabat', rating: 92, status: 'Elite' },
    { name: 'Amine Bennani', age: 17, position: 'CB', region: 'Marrakech', rating: 91, status: 'Top' },
    { name: 'Omar Ziyani', age: 16, position: 'ST', region: 'Fès', rating: 90, status: 'Top' },
    { name: 'Karim Malki', age: 15, position: 'LB', region: 'Tangier', rating: 89, status: 'Rising' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Search className="h-8 w-8 text-blue-500" />
            NTSP
          </h1>
          <p className="text-muted-foreground mt-1">
            National Talent Scouting Platform
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Zoek Talent
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

      {/* Top Talents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Talenten
          </CardTitle>
          <CardDescription>Hoogst gewaardeerde prospects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topTalents.map((talent, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium">{talent.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {talent.region}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Badge variant="outline">{talent.position}</Badge>
                  <span className="text-sm text-muted-foreground">{talent.age} jaar</span>
                  <Badge variant={
                    talent.status === 'Elite' ? 'default' :
                    talent.status === 'Top' ? 'secondary' : 'outline'
                  }>
                    {talent.status}
                  </Badge>
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

      {/* Regions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              Scouting Regio's
            </CardTitle>
            <CardDescription>Talenten per regio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { region: 'Casablanca-Settat', talents: 3240, growth: '+15%' },
                { region: 'Rabat-Salé-Kénitra', talents: 2180, growth: '+12%' },
                { region: 'Marrakech-Safi', talents: 1890, growth: '+8%' },
                { region: 'Fès-Meknès', talents: 1450, growth: '+10%' },
                { region: 'Tanger-Tétouan', talents: 1120, growth: '+18%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">{item.region}</span>
                  <div className="flex items-center gap-4">
                    <span>{item.talents.toLocaleString()} talenten</span>
                    <Badge variant="outline" className="text-green-500">{item.growth}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Trending
            </CardTitle>
            <CardDescription>Snelst stijgende talenten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Hamza Idrissi', rise: '+12 pts', weeks: '4 weken' },
                { name: 'Soufiane Amri', rise: '+10 pts', weeks: '3 weken' },
                { name: 'Mehdi Boukhari', rise: '+9 pts', weeks: '6 weken' },
                { name: 'Rachid El Fassi', rise: '+8 pts', weeks: '2 weken' },
                { name: 'Nabil Tazi', rise: '+7 pts', weeks: '5 weken' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-500">{item.rise}</Badge>
                    <span className="text-sm text-muted-foreground">{item.weeks}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
