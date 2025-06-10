import { Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function NotificationsPage() {
  const notifications = [
    {
      id: "notif-1",
      title: "New Release Submission",
      description: "Artist John Doe submitted a new release for review",
      time: "10 minutes ago",
      type: "release",
      read: false,
    },
    {
      id: "notif-2",
      title: "Payout Request Pending",
      description: "5 new payout requests require your approval",
      time: "1 hour ago",
      type: "payout",
      read: false,
    },
    {
      id: "notif-3",
      title: "Content ID Match Alert",
      description: "New potential copyright match detected for artist Sarah Smith",
      time: "3 hours ago",
      type: "content-id",
      read: true,
    },
    {
      id: "notif-4",
      title: "System Maintenance",
      description: "Scheduled maintenance will occur tonight at 2:00 AM UTC",
      time: "Yesterday",
      type: "system",
      read: true,
    },
    {
      id: "notif-5",
      title: "New User Application",
      description: "10 new artist applications awaiting review",
      time: "2 days ago",
      type: "user",
      read: true,
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="releases">Releases</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{notification.title}</CardTitle>
                    <Badge variant={notification.read ? "outline" : "default"}>
                      {notification.read ? "Read" : "New"}
                    </Badge>
                  </div>
                  <CardDescription>{notification.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{notification.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="link" size="sm" className="px-0">
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Mark as read</span>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread">
          <div className="space-y-4">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <Card key={notification.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{notification.title}</CardTitle>
                      <Badge>New</Badge>
                    </div>
                    <CardDescription>{notification.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{notification.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="px-0">
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Mark as read</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Other tabs would follow the same pattern */}
      </Tabs>
    </div>
  )
}
