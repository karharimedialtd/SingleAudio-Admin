"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Music, DollarSign, Download, Calendar, Filter } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PerformanceAnalytics() {
  const router = useRouter()

  const platformMetrics = [
    { platform: "Spotify", streams: "45.2M", revenue: "$125,430", growth: "+12%" },
    { platform: "Apple Music", streams: "32.1M", revenue: "$89,250", growth: "+8%" },
    { platform: "YouTube Music", streams: "28.7M", revenue: "$67,890", growth: "+15%" },
    { platform: "Amazon Music", streams: "19.4M", revenue: "$45,120", growth: "+5%" },
  ]

  const handleDateRange = () => {
    console.log("Opening date range picker...")
    // Implement date range picker
  }

  const handleExportReport = () => {
    console.log("Exporting performance report...")
    // Implement export functionality
  }

  const handleFilterData = () => {
    console.log("Opening filter options...")
    // Implement filter functionality
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Performance Analytics</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-600" onClick={handleDateRange}>
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" className="border-gray-600" onClick={handleFilterData}>
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleExportReport}>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Streams</CardTitle>
            <Music className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">125.4M</div>
            <p className="text-xs text-green-400">+18% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.4M</div>
            <p className="text-xs text-blue-400">+12% growth</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Platform Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$327,690</div>
            <p className="text-xs text-green-400">+15% increase</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Avg. Per Stream</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$0.0026</div>
            <p className="text-xs text-yellow-400">Industry average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="platforms" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="platforms" className="data-[state=active]:bg-blue-600">
            Platform Performance
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600">
            Growth Trends
          </TabsTrigger>
          <TabsTrigger value="demographics" className="data-[state=active]:bg-blue-600">
            Demographics
          </TabsTrigger>
          <TabsTrigger value="engagement" className="data-[state=active]:bg-blue-600">
            Engagement
          </TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Platform Performance Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {platformMetrics.map((platform, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Music className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="font-medium text-white">{platform.platform}</span>
                          <div className="text-sm text-gray-400">{platform.streams} streams</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{platform.revenue}</div>
                        <div className="text-sm text-green-400">{platform.growth}</div>
                      </div>
                    </div>
                    <Progress value={Math.random() * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-4">Monthly Growth</h3>
                  <div className="space-y-3">
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
                  <h3 className="font-semibold text-white mb-4">Revenue Trends</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Q1 Revenue</span>
                      <span className="text-green-400">$892,340</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Q2 Revenue</span>
                      <span className="text-green-400">$1,045,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projected Q3</span>
                      <span className="text-blue-400">$1,234,560</span>
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
