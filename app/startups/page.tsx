"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingUp, DollarSign, Star, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

// Mock data for startups
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

const StartupCard = ({ startup, showDetails = false }) => (
  <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
    <CardHeader className="pb-4">
      <div className="flex justify-between items-start">
        <Badge variant="secondary">{startup.category}</Badge>
        <div className="text-sm text-muted-foreground">{startup.progress}% funded</div>
      </div>
      <CardTitle className="text-xl">{startup.name}</CardTitle>
      <CardDescription>{startup.description}</CardDescription>
    </CardHeader>
    <CardContent className="pb-4 flex-grow">
      <div className="space-y-3">
        <Progress value={startup.progress} className="h-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Raised: {startup.raised}</span>
          <span>Goal: {startup.goal}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      {showDetails ? (
        <Link href={`/startups/${startup.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      ) : (
        <Button className="w-full">Invest Now</Button>
      )}
    </CardFooter>
  </Card>
)

const StartupsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 text-center">Startups</h1>
      </ScrollAnimation>

      <Tabs defaultValue="all" className="space-y-8">
        <ScrollAnimation>
          <TabsList className="flex flex-wrap justify-start gap-2">
            <TabsTrigger value="all">All Startups</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="profitable">Most Profitable</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
        </ScrollAnimation>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startups.map((startup, index) => (
              <ScrollAnimation key={startup.id} direction="up" delay={index * 0.1}>
                <StartupCard startup={startup} showDetails={true} />
              </ScrollAnimation>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold mb-4">Top Trending: Most Invested in Last 24 Hours</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startups.slice(0, 3).map((startup, index) => (
              <ScrollAnimation key={startup.id} direction="up" delay={index * 0.1}>
                <Card className="flex items-center p-4 space-x-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold">{startup.name}</h3>
                    <p className="text-sm text-muted-foreground">π {Math.floor(Math.random() * 10000)} invested</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profitable">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold mb-4">Most Profitable Startups</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startups.slice(2, 5).map((startup, index) => (
              <ScrollAnimation key={startup.id} direction="up" delay={index * 0.1}>
                <Card className="flex items-center p-4 space-x-4">
                  <DollarSign className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold">{startup.name}</h3>
                    <p className="text-sm text-muted-foreground">ROI: {Math.floor(Math.random() * 100)}%</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended">
          <ScrollAnimation>
            <h2 className="text-2xl font-semibold mb-4">Recommended Investments</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startups.slice(1, 4).map((startup, index) => (
              <ScrollAnimation key={startup.id} direction="up" delay={index * 0.1}>
                <Card className="flex items-center p-4 space-x-4">
                  <Star className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold">{startup.name}</h3>
                    <p className="text-sm text-muted-foreground">{startup.category}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <ScrollAnimation>
          <h2 className="text-3xl font-semibold mb-6">Benefits of Being Part of $FUPI DAO</h2>
        </ScrollAnimation>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ScrollAnimation direction="up" delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6" /> Governance Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Participate in key decisions and shape the future of the platform.</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowUpRight className="mr-2 h-6 w-6" /> Early Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get early access to promising startup investments before they go public.</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-6 w-6" /> Reward Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Earn a share of the platform's profits through staking rewards.</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

export default StartupsPage

