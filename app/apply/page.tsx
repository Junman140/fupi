"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, DollarSign, Users, Lightbulb, ArrowRight, ExternalLink } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const reasons = [
  { icon: <Rocket className="h-6 w-6" />, text: "Accelerate Your Growth" },
  { icon: <DollarSign className="h-6 w-6" />, text: "Access to Capital" },
  { icon: <Users className="h-6 w-6" />, text: "Expert Mentorship" },
  { icon: <Lightbulb className="h-6 w-6" />, text: "Innovative Ecosystem" },
]

export default function StartupApplyPage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the application data to your server
    // For this example, we'll just show a success message and redirect to KYB
    toast({
      title: "Application Submitted",
      description: "Your startup application has been received. Please complete the KYB process.",
    })
    router.push("/apply/kyb")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Apply as a Startup</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose fund.pi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-muted rounded-lg"
            >
              <div className="mb-2 text-primary">{reason.icon}</div>
              <p className="font-medium">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Tabs defaultValue="register" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
          <TabsTrigger value="funding">How Funding Works</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Startup Registration</CardTitle>
              <CardDescription>Tell us about your startup and why you are a great fit for fund.pi</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="startup-name">Startup Name</Label>
                  <Input id="startup-name" placeholder="Enter your startup's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founder-name">Founder's Name</Label>
                  <Input id="founder-name" placeholder="Enter founder's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="healthtech">Healthtech</SelectItem>
                      <SelectItem value="edtech">Edtech</SelectItem>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="ai">Artificial Intelligence</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pitch">Elevator Pitch</Label>
                  <Textarea id="pitch" placeholder="Describe your startup in a few sentences" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="funding">Funding Goal (in Pi)</Label>
                  <Input id="funding" type="number" placeholder="Enter your funding goal" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equity">Equity Available (%)</Label>
                  <Input
                    id="equity"
                    type="number"
                    placeholder="Enter the percentage of equity available"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Documentation</Label>
                  <p className="text-sm text-muted-foreground">
                    Please review our
                    <Link href="/docs/startup-application" className="text-primary hover:underline ml-1">
                      startup application documentation
                      <ExternalLink className="inline-block ml-1 h-4 w-4" />
                    </Link>
                    before submitting your application.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={setAcceptedTerms} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={!acceptedTerms}>
                  Submit Application
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
              <CardDescription>Please read our terms and conditions carefully</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">1. Eligibility</h3>
              <p>Applicants must be 18 years or older and have a valid Pi Network account.</p>

              <h3 className="font-semibold">2. Application Process</h3>
              <p>
                All information provided must be accurate and complete. fund.pi reserves the right to verify any
                information submitted.
              </p>

              <h3 className="font-semibold">3. Funding</h3>
              <p>Funding is provided in Pi tokens and is subject to milestone achievements and community approval.</p>

              <h3 className="font-semibold">4. Equity</h3>
              <p>fund.pi may require equity in funded startups. The exact terms will be negotiated individually.</p>

              <h3 className="font-semibold">5. Reporting</h3>
              <p>Funded startups are required to provide regular progress reports and financial statements.</p>

              <h3 className="font-semibold">6. Intellectual Property</h3>
              <p>
                Startups retain their intellectual property rights, but grant fund.pi the right to use their name and
                logo for promotional purposes.
              </p>

              <h3 className="font-semibold">7. Termination</h3>
              <p>
                fund.pi reserves the right to terminate funding if terms are violated or if the startup fails to meet
                agreed-upon milestones.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="funding">
          <Card>
            <CardHeader>
              <CardTitle>How Funding Works</CardTitle>
              <CardDescription>Understand the process of receiving funding through fund.pi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Application Review</h3>
                <p>
                  Our team and community members review your application to assess its potential and fit with our
                  ecosystem.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">2. Community Voting</h3>
                <p>Shortlisted startups are presented to our community of $FUPI token holders for voting.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">3. Milestone-Based Funding</h3>
                <p>Funding is released in stages as your startup achieves pre-defined milestones.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">4. Smart Contract Integration</h3>
                <p>Funds are managed through smart contracts on the Pi blockchain for transparency and security.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">5. Mentorship and Support</h3>
                <p>Funded startups receive guidance from industry experts and access to our network of partners.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">6. Equity Distribution</h3>
                <p>
                  A portion of equity (typically 5-10%) is allocated to fund.pi and distributed among participating
                  community members.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">7. Ongoing Governance</h3>
                <p>
                  Major decisions regarding funded startups can be influenced by community governance through $FUPI
                  token voting.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/apply">
                <Button>
                  Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

