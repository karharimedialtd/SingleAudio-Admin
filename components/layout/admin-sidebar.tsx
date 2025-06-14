"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  LayoutDashboard,
  Users,
  Music,
  DollarSign,
  Shield,
  BarChart3,
  Settings,
  ChevronDown,
  X,
  CreditCard,
  Zap,
  FileText,
  MessageSquare,
  Beaker,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface AdminSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  {
    name: "User Management",
    icon: Users,
    children: [
      { name: "Applications", href: "/admin/users/applications" },
      { name: "Manage Users", href: "/admin/users/manage" },
      { name: "Role Assignment", href: "/admin/users/roles" },
    ],
  },
  {
    name: "CMS Partners",
    icon: Shield,
    children: [
      { name: "Overview", href: "/admin/cms-partners/overview" },
      { name: "Analytics", href: "/admin/cms-analytics" },
      { name: "Channel Management", href: "/admin/cms-partners/channels" },
    ],
  },
  {
    name: "Music Distribution",
    icon: Music,
    children: [
      { name: "Release Queue", href: "/admin/music/release-queue" },
      { name: "DSP Delivery", href: "/admin/music/delivery" },
      { name: "Metadata Audit", href: "/admin/music/metadata-audit" },
      { name: "Bulk Upload", href: "/admin/music/bulk-upload" },
    ],
  },
  {
    name: "Content ID & Claims",
    icon: Shield,
    children: [
      { name: "Assets Overview", href: "/admin/content-id/assets-overview" },
      { name: "Match & Claim Dashboard", href: "/admin/content-id/match-claim" },
      { name: "Dispute Resolution", href: "/admin/content-id/dispute-resolution" },
    ],
  },
  {
    name: "Royalties & Earnings",
    icon: DollarSign,
    children: [
      { name: "Global Earnings", href: "/admin/royalties/global" },
      { name: "User Balances", href: "/admin/royalties/user-balances" },
    ],
  },
  {
    name: "Payouts & Withdrawals",
    icon: CreditCard,
    children: [{ name: "Payout Requests", href: "/admin/payouts/requests" }],
  },
  {
    name: "AI-Powered Tools",
    icon: Zap,
    children: [{ name: "Claim Intelligence", href: "/admin/ai-tools/claim-intel" }],
  },
  {
    name: "Publishing & Rights",
    icon: FileText,
    children: [
      { name: "Publishing Requests", href: "/admin/publishing/requests" },
      { name: "Publishing Management", href: "/admin/publishing/management" },
      { name: "Sync Licensing", href: "/admin/publishing/sync-licensing" },
    ],
  },
  {
    name: "Platform Analytics",
    icon: BarChart3,
    children: [{ name: "Performance Overview", href: "/admin/analytics/performance" }],
  },
  {
    name: "Support & Moderation",
    icon: MessageSquare,
    children: [{ name: "Ticket System", href: "/admin/support/tickets" }],
  },
  {
    name: "Internal Labs",
    icon: Beaker,
    children: [{ name: "Risk Alerts", href: "/admin/labs/risk-alerts" }],
  },
]

export function AdminSidebar({ open, setOpen }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  // Auto-expand sections based on current path
  useEffect(() => {
    const currentSection = navigation.find((section) =>
      section.children?.some((child) => pathname === child.href || pathname.startsWith(child.href + "/")),
    )

    if (currentSection && !expandedSections.includes(currentSection.name)) {
      setExpandedSections((prev) => [...prev, currentSection.name])
    }
  }, [pathname, expandedSections])

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName) ? prev.filter((name) => name !== sectionName) : [...prev, sectionName],
    )
  }

  const isPathActive = (href: string) => pathname === href || pathname.startsWith(href + "/")
  const isParentActive = (children: any[]) => children?.some((child) => isPathActive(child.href))

  const handleNavigation = (href: string) => {
    router.push(href)
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setOpen(false)
    }
  }

  const handleSettings = () => {
    router.push("/admin/settings")
  }

  return (
    <>
      {/* Mobile backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-slate-900/80 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 flex flex-col",
          "lg:fixed lg:block transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Header */}
<div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-slate-800">
  <div className="flex items-center space-x-3">
    <Avatar className="w-8 h-8">
      <AvatarImage src="/placeholder.svg?height=32&width=32" />
    </Avatar>
    <div>
      <div className="text-sm font-medium text-white">Single Audion</div>
      <div className="text-xs text-slate-400">Platform Admin Dashboard</div>
    </div>
  </div>
  <Button
    variant="ghost"
    size="sm"
    className="lg:hidden text-slate-400"
    onClick={() => setOpen(false)}
  >
    <X className="w-5 h-5" />
  </Button>
</div>
{/* Navigation - Made scrollable */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          {/* Main Navigation */}
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <Collapsible
                    open={expandedSections.includes(item.name) || isParentActive(item.children)}
                    onOpenChange={() => toggleSection(item.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                          isParentActive(item.children)
                            ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white",
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            (expandedSections.includes(item.name) || isParentActive(item.children)) && "rotate-180",
                          )}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 mt-1">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleNavigation(child.href)}
                          className={cn(
                            "block w-full text-left ml-8 px-3 py-2 text-sm rounded-lg transition-colors",
                            isPathActive(child.href)
                              ? "bg-purple-600/30 text-purple-300 border-l-2 border-purple-500"
                              : "text-slate-400 hover:bg-slate-800 hover:text-white",
                          )}
                        >
                          {child.name}
                        </button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "flex items-center space-x-3 w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isPathActive(item.href)
                        ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white",
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-slate-700 text-slate-300"
            onClick={handleSettings}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </>
  )
}
