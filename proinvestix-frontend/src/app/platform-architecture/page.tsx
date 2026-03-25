'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GitBranch, 
  Server, 
  Database, 
  Shield,
  Activity,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react'

export default function PlatformArchitecturePage() {
  const stats = [
    { label: 'Uptime', value: '99.9%', icon: Activity, color: 'text-green-500' },
    { label: 'API Calls/dag', value: '2.4M', icon: Server, color: 'text-blue-500' },
    { label: 'Database Size', value: '847GB', icon: Database, color: 'text-purple-500' },
    { label: 'Security Score', value: 'A+', icon: Shield, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <GitBranch className="h-8 w-8 text-purple-500" />
            Platform Architecture
          </h1>
          <p className="text-muted-foreground mt-1">
            Systeem infrastructuur & monitoring
          </p>
        </div>
        <Button variant="outline">
          <Activity className="mr-2 h-4 w-4" />
          Live Status
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
        {/* Services Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-blue-500" />
              Services Status
            </CardTitle>
            <CardDescription>Alle microservices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'API Gateway', status: 'Operational', latency: '12ms' },
                { name: 'Auth Service', status: 'Operational', latency: '8ms' },
                { name: 'Database Cluster', status: 'Operational', latency: '3ms' },
                { name: 'Cache Layer', status: 'Operational', latency: '1ms' },
                { name: 'Search Engine', status: 'Degraded', latency: '45ms' },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      service.status === 'Operational' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <p className="font-medium">{service.name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{service.latency}</span>
                    <Badge variant={service.status === 'Operational' ? 'default' : 'secondary'}>
                      {service.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-purple-500" />
              Infrastructuur
            </CardTitle>
            <CardDescription>Resources overzicht</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'CPU Usage', value: 34, icon: Cpu },
                { name: 'Memory', value: 67, icon: HardDrive },
                { name: 'Storage', value: 45, icon: Database },
                { name: 'Network', value: 23, icon: Wifi },
              ].map((resource, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <resource.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.name}</span>
                    </div>
                    <span className="font-medium">{resource.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        resource.value < 50 ? 'bg-green-500' : 
                        resource.value < 80 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${resource.value}%` }}
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
