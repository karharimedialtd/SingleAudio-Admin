"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Edit, Trash2, Shield, User, Building } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ManageUsersPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Artist",
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      releases: 12,
      earnings: "$2,450",
    },
    {
      id: 2,
      name: "Luna Records",
      email: "contact@lunarecords.com",
      role: "Label",
      status: "active",
      joinDate: "2023-12-10",
      lastActive: "1 day ago",
      releases: 45,
      earnings: "$15,230",
    },
    {
      id: 3,
      name: "Beat Master",
      email: "beats@example.com",
      role: "Artist",
      status: "suspended",
      joinDate: "2024-02-01",
      lastActive: "1 week ago",
      releases: 8,
      earnings: "$890",
    },
    {
      id: 4,
      name: "Indie Collective",
      email: "info@indiecollective.com",
      role: "CMS Partner",
      status: "active",
      joinDate: "2023-11-20",
      lastActive: "3 hours ago",
      releases: 78,
      earnings: "$28,450",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Artist":
        return <User className="w-4 h-4" />
      case "Label":
        return <Building className="w-4 h-4" />
      case "CMS Partner":
        return <Shield className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleAddUser = () => {
    console.log("Add user clicked")
    // router.push("/admin/users/create")
  }

  const handleViewProfile = (userId: number) => {
    console.log("View profile for user:", userId)
    // router.push(`/admin/users/${userId}`)
  }

  const handleEditUser = (userId: number) => {
    console.log("Edit user:", userId)
    // router.push(`/admin/users/${userId}/edit`)
  }

  const handleSuspendUser = (userId: number) => {
    console.log("Suspend user:", userId)
  }

  const handleReactivateUser = (userId: number) => {
    console.log("Reactivate user:", userId)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Manage Users</h1>
        <div className="flex space-x-2">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </form>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddUser}>
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
            <User className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,847</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
            <User className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">11,234</div>
            <p className="text-xs text-green-400">87% of total</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Suspended</CardTitle>
            <Shield className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-red-400">Requires review</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">New This Month</CardTitle>
            <Plus className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,524</div>
            <p className="text-xs text-purple-400">+18% growth</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All Users
          </TabsTrigger>
          <TabsTrigger value="artists" className="data-[state=active]:bg-blue-600">
            Artists
          </TabsTrigger>
          <TabsTrigger value="labels" className="data-[state=active]:bg-blue-600">
            Labels
          </TabsTrigger>
          <TabsTrigger value="cms" className="data-[state=active]:bg-blue-600">
            CMS Partners
          </TabsTrigger>
          <TabsTrigger value="suspended" className="data-[state=active]:bg-blue-600">
            Suspended
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">All Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-white">{user.name}</h3>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          <div className="flex items-center space-x-1">
                            {getRoleIcon(user.role)}
                            <span>{user.role}</span>
                          </div>
                        </Badge>
                        {getStatusBadge(user.status)}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Join Date</div>
                        <div className="font-bold text-white">{user.joinDate}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Last Active</div>
                        <div className="font-bold text-white">{user.lastActive}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Releases</div>
                        <div className="font-bold text-blue-400">{user.releases}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Earnings</div>
                        <div className="font-bold text-green-400">{user.earnings}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">User ID</div>
                        <div className="font-bold text-white">#{user.id.toString().padStart(4, "0")}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleViewProfile(user.id)}>
                        View Profile
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleEditUser(user.id)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      {user.status === "suspended" ? (
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleReactivateUser(user.id)}
                        >
                          Reactivate
                        </Button>
                      ) : (
                        <Button size="sm" variant="destructive" onClick={() => handleSuspendUser(user.id)}>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Suspend
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
