"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Youtube, TrendingUp, Users, DollarSign, BarChart3, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ChannelManagement() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const channels = [
    {
      id: "CH-001",
      name: "Music Vibes Official",
      partner: "Premium Music Network",
      subscribers: "2.4M",
      views: "45.2M",
      revenue: "$12,450",
      status: "active",
      contentId: "enabled",
      monetization: "enabled",
    },
    {
      id: "CH-002",
      name: "Indie Sounds Channel",
      partner: "Indie Label Collective",
      subscribers: "890K",
      views: "23.1M",
      revenue: "$8,230",
      status: "active",
      contentId: "enabled",
      monetization: "enabled",
    },
    {
      id: "CH-003",
      name: "Beat Factory",
      partner: "Urban Beats Network",
      subscribers: "1.2M",
      views: "34.5M",
      revenue: "$9,870",
      status: "review",
      contentId: "pending",
      monetization: "disabled",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching channels:", searchQuery)
  }

  const handleAddChannel = () => {
    console.log("Adding new channel...")
    router.push("/admin/cms-partners/channels/create")
  }

  const handleViewAnalytics = (channelId: string) => {
    console.log("Viewing analytics for channel:", channelId)
    router.push(`/admin/cms-partners/channels/${channelId}/analytics`)
  }

  const handleManageChannel = (channelId: string) => {
    console.log("Managing channel:", channelId)
    router.push(`/admin/cms-partners/channels/${channelId}/manage`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Channel Management</h1>
        <div className="flex space-x-2">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </form>
          <Button className="bg-red-600 hover:bg-red-700" onClick={handleAddChannel}>
            <Plus className="w-4 h-4 mr-2" />
            Add Channel
          </Button>
        </div>
      </div>

      {/* Channel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Channels</CardTitle>
            <Youtube className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">18,432</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">245.7M</div>
            <p className="text-xs text-blue-400">Network reach</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Monthly Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1.2B</div>
            <p className="text-xs text-purple-400">+8% growth</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Network Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$2.4M</div>
            <p className="text-xs text-green-400">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Channels List */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Network Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {channels.map((channel) => (
              <div key={channel.id} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className="bg-red-600">
                        <Youtube className="w-6 h-6 text-white" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white">{channel.name}</h3>
                      <p className="text-sm text-gray-400">{channel.partner}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={channel.status === "active" ? "bg-green-600" : "bg-yellow-600"}>
                      {channel.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Subscribers</div>
                    <div className="font-bold text-white">{channel.subscribers}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Views</div>
                    <div className="font-bold text-white">{channel.views}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Revenue</div>
                    <div className="font-bold text-green-400">{channel.revenue}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Content ID</div>
                    <div
                      className={`font-bold ${channel.contentId === "enabled" ? "text-green-400" : "text-yellow-400"}`}
                    >
                      {channel.contentId}
                    </div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Monetization</div>
                    <div
                      className={`font-bold ${channel.monetization === "enabled" ? "text-green-400" : "text-red-400"}`}
                    >
                      {channel.monetization}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewAnalytics(channel.id)}>
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleManageChannel(channel.id)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Channel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
