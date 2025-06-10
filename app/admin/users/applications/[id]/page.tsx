"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  Music,
  Shield,
  DollarSign,
} from "lucide-react"

// Mock data - replace with real API call
const getApplicationById = (id: string) => ({
  id,
  applicantName: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "Los Angeles, CA",
  submittedAt: "2024-01-15T10:30:00Z",
  status: "pending",
  applicationType: "Artist",
  experience: "5+ years",
  genres: ["Pop", "R&B", "Electronic"],
  socialMedia: {
    instagram: "@sarahjmusic",
    spotify: "Sarah Johnson",
    youtube: "SarahJohnsonMusic",
  },
  portfolio: {
    tracks: 12,
    monthlyListeners: "50K+",
    releases: 8,
  },
  businessInfo: {
    hasLabel: false,
    hasManager: true,
    managerName: "Mike Davis",
    expectedRevenue: "$10K-50K",
  },
  documents: [
    { name: "ID_Document.pdf", size: "2.1 MB", type: "identification" },
    { name: "Music_Portfolio.zip", size: "45.8 MB", type: "portfolio" },
    { name: "Contract_Agreement.pdf", size: "1.3 MB", type: "legal" },
  ],
  statement:
    "I'm a passionate artist looking to expand my reach through your platform. I've been creating music for over 5 years and have built a solid fanbase. I'm excited about the opportunity to work with your team and grow my career.",
  reviewNotes: "",
})

export default function ApplicationDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [reviewNotes, setReviewNotes] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const application = getApplicationById(params.id as string)

  const handleApprove = async () => {
    setIsProcessing(true)
    console.log("Approving application:", application.id, "Notes:", reviewNotes)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In real app, make API call here
    alert("Application approved successfully!")
    setIsProcessing(false)
    router.push("/admin/users/applications")
  }

  const handleReject = async () => {
    if (!reviewNotes.trim()) {
      alert("Please provide rejection notes")
      return
    }

    setIsProcessing(true)
    console.log("Rejecting application:", application.id, "Notes:", reviewNotes)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In real app, make API call here
    alert("Application rejected")
    setIsProcessing(false)
    router.push("/admin/users/applications")
  }

  const handleDownloadDocument = (docName: string) => {
    console.log("Downloading document:", docName)
    // In real app, trigger download
    alert(`Downloading ${docName}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Applications</span>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Application Details</h1>
            <p className="text-gray-600">Review and process user application</p>
          </div>
        </div>
        <Badge className={`${getStatusColor(application.status)} flex items-center space-x-1`}>
          {getStatusIcon(application.status)}
          <span className="capitalize">{application.status}</span>
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{application.applicantName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{application.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{application.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{application.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Submitted</p>
                    <p className="font-medium">{new Date(application.submittedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Application Type</p>
                    <p className="font-medium">{application.applicationType}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Music Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Music className="w-5 h-5" />
                <span>Music Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Experience</p>
                  <p className="font-medium">{application.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Genres</p>
                  <div className="flex flex-wrap gap-1">
                    {application.genres.map((genre) => (
                      <Badge key={genre} variant="secondary" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-500 mb-2">Social Media</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-gray-400">Instagram</p>
                    <p className="text-sm font-medium">{application.socialMedia.instagram}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Spotify</p>
                    <p className="text-sm font-medium">{application.socialMedia.spotify}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">YouTube</p>
                    <p className="text-sm font-medium">{application.socialMedia.youtube}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-500 mb-2">Portfolio Stats</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{application.portfolio.tracks}</p>
                    <p className="text-xs text-gray-500">Tracks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{application.portfolio.monthlyListeners}</p>
                    <p className="text-xs text-gray-500">Monthly Listeners</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{application.portfolio.releases}</p>
                    <p className="text-xs text-gray-500">Releases</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Business Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Has Record Label</p>
                  <p className="font-medium">{application.businessInfo.hasLabel ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Has Manager</p>
                  <p className="font-medium">{application.businessInfo.hasManager ? "Yes" : "No"}</p>
                </div>
                {application.businessInfo.hasManager && (
                  <div>
                    <p className="text-sm text-gray-500">Manager Name</p>
                    <p className="font-medium">{application.businessInfo.managerName}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Expected Annual Revenue</p>
                  <p className="font-medium">{application.businessInfo.expectedRevenue}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Statement */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{application.statement}</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Documents</span>
              </CardTitle>
              <CardDescription>Uploaded application documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {application.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => handleDownloadDocument(doc.name)}>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Review Section */}
          <Card>
            <CardHeader>
              <CardTitle>Review & Decision</CardTitle>
              <CardDescription>Add notes and approve or reject this application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="reviewNotes">Review Notes</Label>
                <Textarea
                  id="reviewNotes"
                  placeholder="Add your review notes here..."
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={handleApprove}
                  disabled={isProcessing}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isProcessing ? "Processing..." : "Approve"}
                </Button>
                <Button onClick={handleReject} disabled={isProcessing} variant="destructive" className="flex-1">
                  {isProcessing ? "Processing..." : "Reject"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
