import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, MessageSquare, AlertTriangle, Clock, Shield } from "lucide-react"
import Image from "next/image"

export default function DisputeResolution() {
  const disputes = [
    {
      id: "DSP-2024-001",
      video: "Summer Vibes Remix by DJ Beats",
      channel: "DJ Beats Official",
      asset: "Summer Vibes EP",
      owner: "Alex Johnson",
      reason: "I have permission from the original artist to use this content in my remix.",
      evidence: "License agreement attached",
      status: "pending",
      priority: "high",
      date: "2024-01-15",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "DSP-2024-002",
      video: "Midnight Dreams Cover",
      channel: "Music Covers Channel",
      asset: "Midnight Dreams",
      owner: "Luna Records",
      reason: "This is a fair use cover version that doesn't infringe on the original work.",
      evidence: "None provided",
      status: "in_review",
      priority: "medium",
      date: "2024-01-14",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "DSP-2024-003",
      video: "Urban Beats Remix",
      channel: "Remix Masters",
      asset: "Urban Beats Collection",
      owner: "Beat Master",
      reason: "The content ID system incorrectly identified my original work as someone else's.",
      evidence: "Original project files attached",
      status: "escalated",
      priority: "high",
      date: "2024-01-13",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "in_review":
        return <Badge className="bg-blue-600">In Review</Badge>
      case "escalated":
        return <Badge variant="destructive">Escalated</Badge>
      case "resolved":
        return <Badge className="bg-green-600">Resolved</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High Priority</Badge>
      case "medium":
        return <Badge className="bg-yellow-600">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-blue-600">Low Priority</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dispute Resolution</h1>
        <Badge variant="destructive">{disputes.length} active disputes</Badge>
      </div>

      {/* Dispute Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Disputes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-red-400">Active disputes</p>
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
            <CardTitle className="text-sm font-medium text-gray-300">Resolved This Week</CardTitle>
            <Check className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-green-400">Successfully resolved</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Escalated</CardTitle>
            <Shield className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-purple-400">Requires legal review</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-red-600">
            All Disputes
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-red-600">
            Pending
          </TabsTrigger>
          <TabsTrigger value="in_review" className="data-[state=active]:bg-red-600">
            In Review
          </TabsTrigger>
          <TabsTrigger value="escalated" className="data-[state=active]:bg-red-600">
            Escalated
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-red-600">
            Resolved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Active Disputes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {disputes.map((dispute) => (
                  <div key={dispute.id} className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={dispute.thumbnail || "/placeholder.svg"}
                          alt={dispute.video}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{dispute.video}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{dispute.channel}</span>
                            <span>•</span>
                            <span>Dispute ID: {dispute.id}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(dispute.status)}
                        {getPriorityBadge(dispute.priority)}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-600 p-4 rounded">
                        <div className="text-sm font-medium text-gray-300 mb-2">Dispute Reason</div>
                        <p className="text-white">{dispute.reason}</p>
                      </div>
                      <div className="bg-gray-600 p-4 rounded">
                        <div className="text-sm font-medium text-gray-300 mb-2">Evidence Provided</div>
                        <p className="text-white">{dispute.evidence}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Asset</div>
                        <div className="font-bold text-blue-400">{dispute.asset}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Rights Owner</div>
                        <div className="font-bold text-white">{dispute.owner}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Submission Date</div>
                        <div className="font-bold text-white">{dispute.date}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Parties
                      </Button>
                      {dispute.status !== "resolved" && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Check className="w-4 h-4 mr-2" />
                            Release Claim
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="w-4 h-4 mr-2" />
                            Reject Dispute
                          </Button>
                        </>
                      )}
                      {dispute.status !== "escalated" && (
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <Shield className="w-4 h-4 mr-2" />
                          Escalate
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Pending Disputes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {disputes
                  .filter((dispute) => dispute.status === "pending")
                  .map((dispute) => (
                    <div key={dispute.id} className="bg-gray-700 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={dispute.thumbnail || "/placeholder.svg"}
                            alt={dispute.video}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-white">{dispute.video}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <span>{dispute.channel}</span>
                              <span>•</span>
                              <span>Dispute ID: {dispute.id}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(dispute.status)}
                          {getPriorityBadge(dispute.priority)}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-600 p-4 rounded">
                          <div className="text-sm font-medium text-gray-300 mb-2">Dispute Reason</div>
                          <p className="text-white">{dispute.reason}</p>
                        </div>
                        <div className="bg-gray-600 p-4 rounded">
                          <div className="text-sm font-medium text-gray-300 mb-2">Evidence Provided</div>
                          <p className="text-white">{dispute.evidence}</p>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact Parties
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Check className="w-4 h-4 mr-2" />
                          Begin Review
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dispute Resolution Team */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Resolution Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">John Doe</h3>
                <p className="text-sm text-gray-400">Lead Resolution Specialist</p>
                <Badge className="mt-1 bg-green-600">Online</Badge>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">Jane Smith</h3>
                <p className="text-sm text-gray-400">Copyright Specialist</p>
                <Badge className="mt-1 bg-green-600">Online</Badge>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>RJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">Robert Johnson</h3>
                <p className="text-sm text-gray-400">Legal Advisor</p>
                <Badge className="mt-1 bg-gray-600">Away</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
