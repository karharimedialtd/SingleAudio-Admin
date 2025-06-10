import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, FileAudio, AlertTriangle, Clock } from "lucide-react"

export default function BulkUpload() {
  const uploadBatches = [
    {
      id: "BATCH-001",
      name: "Summer Collection 2024",
      tracks: 25,
      completed: 23,
      failed: 2,
      status: "processing",
      progress: 92,
    },
    {
      id: "BATCH-002",
      name: "Indie Artist Compilation",
      tracks: 15,
      completed: 15,
      failed: 0,
      status: "completed",
      progress: 100,
    },
    {
      id: "BATCH-003",
      name: "Electronic Beats Vol. 3",
      tracks: 30,
      completed: 12,
      failed: 1,
      status: "processing",
      progress: 40,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Bulk Upload Manager</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="w-4 h-4 mr-2" />
          New Bulk Upload
        </Button>
      </div>

      {/* Upload Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Batches</CardTitle>
            <Upload className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">247</div>
            <p className="text-xs text-blue-400">Upload batches</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Tracks Processed</CardTitle>
            <FileAudio className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,456</div>
            <p className="text-xs text-green-400">Successfully uploaded</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Processing</CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-yellow-400">In progress</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Failed Uploads</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-red-400">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Upload Interface */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Drag & Drop Audio Files</h3>
            <p className="text-gray-400 mb-4">Support for MP3, WAV, FLAC files up to 100MB each</p>
            <Button className="bg-blue-600 hover:bg-blue-700">Select Files</Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Batches */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Upload Batches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {uploadBatches.map((batch) => (
              <div key={batch.id} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{batch.name}</h3>
                    <p className="text-sm text-gray-400">Batch ID: {batch.id}</p>
                  </div>
                  <Badge className={batch.status === "completed" ? "bg-green-600" : "bg-yellow-600"}>
                    {batch.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Total Tracks</div>
                    <div className="font-bold text-white">{batch.tracks}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Completed</div>
                    <div className="font-bold text-green-400">{batch.completed}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Failed</div>
                    <div className="font-bold text-red-400">{batch.failed}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Progress</div>
                    <div className="font-bold text-blue-400">{batch.progress}%</div>
                  </div>
                </div>

                <div className="mb-4">
                  <Progress value={batch.progress} className="h-2" />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {batch.failed > 0 && (
                    <Button size="sm" variant="destructive">
                      Retry Failed
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
