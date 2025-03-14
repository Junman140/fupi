"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Mock data for startups (same as in the startups page)
const startups = [
  {
    id: 1,
    name: "EcoChain",
    category: "Supply Chain",
    raised: "π 120,000",
    goal: "π 200,000",
    progress: 60,
    description: "Sustainable supply chain tracking on Pi Network",
  },
  {
    id: 2,
    name: "PiLearn",
    category: "Education",
    raised: "π 85,000",
    goal: "π 150,000",
    progress: 56,
    description: "Decentralized education platform with credential verification",
  },
  {
    id: 3,
    name: "HealthBlock",
    category: "Healthcare",
    raised: "π 175,000",
    goal: "π 250,000",
    progress: 70,
    description: "Medical records management with privacy-first approach",
  },
  {
    id: 4,
    name: "PiPay",
    category: "Finance",
    raised: "π 95,000",
    goal: "π 180,000",
    progress: 52,
    description: "Decentralized payment solution for Pi Network",
  },
  {
    id: 5,
    name: "GreenPi",
    category: "Sustainability",
    raised: "π 110,000",
    goal: "π 220,000",
    progress: 50,
    description: "Eco-friendly blockchain solutions",
  },
]

const StartupPage = () => {
  const params = useParams()
  const startupId = Number.parseInt(params.id as string)
  const startup = startups.find((s) => s.id === startupId)

  if (!startup) {
    return <div>Startup not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <Badge variant="outline">{startup.category}</Badge>
            <div className="text-sm text-muted-foreground">{startup.progress}% funded</div>
          </div>
          <CardTitle className="text-3xl">{startup.name}</CardTitle>
          <CardDescription className="text-lg">{startup.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Progress value={startup.progress} className="w-full" />
            <div className="flex justify-between text-sm">
              <span>Raised: {startup.raised}</span>
              <span>Goal: {startup.goal}</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About {startup.name}</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Team</h3>
            <p className="text-muted-foreground">
              Our team consists of experienced professionals in {startup.category.toLowerCase()} and blockchain
              technology. We are passionate about leveraging Pi Network to solve real-world problems.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Roadmap</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Q3 2023: Launch MVP</li>
              <li>Q4 2023: Expand user base and partnerships</li>
              <li>Q1 2024: Implement advanced features</li>
              <li>Q2 2024: Scale operations and seek additional funding</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Invest in {startup.name}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default StartupPage

