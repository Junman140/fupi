"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code, Users, Rocket } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-light-primary dark:text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        fund.pi Documentation
      </motion.h1>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-6 w-6" /> Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn the basics of fund.pi and how to get started.</p>
              <Link href="/docs/getting-started">
                <Button variant="link" className="mt-2">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-6 w-6" /> API Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore our API documentation for developers.</p>
              <Link href="/docs/api">
                <Button variant="link" className="mt-2">
                  View API Docs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6" /> For Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn how to invest in startups on fund.pi.</p>
              <Link href="/docs/investors">
                <Button variant="link" className="mt-2">
                  Investor Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-6 w-6" /> For Startups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Guide for startups looking to raise funds on our platform.</p>
              <Link href="/docs/startups">
                <Button variant="link" className="mt-2">
                  Startup Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

