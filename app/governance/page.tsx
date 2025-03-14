"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Vote, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollAnimation>
        <motion.h1
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Decentralized Governance on fupi
        </motion.h1>
      </ScrollAnimation>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ScrollAnimation direction="up" delay={0.1}>
          <Card className="bg-gradient-to-br from-card/50 to-card border-none shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Vote className="mr-2 h-6 w-6 text-primary" /> Proposal Voting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Participate in key decisions by voting on platform proposals.</p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <Card className="bg-gradient-to-br from-card/50 to-card border-none shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" /> Community-Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Shape the future of fupi through collaborative decision-making.</p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <Card className="bg-gradient-to-br from-card/50 to-card border-none shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-6 w-6 text-primary" /> Staking Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Earn rewards by staking $FUPI tokens and participating in governance.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={0.4}>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/governance/proposals">
            <Button size="lg" className="group">
              View Active Proposals
              <Vote className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </ScrollAnimation>
    </div>
  )
}

