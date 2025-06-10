import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RolePermissionsLoading() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Skeleton className="h-9 w-24 mr-4" />
        <div>
          <Skeleton className="h-8 w-64 mb-1" />
          <Skeleton className="h-4 w-96" />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-48" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-96" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tab1">
            <TabsList className="mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <TabsTrigger key={i} value={`tab${i + 1}`}>
                    <Skeleton className="h-4 w-24" />
                  </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent value="tab1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Skeleton className="h-4 w-4 rounded-sm" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-40" />
        </CardFooter>
      </Card>
    </div>
  )
}
