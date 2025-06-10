"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const roleFormSchema = z.object({
  name: z.string().min(2, {
    message: "Role name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  priority: z.coerce.number().int().min(1).max(100),
})

export default function EditRolePage() {
  const params = useParams()
  const router = useRouter()
  const roleId = params.id

  const [isLoading, setIsLoading] = useState(false)

  // Mock role data based on ID
  const roleData = {
    "1": {
      id: "1",
      name: "Administrator",
      description: "Full access to all system features and settings",
      priority: 100,
    },
    "2": {
      id: "2",
      name: "Content Manager",
      description: "Manage content, releases, and metadata",
      priority: 50,
    },
    "3": {
      id: "3",
      name: "Support Agent",
      description: "Handle user support tickets and inquiries",
      priority: 25,
    },
  }[roleId as string] || {
    id: roleId,
    name: "Custom Role",
    description: "Custom role with specific permissions",
    priority: 10,
  }

  const form = useForm<z.infer<typeof roleFormSchema>>({
    resolver: zodResolver(roleFormSchema),
    defaultValues: {
      name: roleData.name,
      description: roleData.description,
      priority: roleData.priority,
    },
  })

  function onSubmit(values: z.infer<typeof roleFormSchema>) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Role updated",
        description: `Role "${values.name}" has been updated successfully.`,
      })
      router.push("/admin/users/roles")
    }, 1000)
  }

  function handleDeleteRole() {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Role deleted",
        description: `Role "${roleData.name}" has been deleted successfully.`,
      })
      router.push("/admin/users/roles")
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
          <h1 className="text-3xl font-bold">Edit Role: {roleData.name}</h1>
          <p className="text-muted-foreground">Update role details and settings</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Role Information</CardTitle>
            <CardDescription>Update the basic information for this role.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter role name" {...field} />
                      </FormControl>
                      <FormDescription>This is the name that will be displayed to users.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter role description" className="resize-none" {...field} />
                      </FormControl>
                      <FormDescription>Brief description of the role's purpose and permissions.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority Level (1-100)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="100" {...field} />
                      </FormControl>
                      <FormDescription>Higher priority roles take precedence in permission conflicts.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => router.push("/admin/users/roles")}>
                Cancel
              </Button>
              <Button onClick={form.handleSubmit(onSubmit)} disabled={isLoading}>
                <Save className="mr-2 h-4 w-4" />
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Role
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the "{roleData.name}" role and remove it
                    from all assigned users.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteRole}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>Manage the permissions assigned to this role.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Configure detailed permissions for this role to control access to different parts of the system.
            </p>
            <Button onClick={() => router.push(`/admin/users/roles/${roleId}/permissions`)}>Manage Permissions</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users with this Role</CardTitle>
            <CardDescription>View and manage users assigned to this role.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {roleId === "1" ? "15" : roleId === "2" ? "8" : "12"} users currently have this role assigned.
            </p>
            <Button variant="outline">View Users</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
