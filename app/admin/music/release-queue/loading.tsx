import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-48 bg-gray-700" />
        <Skeleton className="h-6 w-32 bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-20 bg-gray-700" />
              <Skeleton className="h-4 w-4 bg-gray-700" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-12 bg-gray-700 mb-2" />
              <Skeleton className="h-3 w-24 bg-gray-700" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <Skeleton className="h-6 w-40 bg-gray-700" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Skeleton className="h-16 w-16 rounded-lg bg-gray-600" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32 bg-gray-600" />
                    <Skeleton className="h-3 w-48 bg-gray-600" />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-16 bg-gray-600 rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
