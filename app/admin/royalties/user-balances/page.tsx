"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, DollarSign, AlertTriangle, Clock, CheckCircle, Download, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UserBalances() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isExporting, setIsExporting] = useState(false)

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Artist",
      status: "active",
      available: 1250.45,
      frozen: 0,
      flagged: 0,
      disputed: 0,
      totalEarnings: 5430.2,
    },
    {
      id: 2,
      name: "Luna Records",
      email: "contact@lunarecords.com",
      role: "Label",
      status: "review",
      available: 3890.75,
      frozen: 500.0,
      flagged: 0,
      disputed: 250.0,
      totalEarnings: 12450.8,
    },
    {
      id: 3,
      name: "Beat Master",
      email: "beats@example.com",
      role: "Artist",
      status: "flagged",
      available: 890.3,
      frozen: 0,
      flagged: 150.0,
      disputed: 0,
      totalEarnings: 2340.6,
    },
    {
      id: 4,
      name: "Indie Collective",
      email: "info@indiecollective.com",
      role: "CMS Partner",
      status: "active",
      available: 5670.9,
      frozen: 0,
      flagged: 0,
      disputed: 0,
      totalEarnings: 18920.45,
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  const handleExportData = async () => {
    setIsExporting(true)
    console.log("Exporting user balances data...")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsExporting(false)
    // In a real app, trigger file download here
  }

  const handleViewDetails = (userId: number) => {
    console.log("Viewing details for user:", userId)
    router.push(`/admin/royalties/user-balances/${userId}`)
  }

  const handleProcessPayout = (userId: number) => {
    console.log("Processing payout for user:", userId)
    router.push(`/admin/payouts/process/${userId}`)
  }

  const handleInvestigate = (userId: number) => {
    console.log("Investigating flagged earnings for user:", userId)
    router.push(`/admin/royalties/investigate/${userId}`)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "review":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "flagged":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>
      case "review":
        return <Badge className="bg-yellow-600">Under Review</Badge>
      case "flagged":
        return <Badge variant="destructive">Flagged</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">User Balances</h1>
        <div className="flex space-x-2">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              className="pl-10 bg-gray-800 border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleExportData} disabled={isExporting}>
            <Download className="w-4 h-4 mr-2" />
            {isExporting ? "Exporting..." : "Export Data"}
          </Button>
        </div>
      </div>

      {/* Balance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Available</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$456,780</div>
            <p className="text-xs text-green-400">Ready for payout</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Frozen Funds</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$12,450</div>
            <p className="text-xs text-yellow-400">Under review</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Flagged Earnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$3,240</div>
            <p className="text-xs text-red-400">Needs investigation</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Disputed</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$1,890</div>
            <p className="text-xs text-orange-400">In dispute</p>
          </CardContent>
        </Card>
      </div>

      {/* User Balances Table */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">User Balance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white">{user.name}</h3>
                      <p className="text-sm text-gray-400">{user.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {user.role}
                        </Badge>
                        {getStatusBadge(user.status)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(user.status)}
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">${user.totalEarnings.toFixed(2)}</div>
                      <div className="text-sm text-gray-400">Total Earnings</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Available</div>
                    <div className="font-bold text-green-400">${user.available.toFixed(2)}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Frozen</div>
                    <div className="font-bold text-yellow-400">${user.frozen.toFixed(2)}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Flagged</div>
                    <div className="font-bold text-red-400">${user.flagged.toFixed(2)}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Disputed</div>
                    <div className="font-bold text-orange-400">${user.disputed.toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(user.id)}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {user.available > 0 && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleProcessPayout(user.id)}
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Process Payout
                    </Button>
                  )}
                  {(user.flagged > 0 || user.status === "flagged") && (
                    <Button size="sm" variant="destructive" onClick={() => handleInvestigate(user.id)}>
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Investigate
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
