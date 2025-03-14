"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Rocket, Wallet, Users } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Getting Started with fupi
      </motion.h1>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="startups">For Startups</TabsTrigger>
          <TabsTrigger value="investors">For Investors</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20"
        >
          <ScrollAnimation>
            <h2 className="text-2xl font-bold mb-4 text-mint-green">What is fupi?</h2>
            <p className="mb-4 text-vibrant-text">
              fupi is a decentralized accelerator platform built on the Pi Blockchain, designed to connect innovative
              startups with investors and mentors. Our platform leverages blockchain technology to create a transparent,
              secure, and efficient ecosystem for startup funding and growth.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Key Features</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Decentralized funding mechanism using Pi cryptocurrency</li>
              <li>Transparent milestone-based funding releases</li>
              <li>Community governance through $FUPI token staking</li>
              <li>Secure KYB (Know Your Business) verification</li>
              <li>Smart contract-based equity management</li>
            </ul>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">How It Works</h3>
            <p className="mb-4 text-vibrant-text">
              Startups apply for funding, undergo verification, and if approved, are listed on the platform. Investors
              can browse startups, invest using Pi tokens, and track their investments. All transactions are recorded on
              the Pi Blockchain, ensuring transparency and security.
            </p>

            <div className="mt-6">
              <Link href="/docs/platform-overview">
                <span className="text-mint-green hover:underline flex items-center">
                  Learn more about our platform <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent
          value="startups"
          className="p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20"
        >
          <ScrollAnimation>
            <div className="flex items-center mb-4">
              <Rocket className="h-6 w-6 text-mint-green mr-2" />
              <h2 className="text-2xl font-bold text-mint-green">For Startups</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Application Process</h3>
            <ol className="list-decimal list-inside mb-4 text-vibrant-text">
              <li>Create an account on fupi</li>
              <li>Complete the startup application form</li>
              <li>Submit required documentation for KYB verification</li>
              <li>Define funding goals and equity offering</li>
              <li>Set project milestones for funding releases</li>
            </ol>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Benefits</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Access to Pi Network's growing investor community</li>
              <li>Transparent and secure funding mechanism</li>
              <li>Mentorship from industry experts</li>
              <li>Milestone-based funding to ensure proper resource allocation</li>
              <li>Exposure and marketing support within the Pi ecosystem</li>
            </ul>

            <div className="mt-6">
              <Link href="/apply">
                <span className="text-mint-green hover:underline flex items-center">
                  Apply as a startup <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent
          value="investors"
          className="p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20"
        >
          <ScrollAnimation>
            <div className="flex items-center mb-4">
              <Wallet className="h-6 w-6 text-mint-green mr-2" />
              <h2 className="text-2xl font-bold text-mint-green">For Investors</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Investment Process</h3>
            <ol className="list-decimal list-inside mb-4 text-vibrant-text">
              <li>Connect your Pi wallet to fupi</li>
              <li>Browse available startup opportunities</li>
              <li>Perform due diligence using provided documentation</li>
              <li>Invest Pi tokens in selected startups</li>
              <li>Track investments and milestone completions</li>
            </ol>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Benefits</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Access to vetted early-stage startups in the Pi ecosystem</li>
              <li>Transparent investment tracking through blockchain</li>
              <li>Potential for high returns on successful startups</li>
              <li>Participation in governance decisions through $FUPI tokens</li>
              <li>Diversification opportunities across various sectors</li>
            </ul>

            <div className="mt-6">
              <Link href="/invest">
                <span className="text-mint-green hover:underline flex items-center">
                  Start investing <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent
          value="governance"
          className="p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20"
        >
          <ScrollAnimation>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-mint-green mr-2" />
              <h2 className="text-2xl font-bold text-mint-green">Governance</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">$FUPI Token</h3>
            <p className="mb-4 text-vibrant-text">
              $FUPI is the governance token of the fupi platform. By staking $FUPI tokens, users can participate in
              platform governance, vote on proposals, and earn rewards.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Governance Process</h3>
            <ol className="list-decimal list-inside mb-4 text-vibrant-text">
              <li>Acquire and stake $FUPI tokens</li>
              <li>Browse active proposals on the governance dashboard</li>
              <li>Vote on proposals using staked tokens</li>
              <li>Submit new proposals (requires minimum token stake)</li>
              <li>Earn rewards for active participation</li>
            </ol>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Proposal Types</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Platform feature updates</li>
              <li>Fee structure changes</li>
              <li>Startup selection and funding allocation</li>
              <li>Treasury management</li>
              <li>Partnership decisions</li>
            </ul>

            <div className="mt-6">
              <Link href="/governance">
                <span className="text-mint-green hover:underline flex items-center">
                  Explore governance <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}

