"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart,
  Phone,
  Search,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react"

export default function DashboardPreview() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [inventoryOpen, setInventoryOpen] = useState(false)
  const [ordersOpen, setOrdersOpen] = useState(false)
  const [buyersOpen, setBuyersOpen] = useState(false)
  const [reportsOpen, setReportsOpen] = useState(false)
  const [callsOpen, setCallsOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside
        className={`flex flex-col border-r bg-white transition-all duration-300 ${sidebarExpanded ? "w-64" : "w-16"}`}
      >
        <div className="flex items-center h-16 px-4 border-b">
          {sidebarExpanded ? (
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-500">cloud-ims</h1>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              S
            </div>
          )}
        </div>

        {sidebarExpanded && (
          <div className="flex flex-col items-center p-4 border-b">
            <div className="h-16 w-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center text-gray-500 font-bold">
              RM
            </div>
            <h3 className="font-medium">R Maheshwari</h3>
            <p className="text-sm text-gray-500">Admin Head</p>
          </div>
        )}

        <div className="flex-1 overflow-auto py-4 px-3">
          <div className="space-y-1">
            {/* Dashboard Nav Item */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors bg-gray-100 text-gray-900"
              >
                <LayoutDashboard className="h-5 w-5" />
                {sidebarExpanded && <span className="flex-1">Dashboard</span>}
              </a>
            </div>

            {/* Inventory Management - With Dropdown */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  setInventoryOpen(!inventoryOpen)
                }}
              >
                <Package className="h-5 w-5" />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1">Inventory Management</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${inventoryOpen ? "rotate-180" : ""}`} />
                  </>
                )}
              </a>

              {sidebarExpanded && inventoryOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Upload/Update Excel Sheet
                  </a>
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Real-Time Inventory
                  </a>
                </div>
              )}
            </div>

            {/* Order Management - With Dropdown */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  setOrdersOpen(!ordersOpen)
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1">Order Management</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${ordersOpen ? "rotate-180" : ""}`} />
                  </>
                )}
              </a>

              {sidebarExpanded && ordersOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    List
                  </a>
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Detail
                  </a>
                </div>
              )}
            </div>

            {/* Buyer Data Management - With Dropdown */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  setBuyersOpen(!buyersOpen)
                }}
              >
                <Users className="h-5 w-5" />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1">Buyer Data Management</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${buyersOpen ? "rotate-180" : ""}`} />
                  </>
                )}
              </a>

              {sidebarExpanded && buyersOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Extraction Tool
                  </a>
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Interaction History Viewer
                  </a>
                </div>
              )}
            </div>

            {/* Reports And Analytics - With Dropdown */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  setReportsOpen(!reportsOpen)
                }}
              >
                <BarChart className="h-5 w-5" />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1">Reports And Analytics</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${reportsOpen ? "rotate-180" : ""}`} />
                  </>
                )}
              </a>

              {sidebarExpanded && reportsOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Report Generation Tool
                  </a>
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Interactive Analytics Charts
                  </a>
                </div>
              )}
            </div>

            {/* Call Tracking - With Dropdown */}
            <div>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  setCallsOpen(!callsOpen)
                }}
              >
                <Phone className="h-5 w-5" />
                {sidebarExpanded && (
                  <>
                    <span className="flex-1">Call Tracking</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${callsOpen ? "rotate-180" : ""}`} />
                  </>
                )}
              </a>

              {sidebarExpanded && callsOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    List
                  </a>
                  <a href="#" className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
                    Detail
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <button
            className="w-full flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            <Menu className="h-5 w-5" />
            {sidebarExpanded && <span>Toggle Sidebar</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center justify-between px-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input placeholder="Search..." className="pl-10 w-64 h-9 bg-gray-100 border-0 rounded-md" />
            </div>

            <button className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                  RM
                </div>
                <span className="hidden md:inline">R Maheshwari</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">
          {/* Dashboard Content */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-3xl font-bold">{i * 100 + 50}</div>
                      <p className="text-xs text-gray-500">Revenue today</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Members Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {["Ratan", "Naval Khan", "Veena Shah", "Vaani Kola"].map((name, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-gray-200 mb-2 flex items-center justify-center text-gray-500 font-bold">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-sm text-gray-500">user@cloud-ims.com</p>
                    <span
                      className={`mt-2 px-2 py-1 text-xs font-semibold rounded-full text-white ${
                        i === 0 ? "bg-yellow-500" : i === 1 ? "bg-gray-500" : i === 2 ? "bg-green-500" : "bg-blue-500"
                      }`}
                    >
                      {i === 0 ? "Admin" : i === 1 ? "Support Lead" : i === 2 ? "Designer" : "Developer"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Inbox and Latest Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Inbox */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Inbox</h2>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Ratan", message: "Hey! there I'm available...", time: "13:40 PM" },
                    { name: "Naval", message: "I've finished it! See you so...", time: "13:34 PM" },
                    { name: "Simi", message: "This theme is awesome!", time: "13:17 PM" },
                    { name: "Mangalam", message: "Nice to meet you", time: "12:20 PM" },
                  ].map((message, index) => (
                    <div key={index} className="flex items-center gap-3 pb-3 border-b">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        {message.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{message.name}</p>
                        <p className="text-sm text-gray-500 truncate">{message.message}</p>
                      </div>
                      <div className="text-xs text-gray-500">{message.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Projects */}
              <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Latest Projects</h2>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Start Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Due Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Assign
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        {
                          id: 1,
                          name: "cloud-ims Admin v1",
                          start: "01/01/2017",
                          due: "26/04/2017",
                          status: "Released",
                          assign: "cloud-ims",
                        },
                        {
                          id: 2,
                          name: "cloud-ims Frontend v1",
                          start: "01/01/2017",
                          due: "26/04/2017",
                          status: "Released",
                          assign: "cloud-ims admin",
                        },
                        {
                          id: 3,
                          name: "cloud-ims Admin v1.1",
                          start: "01/05/2017",
                          due: "10/05/2017",
                          status: "Pending",
                          assign: "cloud-ims",
                        },
                      ].map((project) => (
                        <tr key={project.id}>
                          <td className="px-4 py-2 whitespace-nowrap">{project.id}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{project.name}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{project.start}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{project.due}</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                project.status === "Released"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">{project.assign}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Chart {i}</h2>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Chart Placeholder</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="border-t py-4 px-6 flex justify-between items-center text-sm text-gray-500">
          <div>2025 © cloud-ims</div>
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
