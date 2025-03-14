"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function CreateFundPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollAnimation type="fade">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="text-light-mint hover:text-light-mint/80 mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-4xl font-bold text-light-mint">Create New Fund</h1>
        </div>
      </ScrollAnimation>

      <div className="mb-8">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step < currentStep
                    ? "bg-light-mint text-deep-teal"
                    : step === currentStep
                      ? "bg-bronze-gold text-white"
                      : "bg-deep-teal border border-light-mint/20 text-white/50"
                }`}
              >
                {step < currentStep ? <Check className="h-5 w-5" /> : step}
              </div>
              <p className={`text-sm mt-2 ${step <= currentStep ? "text-white" : "text-white/50"}`}>
                {step === 1
                  ? "Fund Details"
                  : step === 2
                    ? "Investment Strategy"
                    : step === 3
                      ? "Legal Structure"
                      : "Review"}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-3xl mx-auto mt-4 h-1 bg-deep-teal">
          <motion.div
            className="h-full bg-light-mint"
            initial={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <Card className="bg-deep-teal border-light-mint/20 max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-light-mint">
            {currentStep === 1
              ? "Fund Details"
              : currentStep === 2
                ? "Investment Strategy"
                : currentStep === 3
                  ? "Legal Structure"
                  : "Review Your Fund"}
          </CardTitle>
          <CardDescription className="text-white/70">
            {currentStep === 1
              ? "Provide basic information about your fund"
              : currentStep === 2
                ? "Define your investment approach and criteria"
                : currentStep === 3
                  ? "Set up the legal framework for your fund"
                  : "Confirm all details before creating your fund"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <ScrollAnimation type="fade">
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 mb-1">Fund Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., Pi Ventures Fund I"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Target Size (in Pi)</label>
                  <input
                    type="number"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., 1000000"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Fund Type</label>
                  <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                    <option>Venture Capital</option>
                    <option>Private Equity</option>
                    <option>Angel Syndicate</option>
                    <option>SPV (Special Purpose Vehicle)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Fund Description</label>
                  <textarea
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white h-32"
                    placeholder="Describe your fund's mission and vision..."
                  />
                </div>
              </div>
            </ScrollAnimation>
          )}

          {currentStep === 2 && (
            <ScrollAnimation type="fade">
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 mb-1">Investment Focus</label>
                  <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                    <option>Blockchain/Crypto</option>
                    <option>FinTech</option>
                    <option>HealthTech</option>
                    <option>EdTech</option>
                    <option>CleanTech</option>
                    <option>AI/ML</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Stage Focus</label>
                  <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                    <option>Pre-seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B+</option>
                    <option>Growth</option>
                    <option>All Stages</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Geographic Focus</label>
                  <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                    <option>Global</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Latin America</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Investment Criteria</label>
                  <textarea
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white h-32"
                    placeholder="Describe your investment criteria and what you look for in startups..."
                  />
                </div>
              </div>
            </ScrollAnimation>
          )}

          {currentStep === 3 && (
            <ScrollAnimation type="fade">
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 mb-1">Legal Structure</label>
                  <select className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white">
                    <option>Limited Partnership (LP)</option>
                    <option>Limited Liability Company (LLC)</option>
                    <option>Series LLC</option>
                    <option>Corporation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Fund Term (Years)</label>
                  <input
                    type="number"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., 10"
                    defaultValue="10"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Management Fee (%)</label>
                  <input
                    type="number"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., 2"
                    defaultValue="2"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Carry (%)</label>
                  <input
                    type="number"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., 20"
                    defaultValue="20"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1">Minimum Investment (Pi)</label>
                  <input
                    type="number"
                    className="w-full p-2 rounded bg-deep-teal border border-light-mint/20 text-white"
                    placeholder="e.g., 10000"
                  />
                </div>
              </div>
            </ScrollAnimation>
          )}

          {currentStep === 4 && (
            <ScrollAnimation type="fade">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-light-mint mb-2">Fund Details</h3>
                  <div className="bg-deep-teal/50 p-4 rounded border border-light-mint/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/70">Fund Name</p>
                        <p className="text-white">Pi Ventures Fund I</p>
                      </div>
                      <div>
                        <p className="text-white/70">Target Size</p>
                        <p className="text-white">π1,000,000</p>
                      </div>
                      <div>
                        <p className="text-white/70">Fund Type</p>
                        <p className="text-white">Venture Capital</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-light-mint mb-2">Investment Strategy</h3>
                  <div className="bg-deep-teal/50 p-4 rounded border border-light-mint/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/70">Investment Focus</p>
                        <p className="text-white">Blockchain/Crypto</p>
                      </div>
                      <div>
                        <p className="text-white/70">Stage Focus</p>
                        <p className="text-white">Seed</p>
                      </div>
                      <div>
                        <p className="text-white/70">Geographic Focus</p>
                        <p className="text-white">Global</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-light-mint mb-2">Legal Structure</h3>
                  <div className="bg-deep-teal/50 p-4 rounded border border-light-mint/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/70">Legal Structure</p>
                        <p className="text-white">Limited Partnership (LP)</p>
                      </div>
                      <div>
                        <p className="text-white/70">Fund Term</p>
                        <p className="text-white">10 years</p>
                      </div>
                      <div>
                        <p className="text-white/70">Management Fee</p>
                        <p className="text-white">2%</p>
                      </div>
                      <div>
                        <p className="text-white/70">Carry</p>
                        <p className="text-white">20%</p>
                      </div>
                      <div>
                        <p className="text-white/70">Minimum Investment</p>
                        <p className="text-white">π10,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-white/70">
                    I confirm that all the information provided is accurate and I agree to the terms and conditions
                  </label>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button variant="highlight" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button variant="highlight">Create Fund</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

// Compare this snippet from fupi/app/dashboard/index/page.tsx: