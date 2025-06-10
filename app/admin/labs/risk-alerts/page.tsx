import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, TrendingDown, Users, Bell } from "lucide-react"

export default function RiskAlerts() {
  const riskAlerts = [
    {
      id: "RISK-001",
      type: "Revenue Anomaly",
      severity: "high",
      description: "Unusual drop in Spotify revenue for Alex Johnson",
      impact: "High",
      status: "active",
      detected: "2 hours ago",
    },
    {
      id: "RISK-002",
      type: "Fraud Detection",
      severity: "critical",
      description: "Suspicious streaming patterns detected on multiple tracks",
      impact: "Critical",
      status: "investigating",
      detected: "4 hours ago",
    },
    {
      id: "RISK-003",
      type: "Content ID Abuse",
      severity: "medium",
      description: "Multiple false claims from new user account",
      impact: "Medium",
      status: "resolved",
      detected: "1 day ago",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "high":
        return <Badge className="bg-red-600">High</Badge>
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
        <h1 className="text-3xl font-bold text-white">Risk Alerts & Monitoring</h1>
        <Button className="bg-red-600 hover:bg-red-700">
          <Bell className="w-4 h-4 mr-2" />
          Configure Alerts
        </Button>
      </div>

      {/* Risk Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23</div>
            <p className="text-xs text-red-400">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Critical Issues</CardTitle>
            <Shield className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-purple-400">High priority</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Fraud Detected</CardTitle>
            <TrendingDown className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-yellow-400">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Users Flagged</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-blue-400">Under review</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Active Risk Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-700 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{alert.type}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>Alert ID: {alert.id}</span>
                      <span>•</span>
                      <span>Detected {alert.detected}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getSeverityBadge(alert.severity)}
                    <Badge className={alert.status === "resolved" ? "bg-green-600" : "bg-yellow-600"}>
                      {alert.status}
                    </Badge>
                  </div>
                </div>

                <div className="bg-gray-600 p-3 rounded mb-4">
                  <p className="text-white">{alert.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Impact Level</div>
                    <div className="font-bold text-red-400">{alert.impact}</div>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="font-bold text-white">{alert.status}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {alert.status !== "resolved" && (
                    <>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Investigate
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Mark Resolved
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Monitoring Settings */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Monitoring Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Alert Thresholds</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue Drop Alert</span>
                  <span className="text-white">-15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fraud Detection Sensitivity</span>
                  <span className="text-white">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Content ID Abuse Threshold</span>
                  <span className="text-white">5 false claims</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Notification Settings</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email Alerts</span>
                  <Badge className="bg-green-600">Enabled</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SMS Alerts</span>
                  <Badge className="bg-green-600">Enabled</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Slack Integration</span>
                  <Badge className="bg-green-600">Enabled</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
