import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Clock, AlertTriangle, CheckCircle, User } from "lucide-react"

export default function TicketSystem() {
  const tickets = [
    {
      id: "TKT-2024-001",
      subject: "Payment not received for January",
      user: "Alex Johnson",
      email: "alex@example.com",
      priority: "high",
      status: "open",
      category: "Payments",
      created: "2024-01-15",
      lastUpdate: "2 hours ago",
    },
    {
      id: "TKT-2024-002",
      subject: "Content ID claim dispute",
      user: "Luna Records",
      email: "contact@lunarecords.com",
      priority: "medium",
      status: "in_progress",
      category: "Content ID",
      created: "2024-01-14",
      lastUpdate: "1 day ago",
    },
    {
      id: "TKT-2024-003",
      subject: "Unable to upload new release",
      user: "Beat Master",
      email: "beats@example.com",
      priority: "low",
      status: "resolved",
      category: "Technical",
      created: "2024-01-13",
      lastUpdate: "3 days ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge variant="destructive">Open</Badge>
      case "in_progress":
        return <Badge className="bg-blue-600">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-600">Resolved</Badge>
      case "closed":
        return <Badge className="bg-gray-600">Closed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-600">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-600">Low</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Support Ticket System</h1>
        <Badge variant="destructive">{tickets.filter((t) => t.status === "open").length} open tickets</Badge>
      </div>

      {/* Ticket Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Open Tickets</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-red-400">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-blue-400">Being handled</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Resolved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47</div>
            <p className="text-xs text-green-400">Successfully resolved</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Avg Response Time</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.4h</div>
            <p className="text-xs text-purple-400">Response time</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All Tickets
          </TabsTrigger>
          <TabsTrigger value="open" className="data-[state=active]:bg-blue-600">
            Open
          </TabsTrigger>
          <TabsTrigger value="in_progress" className="data-[state=active]:bg-blue-600">
            In Progress
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-blue-600">
            Resolved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">All Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>
                            <User className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-white">{ticket.subject}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{ticket.user}</span>
                            <span>•</span>
                            <span>{ticket.id}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Category</div>
                        <div className="font-bold text-white">{ticket.category}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Created</div>
                        <div className="font-bold text-white">{ticket.created}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Last Update</div>
                        <div className="font-bold text-white">{ticket.lastUpdate}</div>
                      </div>
                      <div className="bg-gray-600 p-3 rounded">
                        <div className="text-sm text-gray-400">Contact</div>
                        <div className="font-bold text-blue-400">{ticket.email}</div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        View Conversation
                      </Button>
                      {ticket.status !== "resolved" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Respond
                        </Button>
                      )}
                      {ticket.status === "open" && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Assign to Me
                        </Button>
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
