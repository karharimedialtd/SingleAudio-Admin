import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Video, ImageIcon, FileAudio, Plus, Upload, Search } from "lucide-react"
import Image from "next/image"

export default function AssetsOverview() {
  const assetTypes = [
    { type: "Audio", count: 12450, icon: FileAudio, color: "from-blue-500 to-purple-600" },
    { type: "Video", count: 3240, icon: Video, color: "from-red-500 to-orange-600" },
    { type: "Image", count: 8760, icon: ImageIcon, color: "from-green-500 to-teal-600" },
  ]

  const recentAssets = [
    {
      id: "AST-2024-001",
      name: "Summer Vibes EP",
      type: "Audio",
      matches: 245,
      claims: 187,
      revenue: "$1,245",
      thumbnail: "/placeholder.svg?height=60&width=60",
      status: "active",
    },
    {
      id: "AST-2024-002",
      name: "Music Video - Midnight Dreams",
      type: "Video",
      matches: 89,
      claims: 76,
      revenue: "$890",
      thumbnail: "/placeholder.svg?height=60&width=60",
      status: "active",
    },
    {
      id: "AST-2024-003",
      name: "Album Artwork - Urban Beats",
      type: "Image",
      matches: 34,
      claims: 12,
      revenue: "$120",
      thumbnail: "/placeholder.svg?height=60&width=60",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Content ID Assets</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600">
            <Search className="w-4 h-4 mr-2" />
            Search Assets
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Asset
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Asset
          </Button>
        </div>
      </div>

      {/* Asset Type Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {assetTypes.map((asset, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{asset.type} Assets</CardTitle>
              <asset.icon className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{asset.count.toLocaleString()}</div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-700">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${asset.color}`}
                  style={{ width: `${(asset.count / 25000) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All Assets
          </TabsTrigger>
          <TabsTrigger value="audio" className="data-[state=active]:bg-blue-600">
            Audio
          </TabsTrigger>
          <TabsTrigger value="video" className="data-[state=active]:bg-blue-600">
            Video
          </TabsTrigger>
          <TabsTrigger value="image" className="data-[state=active]:bg-blue-600">
            Image
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-blue-600">
            Pending Review
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssets.map((asset) => (
                  <div key={asset.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={asset.thumbnail || "/placeholder.svg"}
                        alt={asset.name}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-white">{asset.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{asset.id}</span>
                          <span>•</span>
                          <span>{asset.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Matches</div>
                        <div className="font-semibold text-white">{asset.matches}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Claims</div>
                        <div className="font-semibold text-white">{asset.claims}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Revenue</div>
                        <div className="font-semibold text-green-400">{asset.revenue}</div>
                      </div>
                      <Badge className={asset.status === "active" ? "bg-green-600" : "bg-yellow-600"}>
                        {asset.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audio">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Audio Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-gray-400">
                <div className="text-center">
                  <FileAudio className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Audio assets filtered view</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="video">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Video Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-gray-400">
                <div className="text-center">
                  <Video className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Video assets filtered view</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Asset Performance */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Asset Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Match Rate</span>
              <span className="text-blue-400 font-bold">87.5%</span>
            </div>
            <Progress value={87.5} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Claim Success Rate</span>
              <span className="text-green-400 font-bold">94.2%</span>
            </div>
            <Progress value={94.2} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Revenue Generation</span>
              <span className="text-purple-400 font-bold">78.9%</span>
            </div>
            <Progress value={78.9} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
