"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Music, DollarSign, Play, Shield, AlertTriangle, CreditCard, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  const handleExportReport = () => {
    console.log("Exporting dashboard report...")
    // Implement export functionality
  }

  const handleQuickActions = () => {
    console.log("Opening quick actions menu...")
    // Could open a modal or dropdown with quick actions
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "applications":
        router.push("/admin/users/applications")
        break
      case "releases":
        router.push("/admin/music/release-queue")
        break
      case "payouts":
        router.push("/admin/payouts/requests")
        break
      case "claims":
        router.push("/admin/content-id/match-claim")
        break
      default:
        break
    }
  }

  const handleViewAllApplications = () => {
    router.push("/admin/users/applications")
  }

  const handleViewReleaseQueue = () => {
    router.push("/admin/music/release-queue")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleQuickActions}>
            <Play className="w-4 h-4 mr-2" />
            Quick Actions
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,847</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Releases</CardTitle>
            <Music className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3,247</div>
            <p className="text-xs text-green-400">+8% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$847,293</div>
            <p className="text-xs text-green-400">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Content ID Claims</CardTitle>
            <Shield className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,432</div>
            <p className="text-xs text-yellow-400">23 pending review</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Alex Johnson</p>
                  <p className="text-sm text-slate-400">Artist Application</p>
                </div>
                <Badge className="bg-yellow-600">Pending</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Sarah Music Label</p>
                  <p className="text-sm text-slate-400">Label Application</p>
                </div>
                <Badge className="bg-yellow-600">Pending</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Mike Producer</p>
                  <p className="text-sm text-slate-400">CMS Partner</p>
                </div>
                <Badge className="bg-yellow-600">Pending</Badge>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleViewAllApplications}>
                View All Applications
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Release Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Summer Vibes EP</p>
                  <p className="text-sm text-slate-400">Alex Johnson</p>
                </div>
                <Badge className="bg-yellow-600">Pending</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Midnight Dreams</p>
                  <p className="text-sm text-slate-400">Luna Records</p>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <Badge className="bg-blue-600">In Review</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-white">Urban Beats Collection</p>
                  <p className="text-sm text-slate-400">Beat Master</p>
                </div>
                <Badge className="bg-yellow-600">Pending</Badge>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleViewReleaseQueue}>
                View Release Queue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleQuickAction("applications")}>
              <Users className="w-4 h-4 mr-2" />
              Review Applications
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => handleQuickAction("releases")}>
              <Music className="w-4 h-4 mr-2" />
              Approve Releases
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleQuickAction("payouts")}>
              <CreditCard className="w-4 h-4 mr-2" />
              Process Payouts
            </Button>
            <Button className="bg-yellow-600 hover:bg-yellow-700" onClick={() => handleQuickAction("claims")}>
              <Shield className="w-4 h-4 mr-2" />
              Review Claims
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
