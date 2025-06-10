"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Shield, Users, Settings, Crown, UserCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UserRolesPage() {
  const router = useRouter()

  const roles = [
    {
      id: 1,
      name: "Super Admin",
      description: "Full system access and control",
      userCount: 3,
      permissions: ["All Permissions"],
      color: "bg-red-600",
    },
    {
      id: 2,
      name: "Admin",
      description: "Administrative access to most features",
      userCount: 12,
      permissions: ["User Management", "Content Management", "Analytics"],
      color: "bg-purple-600",
    },
    {
      id: 3,
      name: "Moderator",
      description: "Content moderation and user support",
      userCount: 25,
      permissions: ["Content Review", "User Support", "Basic Analytics"],
      color: "bg-blue-600",
    },
    {
      id: 4,
      name: "Artist",
      description: "Music upload and management",
      userCount: 8947,
      permissions: ["Upload Music", "View Analytics", "Manage Profile"],
      color: "bg-green-600",
    },
  ]

  const handleCreateRole = () => {
    console.log("Creating new role...")
    router.push("/admin/users/roles/create")
  }

  const handleEditRole = (roleId: number) => {
    console.log("Editing role:", roleId)
    router.push(`/admin/users/roles/${roleId}/edit`)
  }

  const handleDeleteRole = (roleId: number) => {
    console.log("Deleting role:", roleId)
    // Implement delete logic with confirmation
  }

  const handleViewUsers = (roleId: number) => {
    console.log("Viewing users for role:", roleId)
    router.push(`/admin/users/manage?role=${roleId}`)
  }

  const handleManagePermissions = (roleId: number) => {
    console.log("Managing permissions for role:", roleId)
    router.push(`/admin/users/roles/${roleId}/permissions`)
  }

  const getRoleIcon = (roleName: string) => {
    switch (roleName) {
      case "Super Admin":
        return <Crown className="w-5 h-5" />
      case "Admin":
        return <Shield className="w-5 h-5" />
      case "Moderator":
        return <UserCheck className="w-5 h-5" />
      default:
        return <Users className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Role Management</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleCreateRole}>
          <Plus className="w-4 h-4 mr-2" />
          Create Role
        </Button>
      </div>

      {/* Role Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Roles</CardTitle>
            <Shield className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{roles.length}</div>
            <p className="text-xs text-blue-400">Active roles</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Admin Users</CardTitle>
            <Crown className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">15</div>
            <p className="text-xs text-purple-400">Admin level access</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Staff Members</CardTitle>
            <UserCheck className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">25</div>
            <p className="text-xs text-green-400">Moderators & staff</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Recent Changes</CardTitle>
            <Settings className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            <p className="text-xs text-yellow-400">This week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="roles" className="data-[state=active]:bg-blue-600">
            All Roles
          </TabsTrigger>
          <TabsTrigger value="permissions" className="data-[state=active]:bg-blue-600">
            Permission Matrix
          </TabsTrigger>
          <TabsTrigger value="assignments" className="data-[state=active]:bg-blue-600">
            Role Assignments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${role.color} text-white`}>{getRoleIcon(role.name)}</div>
                      <div>
                        <CardTitle className="text-white">{role.name}</CardTitle>
                        <p className="text-sm text-gray-400">{role.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {role.userCount} users
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Permissions</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleViewUsers(role.id)}>
                      <Users className="w-4 h-4 mr-2" />
                      View Users
                    </Button>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleManagePermissions(role.id)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Permissions
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEditRole(role.id)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    {role.name !== "Super Admin" && (
                      <Button size="sm" variant="destructive" onClick={() => handleDeleteRole(role.id)}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Permission Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-gray-400 py-8">Permission matrix would be displayed here</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Role Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-gray-400 py-8">Role assignment history would be displayed here</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
