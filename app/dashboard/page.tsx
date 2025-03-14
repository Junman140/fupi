"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePiWallet } from "@/components/pi-wallet-provider"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, AlertTriangle, PieChart, LineChart, FileText, Settings, Briefcase } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { CountUp } from "@/components/count-up"
import { HoverCard } from "@/components/hover-card"
import { motion } from "framer-motion"

// Mock data for portfolio
const portfolioData = {
  totalInvested: 450000,
  totalReturns: 680000,
  roi: 51.1,
  activeInvestments: 12,
  exitedInvestments: 3,
  pendingDeals: 2,
}

// Mock data for investments
const investments = [
  { id: 1, name: "EcoChain", amount: 75000, date: "2023-05-15", status: "Active", roi: 32.5 },
  { id: 2, name: "PiLearn", amount: 50000, date: "2023-07-22", status: "Active", roi: 18.2 },
  { id: 3, name: "HealthBlock", amount: 100000, date: "2023-03-10", status: "Active", roi: 45.7 },
  { id: 4, name: "PiPay", amount: 65000, date: "2023-09-05", status: "Active", roi: 12.3 },
  { id: 5, name: "GreenPi", amount: 80000, date: "2023-01-20", status: "Exited", roi: 87.4 },
]

// Mock data for documents
const documents = [
  { id: 1, name: "Investment Agreement - EcoChain", type: "PDF", date: "2023-05-15", status: "Signed" },
  { id: 2, name: "Term Sheet - PiLearn", type: "PDF", date: "2023-07-22", status: "Signed" },
  { id: 3, name: "Subscription Document - HealthBlock", type: "PDF", date: "2023-03-10", status: "Signed" },
  { id: 4, name: "Investment Agreement - PiPay", type: "PDF", date: "2023-09-05", status: "Pending" },
  { id: 5, name: "Exit Agreement - GreenPi", type: "PDF", date: "2023-10-15", status: "Pending" },
]

