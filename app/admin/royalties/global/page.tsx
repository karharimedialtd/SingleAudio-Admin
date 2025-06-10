"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Music, Users, Download, Filter } from "lucide-react"
import { useRouter } from "next/navigation"

export default function GlobalEarnings() {
  const router = useRouter()
  const [isExporting, setIsExporting] = useState(false)

  const earningsData = [
    { platform: "Spotify", revenue: "$125,430", percentage: 35, growth: "+12%" },
    { platform: "Apple Music", revenue: "$89,250", percentage: 25, growth: "+8%" },
    { platform: "YouTube Music", revenue: "$67,890", percentage: 19, growth: "+15%" },
    { platform: "Amazon Music", revenue: "$45,120", percentage: 13, growth: "+5%" },
    { platform: "Deezer", revenue: "$28,760", percentage: 8, growth: "+3%" },
  ]

  const topEarners = [
    { type: "song", name: "Summer Vibes", artist: "Alex Johnson", earnings: "$12,450" },
    { type: "artist", name: "Luna Records", earnings: "$45,230" },
    { type: "channel", name: "Music Vibes Official", earnings: "$23,890" },
    { type: "asset", name: "Urban Beats Collection", earnings: "$18,670" },
  ]

  const handleExportReport = async () => {
    setIsExporting(true)
    console.log("Exporting earnings report...")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsExporting(false)
    // In a real app, trigger file download here
  }

  const handleFilter = () => {
    console.log("Opening filter options...")
    // Implement filter modal/drawer
  }

  const handleViewDetails = (type: string, name: string) => {
    console.log(`Viewing details for ${type}: ${name}`)

    switch (type) {
      case "song":
        router.push(`/admin/royalties/songs/${encodeURIComponent(name)}`)
        break
      case "artist":
        router.push(`/admin/royalties/artists/${encodeURIComponent(name)}`)
        break
      case "channel":
        router.push(`/admin/royalties/channels/${encodeURIComponent(name)}`)
        break
      case "asset":
        router.push(`/admin/royalties/assets/${encodeURIComponent(name)}`)
        break
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Global Earnings Overview</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600" onClick={handleFilter}>
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleExportReport} disabled={isExporting}>
            <Download className="w-4 h-4 mr-2" />
            {isExporting ? "Exporting..." : "Export Report"}
          </Button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$2,456,780</div>
            <p className="text-xs text-green-400">+18% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Artists</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-blue-400">+12% growth</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Streams</CardTitle>
            <Music className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">45.2M</div>
            <p className="text-xs text-purple-400">+25% this quarter</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Avg. Per Stream</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$0.0054</div>
            <p className="text-xs text-green-400">+2% improvement</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="platforms" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="platforms" className="data-[state=active]:bg-green-600">
            By Platform
          </TabsTrigger>
          <TabsTrigger value="regions" className="data-[state=active]:bg-green-600">
            By Region
          </TabsTrigger>
          <TabsTrigger value="top-earners" className="data-[state=active]:bg-green-600">
            Top Earners
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-green-600">
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Revenue by DSP Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {earningsData.map((platform, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Music className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="font-medium text-white">{platform.platform}</span>
                          <div className="text-sm text-gray-400">{platform.percentage}% of total</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{platform.revenue}</div>
                        <div className="text-sm text-green-400">{platform.growth}</div>
                      </div>
                    </div>
                    <Progress value={platform.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regions">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Revenue by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">North America</span>
                      <span className="text-green-400 font-bold">$892,340</span>
                    </div>
                    <div className="text-sm text-gray-400">36% of total revenue</div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Europe</span>
                      <span className="text-green-400 font-bold">$734,560</span>
                    </div>
                    <div className="text-sm text-gray-400">30% of total revenue</div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Asia Pacific</span>
                      <span className="text-green-400 font-bold">$567,890</span>
                    </div>
                    <div className="text-sm text-gray-400">23% of total revenue</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Latin America</span>
                      <span className="text-green-400 font-bold">$189,450</span>
                    </div>
                    <div className="text-sm text-gray-400">8% of total revenue</div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Africa & Middle East</span>
                      <span className="text-green-400 font-bold">$72,540</span>
                    </div>
                    <div className="text-sm text-gray-400">3% of total revenue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="top-earners">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEarners.map((earner, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">#{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{earner.name}</h3>
                        <p className="text-sm text-gray-400">
                          {earner.type === "song" && `by ${earner.artist}`}
                          {earner.type !== "song" && `${earner.type}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-bold text-green-400">{earner.earnings}</div>
                        <Badge variant="outline" className="mt-1">
                          {earner.type}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => handleViewDetails(earner.type, earner.name)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-3">Monthly Growth</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">January 2024</span>
                      <span className="text-green-400">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">February 2024</span>
                      <span className="text-green-400">+18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">March 2024</span>
                      <span className="text-green-400">+22%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-3">Platform Performance</h3>
                  <div className="text-sm text-gray-400">
                    Streaming platforms showing consistent growth with YouTube Music leading at +25%
                    quarter-over-quarter growth.
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
