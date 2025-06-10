"use client"

import type React from "react"
import { useState } from "react"
import { AdminSidebar } from "./admin-sidebar"
import { AdminHeader } from "./admin-header"
import { usePathname } from "next/navigation"

interface AdminShellProps {
  children: React.ReactNode
}

export function AdminShell({ children }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Don't render the shell on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 lg:pl-72">
        <AdminHeader setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto bg-slate-900 text-white p-6">{children}</main>
      </div>
    </div>
  )
}
