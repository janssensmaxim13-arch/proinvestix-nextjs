'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Ban, 
  Eye, 
  FileWarning, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react'

export default function AntiLobbyPage() {
  const stats = [
    { label: 'Actieve Meldingen', value: '23', icon: FileWarning, color: 'text-orange-500' },
    { label: 'Onderzocht', value: '156', icon: Eye, color: 'text-blue-500' },
    { label: 'Opgelost', value: '142', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Compliance Score', value: '94%', icon: TrendingUp, color: 'text-purple-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Ban className="h-8 w-8 text-red-500" />
            AntiLobby
          </h1>
          <p className="text-muted-foreground mt-1">
            Transparantie & anti-corruptie monitoring
          </p>
        </div>
        <Button variant="destructive">
          <AlertTriangle className="mr-2 h-4 w-4" />
          Melding Maken
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
        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileWarning className="h-5 w-5 text-orange-500" />
              Recente Meldingen
            </CardTitle>
            <CardDescription>Laatste integriteitsrapporten</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'ALB-2024-001', type: 'Belangenverstrengeling', status: 'Onderzoek', priority: 'Hoog' },
                { id: 'ALB-2024-002', type: 'Ongeautoriseerde Gift', status: 'Review', priority: 'Medium' },
                { id: 'ALB-2024-003', type: 'Transparantie Schending', status: 'Afgerond', priority: 'Laag' },
              ].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{report.id}</p>
                    <p className="text-sm text-muted-foreground">{report.type}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={
                      report.status === 'Afgerond' ? 'default' :
                      report.status === 'Onderzoek' ? 'destructive' : 'secondary'
                    }>
                      {report.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{report.priority}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Compliance Status
            </CardTitle>
            <CardDescription>Naleving per categorie</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Financiële Transparantie', score: 98 },
                { name: 'Besluitvorming Integriteit', score: 92 },
                { name: 'Anti-Corruptie Beleid', score: 95 },
                { name: 'Whistleblower Bescherming', score: 88 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-medium">{item.score}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.score >= 90 ? 'bg-green-500' : 
                        item.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.score}%` }}
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
