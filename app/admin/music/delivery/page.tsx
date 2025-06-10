"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, CheckCircle, XCircle, Clock, AlertTriangle, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DSPDeliveryManager() {
  const router = useRouter()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const deliveries = [
    {
      id: 1,
      release: "Summer Vibes EP",
      artist: "Alex Johnson",
      dsps: {
        spotify: { status: "delivered", date: "2024-01-15" },
        apple: { status: "delivered", date: "2024-01-15" },
        youtube: { status: "failed", error: "Metadata validation failed" },
        amazon: { status: "pending", eta: "2024-01-16" },
        deezer: { status: "delivered", date: "2024-01-15" },
      },
    },
    {
      id: 2,
      release: "Midnight Dreams",
      artist: "Luna Records",
      dsps: {
        spotify: { status: "delivered", date: "2024-01-14" },
        apple: { status: "delivered", date: "2024-01-14" },
        youtube: { status: "delivered", date: "2024-01-14" },
        amazon: { status: "delivered", date: "2024-01-14" },
        deezer: { status: "failed", error: "Cover art rejected" },
      },
    },
  ]

  const handleRefreshStatus = async () => {
    setIsRefreshing(true)
    console.log("Refreshing delivery status...")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsRefreshing(false)
  }

  const handleRetryFailed = (deliveryId: number) => {
    console.log("Retrying failed delivery for ID:", deliveryId)
    // Implement retry logic
  }

  const handleViewDetails = (deliveryId: number) => {
    console.log("Viewing delivery details for ID:", deliveryId)
    router.push(`/admin/music/delivery/${deliveryId}`)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-600">Delivered</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">DSP Delivery Manager</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleRefreshStatus} disabled={isRefreshing}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Refreshing..." : "Refresh Status"}
        </Button>
      </div>

      {/* Delivery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Deliveries</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-green-400">+12% this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">98.5%</div>
            <p className="text-xs text-green-400">Above target</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Failed Deliveries</CardTitle>
            <XCircle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-red-400">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">45</div>
            <p className="text-xs text-yellow-400">In progress</p>
          </CardContent>
        </Card>
      </div>

      {/* DSP Status Overview */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">DSP Platform Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "Deezer"].map((dsp) => (
              <div key={dsp} className="bg-gray-700 p-4 rounded-lg text-center">
                <div className="text-lg font-semibold text-white mb-2">{dsp}</div>
                <div className="space-y-2">
                  <div className="text-sm text-green-400">✓ 98% Success</div>
                  <div className="text-xs text-gray-400">Last sync: 2 min ago</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Deliveries */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Deliveries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{delivery.release}</h3>
                    <p className="text-sm text-gray-400">by {delivery.artist}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleViewDetails(delivery.id)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleRetryFailed(delivery.id)}>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Retry Failed
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(delivery.dsps).map(([dsp, info]) => (
                    <div key={dsp} className="bg-gray-600 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white capitalize">{dsp}</span>
                        {getStatusIcon(info.status)}
                      </div>
                      {getStatusBadge(info.status)}
                      {info.status === "delivered" && (
                        <div className="text-xs text-gray-400 mt-1">Delivered: {info.date}</div>
                      )}
                      {info.status === "failed" && <div className="text-xs text-red-400 mt-1">{info.error}</div>}
                      {info.status === "pending" && <div className="text-xs text-yellow-400 mt-1">ETA: {info.eta}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
