'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock,
  Plane,
  Ship,
  Train,
  CheckCircle
} from 'lucide-react'

export default function PMALogisticsPage() {
  const stats = [
    { label: 'Actieve Zendingen', value: '234', icon: Package, color: 'text-blue-500' },
    { label: 'Voertuigen', value: '89', icon: Truck, color: 'text-green-500' },
    { label: 'Leveringen Vandaag', value: '45', icon: CheckCircle, color: 'text-purple-500' },
    { label: 'Gem. Levertijd', value: '2.4 dagen', icon: Clock, color: 'text-orange-500' },
  ]

  const shipments = [
    { id: 'PMA-2024-001', from: 'Casablanca', to: 'Rabat', status: 'In Transit', eta: '2 uur', type: 'truck' },
    { id: 'PMA-2024-002', from: 'Marrakech', to: 'Agadir', status: 'Onderweg', eta: '4 uur', type: 'truck' },
    { id: 'PMA-2024-003', from: 'Amsterdam', to: 'Casablanca', status: 'In Vlucht', eta: '1 dag', type: 'plane' },
    { id: 'PMA-2024-004', from: 'Marseille', to: 'Tangier', status: 'Op Zee', eta: '2 dagen', type: 'ship' },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'plane': return Plane
      case 'ship': return Ship
      case 'train': return Train
      default: return Truck
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Truck className="h-8 w-8 text-blue-500" />
            PMA Logistics
          </h1>
          <p className="text-muted-foreground mt-1">
            Platform logistiek & supply chain management
          </p>
        </div>
        <Button>
          <Package className="mr-2 h-4 w-4" />
          Nieuwe Zending
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

      {/* Active Shipments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            Actieve Zendingen
          </CardTitle>
          <CardDescription>Real-time tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {shipments.map((shipment, i) => {
              const TypeIcon = getTypeIcon(shipment.type)
              return (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <TypeIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">{shipment.id}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {shipment.from} → {shipment.to}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <Badge variant={
                      shipment.status === 'In Transit' || shipment.status === 'Onderweg' ? 'default' :
                      shipment.status === 'In Vlucht' ? 'secondary' : 'outline'
                    }>
                      {shipment.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>ETA: {shipment.eta}</span>
                    </div>
                    <Button size="sm" variant="outline">Track</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Transport Types */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { type: 'Wegtransport', icon: Truck, active: 45, total: 89, color: 'blue' },
          { type: 'Luchtvracht', icon: Plane, active: 12, total: 24, color: 'purple' },
          { type: 'Zeevracht', icon: Ship, active: 8, total: 15, color: 'cyan' },
        ].map((transport, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <transport.icon className={`h-5 w-5 text-${transport.color}-500`} />
                {transport.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Actief</span>
                  <span className="font-bold">{transport.active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Totaal</span>
                  <span className="font-bold">{transport.total}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full bg-${transport.color}-500 rounded-full`}
                    style={{ width: `${(transport.active / transport.total) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
