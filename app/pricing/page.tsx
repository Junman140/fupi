"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HoverCard } from "@/components/hover-card"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage fund managers and angel investors",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Fund administration for 1 fund",
        "Up to $5M AUM",
        "Digital subscription documents",
        "Basic reporting",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for established funds with multiple investment vehicles",
      monthlyPrice: 499,
      annualPrice: 4990,
      features: [
        "Fund administration for up to 3 funds",
        "Up to $50M AUM",
        "Digital subscription documents",
        "Advanced reporting & analytics",
        "Investor portal",
        "Priority support",
        "API access",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large fund managers with complex needs",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited funds",
        "Unlimited AUM",
        "Custom workflows",
        "Advanced security features",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "White-labeling options",
      ],
      highlighted: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <ScrollAnimation type="fade">
        <div className="text-center mb-12">
          <h1 className="heading-lg text-light-mint mb-4">Simple, transparent pricing</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose the plan that's right for your fund. All plans include access to our core platform features.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation type="fade" delay={0.2}>
        <div className="flex justify-center mb-12">
          <div className="bg-deep-teal/50 p-1 rounded-full">
            <div className="flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly" ? "bg-light-mint text-deep-teal" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "annual" ? "bg-light-mint text-deep-teal" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual (Save 17%)
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <ScrollAnimation key={plan.name} type="slide" direction="up" delay={index * 0.1}>
            <HoverCard className="h-full">
              <Card
                className={`h-full flex flex-col ${
                  plan.highlighted ? "border-2 border-light-mint relative" : "border border-light-mint/20"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-mint text-deep-teal px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-light-mint">{plan.name}</CardTitle>
                  <p className="text-white/70 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    {plan.monthlyPrice !== null ? (
                      <div className="flex items-end">
                        <span className="text-4xl font-bold text-white">
                          π{billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-white/70 ml-2 mb-1">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-white">Custom pricing</div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-light-mint mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={plan.highlighted ? "highlight" : "outline"} className="w-full">
                    {plan.monthlyPrice !== null ? "Get started" : "Contact sales"}
                  </Button>
                </CardFooter>
              </Card>
            </HoverCard>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation type="fade" delay={0.4}>
        <div className="mt-16 bg-deep-teal/50 rounded-lg p-8 border border-light-mint/20">
          <div className="text-center mb-8">
            <h2 className="heading-sm text-light-mint mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-light-mint mb-2">Can I switch plans later?</h3>
              <p className="text-white/70">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing
                cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-mint mb-2">What payment methods do you accept?</h3>
              <p className="text-white/70">
                We accept Pi cryptocurrency as well as major credit cards and bank transfers for enterprise clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-mint mb-2">Is there a setup fee?</h3>
              <p className="text-white/70">
                No, there are no setup fees for our standard plans. Enterprise plans may include custom setup services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-mint mb-2">Do you offer discounts for startups?</h3>
              <p className="text-white/70">
                Yes, we offer special pricing for early-stage startups. Contact our sales team to learn more.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

