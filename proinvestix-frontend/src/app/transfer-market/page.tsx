'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  DollarSign,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export default function TransferMarketPage() {
  const stats = [
    { label: 'Actieve Listings', value: '342', icon: ShoppingCart, color: 'text-blue-500' },
    { label: 'Totale Waarde', value: '€47.2M', icon: DollarSign, color: 'text-green-500' },
    { label: 'Spelers Beschikbaar', value: '189', icon: Users, color: 'text-purple-500' },
    { label: 'Deals Deze Maand', value: '23', icon: TrendingUp, color: 'text-orange-500' },
  ]

  const listings = [
    { name: 'Ahmed Bennani', club: 'Raja Casablanca', position: 'CAM', age: 22, value: '€2.5M', trend: 'up' },
    { name: 'Youssef Malki', club: 'Wydad AC', position: 'CB', age: 24, value: '€1.8M', trend: 'up' },
    { name: 'Karim Ziyani', club: 'AS FAR', position: 'LW', age: 20, value: '€3.2M', trend: 'down' },
    { name: 'Omar Chakir', club: 'RS Berkane', position: 'ST', age: 23, value: '€2.1M', trend: 'up' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-orange-500" />
            Transfer Market
          </h1>
          <p className="text-muted-foreground mt-1">
            Spelersmarkt en transfer listings
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Zoek Speler
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

      {/* Listings */}
      <Card>
        <CardHeader>
          <CardTitle>Beschikbare Spelers</CardTitle>
          <CardDescription>Spelers op de transfermarkt</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {listings.map((player, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center text-white font-bold">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <p className="text-sm text-muted-foreground">{player.club}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Badge variant="outline">{player.position}</Badge>
                  <span className="text-sm text-muted-foreground">{player.age} jaar</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{player.value}</span>
                    {player.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <Button size="sm">Bekijk</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
