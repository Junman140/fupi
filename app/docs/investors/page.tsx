"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, DollarSign, TrendingUp, Wallet } from "lucide-react"

export default function InvestorGuidePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Investor Guide
      </motion.h1>

      <div className="mb-8 p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20">
        <div className="flex items-center mb-4">
          <Wallet className="h-6 w-6 text-mint-green mr-2" />
          <h2 className="text-2xl font-bold text-mint-green">Getting Started as an Investor</h2>
        </div>

        <p className="mb-4 text-vibrant-text">
          This guide will walk you through the process of investing in startups on the fund.pi platform. Before you
          begin, make sure you have:
        </p>

        <ul className="list-disc list-inside mb-4 text-vibrant-text">
          <li>A Pi Network wallet with Pi tokens</li>
          <li>Completed KYC verification on the Pi Network</li>
          <li>Basic understanding of startup investments and associated risks</li>
        </ul>

        <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
          <AlertTriangle className="h-6 w-6 text-mint-green mr-2" />
          <p className="text-vibrant-text">
            <strong>Important:</strong> Investing in startups involves significant risk. Only invest what you can afford
            to lose.
          </p>
        </div>
      </div>

      <Tabs defaultValue="process" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="process">Investment Process</TabsTrigger>
          <TabsTrigger value="due-diligence">Due Diligence</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio Management</TabsTrigger>
          <TabsTrigger value="exits">Exits & Returns</TabsTrigger>
        </TabsList>

        <TabsContent
          value="process"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Investment Process</h2>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                1
              </div>
              <h3 className="text-xl font-bold text-mint-green">Connect Your Pi Wallet</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Click on the "Connect Wallet" button in the header and follow the prompts to connect your Pi wallet to
              fund.pi.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                2
              </div>
              <h3 className="text-xl font-bold text-mint-green">Browse Startups</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Explore the startups section to find investment opportunities. You can filter by category, funding stage,
              and other criteria.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                3
              </div>
              <h3 className="text-xl font-bold text-mint-green">Perform Due Diligence</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Review the startup's business plan, team, market analysis, and financial projections. Use the due
              diligence checklist provided in the next tab.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                4
              </div>
              <h3 className="text-xl font-bold text-mint-green">Make an Investment</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Once you've decided to invest, click the "Invest" button on the startup's page. Enter the amount of Pi you
              wish to invest and confirm the transaction through your Pi wallet.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                5
              </div>
              <h3 className="text-xl font-bold text-mint-green">Track Your Investment</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Monitor your investment through your dashboard. You'll receive updates on milestone completions and other
              important events.
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="due-diligence"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Due Diligence Checklist</h2>

          <p className="mb-4 text-vibrant-text">
            Before investing in any startup, it's important to conduct thorough due diligence. Use this checklist as a
            guide:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Team Assessment</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Founders' background and experience</li>
              <li>Track record of previous ventures</li>
              <li>Team composition and expertise</li>
              <li>Advisors and their credentials</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Market Analysis</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Market size and growth potential</li>
              <li>Target customer segments</li>
              <li>Competitive landscape</li>
              <li>Market entry strategy</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Product/Service Evaluation</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Unique value proposition</li>
              <li>Product-market fit</li>
              <li>Technology and IP protection</li>
              <li>Development stage and roadmap</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Financial Review</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Business model and revenue streams</li>
              <li>Financial projections and assumptions</li>
              <li>Funding history and use of funds</li>
              <li>Valuation and equity structure</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Risk Assessment</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Regulatory and compliance risks</li>
              <li>Market and competition risks</li>
              <li>Execution and operational risks</li>
              <li>Financial and funding risks</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent
          value="portfolio"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Portfolio Management</h2>

          <p className="mb-4 text-vibrant-text">
            Managing your investment portfolio is crucial for long-term success. Here are some best practices:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Diversification</h3>
            <p className="text-vibrant-text mb-4">
              Spread your investments across multiple startups and sectors to reduce risk. A diversified portfolio is
              more resilient to market fluctuations and individual startup failures.
            </p>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Recommendation:</strong> Invest in at least 5-10 different startups across various sectors.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Regular Monitoring</h3>
            <p className="text-vibrant-text mb-4">
              Keep track of your investments through your dashboard. Monitor milestone completions, financial updates,
              and other important events.
            </p>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Recommendation:</strong> Set up email notifications for important updates and review your
                portfolio at least monthly.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Follow-on Investments</h3>
            <p className="text-vibrant-text mb-4">
              Consider making additional investments in startups that are performing well. This can help you maximize
              returns on successful ventures.
            </p>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Recommendation:</strong> Reserve 30-40% of your investment capital for follow-on investments.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Active Participation</h3>
            <p className="text-vibrant-text mb-4">
              Engage with the startups you've invested in. Provide feedback, make introductions, and offer your
              expertise when relevant.
            </p>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Recommendation:</strong> Join investor forums and participate in startup Q&A sessions.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="exits"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Exits & Returns</h2>

          <p className="mb-4 text-vibrant-text">
            Understanding potential exit strategies and return mechanisms is essential for any investor. Here's what you
            need to know:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Types of Exits</h3>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>Acquisition:</strong> The startup is purchased by another company.
              </li>
              <li>
                <strong>Secondary Sale:</strong> Selling your shares to another investor.
              </li>
              <li>
                <strong>Token Distribution:</strong> Receiving tokens as part of a tokenization event.
              </li>
              <li>
                <strong>Revenue Sharing:</strong> Receiving ongoing payments from the startup's revenue.
              </li>
              <li>
                <strong>IPO:</strong> The startup goes public (rare for early-stage startups).
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Timeline Expectations</h3>
            <p className="text-vibrant-text mb-4">
              Startup investments are typically long-term. Here's a general timeline:
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Early Stage (1-2 years):</strong> Growth and development phase with minimal returns.
                </p>
              </div>
              <div className="flex items-center mb-2">
                <TrendingUp className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Mid Stage (3-5 years):</strong> Potential for partial exits or token distributions.
                </p>
              </div>
              <div className="flex items-center mb-2">
                <TrendingUp className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Late Stage (5-7+ years):</strong> Most likely timeframe for significant exits.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Return Calculations</h3>
            <p className="text-vibrant-text mb-4">
              Understanding potential returns is important for setting realistic expectations:
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <DollarSign className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Multiple on Invested Capital (MOIC):</strong> Total return divided by initial investment.
                </p>
              </div>
              <div className="flex items-center mb-2">
                <DollarSign className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Internal Rate of Return (IRR):</strong> Annualized return taking time into account.
                </p>
              </div>
              <div className="flex items-center mb-2">
                <DollarSign className="h-6 w-6 text-mint-green mr-2" />
                <p className="text-vibrant-text">
                  <strong>Portfolio Return:</strong> Average return across all investments, considering failures.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <AlertTriangle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Important:</strong> The "power law" of startup investing means a small percentage of investments
                will generate the majority of returns. Expect many investments to fail completely.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

