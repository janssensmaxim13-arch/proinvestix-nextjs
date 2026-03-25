'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Cpu, 
  Brain, 
  Sparkles, 
  Target,
  TrendingUp,
  Eye,
  Zap,
  BarChart3
} from 'lucide-react'

export default function AiScoutingPage() {
  const stats = [
    { label: 'AI Analyses', value: '45,892', icon: Brain, color: 'text-purple-500' },
    { label: 'Talenten Ontdekt', value: '1,234', icon: Sparkles, color: 'text-yellow-500' },
    { label: 'Nauwkeurigheid', value: '94.7%', icon: Target, color: 'text-green-500' },
    { label: 'Video\'s Verwerkt', value: '12,456', icon: Eye, color: 'text-blue-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Cpu className="h-8 w-8 text-purple-500" />
            AI Scouting Engine
          </h1>
          <p className="text-muted-foreground mt-1">
            Machine learning talent detectie
          </p>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
          <Zap className="mr-2 h-4 w-4" />
          Start Analyse
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
        {/* AI Discoveries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              AI Ontdekkingen
            </CardTitle>
            <CardDescription>Recent gedetecteerde talenten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Onbekend Talent #1247', score: 94, potential: 'Elite', source: 'Video Analyse' },
                { name: 'Onbekend Talent #1248', score: 89, potential: 'Hoog', source: 'Match Data' },
                { name: 'Onbekend Talent #1249', score: 91, potential: 'Elite', source: 'Training Data' },
              ].map((talent, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{talent.name}</p>
                    <p className="text-sm text-muted-foreground">{talent.source}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{talent.score}</span>
                      <Badge variant={talent.potential === 'Elite' ? 'default' : 'secondary'}>
                        {talent.potential}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Capabilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-500" />
              AI Mogelijkheden
            </CardTitle>
            <CardDescription>Beschikbare analyses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[
                { name: 'Video Analyse', icon: Eye, desc: 'Automatische spelersdetectie in video' },
                { name: 'Performance Predictie', icon: TrendingUp, desc: 'Toekomstig potentieel voorspellen' },
                { name: 'Match Analysis', icon: BarChart3, desc: 'Wedstrijd statistieken verwerken' },
                { name: 'Talent Matching', icon: Target, desc: 'Spelers koppelen aan clubs' },
              ].map((cap, i) => (
                <Button key={i} variant="outline" className="justify-start h-auto py-3">
                  <cap.icon className="mr-3 h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium">{cap.name}</p>
                    <p className="text-xs text-muted-foreground">{cap.desc}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
