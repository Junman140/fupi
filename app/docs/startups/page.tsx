"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Rocket, Target, Users, FileText } from "lucide-react"

export default function StartupGuidePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Startup Guide
      </motion.h1>

      <div className="mb-8 p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20">
        <div className="flex items-center mb-4">
          <Rocket className="h-6 w-6 text-mint-green mr-2" />
          <h2 className="text-2xl font-bold text-mint-green">Getting Started as a Startup</h2>
        </div>

        <p className="mb-4 text-vibrant-text">
          This guide will walk you through the process of applying for funding and growing your startup on the fund.pi
          platform. Before you begin, make sure you have:
        </p>

        <ul className="list-disc list-inside mb-4 text-vibrant-text">
          <li>A clear business plan and pitch deck</li>
          <li>A minimum viable product (MVP) or prototype</li>
          <li>A defined team with relevant expertise</li>
          <li>Clear funding goals and use of funds</li>
        </ul>

        <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
          <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
          <p className="text-vibrant-text">
            <strong>Pro Tip:</strong> Startups with a connection to the Pi Network ecosystem have a higher chance of
            being approved.
          </p>
        </div>
      </div>

      <Tabs defaultValue="application" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="application">Application Process</TabsTrigger>
          <TabsTrigger value="funding">Funding Structure</TabsTrigger>
          <TabsTrigger value="milestones">Milestone Management</TabsTrigger>
          <TabsTrigger value="resources">Resources & Support</TabsTrigger>
        </TabsList>

        <TabsContent
          value="application"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Application Process</h2>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                1
              </div>
              <h3 className="text-xl font-bold text-mint-green">Create an Account</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Sign up for an account on fund.pi and complete your profile with your personal and business information.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                2
              </div>
              <h3 className="text-xl font-bold text-mint-green">Submit Initial Application</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Complete the startup application form with details about your business, team, market, and funding
              requirements.
            </p>
            <div className="ml-10 flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Required Documents:</strong> Business plan, pitch deck, financial projections, team bios, and
                product demo (if available).
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                3
              </div>
              <h3 className="text-xl font-bold text-mint-green">KYB Verification</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Complete the Know Your Business (KYB) process by providing legal documentation for your business and
              founders.
            </p>
            <div className="ml-10 flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Required Documents:</strong> Business registration, founder IDs, proof of address, and tax
                identification.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                4
              </div>
              <h3 className="text-xl font-bold text-mint-green">Review and Interview</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              Our team will review your application and schedule an interview with your founding team to discuss your
              business in detail.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                5
              </div>
              <h3 className="text-xl font-bold text-mint-green">Community Vote</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              If your application passes the initial review, it will be presented to the fund.pi community for voting.
              $FUPI token holders will vote on whether to approve your funding request.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-mint-green/20 flex items-center justify-center text-mint-green font-bold mr-2">
                6
              </div>
              <h3 className="text-xl font-bold text-mint-green">Funding Agreement</h3>
            </div>
            <p className="ml-10 text-vibrant-text mb-4">
              If approved, you'll sign a funding agreement that outlines the terms of the investment, equity allocation,
              and milestone requirements.
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="funding"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Funding Structure</h2>

          <p className="mb-4 text-vibrant-text">
            fund.pi uses a milestone-based funding approach to align incentives and reduce risk for both startups and
            investors.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Equity Allocation</h3>
            <p className="text-vibrant-text mb-4">
              Startups typically offer 5-15% equity in exchange for funding. The exact percentage depends on your
              valuation, funding amount, and stage of development.
            </p>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <CheckCircle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Pro Tip:</strong> Be realistic about your valuation. Overvaluing your startup can lead to
                rejection or difficulty raising future rounds.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Funding Tranches</h3>
            <p className="text-vibrant-text mb-4">
              Funding is released in tranches based on milestone completion. A typical structure might be:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>Initial Release (20-30%):</strong> Upon signing the funding agreement
              </li>
              <li>
                <strong>Milestone 1 (20-30%):</strong> Product development or market validation
              </li>
              <li>
                <strong>Milestone 2 (20-30%):</strong> User acquisition or revenue targets
              </li>
              <li>
                <strong>Final Milestone (20-30%):</strong> Scaling or profitability goals
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">SAFE Agreement</h3>
            <p className="text-vibrant-text mb-4">
              We use a modified Simple Agreement for Future Equity (SAFE) that is adapted for the Pi ecosystem. Key
              terms include:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Valuation cap</li>
              <li>Discount rate for future rounds</li>
              <li>Pro-rata rights for investors</li>
              <li>Information rights</li>
              <li>Milestone-based funding release</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Platform Fees</h3>
            <p className="text-vibrant-text mb-4">
              fund.pi charges a 5% fee on the total funding amount, which is deducted from each funding tranche. This
              fee covers platform maintenance, legal costs, and community rewards.
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="milestones"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Milestone Management</h2>

          <p className="mb-4 text-vibrant-text">
            Effective milestone management is crucial for securing ongoing funding and building investor confidence.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Setting Effective Milestones</h3>
            <p className="text-vibrant-text mb-4">Good milestones should be:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>Specific:</strong> Clearly defined with no ambiguity
              </li>
              <li>
                <strong>Measurable:</strong> Quantifiable metrics to determine completion
              </li>
              <li>
                <strong>Achievable:</strong> Realistic given your resources and timeline
              </li>
              <li>
                <strong>Relevant:</strong> Directly tied to business growth and success
              </li>
              <li>
                <strong>Time-bound:</strong> With specific deadlines
              </li>
            </ul>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <Target className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Example:</strong> "Achieve 1,000 monthly active users by the end of Q2 2023" is better than
                "Grow user base."
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Milestone Reporting</h3>
            <p className="text-vibrant-text mb-4">
              You'll need to provide regular updates and formal milestone completion reports:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>Monthly Updates:</strong> Brief progress reports shared with investors
              </li>
              <li>
                <strong>Milestone Reports:</strong> Comprehensive documentation of milestone completion
              </li>
              <li>
                <strong>Financial Reports:</strong> Accounting for how funds were used
              </li>
              <li>
                <strong>Community AMAs:</strong> Periodic Q&A sessions with the investor community
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Milestone Verification</h3>
            <p className="text-vibrant-text mb-4">
              When you complete a milestone, the verification process works as follows:
            </p>
            <ol className="list-decimal list-inside mb-4 text-vibrant-text">
              <li>Submit a milestone completion report with supporting evidence</li>
              <li>Our team reviews the submission within 5 business days</li>
              <li>If approved, the next funding tranche is released within 3 business days</li>
              <li>If rejected, you'll receive feedback and can resubmit after addressing the issues</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Milestone Adjustments</h3>
            <p className="text-vibrant-text mb-4">
              We understand that startups evolve and plans change. If you need to adjust your milestones:
            </p>
            <ol className="list-decimal list-inside mb-4 text-vibrant-text">
              <li>Submit a milestone adjustment request with justification</li>
              <li>Our team will review the request</li>
              <li>Significant changes may require community voting</li>
              <li>Minor adjustments can be approved by the fund.pi team</li>
            </ol>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <AlertTriangle className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Important:</strong> Frequent milestone adjustments may affect your credibility with investors.
                Plan carefully and communicate proactively.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="resources"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-mint-green">Resources & Support</h2>

          <p className="mb-4 text-vibrant-text">
            fund.pi provides various resources and support to help your startup succeed beyond just funding.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Mentorship Program</h3>
            <p className="text-vibrant-text mb-4">
              Funded startups are matched with experienced mentors who provide guidance and support:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Bi-weekly mentorship sessions</li>
              <li>Access to industry experts</li>
              <li>Strategic guidance and problem-solving</li>
              <li>Networking opportunities</li>
            </ul>
            <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
              <Users className="h-6 w-6 text-mint-green mr-2" />
              <p className="text-vibrant-text">
                <strong>Pro Tip:</strong> Be proactive with your mentors. Come prepared to sessions with specific
                questions and challenges.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Educational Resources</h3>
            <p className="text-vibrant-text mb-4">Access a library of resources to help you grow your business:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Startup playbooks and guides</li>
              <li>Webinars and workshops</li>
              <li>Legal and compliance templates</li>
              <li>Financial modeling tools</li>
              <li>Marketing and growth resources</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Pi Network Integration</h3>
            <p className="text-vibrant-text mb-4">Get support for integrating with the Pi Network ecosystem:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Pi SDK implementation assistance</li>
              <li>Pi payment integration</li>
              <li>Pi community engagement strategies</li>
              <li>Pi Network partnership opportunities</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Community Support</h3>
            <p className="text-vibrant-text mb-4">Leverage the fund.pi community for growth and support:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>User testing and feedback</li>
              <li>Early adopters and brand ambassadors</li>
              <li>Networking with other founders</li>
              <li>Crowdsourced problem-solving</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-mint-green">Marketing Support</h3>
            <p className="text-vibrant-text mb-4">Get help promoting your startup:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Featured placement on fund.pi platform</li>
              <li>Social media promotion</li>
              <li>Press release assistance</li>
              <li>Pitch deck review and optimization</li>
              <li>Demo day opportunities</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

