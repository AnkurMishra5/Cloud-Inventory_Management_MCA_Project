"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for charts
const revenueData = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 70 },
  { name: "Apr", value: 40 },
  { name: "May", value: 60 },
  { name: "Jun", value: 80 },
  { name: "Jul", value: 65 },
]

const salesData = [
  { name: "Mon", value: 75 },
  { name: "Tue", value: 40 },
  { name: "Wed", value: 80 },
  { name: "Thu", value: 38 },
  { name: "Fri", value: 20 },
  { name: "Sat", value: 90 },
]

const pieData = [
  { name: "Category A", value: 40 },
  { name: "Category B", value: 30 },
  { name: "Category C", value: 20 },
]

const COLORS = ["#6366f1", "#22d3ee", "#f472b6"]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="relative h-24 w-24">
                <svg className="h-24 w-24" viewBox="0 0 100 100">
                  <circle
                    className="stroke-current text-gray-200"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  <circle
                    className="stroke-current text-rose-500"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 58 / 100)}
                  />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-lg font-bold">
                    58%
                  </text>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold">256</div>
                <p className="text-xs text-muted-foreground">Revenue today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sales Analytics</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">8451</div>
                <p className="text-xs text-muted-foreground">Revenue today</p>
              </div>
              <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">+24%</div>
            </div>
            <Progress value={75} className="h-2 mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Statistics</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="relative h-24 w-24">
                <svg className="h-24 w-24" viewBox="0 0 100 100">
                  <circle
                    className="stroke-current text-gray-200"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  <circle
                    className="stroke-current text-yellow-500"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 80 / 100)}
                  />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-lg font-bold">
                    80%
                  </text>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold">4569</div>
                <p className="text-xs text-muted-foreground">Revenue today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Daily Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">158</div>
                <p className="text-xs text-muted-foreground">Revenue today</p>
              </div>
              <div className="bg-pink-500 text-white px-2 py-1 rounded text-xs">+32%</div>
            </div>
            <Progress value={32} className="h-2 mt-4 bg-pink-100" indicatorClassName="bg-pink-500" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Daily Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Statistics</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Inbox</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Ratan", message: "Hey! there I'm available...", time: "13:40 PM" },
                { name: "Naval", message: "I've finished it! See you so...", time: "13:34 PM" },
                { name: "Simi", message: "This theme is awesome!", time: "13:17 PM" },
                { name: "Mangalam", message: "Nice to meet you", time: "12:20 PM" },
              ].map((message, index) => (
                <div key={index} className="flex items-center gap-3 pb-3 border-b">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${message.name.charAt(0)}`} />
                    <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{message.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{message.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Latest Projects</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 20V10" />
              <path d="M18 14l-6-6-6 6" />
            </svg>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assign</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: 1,
                    name: "Cloud IMS Admin v1",
                    start: "01/01/2017",
                    due: "26/04/2017",
                    status: "Released",
                    assign: "cloud-ims",
                  },
                  {
                    id: 2,
                    name: "Cloud IMS Frontend v1",
                    start: "01/01/2017",
                    due: "26/04/2017",
                    status: "Released",
                    assign: "Cloud IMS admin",
                  },
                  {
                    id: 3,
                    name: "Cloud IMS Admin v1.1",
                    start: "01/05/2017",
                    due: "10/05/2017",
                    status: "Pending",
                    assign: "cloud-ims",
                  },
                ].map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.id}</TableCell>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.start}</TableCell>
                    <TableCell>{project.due}</TableCell>
                    <TableCell>
                      <Badge
                        variant={project.status === "Released" ? "success" : "secondary"}
                        className={project.status === "Released" ? "bg-green-500" : "bg-pink-500"}
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{project.assign}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-2">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Ratan" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Ratan</h3>
              <p className="text-sm text-muted-foreground">user@cloudims.com</p>
              <Badge className="mt-2 bg-yellow-500 text-white">Admin</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-2">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Naval Khan" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Naval Khan</h3>
              <p className="text-sm text-muted-foreground">user@cloudims.com</p>
              <Badge className="mt-2 bg-gray-500 text-white">Support Lead</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-2">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Veena Shah" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Veena Shah</h3>
              <p className="text-sm text-muted-foreground">user@cloudims.com</p>
              <Badge className="mt-2 bg-green-500 text-white">Designer</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-2">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Vaani Kola" />
                <AvatarFallback>VK</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Vaani Kola</h3>
              <p className="text-sm text-muted-foreground">user@cloudims.com</p>
              <Badge className="mt-2 bg-blue-500 text-white">Developer</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 
