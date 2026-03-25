'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  UserCheck, 
  Fingerprint, 
  Shield, 
  FileCheck,
  QrCode,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react'

export default function PlayerIdentityPage() {
  const stats = [
    { label: 'Geverifieerde Spelers', value: '8,432', icon: UserCheck, color: 'text-green-500' },
    { label: 'Digitale ID\'s', value: '7,891', icon: Fingerprint, color: 'text-blue-500' },
    { label: 'Certificaten', value: '15,234', icon: FileCheck, color: 'text-purple-500' },
    { label: 'Verificatie Rate', value: '94%', icon: Shield, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <UserCheck className="h-8 w-8 text-green-500" />
            Player Identity
          </h1>
          <p className="text-muted-foreground mt-1">
            Digitale spelersidentiteit & verificatie
          </p>
        </div>
        <Button>
          <QrCode className="mr-2 h-4 w-4" />
          Genereer ID
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
        {/* Recent Verifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Recente Verificaties
            </CardTitle>
            <CardDescription>Laatste ID verificaties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Ahmed El Amrani', club: 'Raja Casablanca', level: 'Gold', date: '2024-01-15' },
                { name: 'Youssef Bennani', club: 'Wydad AC', level: 'Silver', date: '2024-01-14' },
                { name: 'Karim Ziyani', club: 'AS FAR', level: 'Gold', date: '2024-01-13' },
              ].map((player, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <p className="text-sm text-muted-foreground">{player.club}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={player.level === 'Gold' ? 'default' : 'secondary'}>
                      {player.level}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{player.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ID Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-500" />
              ID Features
            </CardTitle>
            <CardDescription>Beschikbare functies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[
                { name: 'Biometrische Verificatie', icon: Fingerprint, desc: 'Gezichtsherkenning & fingerprint' },
                { name: 'QR Code ID', icon: QrCode, desc: 'Scanbare digitale identiteit' },
                { name: 'Internationale Erkenning', icon: Globe, desc: 'FIFA/UEFA compatibel' },
                { name: 'Carrière Certificaat', icon: FileCheck, desc: 'Volledige spelershistorie' },
              ].map((feature, i) => (
                <Button key={i} variant="outline" className="justify-start h-auto py-3">
                  <feature.icon className="mr-3 h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
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
