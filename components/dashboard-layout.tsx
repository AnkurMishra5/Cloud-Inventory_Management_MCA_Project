"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart,
  Phone,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
  expanded?: boolean
  subItems?: { href: string; label: string }[]
}

function NavItem({ href, icon: Icon, label, active, expanded, subItems }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (subItems && subItems.length > 0) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  const handleSubItemClick = (subHref: string) => {
    router.push(subHref)
  }

  return (
    <div>
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
          active ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
        onClick={handleClick}
      >
        <Icon className="h-5 w-5" />
        {expanded && <span className="flex-1">{label}</span>}
        {expanded && subItems && subItems.length > 0 && (
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        )}
      </Link>

      {expanded && isOpen && subItems && (
        <div className="ml-8 mt-1 space-y-1">
          {subItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  const navItems = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/inventory",
      icon: Package,
      label: "Inventory Management",
      active: pathname.startsWith("/inventory"),
      subItems: [
        { href: "/inventory/upload", label: "Upload/Update Excel Sheet" },
        { href: "/inventory/real-time", label: "Real-Time Inventory" },
      ],
    },
    {
      href: "/orders",
      icon: ShoppingCart,
      label: "Order Management",
      active: pathname.startsWith("/orders"),
      subItems: [
        { href: "/orders", label: "List" },
        { href: "/orders/detail", label: "Detail" },
      ],
    },
    {
      href: "/buyers",
      icon: Users,
      label: "Buyer Data Management",
      active: pathname.startsWith("/buyers"),
      subItems: [
        { href: "/buyers/extraction", label: "Extraction Tool" },
        { href: "/buyers/history", label: "Interaction History Viewer" },
      ],
    },
    {
      href: "/reports",
      icon: BarChart,
      label: "Reports And Analytics",
      active: pathname.startsWith("/reports"),
      subItems: [
        { href: "/reports/generation", label: "Report Generation Tool" },
        { href: "/reports/charts", label: "Interactive Analytics Charts" },
      ],
    },
    {
      href: "/calls",
      icon: Phone,
      label: "Call Tracking",
      active: pathname.startsWith("/calls"),
      subItems: [
        { href: "/calls", label: "List" },
        { href: "/calls/detail", label: "Detail" },
      ],
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside
        className={`hidden md:flex flex-col border-r bg-white transition-all duration-300 ${
          sidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center h-16 px-4 border-b">
          {sidebarExpanded ? (
            <Link href="/dashboard" className="flex items-center">
              <h1 className="text-xl font-bold text-blue-500">Cloud IMS</h1>
            </Link>
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              C
            </div>
          )}
        </div>

        {sidebarExpanded && (
          <div className="flex flex-col items-center p-4 border-b">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">R Maheshwari</h3>
            <p className="text-sm text-gray-500">Admin Head</p>
          </div>
        )}

        <div className="flex-1 overflow-auto py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={item.active}
                expanded={sidebarExpanded}
                subItems={item.subItems}
              />
            ))}
          </div>
        </div>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            <Menu className="h-5 w-5 mr-2" />
            {sidebarExpanded && <span>Toggle Sidebar</span>}
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden absolute top-3 left-3 z-10">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex items-center h-16 px-4 border-b">
            <Link href="/dashboard" className="flex items-center">
              <h1 className="text-xl font-bold text-blue-500">Cloud IMS</h1>
            </Link>
          </div>

          <div className="flex flex-col items-center p-4 border-b">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">R Maheshwari</h3>
            <p className="text-sm text-gray-500">Admin Head</p>
          </div>

          <div className="flex-1 overflow-auto py-4 px-3">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  expanded={true}
                  subItems={item.subItems}
                />
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center justify-between px-4">
          <h1 className="text-xl font-semibold md:ml-0 ml-10">DashBoard</h1>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search..." className="pl-10 w-64 h-9 bg-gray-100 border-0" />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">R Maheshwari</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">{children}</main>

        <footer className="border-t py-4 px-6 flex justify-between items-center text-sm text-gray-500">
          <div>2025 © Cloud Inventory Management System</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">
              About Us
            </a>
            <a href="#" className="hover:text-blue-500">
              Help
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
} 
