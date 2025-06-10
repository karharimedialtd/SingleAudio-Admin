import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Zap, Brain, TrendingUp, AlertTriangle, Shield, Target } from "lucide-react"

export default function AIClaimIntelligence() {
  const claimAnalytics = [
    {
      id: 1,
      claim: "CID-2024-001",
      video: "Summer Vibes Official Music Video",
      confidence: 95,
      value: "High",
      prediction: "$450-650",
      riskLevel: "Low",
      recommendation: "Auto-approve",
    },
    {
      id: 2,
      claim: "CID-2024-002",
      video: "Remix - Midnight Dreams",
      confidence: 78,
      value: "Medium",
      prediction: "$120-200",
      riskLevel: "Medium",
      recommendation: "Manual review",
    },
    {
      id: 3,
      claim: "CID-2024-003",
      video: "Cover Song Performance",
      confidence: 45,
      value: "Low",
      prediction: "$10-50",
      riskLevel: "High",
      recommendation: "Reject",
    },
  ]

  const abuseDetection = [
    {
      type: "False Match",
      count: 23,
      trend: "+12%",
      severity: "medium",
    },
    {
      type: "Duplicate Claims",
      count: 8,
      trend: "-5%",
      severity: "low",
    },
    {
      type: "Invalid Assets",
      count: 15,
      trend: "+8%",
      severity: "high",
    },
  ]

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-400"
    if (confidence >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "Low":
        return <Badge className="bg-green-600">Low Risk</Badge>
      case "Medium":
        return <Badge className="bg-yellow-600">Medium Risk</Badge>
      case "High":
        return <Badge variant="destructive">High Risk</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">AI Claim Intelligence</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Brain className="w-4 h-4 mr-2" />
          Run Analysis
        </Button>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Claims Analyzed</CardTitle>
            <Zap className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3,247</div>
            <p className="text-xs text-green-400">+18% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Abuse Detected</CardTitle>
            <Shield className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">46</div>
            <p className="text-xs text-red-400">Prevented fraud</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">High-Value Claims</CardTitle>
            <Target className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">127</div>
            <p className="text-xs text-green-400">AI identified</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94.2%</div>
            <p className="text-xs text-blue-400">AI predictions</p>
          </CardContent>
        </Card>
      </div>

      {/* Claim Analysis */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Claim Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {claimAnalytics.map((claim) => (
              <div key={claim.id} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{claim.claim}</h3>
                    <p className="text-sm text-gray-400">{claim.video}</p>
                  </div>
                  {getRiskBadge(claim.riskLevel)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">AI Confidence</div>
                    <div className={`font-bold ${getConfidenceColor(claim.confidence)}`}>{claim.confidence}%</div>
                    <Progress value={claim.confidence} className="h-1 mt-1" />
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Value Prediction</div>
                    <div className="font-bold text-green-400">{claim.prediction}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Claim Value</div>
                    <div className="font-bold text-white">{claim.value}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">AI Recommendation</div>
                    <div className="font-bold text-blue-400">{claim.recommendation}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    View Analysis
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Accept AI Recommendation
                  </Button>
                  <Button size="sm" variant="destructive">
                    Override
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Abuse Detection */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Abuse Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {abuseDetection.map((abuse, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{abuse.type}</h3>
                  <AlertTriangle
                    className={`w-5 h-5 ${
                      abuse.severity === "high"
                        ? "text-red-400"
                        : abuse.severity === "medium"
                          ? "text-yellow-400"
                          : "text-blue-400"
                    }`}
                  />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{abuse.count}</div>
                <div className={`text-sm ${abuse.trend.startsWith("+") ? "text-red-400" : "text-green-400"}`}>
                  {abuse.trend} this month
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Training Feedback */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">AI Model Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Claim Value Prediction Accuracy</span>
              <span className="text-green-400 font-bold">94.2%</span>
            </div>
            <Progress value={94.2} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Abuse Detection Rate</span>
              <span className="text-blue-400 font-bold">97.8%</span>
            </div>
            <Progress value={97.8} className="h-2" />

            <div className="flex justify-between items-center">
              <span className="text-gray-400">False Positive Rate</span>
              <span className="text-yellow-400 font-bold">2.1%</span>
            </div>
            <Progress value={2.1} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
