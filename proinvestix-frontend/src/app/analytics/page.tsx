'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity,
  Download,
  Calendar,
  Users,
  Target
} from 'lucide-react'

export default function AnalyticsPage() {
  const stats = [
    { label: 'Totale Views', value: '2.4M', change: '+12%', icon: BarChart3, color: 'text-blue-500' },
    { label: 'Actieve Gebruikers', value: '45,892', change: '+8%', icon: Users, color: 'text-green-500' },
    { label: 'Conversie Rate', value: '3.2%', change: '+0.5%', icon: Target, color: 'text-purple-500' },
    { label: 'Gem. Sessieduur', value: '4m 32s', change: '+15%', icon: Activity, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-blue-500" />
            Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Platform statistieken & inzichten
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Periode
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
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
              <p className="text-xs text-green-500 mt-1">{stat.change} vs vorige maand</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Traffic Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Traffic Overzicht
            </CardTitle>
            <CardDescription>Bezoekers per dag</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Grafiek wordt geladen...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-500" />
              Gebruikersverdeling
            </CardTitle>
            <CardDescription>Per regio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: 'Casablanca-Settat', users: 12450, pct: 35 },
                { region: 'Rabat-Salé-Kénitra', users: 8920, pct: 25 },
                { region: 'Marrakech-Safi', users: 6230, pct: 18 },
                { region: 'Fès-Meknès', users: 4150, pct: 12 },
                { region: 'Overig', users: 3500, pct: 10 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.region}</span>
                    <span className="font-medium">{item.users.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pagina's</CardTitle>
          <CardDescription>Meest bezochte pagina's deze maand</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { page: '/dashboard', views: 45200, bounce: '32%' },
              { page: '/talents', views: 32100, bounce: '28%' },
              { page: '/transfers', views: 28400, bounce: '35%' },
              { page: '/tickets', views: 21800, bounce: '42%' },
              { page: '/academies', views: 18500, bounce: '38%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-muted-foreground">#{i + 1}</span>
                  <code className="text-sm">{item.page}</code>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-medium">{item.views.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">views</p>
                  </div>
                  <Badge variant="outline">{item.bounce} bounce</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
