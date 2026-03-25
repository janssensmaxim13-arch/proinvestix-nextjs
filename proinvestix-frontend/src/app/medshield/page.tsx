'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Stethoscope, 
  Activity, 
  Users, 
  FileText,
  Heart,
  Pill,
  ImageIcon,
  Send,
  Shield,
  LayoutDashboard,
  UserCheck,
  AlertTriangle,
  ClipboardList,
  Calendar
} from 'lucide-react'

// Dashboard Tab
function DashboardTab() {
  const stats = [
    { label: 'Actieve Patiënten', value: '1,247', icon: Users, color: 'text-blue-500' },
    { label: 'Consulten Vandaag', value: '45', icon: Stethoscope, color: 'text-green-500' },
    { label: 'Openstaande Verwijzingen', value: '23', icon: Send, color: 'text-orange-500' },
    { label: 'Alerts', value: '5', icon: AlertTriangle, color: 'text-red-500' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recente Activiteit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: 'Nieuwe patiënt geregistreerd', patient: 'Ahmed B.', time: '10 min geleden' },
              { action: 'Medisch dossier bijgewerkt', patient: 'Youssef M.', time: '25 min geleden' },
              { action: 'Verwijzing verstuurd', patient: 'Karim Z.', time: '1 uur geleden' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{item.action}</p>
                  <p className="text-sm text-muted-foreground">{item.patient}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Body Tab (Physical Assessments)
function BodyTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Fysieke Beoordelingen
          </CardTitle>
          <CardDescription>Lichaamelijke conditie & metingen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: 'BMI Screening', count: 156, status: 'Actief' },
              { name: 'Cardio Test', count: 89, status: 'Actief' },
              { name: 'Flexibiliteit', count: 124, status: 'Actief' },
              { name: 'Kracht Analyse', count: 98, status: 'Actief' },
            ].map((test, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{test.name}</p>
                  <Badge>{test.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{test.count} tests uitgevoerd</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Clinical Tab
function ClinicalTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-blue-500" />
            Klinische Dossiers
          </CardTitle>
          <CardDescription>Medische geschiedenis & diagnoses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { patient: 'Ahmed Bennani', condition: 'Enkelverstuiking', date: '2024-01-15', status: 'Herstel' },
              { patient: 'Youssef Malki', condition: 'Spierblessure', date: '2024-01-12', status: 'Behandeling' },
              { patient: 'Karim Ziyani', condition: 'Routine Check', date: '2024-01-10', status: 'Afgerond' },
            ].map((record, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{record.patient}</p>
                  <p className="text-sm text-muted-foreground">{record.condition}</p>
                </div>
                <div className="text-right">
                  <Badge variant={record.status === 'Afgerond' ? 'default' : 'secondary'}>{record.status}</Badge>
                  <p className="text-xs text-muted-foreground mt-1">{record.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Prescriptions Tab
function PrescriptionsTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-green-500" />
            Recepten & Medicatie
          </CardTitle>
          <CardDescription>Voorgeschreven medicijnen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { patient: 'Ahmed B.', medication: 'Ibuprofen 400mg', duration: '7 dagen', status: 'Actief' },
              { patient: 'Youssef M.', medication: 'Voltaren Gel', duration: '14 dagen', status: 'Actief' },
              { patient: 'Karim Z.', medication: 'Paracetamol 500mg', duration: '5 dagen', status: 'Voltooid' },
            ].map((rx, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{rx.medication}</p>
                  <p className="text-sm text-muted-foreground">{rx.patient} • {rx.duration}</p>
                </div>
                <Badge variant={rx.status === 'Actief' ? 'default' : 'secondary'}>{rx.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Imaging Tab
function ImagingTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-purple-500" />
            Medische Beeldvorming
          </CardTitle>
          <CardDescription>X-rays, MRI, Echo & scans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { type: 'X-Ray', patient: 'Ahmed B.', area: 'Enkel', date: '2024-01-15' },
              { type: 'MRI', patient: 'Youssef M.', area: 'Knie', date: '2024-01-14' },
              { type: 'Echo', patient: 'Karim Z.', area: 'Hamstring', date: '2024-01-12' },
              { type: 'CT Scan', patient: 'Omar C.', area: 'Hoofd', date: '2024-01-10' },
            ].map((scan, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline">{scan.type}</Badge>
                    <p className="font-medium mt-2">{scan.patient}</p>
                    <p className="text-sm text-muted-foreground">{scan.area}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{scan.date}</span>
                </div>
                <Button size="sm" variant="outline" className="mt-3 w-full">Bekijk Scan</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Referrals Tab
function ReferralsTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-orange-500" />
            Verwijzingen
          </CardTitle>
          <CardDescription>Doorverwijzingen naar specialisten</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { patient: 'Ahmed B.', specialist: 'Orthopeed', hospital: 'CHU Casablanca', status: 'Pending' },
              { patient: 'Youssef M.', specialist: 'Fysiotherapeut', hospital: 'Kliniek Rabat', status: 'Bevestigd' },
              { patient: 'Karim Z.', specialist: 'Cardioloog', hospital: 'CHU Marrakech', status: 'Afgerond' },
            ].map((ref, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{ref.patient} → {ref.specialist}</p>
                  <p className="text-sm text-muted-foreground">{ref.hospital}</p>
                </div>
                <Badge variant={
                  ref.status === 'Bevestigd' ? 'default' :
                  ref.status === 'Pending' ? 'secondary' : 'outline'
                }>{ref.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Compliance Tab
function ComplianceTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Compliance & Regelgeving
          </CardTitle>
          <CardDescription>GDPR, medische wetgeving & certificeringen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'GDPR Compliance', status: 'Compliant', lastAudit: '2024-01-01' },
              { name: 'Medische Licenties', status: 'Geldig', lastAudit: '2023-12-15' },
              { name: 'Data Encryptie', status: 'Actief', lastAudit: '2024-01-10' },
              { name: 'Toegangscontrole', status: 'Bijgewerkt', lastAudit: '2024-01-08' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Laatste audit: {item.lastAudit}</p>
                </div>
                <Badge className="bg-green-500">{item.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Main Component
export default function MedShieldPage() {
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
            Medisch management & spelergezondheid
          </p>
        </div>
        <Button>
          <UserCheck className="mr-2 h-4 w-4" />
          Nieuwe Patiënt
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="grid grid-cols-7 w-full">
          <TabsTrigger value="dashboard" className="flex items-center gap-1">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="body" className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Body</span>
          </TabsTrigger>
          <TabsTrigger value="clinical" className="flex items-center gap-1">
            <Stethoscope className="h-4 w-4" />
            <span className="hidden sm:inline">Clinical</span>
          </TabsTrigger>
          <TabsTrigger value="prescriptions" className="flex items-center gap-1">
            <Pill className="h-4 w-4" />
            <span className="hidden sm:inline">Recepten</span>
          </TabsTrigger>
          <TabsTrigger value="imaging" className="flex items-center gap-1">
            <ImageIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Imaging</span>
          </TabsTrigger>
          <TabsTrigger value="referrals" className="flex items-center gap-1">
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Verwijzingen</span>
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Compliance</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard"><DashboardTab /></TabsContent>
        <TabsContent value="body"><BodyTab /></TabsContent>
        <TabsContent value="clinical"><ClinicalTab /></TabsContent>
        <TabsContent value="prescriptions"><PrescriptionsTab /></TabsContent>
        <TabsContent value="imaging"><ImagingTab /></TabsContent>
        <TabsContent value="referrals"><ReferralsTab /></TabsContent>
        <TabsContent value="compliance"><ComplianceTab /></TabsContent>
      </Tabs>
    </div>
  )
}
