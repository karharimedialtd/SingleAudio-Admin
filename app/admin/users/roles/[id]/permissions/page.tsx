"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Save } from "lucide-react"

export default function RolePermissionsPage() {
  const params = useParams()
  const router = useRouter()
  const roleId = params.id

  const [isLoading, setIsLoading] = useState(false)

  // Mock role data
  const role = {
    id: roleId,
    name: roleId === "1" ? "Administrator" : roleId === "2" ? "Content Manager" : "Support Agent",
    description: "Full access to all system features and settings",
  }

  // Mock permissions data grouped by category
  const permissionGroups = [
    {
      name: "User Management",
      permissions: [
        { id: "user:view", label: "View Users", checked: true },
        { id: "user:create", label: "Create Users", checked: true },
        { id: "user:edit", label: "Edit Users", checked: true },
        { id: "user:delete", label: "Delete Users", checked: true },
        { id: "user:approve", label: "Approve Applications", checked: true },
      ],
    },
    {
      name: "Content Management",
      permissions: [
        { id: "content:view", label: "View Content", checked: true },
        { id: "content:create", label: "Create Content", checked: true },
        { id: "content:edit", label: "Edit Content", checked: true },
        { id: "content:delete", label: "Delete Content", checked: true },
        { id: "content:approve", label: "Approve Content", checked: true },
      ],
    },
    {
      name: "Royalties & Payouts",
      permissions: [
        { id: "royalty:view", label: "View Royalties", checked: true },
        { id: "royalty:calculate", label: "Calculate Royalties", checked: true },
        { id: "payout:view", label: "View Payouts", checked: true },
        { id: "payout:process", label: "Process Payouts", checked: true },
        { id: "payout:approve", label: "Approve Payouts", checked: true },
      ],
    },
    {
      name: "Analytics & Reporting",
      permissions: [
        { id: "analytics:view", label: "View Analytics", checked: true },
        { id: "analytics:export", label: "Export Reports", checked: true },
        { id: "analytics:create", label: "Create Custom Reports", checked: true },
      ],
    },
    {
      name: "System Settings",
      permissions: [
        { id: "settings:view", label: "View Settings", checked: true },
        { id: "settings:edit", label: "Edit Settings", checked: true },
        { id: "roles:manage", label: "Manage Roles", checked: true },
        { id: "system:logs", label: "View System Logs", checked: true },
      ],
    },
  ]

  const handleSavePermissions = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Permissions updated",
        description: `Permissions for role "${role.name}" have been updated successfully.`,
      })
    }, 1000)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-4" onClick={() => router.push("/admin/users/roles")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Roles
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{role.name} Role Permissions</h1>
          <p className="text-muted-foreground">{role.description}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Permission Management</CardTitle>
          <CardDescription>
            Configure access permissions for the {role.name} role. Changes will affect all users with this role.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={permissionGroups[0].name.toLowerCase().replace(" ", "-")}>
            <TabsList className="mb-4">
              {permissionGroups.map((group) => (
                <TabsTrigger key={group.name} value={group.name.toLowerCase().replace(" ", "-")}>
                  {group.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {permissionGroups.map((group) => (
              <TabsContent key={group.name} value={group.name.toLowerCase().replace(" ", "-")}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.permissions.map((permission) => (
                    <div key={permission.id} className="flex items-start space-x-2">
                      <Checkbox id={permission.id} defaultChecked={permission.checked} />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={permission.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {permission.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/admin/users/roles")}>
            Cancel
          </Button>
          <Button onClick={handleSavePermissions} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Permissions"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
