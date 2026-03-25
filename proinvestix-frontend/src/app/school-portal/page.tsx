'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  School, 
  BookOpen, 
  Users, 
  Trophy,
  GraduationCap,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react'

export default function SchoolPortalPage() {
  const stats = [
    { label: 'Partnerscholen', value: '156', icon: School, color: 'text-blue-500' },
    { label: 'Studenten', value: '4,892', icon: Users, color: 'text-green-500' },
    { label: 'Actieve Programmas', value: '34', icon: BookOpen, color: 'text-purple-500' },
    { label: 'Talenten Ontdekt', value: '287', icon: Trophy, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <School className="h-8 w-8 text-blue-500" />
            School Portal
          </h1>
          <p className="text-muted-foreground mt-1">
            Educatie & jeugdontwikkeling programma's
          </p>
        </div>
        <Button>
          <GraduationCap className="mr-2 h-4 w-4" />
          Nieuw Programma
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
        {/* Active Programs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-500" />
              Actieve Programma's
            </CardTitle>
            <CardDescription>Lopende educatie initiatieven</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Voetbal & School', students: 1250, schools: 45, status: 'Actief' },
                { name: 'Talent Development', students: 890, schools: 32, status: 'Actief' },
                { name: 'Sports Science', students: 450, schools: 18, status: 'Nieuw' },
              ].map((program, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{program.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {program.students} studenten • {program.schools} scholen
                    </p>
                  </div>
                  <Badge variant={program.status === 'Actief' ? 'default' : 'secondary'}>
                    {program.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              Aankomende Evenementen
            </CardTitle>
            <CardDescription>School & sport events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Talent Dag Casablanca', date: '2024-02-15', type: 'Scouting' },
                { name: 'School Tournament Rabat', date: '2024-02-20', type: 'Competitie' },
                { name: 'Career Workshop', date: '2024-02-25', type: 'Educatie' },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
