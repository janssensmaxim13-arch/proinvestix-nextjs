'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  FileText, 
  Activity, 
  Shield,
  Users,
  ClipboardList,
  Pill,
  Calendar
} from 'lucide-react'

export default function MedShieldPage() {
  // Demo stats
  const stats = [
    { label: 'Actieve Dossiers', value: '2,847', icon: FileText, color: 'text-blue-500' },
    { label: 'Medische Checks', value: '156', icon: Activity, color: 'text-green-500' },
    { label: 'Zorgverleners', value: '42', icon: Users, color: 'text-purple-500' },
    { label: 'Certificaten', value: '1,203', icon: Shield, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Stethoscope className="h-8 w-8 text-red-500" />
            MedShield
          </h1>
          <p className="text-muted-foreground mt-1">
            Medische dossiers & spelergezondheid management
          </p>
        </div>
        <Button>
          <ClipboardList className="mr-2 h-4 w-4" />
          Nieuwe Check
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
        {/* Recent Medical Checks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Recente Medische Checks
            </CardTitle>
            <CardDescription>Laatste keuringen en onderzoeken</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Youssef El Amrani', type: 'Jaarlijkse Keuring', status: 'Goedgekeurd', date: '2024-01-15' },
                { name: 'Karim Benzouri', type: 'Blessure Check', status: 'In Behandeling', date: '2024-01-14' },
                { name: 'Omar Chakib', type: 'Transfer Keuring', status: 'Gepland', date: '2024-01-16' },
              ].map((check, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{check.name}</p>
                    <p className="text-sm text-muted-foreground">{check.type}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      check.status === 'Goedgekeurd' ? 'default' :
                      check.status === 'In Behandeling' ? 'secondary' : 'outline'
                    }>
                      {check.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{check.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Modules */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              MedShield Modules
            </CardTitle>
            <CardDescription>Beschikbare sub-modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[
                { name: 'Klinische Dossiers', icon: FileText, desc: 'Medische historie en behandelingen' },
                { name: 'Medicatie Beheer', icon: Pill, desc: 'Voorschriften en controles' },
                { name: 'Afspraken', icon: Calendar, desc: 'Planning en agenda' },
                { name: 'Compliance', icon: Shield, desc: 'WADA en anti-doping' },
              ].map((module, i) => (
                <Button key={i} variant="outline" className="justify-start h-auto py-3">
                  <module.icon className="mr-3 h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium">{module.name}</p>
                    <p className="text-xs text-muted-foreground">{module.desc}</p>
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
