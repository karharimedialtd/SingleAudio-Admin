"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Clock, DollarSign, AlertTriangle, Eye, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PayoutRequests() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState<number | null>(null)

  const payoutRequests = [
    {
      id: 1,
      user: "Alex Johnson",
      email: "alex@example.com",
      amount: 1250.45,
      method: "PayPal",
      status: "pending",
      requestDate: "2024-01-15",
      minimumMet: true,
      verified: true,
    },
    {
      id: 2,
      user: "Luna Records",
      email: "contact@lunarecords.com",
      amount: 3890.75,
      method: "Bank Transfer",
      status: "approved",
      requestDate: "2024-01-14",
      minimumMet: true,
      verified: true,
    },
    {
      id: 3,
      user: "Beat Master",
      email: "beats@example.com",
      amount: 45.3,
      method: "PayPal",
      status: "rejected",
      requestDate: "2024-01-13",
      minimumMet: false,
      verified: true,
      rejectionReason: "Below minimum payout threshold",
    },
    {
      id: 4,
      user: "Indie Collective",
      email: "info@indiecollective.com",
      amount: 5670.9,
      method: "Wire Transfer",
      status: "processing",
      requestDate: "2024-01-12",
      minimumMet: true,
      verified: true,
    },
  ]

  const handleApprove = async (requestId: number) => {
    setIsProcessing(requestId)
    console.log("Approving payout request:", requestId)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsProcessing(null)
    // Update request status in real app
  }

  const handleReject = (requestId: number) => {
    console.log("Rejecting payout request:", requestId)
    router.push(`/admin/payouts/reject/${requestId}`)
  }

  const handleViewDetails = (requestId: number) => {
    console.log("Viewing payout request details:", requestId)
    router.push(`/admin/payouts/requests/${requestId}`)
  }

  const handleBulkProcess = () => {
    console.log("Processing bulk payouts...")
    router.push("/admin/payouts/bulk-process")
  }

  const handleExportReport = () => {
    console.log("Exporting payout report...")
    // Implement export functionality
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "processing":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-600">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "processing":
        return <Badge className="bg-blue-600">Processing</Badge>
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Payout Requests</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600" onClick={handleExportReport}>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleBulkProcess}>
            <DollarSign className="w-4 h-4 mr-2" />
            Bulk Process
          </Button>
        </div>
      </div>

      {/* Payout Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending Requests</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-yellow-400">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$45,670</div>
            <p className="text-xs text-green-400">Pending payouts</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Processed Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-green-400">$18,450 paid out</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-red-400">This week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-600">
            Pending
          </TabsTrigger>
          <TabsTrigger value="approved" className="data-[state=active]:bg-green-600">
            Approved
          </TabsTrigger>
          <TabsTrigger value="processing" className="data-[state=active]:bg-blue-600">
            Processing
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-green-600">
            Completed
          </TabsTrigger>
          <TabsTrigger value="rejected" className="data-[state=active]:bg-red-600">
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Pending Payout Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payoutRequests
                  .filter((request) => request.status === "pending")
                  .map((request) => (
                    <div key={request.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                              {request.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{request.user}</h3>
                            <p className="text-sm text-gray-400">{request.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {request.method}
                              </Badge>
                              {getStatusBadge(request.status)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(request.status)}
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-400">${request.amount.toFixed(2)}</div>
                            <div className="text-sm text-gray-400">Requested: {request.requestDate}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            {request.minimumMet ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                            <span className="text-gray-400">Minimum Met</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {request.verified ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                            <span className="text-gray-400">Verified</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleViewDetails(request.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleReject(request.id)}>
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove(request.id)}
                            disabled={isProcessing === request.id}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {isProcessing === request.id ? "Processing..." : "Approve"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Approved Payout Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payoutRequests
                  .filter((request) => request.status === "approved")
                  .map((request) => (
                    <div key={request.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                              {request.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{request.user}</h3>
                            <p className="text-sm text-gray-400">{request.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {request.method}
                              </Badge>
                              {getStatusBadge(request.status)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-400">${request.amount.toFixed(2)}</div>
                            <div className="text-sm text-gray-400">Approved</div>
                          </div>
                          <Button size="sm" variant="outline" onClick={() => handleViewDetails(request.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Processing Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payoutRequests
                  .filter((request) => request.status === "processing")
                  .map((request) => (
                    <div key={request.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                              {request.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{request.user}</h3>
                            <p className="text-sm text-gray-400">{request.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {request.method}
                              </Badge>
                              {getStatusBadge(request.status)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-400">${request.amount.toFixed(2)}</div>
                            <div className="text-sm text-gray-400">Processing...</div>
                          </div>
                          <Button size="sm" variant="outline" onClick={() => handleViewDetails(request.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Track Status
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Rejected Payout Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payoutRequests
                  .filter((request) => request.status === "rejected")
                  .map((request) => (
                    <div key={request.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                              {request.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-white">{request.user}</h3>
                            <p className="text-sm text-gray-400">{request.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {request.method}
                              </Badge>
                              {getStatusBadge(request.status)}
                            </div>
                            {request.rejectionReason && (
                              <p className="text-sm text-red-400 mt-1">{request.rejectionReason}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-400">${request.amount.toFixed(2)}</div>
                            <div className="text-sm text-gray-400">Rejected</div>
                          </div>
                          <Button size="sm" variant="outline" onClick={() => handleViewDetails(request.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
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
