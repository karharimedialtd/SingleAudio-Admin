"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Eye, Clock, Users, Building, Shield, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UserApplicationsPage() {
  const router = useRouter()

  const applications = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      type: "Artist",
      status: "pending",
      submittedDate: "2024-01-15",
      documents: ["ID Verification", "Tax Form"],
    },
    {
      id: 2,
      name: "Luna Records",
      email: "contact@lunarecords.com",
      type: "Label",
      status: "pending",
      submittedDate: "2024-01-14",
      documents: ["Business License", "Tax Form", "Bank Details"],
    },
    {
      id: 3,
      name: "Beat Master",
      email: "beats@example.com",
      type: "Artist",
      status: "review",
      submittedDate: "2024-01-13",
      documents: ["ID Verification"],
    },
  ]

  const handleExportReport = () => {
    console.log("Exporting applications report...")
    // Implement export functionality
  }

  const handleViewDetails = (applicationId: number) => {
    console.log("Viewing details for application:", applicationId)
    router.push(`/admin/users/applications/${applicationId}`)
  }

  const handleApprove = (applicationId: number) => {
    console.log("Approving application:", applicationId)
    // Implement approval logic
  }

  const handleReject = (applicationId: number) => {
    console.log("Rejecting application:", applicationId)
    // Implement rejection logic
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "review":
        return <Badge className="bg-blue-600">In Review</Badge>
      case "approved":
        return <Badge className="bg-green-600">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Artist":
        return <Users className="w-4 h-4" />
      case "Label":
        return <Building className="w-4 h-4" />
      case "CMS Partner":
        return <Shield className="w-4 h-4" />
      default:
        return <Users className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">User Applications</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Application Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-blue-400">All time</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-yellow-400">Awaiting action</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Approved Today</CardTitle>
            <Check className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-green-400">New approvals</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Approval Rate</CardTitle>
            <Shield className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89%</div>
            <p className="text-xs text-purple-400">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="pending" className="data-[state=active]:bg-blue-600">
            Pending ({applications.filter((app) => app.status === "pending").length})
          </TabsTrigger>
          <TabsTrigger value="review" className="data-[state=active]:bg-blue-600">
            In Review
          </TabsTrigger>
          <TabsTrigger value="approved" className="data-[state=active]:bg-blue-600">
            Approved
          </TabsTrigger>
          <TabsTrigger value="rejected" className="data-[state=active]:bg-blue-600">
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Pending Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications
                  .filter((app) => app.status === "pending")
                  .map((application) => (
                    <div key={application.id} className="bg-gray-700 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>
                              {application.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{application.name}</h3>
                            <p className="text-sm text-gray-400">{application.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            <div className="flex items-center space-x-1">
                              {getTypeIcon(application.type)}
                              <span>{application.type}</span>
                            </div>
                          </Badge>
                          {getStatusBadge(application.status)}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Application Type</div>
                          <div className="font-bold text-white">{application.type}</div>
                        </div>
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Submitted Date</div>
                          <div className="font-bold text-white">{application.submittedDate}</div>
                        </div>
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Documents</div>
                          <div className="font-bold text-blue-400">{application.documents.length} files</div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleViewDetails(application.id)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApprove(application.id)}
                        >
                          <Check className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleReject(application.id)}>
                          <X className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
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
