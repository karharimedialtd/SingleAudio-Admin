import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Plus, FileText, Users, Music, Download } from "lucide-react"

export default function PublishingManagement() {
  const publishingCatalog = [
    {
      id: "PUB-2024-001",
      title: "Summer Vibes EP",
      artist: "Alex Johnson",
      composers: ["Alex Johnson"],
      publishers: ["Self-Published"],
      iswc: "T-123.456.789-0",
      splits: [{ name: "Alex Johnson", role: "Composer", share: "100%" }],
      status: "active",
    },
    {
      id: "PUB-2024-002",
      title: "Midnight Dreams",
      artist: "Luna Records",
      composers: ["Sarah Williams", "Michael Brown"],
      publishers: ["Luna Publishing"],
      iswc: "T-345.678.901-2",
      splits: [
        { name: "Sarah Williams", role: "Composer", share: "60%" },
        { name: "Michael Brown", role: "Composer", share: "40%" },
      ],
      status: "active",
    },
    {
      id: "PUB-2024-003",
      title: "Urban Beats Collection",
      artist: "Beat Master",
      composers: ["Beat Master", "Various Artists"],
      publishers: ["Urban Sounds Publishing"],
      iswc: "T-567.890.123-4",
      splits: [
        { name: "Beat Master", role: "Composer", share: "70%" },
        { name: "Various Artists", role: "Contributors", share: "30%" },
      ],
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Publishing Management</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Work
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
                placeholder="Search by title, artist, or ISWC..."
                className="pl-10 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-600">
                All Works
              </Button>
              <Button variant="outline" className="border-gray-600">
                My Catalog
              </Button>
              <Button variant="outline" className="border-gray-600">
                Recent
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Publishing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Works</CardTitle>
            <FileText className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-blue-400">Registered works</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Composers</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">892</div>
            <p className="text-xs text-purple-400">Registered composers</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Publishers</CardTitle>
            <Music className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-green-400">Publishing entities</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Revenue</CardTitle>
            <FileText className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$345,890</div>
            <p className="text-xs text-yellow-400">Publishing revenue</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="catalog" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="catalog" className="data-[state=active]:bg-blue-600">
            Catalog
          </TabsTrigger>
          <TabsTrigger value="composers" className="data-[state=active]:bg-blue-600">
            Composers
          </TabsTrigger>
          <TabsTrigger value="publishers" className="data-[state=active]:bg-blue-600">
            Publishers
          </TabsTrigger>
          <TabsTrigger value="splits" className="data-[state=active]:bg-blue-600">
            Splits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="catalog">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Publishing Catalog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publishingCatalog.map((work) => (
                  <div key={work.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{work.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>by {work.artist}</span>
                          <span>•</span>
                          <span>ISWC: {work.iswc}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-600">Active</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Composers</div>
                        <div className="font-bold text-white">{work.composers.join(", ")}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Publishers</div>
                        <div className="font-bold text-white">{work.publishers.join(", ")}</div>
                      </div>
                    </div>

                    <div className="bg-gray-600 p-3 rounded mb-4">
                      <div className="text-sm text-gray-400 mb-2">Ownership Splits</div>
                      <div className="space-y-2">
                        {work.splits.map((split, index) => (
                          <div key={index} className="flex justify-between">
                            <div className="text-white">
                              {split.name} <span className="text-gray-400">({split.role})</span>
                            </div>
                            <div className="text-blue-400 font-bold">{split.share}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Edit Work
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="composers">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Registered Composers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Alex Johnson", "Sarah Williams", "Michael Brown", "Beat Master"].map((composer, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{composer}</h3>
                      <Badge className="bg-blue-600">Composer</Badge>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">IPI: 123456789</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Works:</span>
                      <span className="text-white">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Publishers:</span>
                      <span className="text-white">2</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      View Profile
                    </Button>
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
