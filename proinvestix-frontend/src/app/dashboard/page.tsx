'use client'

import { useEffect, useState } from 'react'
import { AuthGuard } from '@/components/auth-guard'
import { DashboardLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, Trophy, ArrowLeftRight, Ticket, Wallet, TrendingUp, 
  TrendingDown, Calendar, Activity 
} from 'lucide-react'
import { formatCurrency, formatNumber, formatRelativeTime } from '@/lib/utils'
import { dashboardApi } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

// WK 2030 countdown
const WK_2030_DATE = new Date('2030-06-13T00:00:00')

function DashboardContent() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = WK_2030_DATE.getTime() - new Date().getTime()
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const { data: stats } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: dashboardApi.getStats,
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welkom bij het nationale investeringsplatform</p>
          </div>
        </div>

        {/* WK 2030 Countdown */}
        <Card className="bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium opacity-90">FIFA World Cup 2030</h3>
                <p className="text-sm opacity-75">Marokko • Spanje • Portugal</p>
              </div>
              <div className="flex gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">{timeLeft.days}</p>
                  <p className="text-xs opacity-75">Dagen</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{timeLeft.hours}</p>
                  <p className="text-xs opacity-75">Uren</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{timeLeft.minutes}</p>
                  <p className="text-xs opacity-75">Min</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{timeLeft.seconds}</p>
                  <p className="text-xs opacity-75">Sec</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Talenten</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(stats?.talents || 12456)}</div>
              <p className="text-xs text-green-500">+12% deze maand</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Transfers</CardTitle>
              <ArrowLeftRight className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(stats?.transfers || 892)}</div>
              <p className="text-xs text-green-500">+8% deze maand</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Tickets</CardTitle>
              <Ticket className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(stats?.tickets || 45200)}</div>
              <p className="text-xs text-green-500">+25% deze maand</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Volume</CardTitle>
              <Wallet className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats?.volume || 2450000)}</div>
              <p className="text-xs text-green-500">+18% deze maand</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  )
}
