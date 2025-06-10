"use client"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart3, Edit, ExternalLink, Settings } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CMSPartnerDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const partnerId = params.id

  // Mock partner data based on ID
  const partner = {
    id: partnerId,
    name: partnerId === "1" ? "YouTube Music" : partnerId === "2" ? "Spotify" : "Apple Music",
    status: "Active",
    type: "Streaming",
    integration: "API",
    dateAdded: "Jan 15, 2023",
    lastSync: "Jun 8, 2023",
    logo: "/images/side.png", // Placeholder
    description: "Major streaming platform integration with content ID and royalty tracking.",
    channels: 12,
    totalTracks: 5842,
    monthlyListeners: 1250000,
    monthlyRevenue: 42500,
    contactName: "Jane Smith",
    contactEmail: "jane.smith@example.com",
    contactPhone: "+1 (555) 123-4567",
  }

  // Mock recent activity data
  const recentActivity = [
    {
      id: "act-1",
      type: "Content Sync",
      description: "Synchronized 156 new tracks",
      date: "Jun 8, 2023",
      status: "Completed",
    },
    {
      id: "act-2",
      type: "Royalty Report",
      description: "May 2023 royalty report processed",
      date: "Jun 5, 2023",
      status: "Completed",
    },
    {
      id: "act-3",
      type: "Content ID Match",
      description: "12 new content matches detected",
      date: "Jun 3, 2023",
      status: "Pending Review",
    },
    {
      id: "act-4",
      type: "API Error",
      description: "Temporary API connection failure",
      date: "May 29, 2023",
      status: "Resolved",
    },
    {
      id: "act-5",
      type: "Channel Added",
      description: "New artist channel connected",
      date: "May 25, 2023",
      status: "Completed",
    },
  ]

  // Mock top channels data
  const topChannels = [
    {
      id: "CH-001",
      name: "Electronic Beats",
      subscribers: 1250000,
      views: 45000000,
      revenue: 12500,
    },
    {
      id: "CH-002",
      name: "Jazz Classics",
      subscribers: 850000,
      views: 28000000,
      revenue: 8200,
    },
    {
      id: "CH-003",
      name: "Rock Legends",
      subscribers: 1100000,
      views: 38000000,
      revenue: 10800,
    },
    {
      id: "CH-004",
      name: "Hip Hop Now",
      subscribers: 950000,
      views: 32000000,
      revenue: 9500,
    },
    {
      id: "CH-005",
      name: "Classical Masters",
      subscribers: 750000,
      views: 22000000,
      revenue: 6500,
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-4" onClick={() => router.push("/admin/cms-partners/overview")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Partners
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{partner.name}</h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/admin/cms-partners/${partnerId}/manage`)}
              >
                <Settings className="mr-2 h-4 w-4" />
                Manage
              </Button>
              <Button variant="default" size="sm" onClick={() => window.open("https://example.com", "_blank")}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Platform
              </Button>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <Badge variant={partner.status === "Active" ? "success" : "destructive"}>{partner.status}</Badge>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-muted-foreground">{partner.type}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-muted-foreground">Added {partner.dateAdded}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{partner.channels}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tracks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{partner.totalTracks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+156 from last sync</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${partner.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Partner Information</CardTitle>
                <CardDescription>Details about the CMS partner and integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">General Information</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Partner ID:</dt>
                        <dd className="text-sm">{partner.id}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Integration Type:</dt>
                        <dd className="text-sm">{partner.integration}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Last Sync:</dt>
                        <dd className="text-sm">{partner.lastSync}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Monthly Listeners:</dt>
                        <dd className="text-sm">{partner.monthlyListeners.toLocaleString()}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Contact Information</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Contact Name:</dt>
                        <dd className="text-sm">{partner.contactName}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Email:</dt>
                        <dd className="text-sm">{partner.contactEmail}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm font-medium text-muted-foreground">Phone:</dt>
                        <dd className="text-sm">{partner.contactPhone}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-sm">{partner.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => router.push(`/admin/cms-partners/${partnerId}/edit`)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Information
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Channels</CardTitle>
                <CardDescription>Highest performing channels on this platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topChannels.slice(0, 3).map((channel) => (
                    <div key={channel.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{channel.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {channel.subscribers.toLocaleString()} subscribers
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${channel.revenue.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Monthly revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="w-full"
                  onClick={() => router.push(`/admin/cms-partners/${partnerId}/channels`)}
                >
                  View All Channels
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest events and updates from this partner.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{activity.type}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            activity.status === "Completed"
                              ? "success"
                              : activity.status === "Pending Review"
                                ? "warning"
                                : activity.status === "Resolved"
                                  ? "success"
                                  : "default"
                          }
                        >
                          {activity.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="channels">
          <Card>
            <CardHeader>
              <CardTitle>Partner Channels</CardTitle>
              <CardDescription>All channels associated with this CMS partner.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Channel Name</TableHead>
                    <TableHead>Subscribers</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topChannels.map((channel) => (
                    <TableRow key={channel.id}>
                      <TableCell className="font-medium">{channel.name}</TableCell>
                      <TableCell>{channel.subscribers.toLocaleString()}</TableCell>
                      <TableCell>{channel.views.toLocaleString()}</TableCell>
                      <TableCell>${channel.revenue.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/cms-partners/channels/${channel.id}/manage`)}
                          >
                            Manage
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/cms-partners/channels/${channel.id}/analytics`)}
                          >
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button onClick={() => router.push("/admin/cms-partners/channels/create")}>Add New Channel</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>Complete history of events and updates for this partner.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "Completed"
                          ? "success"
                          : activity.status === "Pending Review"
                            ? "warning"
                            : activity.status === "Resolved"
                              ? "success"
                              : "default"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Export Activity Log</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Partner Settings</CardTitle>
              <CardDescription>Configure integration settings and preferences for this partner.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Manage API settings, sync preferences, and other configuration options.
              </p>
              <Button onClick={() => router.push(`/admin/cms-partners/${partnerId}/manage`)}>
                <Settings className="mr-2 h-4 w-4" />
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
