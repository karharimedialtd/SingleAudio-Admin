import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CMSPartnerDetailsLoading() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Skeleton className="h-9 w-24 mr-4" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
          <div className="flex items-center mt-1">
            <Skeleton className="h-5 w-16" />
            <span className="mx-2 text-muted-foreground">•</span>
            <Skeleton className="h-4 w-20" />
            <span className="mx-2 text-muted-foreground">•</span>
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
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
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-96" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" />
                    <div className="space-y-2">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex justify-between">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" />
                    <div className="space-y-2">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex justify-between">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Skeleton className="h-5 w-24 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-40" />
              </CardFooter>
            </Card>

            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array(3)
                        .fill(0)
                        .map((_, j) => (
                          <div key={j} className="flex items-center justify-between">
                            <div>
                              <Skeleton className="h-4 w-32 mb-1" />
                              <Skeleton className="h-3 w-24" />
                            </div>
                            <div className="text-right">
                              <Skeleton className="h-4 w-16 mb-1" />
                              <Skeleton className="h-3 w-20" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-full" />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
