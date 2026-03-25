'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Network, 
  Building2, 
  Handshake, 
  Globe,
  MessageSquare,
  Users,
  TrendingUp,
  Link
} from 'lucide-react'

export default function ClubConnectPage() {
  const stats = [
    { label: 'Verbonden Clubs', value: '156', icon: Building2, color: 'text-blue-500' },
    { label: 'Partnerships', value: '89', icon: Handshake, color: 'text-green-500' },
    { label: 'Landen', value: '28', icon: Globe, color: 'text-purple-500' },
    { label: 'Actieve Deals', value: '34', icon: TrendingUp, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Network className="h-8 w-8 text-blue-500" />
            Club Connect
          </h1>
          <p className="text-muted-foreground mt-1">
            Internationale club partnerships & netwerk
          </p>
        </div>
        <Button>
          <Link className="mr-2 h-4 w-4" />
          Nieuwe Connectie
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
        {/* Partner Clubs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5 text-green-500" />
              Partner Clubs
            </CardTitle>
            <CardDescription>Actieve partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Ajax Amsterdam', country: 'Nederland', type: 'Talent Pipeline', status: 'Actief' },
                { name: 'Sevilla FC', country: 'Spanje', type: 'Loan Agreement', status: 'Actief' },
                { name: 'Standard Luik', country: 'België', type: 'Scouting Partner', status: 'Actief' },
                { name: 'FC Porto', country: 'Portugal', type: 'Development', status: 'Pending' },
              ].map((club, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{club.name}</p>
                    <p className="text-sm text-muted-foreground">{club.country} • {club.type}</p>
                  </div>
                  <Badge variant={club.status === 'Actief' ? 'default' : 'secondary'}>
                    {club.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              Recente Berichten
            </CardTitle>
            <CardDescription>Club communicatie</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { from: 'Ajax Amsterdam', subject: 'Talent Review Meeting', time: '2 uur geleden' },
                { from: 'Sevilla FC', subject: 'Loan Extension Discussion', time: '5 uur geleden' },
                { from: 'Standard Luik', subject: 'Scouting Report Shared', time: '1 dag geleden' },
                { from: 'FC Porto', subject: 'Partnership Proposal', time: '2 dagen geleden' },
              ].map((msg, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted">
                  <div>
                    <p className="font-medium">{msg.from}</p>
                    <p className="text-sm text-muted-foreground">{msg.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
