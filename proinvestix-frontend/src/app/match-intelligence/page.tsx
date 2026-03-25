'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Activity, 
  Target, 
  TrendingUp,
  Play,
  Clock,
  Users,
  Zap
} from 'lucide-react'

export default function MatchIntelligencePage() {
  const stats = [
    { label: 'Wedstrijden Geanalyseerd', value: '1,247', icon: Activity, color: 'text-blue-500' },
    { label: 'Live Analyses', value: '12', icon: Zap, color: 'text-green-500' },
    { label: 'Voorspelnauwkeurigheid', value: '78%', icon: Target, color: 'text-purple-500' },
    { label: 'Spelers Gevolgd', value: '3,892', icon: Users, color: 'text-orange-500' },
  ]

  const liveMatches = [
    { home: 'Raja Casablanca', away: 'Wydad AC', score: '2-1', minute: 67, status: 'Live' },
    { home: 'AS FAR', away: 'RS Berkane', score: '0-0', minute: 34, status: 'Live' },
    { home: 'FUS Rabat', away: 'Moghreb Tétouan', score: '1-2', minute: 82, status: 'Live' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Brain className="h-8 w-8 text-purple-500" />
            Match Intelligence
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-gedreven wedstrijdanalyse & inzichten
          </p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
          <Play className="mr-2 h-4 w-4" />
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

      {/* Live Matches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-500" />
            Live Wedstrijden
          </CardTitle>
          <CardDescription>Real-time analyse actief</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liveMatches.map((match, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <Badge variant="destructive" className="animate-pulse">
                    <span className="mr-1">●</span> LIVE
                  </Badge>
                  <div className="text-center min-w-[200px]">
                    <p className="font-medium">{match.home} vs {match.away}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-bold">{match.score}</div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{match.minute}'</span>
                  </div>
                  <Button size="sm">Bekijk Analyse</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Features */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Tactische Analyse
            </CardTitle>
            <CardDescription>AI-gedreven tactiek inzichten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Formatie Detectie', desc: 'Automatische formatie herkenning' },
                { name: 'Pressing Analyse', desc: 'Pressing intensiteit & patronen' },
                { name: 'Passing Networks', desc: 'Pass patronen & connecties' },
                { name: 'Ruimte Controle', desc: 'Territoriale dominantie' },
              ].map((feature, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Speler Metrics
            </CardTitle>
            <CardDescription>Individuele prestatie analyse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'xG (Expected Goals)', desc: 'Schotkwaliteit analyse' },
                { name: 'xA (Expected Assists)', desc: 'Kans creatie metrics' },
                { name: 'Heat Maps', desc: 'Positie & bewegingspatronen' },
                { name: 'Duel Statistieken', desc: 'Win rates & confrontaties' },
              ].map((feature, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
