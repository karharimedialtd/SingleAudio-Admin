"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, XCircle, Zap, ImageIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MetadataAudit() {
  const router = useRouter()
  const [isScanning, setIsScanning] = useState(false)

  const auditResults = [
    {
      id: 1,
      release: "Summer Vibes EP",
      artist: "Alex Johnson",
      issues: [
        { type: "title", severity: "medium", message: "Title contains special characters" },
        { type: "genre", severity: "low", message: "Genre classification unclear" },
      ],
      status: "review",
    },
    {
      id: 2,
      release: "Midnight Dreams",
      artist: "Luna Records",
      issues: [
        { type: "explicit", severity: "high", message: "Explicit content not marked" },
        { type: "cover", severity: "high", message: "Cover art resolution too low" },
      ],
      status: "flagged",
    },
    {
      id: 3,
      release: "Urban Beats",
      artist: "Beat Master",
      issues: [],
      status: "approved",
    },
  ]

  const handleRunAIScan = async () => {
    setIsScanning(true)
    console.log("Running AI metadata scan...")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsScanning(false)
  }

  const handleAutoFix = (resultId: number) => {
    console.log("Auto-fixing metadata issues for ID:", resultId)
    // Implement auto-fix logic
  }

  const handleManualReview = (resultId: number) => {
    console.log("Opening manual review for ID:", resultId)
    router.push(`/admin/music/metadata-audit/${resultId}`)
  }

  const handleReject = (resultId: number) => {
    console.log("Rejecting release ID:", resultId)
    // Implement rejection logic
  }

  const handleFixAll = (issueType: string) => {
    console.log("Fixing all issues of type:", issueType)
    // Implement fix all logic
  }

  const handleReview = (issueType: string) => {
    console.log("Reviewing all issues of type:", issueType)
    router.push(`/admin/music/metadata-audit/issues/${issueType}`)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-600">Medium</Badge>
      case "low":
        return <Badge variant="secondary">Low</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">AI Metadata Audit</h1>
        <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleRunAIScan} disabled={isScanning}>
          <Zap className={`w-4 h-4 mr-2 ${isScanning ? "animate-pulse" : ""}`} />
          {isScanning ? "Scanning..." : "Run AI Scan"}
        </Button>
      </div>

      {/* Audit Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Scanned</CardTitle>
            <Zap className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,847</div>
            <p className="text-xs text-green-400">+15% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Issues Found</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">127</div>
            <p className="text-xs text-yellow-400">Needs review</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Auto-Fixed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,456</div>
            <p className="text-xs text-green-400">86% success rate</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Manual Review</CardTitle>
            <XCircle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">264</div>
            <p className="text-xs text-red-400">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="issues" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="issues" className="data-[state=active]:bg-purple-600">
            Current Issues
          </TabsTrigger>
          <TabsTrigger value="title" className="data-[state=active]:bg-purple-600">
            Title Format
          </TabsTrigger>
          <TabsTrigger value="genre" className="data-[state=active]:bg-purple-600">
            Genre Issues
          </TabsTrigger>
          <TabsTrigger value="cover" className="data-[state=active]:bg-purple-600">
            Cover Art
          </TabsTrigger>
          <TabsTrigger value="explicit" className="data-[state=active]:bg-purple-600">
            Explicit Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="issues">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Flagged Releases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditResults.map((result) => (
                  <div key={result.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{result.release}</h3>
                        <p className="text-sm text-gray-400">by {result.artist}</p>
                      </div>
                      <Badge
                        variant={
                          result.status === "approved"
                            ? "default"
                            : result.status === "flagged"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {result.status}
                      </Badge>
                    </div>

                    {result.issues.length > 0 ? (
                      <div className="space-y-2">
                        {result.issues.map((issue, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-600 rounded">
                            <div className="flex items-center space-x-3">
                              <AlertTriangle className={`w-4 h-4 ${getSeverityColor(issue.severity)}`} />
                              <span className="text-sm text-white">{issue.message}</span>
                            </div>
                            {getSeverityBadge(issue.severity)}
                          </div>
                        ))}
                        <div className="flex space-x-2 mt-3">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleAutoFix(result.id)}
                          >
                            Auto-Fix
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleManualReview(result.id)}>
                            Manual Review
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleReject(result.id)}>
                            Reject
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">No issues found</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="title">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Title Format Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Special Characters Detected</h4>
                      <p className="text-sm text-gray-400">47 releases contain non-standard characters</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleFixAll("special-characters")}
                    >
                      Fix All
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Excessive Length</h4>
                      <p className="text-sm text-gray-400">12 titles exceed recommended length</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => handleReview("excessive-length")}>
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cover">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Cover Art Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ImageIcon className="w-5 h-5 text-red-400" />
                      <div>
                        <h4 className="font-medium text-white">Low Resolution</h4>
                        <p className="text-sm text-gray-400">23 covers below 3000x3000px</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleReview("low-resolution")}>
                        Review
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleFixAll("low-resolution")}
                      >
                        Fix All
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ImageIcon className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h4 className="font-medium text-white">Aspect Ratio</h4>
                        <p className="text-sm text-gray-400">8 covers not square format</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleReview("aspect-ratio")}>
                        Review
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleFixAll("aspect-ratio")}
                      >
                        Fix All
                      </Button>
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
