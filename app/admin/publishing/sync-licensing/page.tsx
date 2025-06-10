import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Film, Tv, Gamepad2, Radio, DollarSign, Clock } from "lucide-react"

export default function SyncLicensing() {
  const syncOpportunities = [
    {
      id: "SYNC-2024-001",
      title: "Netflix Original Series",
      type: "TV Show",
      genre: "Drama",
      budget: "$5,000 - $15,000",
      deadline: "2024-02-15",
      description: "Looking for emotional indie tracks for dramatic scenes",
      status: "open",
      matches: 23,
    },
    {
      id: "SYNC-2024-002",
      title: "AAA Video Game",
      type: "Video Game",
      genre: "Action",
      budget: "$10,000 - $25,000",
      deadline: "2024-03-01",
      description: "High-energy electronic music for combat sequences",
      status: "in_progress",
      matches: 45,
    },
    {
      id: "SYNC-2024-003",
      title: "Commercial Campaign",
      type: "Advertisement",
      genre: "Pop",
      budget: "$2,000 - $8,000",
      deadline: "2024-01-30",
      description: "Upbeat pop tracks for lifestyle brand campaign",
      status: "closed",
      matches: 67,
    },
  ]

  const syncDeals = [
    {
      id: "DEAL-2024-001",
      track: "Summer Vibes",
      artist: "Alex Johnson",
      project: "Indie Film - 'Sunset Dreams'",
      fee: "$3,500",
      usage: "Background Music",
      status: "signed",
    },
    {
      id: "DEAL-2024-002",
      track: "Urban Beats",
      artist: "Beat Master",
      project: "TV Commercial - Tech Brand",
      fee: "$7,200",
      usage: "Main Theme",
      status: "negotiating",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-600">Open</Badge>
      case "in_progress":
        return <Badge className="bg-blue-600">In Progress</Badge>
      case "closed":
        return <Badge className="bg-gray-600">Closed</Badge>
      case "signed":
        return <Badge className="bg-green-600">Signed</Badge>
      case "negotiating":
        return <Badge className="bg-yellow-600">Negotiating</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "TV Show":
        return <Tv className="w-5 h-5" />
      case "Video Game":
        return <Gamepad2 className="w-5 h-5" />
      case "Advertisement":
        return <Radio className="w-5 h-5" />
      case "Film":
        return <Film className="w-5 h-5" />
      default:
        return <Film className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Sync Licensing</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Film className="w-4 h-4 mr-2" />
          Create Opportunity
        </Button>
      </div>

      {/* Sync Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Opportunities</CardTitle>
            <Film className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47</div>
            <p className="text-xs text-purple-400">Open for submissions</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Deals Closed</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-green-400">This year</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$234,500</div>
            <p className="text-xs text-blue-400">Sync licensing revenue</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Success Rate</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23.5%</div>
            <p className="text-xs text-yellow-400">Placement rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="opportunities" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="opportunities" className="data-[state=active]:bg-purple-600">
            Opportunities
          </TabsTrigger>
          <TabsTrigger value="deals" className="data-[state=active]:bg-purple-600">
            Active Deals
          </TabsTrigger>
          <TabsTrigger value="catalog" className="data-[state=active]:bg-purple-600">
            Sync Catalog
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Sync Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {syncOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          {getTypeIcon(opportunity.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{opportunity.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{opportunity.type}</span>
                            <span>•</span>
                            <span>{opportunity.genre}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(opportunity.status)}
                        <Badge variant="outline">{opportunity.matches} matches</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Budget Range</div>
                        <div className="font-bold text-green-400">{opportunity.budget}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Deadline</div>
                        <div className="font-bold text-white">{opportunity.deadline}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Opportunity ID</div>
                        <div className="font-bold text-blue-400">{opportunity.id}</div>
                      </div>
                    </div>

                    <div className="bg-gray-600 p-3 rounded mb-4">
                      <div className="text-sm text-gray-400 mb-2">Description</div>
                      <p className="text-white">{opportunity.description}</p>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        View Submissions
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Manage Opportunity
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Active Sync Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {syncDeals.map((deal) => (
                  <div key={deal.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{deal.track}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>by {deal.artist}</span>
                          <span>•</span>
                          <span>Deal ID: {deal.id}</span>
                        </div>
                      </div>
                      {getStatusBadge(deal.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Project</div>
                        <div className="font-bold text-white">{deal.project}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">License Fee</div>
                        <div className="font-bold text-green-400">{deal.fee}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Usage</div>
                        <div className="font-bold text-blue-400">{deal.usage}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        View Contract
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Manage Deal
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Sync Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-4">Placement by Media Type</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Film</span>
                        <span className="text-white">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">TV Shows</span>
                        <span className="text-white">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Commercials</span>
                        <span className="text-white">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>

                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-4">Revenue by Quarter</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q1 2024</span>
                        <span className="text-green-400">$67,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q2 2024</span>
                        <span className="text-green-400">$89,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q3 2024</span>
                        <span className="text-green-400">$78,800</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
