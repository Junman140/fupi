"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()

  const navigation = [
    {
      title: "Getting Started",
      links: [
        { href: "/docs/getting-started", title: "Introduction" },
        { href: "/docs/installation", title: "Installation" },
        { href: "/docs/quickstart", title: "Quickstart" },
      ],
    },
    {
      title: "Platform",
      links: [
        { href: "/docs/platform-overview", title: "Overview" },
        { href: "/docs/architecture", title: "Architecture" },
        { href: "/docs/security", title: "Security" },
      ],
    },
    {
      title: "Guides",
      links: [
        { href: "/docs/investors", title: "For Investors" },
        { href: "/docs/startups", title: "For Startups" },
        { href: "/docs/governance", title: "Governance" },
      ],
    },
    {
      title: "API Reference",
      links: [
        { href: "/docs/api", title: "API Overview" },
        { href: "/docs/api/authentication", title: "Authentication" },
        { href: "/docs/api/endpoints", title: "Endpoints" },
      ],
    },
  ]

  return (
    <div className="relative min-h-screen bg-forest-green">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(127, 255, 212, 0.1) 0px,
            rgba(127, 255, 212, 0.1) 40px,
            transparent 40px,
            transparent 80px
          )`,
          }}
        />
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-mint-green/20 bg-gradient-dark backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-mint-green text-xl lg:text-2xl font-medium">
                Join our developer community to stay on top of new releases, features, and updates.
              </div>
              <div className="flex gap-2 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-64 px-4 py-2 rounded-md bg-forest-green border border-mint-green/20 text-mint-green placeholder:text-mint-green/50 focus:outline-none focus:ring-2 focus:ring-mint-green/50"
                />
                <button className="px-6 py-2 bg-mint-green text-forest-green rounded-md font-medium hover:bg-mint-green/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:block">
              <nav className="sticky top-24 space-y-8">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-semibold text-mint-green mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "block py-1.5 text-sm transition-colors",
                              pathname === link.href
                                ? "text-mint-green font-medium"
                                : "text-mint-green/70 hover:text-mint-green",
                            )}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-invert max-w-none prose-mint"
              >
                {children}
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

