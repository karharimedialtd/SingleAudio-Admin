import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, DollarSign, Shield, Download } from "lucide-react"

export default function CMSAnalytics() {
  const channelData = [
    { channel: "Music Vibes Official", rpm: "$4.25", cpm: "$2.80", claims: 1247, earnings: "$5,430" },
    { channel: "Indie Sounds", rpm: "$3.90", cpm: "$2.45", claims: 892, earnings: "$3,250" },
    { channel: "Beat Factory", rpm: "$5.10", cpm: "$3.20", claims: 634, earnings: "$4,180" },
    { channel: "Urban Rhythms", rpm: "$3.75", cpm: "$2.30", claims: 445, earnings: "$2,890" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">CMS Analytics</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Platform-wide Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Average RPM</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$4.12</div>
            <p className="text-xs text-green-400">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Average CPM</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$2.69</div>
            <p className="text-xs text-green-400">+5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Claims</CardTitle>
            <Shield className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3,218</div>
            <p className="text-xs text-green-400">+12% active claims</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Policy Enforcement</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94.2%</div>
            <p className="text-xs text-green-400">Success rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="channels" className="space-y-4">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="channels" className="data-[state=active]:bg-blue-600">
            By Channel
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-blue-600">
            Content Matches
          </TabsTrigger>
          <TabsTrigger value="policy" className="data-[state=active]:bg-blue-600">
            Policy Results
          </TabsTrigger>
          <TabsTrigger value="earnings" className="data-[state=active]:bg-blue-600">
            Earnings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="channels">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Channel Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {channelData.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{channel.channel}</h3>
                        <p className="text-sm text-slate-400">{channel.claims} claims</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm text-slate-400">RPM</div>
                        <div className="font-semibold text-green-400">{channel.rpm}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-400">CPM</div>
                        <div className="font-semibold text-blue-400">{channel.cpm}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-400">Earnings</div>
                        <div className="font-semibold text-white">{channel.earnings}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Content Matches & Claims Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">15,247</div>
                  <div className="text-sm text-slate-400">Total Matches</div>
                  <div className="text-xs text-green-400 mt-1">+8% this week</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">12,891</div>
                  <div className="text-sm text-slate-400">Active Claims</div>
                  <div className="text-xs text-blue-400 mt-1">84% success rate</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">2,356</div>
                  <div className="text-sm text-slate-400">Disputed Claims</div>
                  <div className="text-xs text-yellow-400 mt-1">15% dispute rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
