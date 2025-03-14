"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Rocket, DollarSign, BarChartIcon as ChartBar } from "lucide-react"
import Link from "next/link"

export default function InvestPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-light-primary dark:text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Start Investing in Pi Network Startups
      </motion.h1>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-6 w-6" /> Browse Startups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore a curated list of innovative startups in the Pi ecosystem.</p>
              <Link href="/startups">
                <Button variant="link" className="mt-2">
                  View Startups
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-6 w-6" /> Investment Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about our secure and transparent investment process.</p>
              <Link href="/invest/process">
                <Button variant="link" className="mt-2">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ChartBar className="mr-2 h-6 w-6" /> Portfolio Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track and manage your investments with our intuitive dashboard.</p>
              <Link href="/dashboard">
                <Button variant="link" className="mt-2">
                  Go to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/invest/connect-wallet">
          <Button size="lg" className="gap-2">
            Connect Wallet to Invest <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