export default function DashboardPage() {
  const { isConnected, connectWallet } = usePiWallet()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-64px)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Wallet Connection Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive" className="bg-yellow-500/10 border-yellow-500/50 text-foreground">
              <AlertTitle>Access Restricted</AlertTitle>
              <AlertDescription>You need to connect your Pi wallet to access the dashboard.</AlertDescription>
            </Alert>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button onClick={connectWallet} className="w-full">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet to Continue
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollAnimation type="fade">
        <h1 className="text-4xl font-bold mb-8 text-light-mint">Investor Dashboard</h1>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ScrollAnimation type="slide" direction="up" delay={0.1}>
          <HoverCard className="h-full">
            <Card className="bg-deep-teal border-light-mint/20 h-full">
              <CardHeader>
                <CardTitle className="text-light-mint">Total Invested</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-bronze-gold">
                  π<CountUp end={portfolioData.totalInvested / 1000} suffix="k" />
                </div>
                <p className="text-white/70 text-sm mt-2">
                  Across {portfolioData.activeInvestments + portfolioData.exitedInvestments} startups
                </p>
              </CardContent>
            </Card>
          </HoverCard>
        </ScrollAnimation>

        <ScrollAnimation type="slide" direction="up" delay={0.2}>
          <HoverCard className="h-full">
            <Card className="bg-deep-teal border-light-mint/20 h-full">
              <CardHeader>
                <CardTitle className="text-light-mint">Total Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-bronze-gold">
                  π<CountUp end={portfolioData.totalReturns / 1000} suffix="k" />
                </div>
                <p className="text-white/70 text-sm mt-2">
                  ROI: <CountUp end={portfolioData.roi} suffix="%" /> since inception
                </p>
              </CardContent>
            </Card>
          </HoverCard>
        </ScrollAnimation>

        <ScrollAnimation type="slide" direction="up" delay={0.3}>
          <HoverCard className="h-full">
            <Card className="bg-deep-teal border-light-mint/20 h-full">
              <CardHeader>
                <CardTitle className="text-light-mint">Active Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-bronze-gold">
                  <CountUp end={portfolioData.activeInvestments} />
                </div>
                <p className="text-white/70 text-sm mt-2">{portfolioData.pendingDeals} pending deals</p>
              </CardContent>
            </Card>
          </HoverCard>
        </ScrollAnimation>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollAnimation type="fade">
              <Card className="bg-deep-teal border-light-mint/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-light-mint" />
                    <span className="text-light-mint">Portfolio Allocation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <PieChart className="h-24 w-24 mx-auto mb-4 text-light-mint" />
                      <p>Interactive chart would be displayed here</p>
                      <p className="text-sm mt-2">Showing allocation across different startups and sectors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation type="fade" delay={0.2}>
              <Card className="bg-deep-teal border-light-mint/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-light-mint" />
                    <span className="text-light-mint">Performance Over Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <LineChart className="h-24 w-24 mx-auto mb-4 text-light-mint" />
                      <p>Interactive chart would be displayed here</p>
                      <p className="text-sm mt-2">Showing portfolio value growth over time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ScrollAnimation type="slide" direction="up">
              <HoverCard className="h-full">
                <Card className="bg-deep-teal border-light-mint/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-light-mint">Fund Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">Create and manage your own investment funds on the platform.</p>
                    <Button variant="highlight" size="sm">
                      Create Fund
                    </Button>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation type="slide" direction="up" delay={0.1}>
              <HoverCard className="h-full">
                <Card className="bg-deep-teal border-light-mint/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-light-mint">Deal Flow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">
                      Browse new investment opportunities matched to your preferences.
                    </p>
                    <Button variant="highlight" size="sm">
                      View Deals
                    </Button>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation type="slide" direction="up" delay={0.2}>
              <HoverCard className="h-full">
                <Card className="bg-deep-teal border-light-mint/20 h-full">
                  <CardHeader>
                    <CardTitle className="text-light-mint">Cost Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-4">Calculate potential returns and costs for your investments.</p>
                    <Button variant="highlight" size="sm">
                      Open Calculator
                    </Button>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollAnimation>
          </div>
        </TabsContent>

        <TabsContent value="investments">
          <ScrollAnimation type="fade">
            <Card className="bg-deep-teal border-light-mint/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-light-mint" />
                  <span className="text-light-mint">Your Investments</span>
                </CardTitle>
                <CardDescription className="text-white/70">
                  Manage and track all your startup investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-light-mint/20">
                        <th className="text-left py-3 px-4 text-light-mint">Startup</th>
                        <th className="text-left py-3 px-4 text-light-mint">Amount</th>
                        <th className="text-left py-3 px-4 text-light-mint">Date</th>
                        <th className="text-left py-3 px-4 text-light-mint">Status</th>
                        <th className="text-left py-3 px-4 text-light-mint">ROI</th>
                        <th className="text-left py-3 px-4 text-light-mint">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {investments.map((investment) => (
                        <motion.tr
                          key={investment.id}
                          className="border-b border-light-mint/10 hover:bg-light-mint/5"
                          whileHover={{ backgroundColor: "rgba(185, 244, 214, 0.1)" }}
                        >
                          <td className="py-3 px-4 text-white">{investment.name}</td>
                          <td className="py-3 px-4 text-white">π{investment.amount.toLocaleString()}</td>
                          <td className="py-3 px-4 text-white/70">{new Date(investment.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                investment.status === "Active"
                                  ? "bg-light-mint/20 text-light-mint"
                                  : investment.status === "Exited"
                                    ? "bg-bronze-gold/20 text-bronze-gold"
                                    : "bg-light-lavender/20 text-light-lavender"
                              }`}
                            >
                              {investment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white">{investment.roi}%</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="text-light-mint hover:text-light-mint/80">
                              Details
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="documents">
          <ScrollAnimation type="fade">
            <Card className="bg-deep-teal border-light-mint/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-light-mint" />
                  <span className="text-light-mint">Digital Documents</span>
                </CardTitle>
                <CardDescription className="text-white/70">
                  Manage your investment documents and agreements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-light-mint/20">
                        <th className="text-left py-3 px-4 text-light-mint">Document</th>
                        <th className="text-left py-3 px-4 text-light-mint">Type</th>
                        <th className="text-left py-3 px-4 text-light-mint">Date</th>
                        <th className="text-left py-3 px-4 text-light-mint">Status</th>
                        <th className="text-left py-3 px-4 text-light-mint">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map((document) => (
                        <motion.tr
                          key={document.id}
                          className="border-b border-light-mint/10 hover:bg-light-mint/5"
                          whileHover={{ backgroundColor: "rgba(185, 244, 214, 0.1)" }}
                        >
                          <td className="py-3 px-4 text-white">{document.name}</td>
                          <td className="py-3 px-4 text-white/70">{document.type}</td>
                          <td className="py-3 px-4 text-white/70">{new Date(document.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                document.status === "Signed"
                                  ? "bg-light-mint/20 text-light-mint"
                                  : "bg-light-lavender/20 text-light-lavender"
                              }`}
                            >
                              {document.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="text-light-mint hover:text-light-mint/80">
                                View
                              </Button>
                              {document.status === "Pending" && (
                                <Button variant="highlight" size="sm">
                                  Sign
                                </Button>
                              )}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="settings">
          <ScrollAnimation type="fade">
            <Card className="bg-deep-teal border-light-mint/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-light-mint" />
                  <span className="text-light-mint">Account Settings</span>
                </CardTitle>
                <CardDescription className="text-white/70">
                  Manage your account preferences and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-light-mint mb-4">Profile Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/70 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                          defaultValue="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 mb-1">Investor Type</label>
                        <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                          <option>Individual</option>
                          <option>Institutional</option>
                          <option>Syndicate</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-light-mint mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-white">Email Notifications</label>
                        <div className="relative inline-block w-10 h-5 rounded-full bg-light-mint/20">
                          <input type="checkbox" className="sr-only" defaultChecked />
                          <span className="block absolute left-1 top-1 w-3 h-3 rounded-full bg-light-mint transition-transform transform translate-x-4"></span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white">Investment Updates</label>
                        <div className="relative inline-block w-10 h-5 rounded-full bg-light-mint/20">
                          <input type="checkbox" className="sr-only" defaultChecked />
                          <span className="block absolute left-1 top-1 w-3 h-3 rounded-full bg-light-mint transition-transform transform translate-x-4"></span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white">New Opportunities</label>
                        <div className="relative inline-block w-10 h-5 rounded-full bg-light-mint/20">
                          <input type="checkbox" className="sr-only" defaultChecked />
                          <span className="block absolute left-1 top-1 w-3 h-3 rounded-full bg-light-mint transition-transform transform translate-x-4"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="highlight">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}

