import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Check, X, Eye, AlertTriangle, Filter, Search, RefreshCw } from "lucide-react"
import Image from "next/image"

export default function MatchClaimDashboard() {
  const matchClaims = [
    {
      id: "CLM-2024-001",
      video: "Summer Vibes Remix by DJ Beats",
      channel: "DJ Beats Official",
      asset: "Summer Vibes EP",
      owner: "Alex Johnson",
      matchLength: "2:45",
      views: "45.2K",
      revenue: "$245",
      status: "active",
      policy: "monetize",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "CLM-2024-002",
      video: "Midnight Dreams Cover",
      channel: "Music Covers Channel",
      asset: "Midnight Dreams",
      owner: "Luna Records",
      matchLength: "3:15",
      views: "12.8K",
      revenue: "$89",
      status: "disputed",
      policy: "monetize",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "CLM-2024-003",
      video: "Urban Beats Remix",
      channel: "Remix Masters",
      asset: "Urban Beats Collection",
      owner: "Beat Master",
      matchLength: "1:30",
      views: "8.4K",
      revenue: "$45",
      status: "pending",
      policy: "track",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>
      case "disputed":
        return <Badge variant="destructive">Disputed</Badge>
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPolicyBadge = (policy: string) => {
    switch (policy) {
      case "monetize":
        return <Badge className="bg-blue-600">Monetize</Badge>
      case "block":
        return <Badge variant="destructive">Block</Badge>
      case "track":
        return <Badge variant="secondary">Track</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Match & Claim Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by video, channel, or claim ID..."
                className="pl-10 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-600">
                All Claims
              </Button>
              <Button variant="outline" className="border-gray-600">
                Disputed
              </Button>
              <Button variant="outline" className="border-gray-600">
                Pending
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Claim Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Claims</CardTitle>
            <Check className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,456</div>
            <p className="text-xs text-blue-400">Active claims</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Disputed Claims</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-red-400">Needs review</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Revenue Generated</CardTitle>
            <Check className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$45,230</div>
            <p className="text-xs text-green-400">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pending Review</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-yellow-400">Awaiting action</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All Claims
          </TabsTrigger>
          <TabsTrigger value="monetize" className="data-[state=active]:bg-blue-600">
            Monetize
          </TabsTrigger>
          <TabsTrigger value="block" className="data-[state=active]:bg-blue-600">
            Block
          </TabsTrigger>
          <TabsTrigger value="track" className="data-[state=active]:bg-blue-600">
            Track Only
          </TabsTrigger>
          <TabsTrigger value="disputed" className="data-[state=active]:bg-blue-600">
            Disputed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Active Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matchClaims.map((claim) => (
                  <div key={claim.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={claim.thumbnail || "/placeholder.svg"}
                          alt={claim.video}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{claim.video}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{claim.channel}</span>
                            <span>•</span>
                            <span>{claim.views} views</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(claim.status)}
                        {getPolicyBadge(claim.policy)}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Claim ID</div>
                        <div className="font-bold text-white">{claim.id}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Asset</div>
                        <div className="font-bold text-blue-400">{claim.asset}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Owner</div>
                        <div className="font-bold text-white">{claim.owner}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Revenue</div>
                        <div className="font-bold text-green-400">{claim.revenue}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {claim.status === "disputed" && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Check className="w-4 h-4 mr-2" />
                            Approve Claim
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="w-4 h-4 mr-2" />
                            Release Claim
                          </Button>
                        </>
                      )}
                      {claim.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Check className="w-4 h-4 mr-2" />
                            Review
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

        <TabsContent value="monetize">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Monetized Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matchClaims
                  .filter((claim) => claim.policy === "monetize")
                  .map((claim) => (
                    <div key={claim.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={claim.thumbnail || "/placeholder.svg"}
                            alt={claim.video}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-white">{claim.video}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <span>{claim.channel}</span>
                              <span>•</span>
                              <span>{claim.views} views</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(claim.status)}
                          {getPolicyBadge(claim.policy)}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Claim ID</div>
                          <div className="font-bold text-white">{claim.id}</div>
                        </div>
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Asset</div>
                          <div className="font-bold text-blue-400">{claim.asset}</div>
                        </div>
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Owner</div>
                          <div className="font-bold text-white">{claim.owner}</div>
                        </div>
                        <div className="bg-gray-600 p-3 rounded">
                          <div className="text-sm text-gray-400">Revenue</div>
                          <div className="font-bold text-green-400">{claim.revenue}</div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
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
