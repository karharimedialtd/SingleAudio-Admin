import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, CheckCircle, AlertTriangle, Music } from "lucide-react"

export default function ReleaseQueuePage() {
  const releases = [
    {
      id: 1,
      title: "Summer Vibes",
      artist: "Alex Johnson",
      label: "Independent",
      status: "pending",
      submittedDate: "2024-01-15",
      releaseDate: "2024-02-01",
      tracks: 3,
      genre: "Pop",
      artwork: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Urban Beats EP",
      artist: "Beat Master",
      label: "Street Records",
      status: "processing",
      submittedDate: "2024-01-14",
      releaseDate: "2024-01-30",
      tracks: 5,
      genre: "Hip Hop",
      artwork: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Indie Dreams",
      artist: "Luna Records",
      label: "Luna Records",
      status: "approved",
      submittedDate: "2024-01-13",
      releaseDate: "2024-01-28",
      tracks: 8,
      genre: "Indie",
      artwork: "/placeholder.svg?height=60&width=60",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "processing":
        return <Badge className="bg-blue-600">Processing</Badge>
      case "approved":
        return <Badge className="bg-green-600">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Release Queue</h1>
        <Badge variant="secondary">{releases.filter((r) => r.status === "pending").length} pending approval</Badge>
      </div>

      {/* Queue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">45</div>
            <p className="text-xs text-yellow-400">Awaiting review</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Processing</CardTitle>
            <Play className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-blue-400">Being processed</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">189</div>
            <p className="text-xs text-green-400">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            <p className="text-xs text-red-400">Need attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All Releases
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-blue-600">
            Pending
          </TabsTrigger>
          <TabsTrigger value="processing" className="data-[state=active]:bg-blue-600">
            Processing
          </TabsTrigger>
          <TabsTrigger value="approved" className="data-[state=active]:bg-blue-600">
            Approved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Release Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {releases.map((release) => (
                  <div key={release.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={release.artwork || "/placeholder.svg"}
                          alt={release.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{release.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{release.artist}</span>
                            <span>•</span>
                            <span>{release.label}</span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(release.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Submitted</div>
                        <div className="font-bold text-white">{release.submittedDate}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Release Date</div>
                        <div className="font-bold text-white">{release.releaseDate}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Tracks</div>
                        <div className="font-bold text-blue-400">{release.tracks}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Genre</div>
                        <div className="font-bold text-white">{release.genre}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Release ID</div>
                        <div className="font-bold text-white">#{release.id.toString().padStart(4, "0")}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        <Music className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {release.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </>
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
