import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Eye, Clock, AlertTriangle, FileText } from "lucide-react"

export default function PublishingRequests() {
  const requests = [
    {
      id: "PUB-2024-001",
      title: "Summer Vibes EP",
      artist: "Alex Johnson",
      type: "Original Work",
      composers: ["Alex Johnson"],
      publishers: ["Self-Published"],
      iswc: "T-123.456.789-0",
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "PUB-2024-002",
      title: "Midnight Dreams",
      artist: "Luna Records",
      type: "Original Work",
      composers: ["Sarah Williams", "Michael Brown"],
      publishers: ["Luna Publishing"],
      iswc: "T-345.678.901-2",
      status: "in_review",
      date: "2024-01-14",
    },
    {
      id: "PUB-2024-003",
      title: "Urban Beats Collection",
      artist: "Beat Master",
      type: "Compilation",
      composers: ["Beat Master", "Various Artists"],
      publishers: ["Urban Sounds Publishing"],
      iswc: "T-567.890.123-4",
      status: "approved",
      date: "2024-01-13",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "in_review":
        return <Badge className="bg-blue-600">In Review</Badge>
      case "approved":
        return <Badge className="bg-green-600">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Publishing Requests</h1>
        <Badge variant="secondary">{requests.filter((r) => r.status === "pending").length} pending approval</Badge>
      </div>

      {/* Publishing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Requests</CardTitle>
            <FileText className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-blue-400">Publishing requests</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-yellow-400">Awaiting action</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Approved This Week</CardTitle>
            <Check className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-green-400">Successfully processed</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Issues Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-red-400">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Requests List */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Publishing Registration Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {requests.map((request) => (
              <div key={request.id} className="bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-white">{request.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>by {request.artist}</span>
                      <span>•</span>
                      <span>Request ID: {request.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">{getStatusBadge(request.status)}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Type</div>
                    <div className="font-bold text-white">{request.type}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">ISWC</div>
                    <div className="font-bold text-blue-400">{request.iswc}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Submission Date</div>
                    <div className="font-bold text-white">{request.date}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Composers</div>
                    <div className="font-bold text-white">{request.composers.join(", ")}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Publishers</div>
                    <div className="font-bold text-white">{request.publishers.join(", ")}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {request.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                  {request.status === "in_review" && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Check className="w-4 h-4 mr-2" />
                      Complete Review
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
