 "use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Rocket, Users, ArrowRight, FileText, Briefcase, Building, LineChart } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { CountUp } from "@/components/count-up"
import { HoverCard } from "@/components/hover-card"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section className="w-full py-20 md:py-32 bg-deep-teal relative overflow-hidden">
          <ScrollAnimation type="parallax" className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/80 to-deep-teal" />
            <div className="absolute inset-0 opacity-10">
              {/* Abstract pattern for parallax background */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(185,244,214,0.1)_0%,_transparent_50%)]" />
              <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-light-mint/5" />
              <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-light-lavender/5" />
            </div>
          </ScrollAnimation>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <ScrollAnimation
              type="slide"
              direction="up"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-3 max-w-3xl mx-auto">
                <motion.h1
                  className="heading-xl text-light-lavender"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Built to scale all private funds
                </motion.h1>
                <motion.p
                  className="text-white/80 md:text-xl max-w-[700px] mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  fupi provides investors and innovators with the tools to grow in the Pi Network ecosystem.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <Link href="/apply">
                    <Button variant="highlight" size="lg" className="w-full sm:w-auto group">
                      Apply as Startup
                      <motion.span
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </Link>
                  <Link href="/invest">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                      Become an Investor
                      <motion.span
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* User Pathways Section */}
        <section className="section-alt-light section-spacing">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade" className="text-center mb-12">
              <h2 className="heading-md text-deep-teal mb-4">Solutions for every stakeholder</h2>
              <p className="text-deep-teal/80 max-w-2xl mx-auto">
                Whether you're a fund manager, startup, or investor, fupi provides tailored solutions to meet your
                needs.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <ProductCard
                  title="Fund Managers"
                  description="Streamline your fund operations and focus on what matters most - generating returns."
                  features={[
                    "Comprehensive fund administration",
                    "Digital subscription workflows",
                    "Portfolio management tools",
                    "Automated reporting",
                  ]}
                  icon={Building}
                  href="/fund-managers"
                  ctaText="Explore Fund Solutions"
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <ProductCard
                  title="Startups"
                  description="Connect with investors and secure the funding you need to grow your business."
                  features={[
                    "Streamlined fundraising process",
                    "Access to investor network",
                    "Milestone-based funding",
                    "Founder resources and tools",
                  ]}
                  icon={Rocket}
                  href="/startups"
                  ctaText="Start Fundraising"
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <ProductCard
                  title="Investors"
                  description="Discover vetted investment opportunities and manage your portfolio with ease."
                  features={[
                    "Curated investment opportunities",
                    "Portfolio analytics dashboard",
                    "Digital document signing",
                    "Syndicate formation tools",
                  ]}
                  icon={Briefcase}
                  href="/investors"
                  ctaText="Discover Investments"
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Stats Section with CountUp */}
        <section className="section-alt-accent section-spacing">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation type="fade" className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-white">By the numbers</h2>
              <h3 className="heading-md text-white mt-2">Fueling innovation</h3>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="scale" delay={0.1} className="text-center">
                <p className="stat-display text-light-mint">
                  π<CountUp end={124} suffix="M" />
                </p>
                <p className="stat-label text-white">Assets on platform</p>
              </ScrollAnimation>

              <ScrollAnimation type="scale" delay={0.2} className="text-center">
                <p className="stat-display text-light-mint">
                  <CountUp end={25} suffix="k+" />
                </p>
                <p className="stat-label text-white">Funds and syndicates</p>
              </ScrollAnimation>

              <ScrollAnimation type="scale" delay={0.3} className="text-center">
                <p className="stat-display text-light-mint">
                  <CountUp end={13} suffix="k+" />
                </p>
                <p className="stat-label text-white">Active startups</p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-alt-light section-spacing">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="slide" direction="up" className="mb-12">
              <h2 className="heading-md text-deep-teal text-center">Full Service Fund Management</h2>
              <p className="text-deep-teal/80 mt-4 max-w-3xl mx-auto text-center">
                fupi's full service offerings provide access to 50+ services that remove friction from fund management
                for venture funds, rolling funds, and syndicates.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <HoverCard className="h-full">
                  <Card className="bg-white border-none shadow-md h-full">
                    <CardHeader>
                      <div className="rounded-full bg-light-mint/10 w-12 h-12 flex items-center justify-center mb-4">
                        <Briefcase className="h-6 w-6 text-deep-teal" />
                      </div>
                      <CardTitle className="text-deep-teal">Venture Funds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-teal/80">
                        Raise capital, close deals, and manage your portfolio — all from a single platform.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <HoverCard className="h-full">
                  <Card className="bg-white border-none shadow-md h-full">
                    <CardHeader>
                      <div className="rounded-full bg-light-mint/10 w-12 h-12 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-deep-teal" />
                      </div>
                      <CardTitle className="text-deep-teal">SPVs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-teal/80">
                        Raise privately on a deal-by-deal basis and leverage the fupi Capital Network.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <HoverCard className="h-full">
                  <Card className="bg-white border-none shadow-md h-full">
                    <CardHeader>
                      <div className="rounded-full bg-light-mint/10 w-12 h-12 flex items-center justify-center mb-4">
                        <LineChart className="h-6 w-6 text-deep-teal" />
                      </div>
                      <CardTitle className="text-deep-teal">Scout Funds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-teal/80">
                        Eliminate the heavy operational burden by launching or scaling your scout program.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.4}>
                <HoverCard className="h-full">
                  <Card className="bg-white border-none shadow-md h-full">
                    <CardHeader>
                      <div className="rounded-full bg-light-mint/10 w-12 h-12 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-deep-teal" />
                      </div>
                      <CardTitle className="text-deep-teal">Digital Subscriptions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-teal/80">
                        Replace subscription paperwork with flexible digital workflows that are custom to each LP.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCard>
              </ScrollAnimation>
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="accent" size="lg" className="group">
                  Explore all services
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Section with Hover Effects */}
        <section className="section-alt-dark section-spacing">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation type="fade" className="text-center mb-12">
              <h2 className="heading-md text-white">Better together. fupi partners with industry leaders.</h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Partner logos with hover effects */}
              <HoverCard className="bg-white/10 p-6 rounded-lg w-full max-w-[200px] h-20 flex items-center justify-center">
                <p className="text-white font-semibold">Partner 1</p>
              </HoverCard>
              <HoverCard className="bg-white/10 p-6 rounded-lg w-full max-w-[200px] h-20 flex items-center justify-center">
                <p className="text-white font-semibold">Partner 2</p>
              </HoverCard>
              <HoverCard className="bg-white/10 p-6 rounded-lg w-full max-w-[200px] h-20 flex items-center justify-center">
                <p className="text-white font-semibold">Partner 3</p>
              </HoverCard>
              <HoverCard className="bg-white/10 p-6 rounded-lg w-full max-w-[200px] h-20 flex items-center justify-center">
                <p className="text-white font-semibold">Partner 4</p>
              </HoverCard>
            </div>

            <ScrollAnimation type="fade" delay={0.4} className="mt-12 text-center">
              <Link href="/partners">
                <Button variant="outline" className="group">
                  Our premier partnership program assembles top professionals to deliver comprehensive expertise &
                  support
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-alt-light section-spacing">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade" className="text-center mb-12">
              <h2 className="heading-md text-deep-teal">What our customers say</h2>
              <p className="text-deep-teal/80 max-w-2xl mx-auto mt-4">
                Join thousands of fund managers, startups, and investors who trust fupi to power their financial
                operations.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <TestimonialCard
                  quote="fupi has completely transformed how we manage our fund. The digital subscription workflows alone have saved us countless hours and thousands in legal fees."
                  author="Sarah Johnson"
                  role="Managing Partner"
                  company="Horizon Ventures"
                  rating={5}
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <TestimonialCard
                  quote="As a startup founder, raising capital used to be a nightmare of paperwork and coordination. With fupi, we closed our seed round in half the time it would have taken otherwise."
                  author="Michael Chen"
                  role="CEO"
                  company="EcoChain"
                  rating={5}
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <TestimonialCard
                  quote="The portfolio analytics tools give me real-time insights into my investments that I couldn't get anywhere else. It's changed how I make investment decisions."
                  author="David Rodriguez"
                  role="Angel Investor"
                  company="Pi Network"
                  rating={5}
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section with Button Animation */}
        <section className="section-alt-dark section-spacing">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollAnimation type="fade">
              <h2 className="heading-md text-white mb-6">Ready to join the fupi ecosystem?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Whether you are a startup looking for funding, an investor seeking opportunities, or a fund manager
                streamlining operations, fupi has a place for you.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="highlight" size="lg">
                  Contact sales
                </Button>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
    </div>
  )
}

