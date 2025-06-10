"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, Shield, AlertCircle, Plus, Eye, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CMSPartnersOverview() {
  const router = useRouter()

  const partners = [
    {
      id: 1,
      name: "Premium Music Network",
      channels: 1247,
      revenue: "$45,230",
      growth: "+12%",
      status: "active",
      tier: "Gold",
    },
    {
      id: 2,
      name: "Indie Label Collective",
      channels: 892,
      revenue: "$32,150",
      growth: "+8%",
      status: "active",
      tier: "Silver",
    },
    {
      id: 3,
      name: "Urban Beats Network",
      channels: 634,
      revenue: "$28,940",
      growth: "+15%",
      status: "pending",
      tier: "Bronze",
    },
  ]

  const handleAddPartner = () => {
    console.log("Adding new partner...")
    router.push("/admin/cms-partners/create")
  }

  const handleViewPartner = (partnerId: number) => {
    console.log("Viewing partner:", partnerId)
    router.push(`/admin/cms-partners/${partnerId}`)
  }

  const handleManagePartner = (partnerId: number) => {
    console.log("Managing partner:", partnerId)
    router.push(`/admin/cms-partners/${partnerId}/manage`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">CMS Partners Overview</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddPartner}>
          <Plus className="w-4 h-4 mr-2" />
          Add Partner
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Partners</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Network Channels</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">18,432</div>
            <p className="text-xs text-green-400">+8% growth</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Revenue</CardTitle>
            <Shield className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$2.4M</div>
            <p className="text-xs text-green-400">+15% this quarter</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Pending Reviews</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-yellow-400">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Partners List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Active CMS Partners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{partner.name}</h3>
                    <p className="text-sm text-slate-400">{partner.channels} channels</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-white">{partner.revenue}</div>
                    <div className="text-sm text-green-400">{partner.growth}</div>
                  </div>
                  <Badge variant={partner.status === "active" ? "default" : "secondary"} className="bg-blue-600">
                    {partner.tier}
                  </Badge>
                  <Badge
                    variant={partner.status === "active" ? "default" : "destructive"}
                    className={partner.status === "active" ? "bg-green-600" : ""}
                  >
                    {partner.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleViewPartner(partner.id)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleManagePartner(partner.id)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Network Growth Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Network Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Channel Growth</span>
              <span className="text-sm text-green-400">+12% this month</span>
            </div>
            <Progress value={75} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Revenue Growth</span>
              <span className="text-sm text-green-400">+15% this month</span>
            </div>
            <Progress value={85} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Partner Satisfaction</span>
              <span className="text-sm text-blue-400">94% positive</span>
            </div>
            <Progress value={94} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
