'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  HandHeart, 
  Users, 
  Accessibility, 
  Heart,
  Calendar,
  Award,
  Globe,
  Sparkles
} from 'lucide-react'

export default function InclusionPage() {
  const stats = [
    { label: 'Programma\'s', value: '34', icon: Heart, color: 'text-pink-500' },
    { label: 'Deelnemers', value: '2,847', icon: Users, color: 'text-blue-500' },
    { label: 'Partners', value: '89', icon: HandHeart, color: 'text-green-500' },
    { label: 'Evenementen', value: '156', icon: Calendar, color: 'text-purple-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <HandHeart className="h-8 w-8 text-pink-500" />
            Inclusion
          </h1>
          <p className="text-muted-foreground mt-1">
            Inclusiviteit & toegankelijkheid programma's
          </p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
          <Sparkles className="mr-2 h-4 w-4" />
          Nieuw Initiatief
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
        {/* Active Programs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Actieve Programma's
            </CardTitle>
            <CardDescription>Lopende inclusie initiatieven</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Blind Football', participants: 156, status: 'Actief', category: 'Sport' },
                { name: 'Women in Football', participants: 892, status: 'Actief', category: 'Gender' },
                { name: 'Youth Outreach', participants: 1245, status: 'Actief', category: 'Jeugd' },
                { name: 'Refugee Integration', participants: 234, status: 'Nieuw', category: 'Sociaal' },
              ].map((program, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{program.name}</p>
                    <p className="text-sm text-muted-foreground">{program.participants} deelnemers</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{program.category}</Badge>
                    <Badge variant={program.status === 'Actief' ? 'default' : 'secondary'}>
                      {program.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-blue-500" />
              Toegankelijkheid
            </CardTitle>
            <CardDescription>WK2030 inclusie maatregelen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[
                { name: 'Rolstoeltoegankelijk', icon: Accessibility, desc: 'Alle stadions volledig toegankelijk', progress: 95 },
                { name: 'Audio Beschrijving', icon: Users, desc: 'Live commentaar voor visueel beperkten', progress: 78 },
                { name: 'Gebarentaal', icon: HandHeart, desc: 'Tolken bij alle evenementen', progress: 85 },
                { name: 'Sensory Rooms', icon: Heart, desc: 'Rustige ruimtes in stadions', progress: 60 },
              ].map((feature, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{feature.name}</span>
                    </div>
                    <span className="text-sm font-medium">{feature.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{feature.desc}</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      style={{ width: `${feature.progress}%` }}
                    />
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
