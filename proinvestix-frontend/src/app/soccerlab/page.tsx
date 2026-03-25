'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Activity, 
  Heart, 
  Zap, 
  Target,
  TrendingUp,
  BarChart3,
  Timer,
  Gauge
} from 'lucide-react'

export default function SoccerLabPage() {
  const stats = [
    { label: 'Analyses Vandaag', value: '156', icon: Activity, color: 'text-blue-500' },
    { label: 'Gem. Fitness Score', value: '87%', icon: Heart, color: 'text-red-500' },
    { label: 'Sprint Tests', value: '342', icon: Zap, color: 'text-yellow-500' },
    { label: 'Nauwkeurigheid', value: '92%', icon: Target, color: 'text-green-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Activity className="h-8 w-8 text-blue-500" />
            SoccerLab Performance
          </h1>
          <p className="text-muted-foreground mt-1">
            Sportwetenschap & prestatie analyse
          </p>
        </div>
        <Button>
          <BarChart3 className="mr-2 h-4 w-4" />
          Nieuwe Analyse
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
        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-500" />
              Prestatie Metrics
            </CardTitle>
            <CardDescription>Gemiddelde team scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Snelheid', value: 89, max: 100 },
                { name: 'Uithoudingsvermogen', value: 85, max: 100 },
                { name: 'Kracht', value: 78, max: 100 },
                { name: 'Techniek', value: 92, max: 100 },
                { name: 'Tactisch Inzicht', value: 88, max: 100 },
              ].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{metric.name}</span>
                    <span className="font-medium">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-orange-500" />
              Recente Tests
            </CardTitle>
            <CardDescription>Laatste prestatie tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Sprint Test 30m', player: 'Ahmed B.', result: '3.82s', rating: 'Excellent' },
                { name: 'Yo-Yo Test', player: 'Youssef M.', result: 'Level 21', rating: 'Goed' },
                { name: 'Agility Test', player: 'Karim Z.', result: '14.2s', rating: 'Excellent' },
                { name: 'Jump Test', player: 'Omar C.', result: '62cm', rating: 'Gemiddeld' },
              ].map((test, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{test.name}</p>
                    <p className="text-sm text-muted-foreground">{test.player}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{test.result}</p>
                    <Badge variant={
                      test.rating === 'Excellent' ? 'default' :
                      test.rating === 'Goed' ? 'secondary' : 'outline'
                    }>
                      {test.rating}
                    </Badge>
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
