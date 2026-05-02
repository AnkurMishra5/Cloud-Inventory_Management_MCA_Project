"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Download, FileText, Send, BarChart, PieChart, LineChart } from "lucide-react"

export default function ReportGenerationPage() {
  const [reportType, setReportType] = useState("sales")
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = () => {
    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Report Generation Tool</h1>
          <p className="text-muted-foreground">Generate custom reports for your business</p>
        </div>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="standard">Standard Reports</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Standard Reports</CardTitle>
                <CardDescription>Generate pre-configured reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:border-blue-500 transition-colors">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-blue-100 p-3 mb-4">
                        <BarChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-medium">Sales Report</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Overview of sales performance, revenue, and top-selling products
                      </p>
                      <Button className="mt-4">Generate</Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:border-blue-500 transition-colors">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-green-100 p-3 mb-4">
                        <PieChart className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium">Inventory Report</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Current stock levels, low stock alerts, and inventory turnover
                      </p>
                      <Button className="mt-4">Generate</Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:border-blue-500 transition-colors">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-purple-100 p-3 mb-4">
                        <LineChart className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-medium">Customer Report</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Customer acquisition, retention, and purchasing behavior
                      </p>
                      <Button className="mt-4">Generate</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Report Builder</CardTitle>
                <CardDescription>Create a customized report</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="report-type">Report Type</Label>
                      <Select value={reportType} onValueChange={setReportType}>
                        <SelectTrigger id="report-type">
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Report</SelectItem>
                          <SelectItem value="inventory">Inventory Report</SelectItem>
                          <SelectItem value="customer">Customer Report</SelectItem>
                          <SelectItem value="financial">Financial Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Date Range</Label>
                      <div className="flex gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dateRange.from ? (
                                dateRange.to ? (
                                  <>
                                    {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(dateRange.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Pick a date range</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="range" selected={dateRange} onSelect={setDateRange as any} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="report-format">Report Format</Label>
                      <Select defaultValue="pdf">
                        <SelectTrigger id="report-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Include Sections</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="summary" defaultChecked />
                        <label
                          htmlFor="summary"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Executive Summary
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="charts" defaultChecked />
                        <label
                          htmlFor="charts"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Charts and Graphs
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="detailed" defaultChecked />
                        <label
                          htmlFor="detailed"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Detailed Data Tables
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="comparison" />
                        <label
                          htmlFor="comparison"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Year-over-Year Comparison
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button onClick={handleGenerateReport} disabled={isGenerating}>
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Generate Report
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Set up automated report delivery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="schedule-report">Report Type</Label>
                      <Select defaultValue="sales">
                        <SelectTrigger id="schedule-report">
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Report</SelectItem>
                          <SelectItem value="inventory">Inventory Report</SelectItem>
                          <SelectItem value="customer">Customer Report</SelectItem>
                          <SelectItem value="financial">Financial Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger id="frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="delivery-method">Delivery Method</Label>
                      <Select defaultValue="email">
                        <SelectTrigger id="delivery-method">
                          <SelectValue placeholder="Select delivery method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="dashboard">Dashboard</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="recipients">Recipients</Label>
                      <Input
                        id="recipients"
                        placeholder="Enter email addresses (comma separated)"
                        defaultValue="admin@cloudims.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Email Subject</Label>
                      <Input id="subject" placeholder="Enter email subject" defaultValue="Weekly Sales Report" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="include-summary" defaultChecked />
                        <label
                          htmlFor="include-summary"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Include Executive Summary in Email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Send className="mr-2 h-4 w-4" />
                    Schedule Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 
