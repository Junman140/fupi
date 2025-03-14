"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HoverCard } from "@/components/hover-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  href: string
  ctaText?: string
}

export function ProductCard({
  title,
  description,
  features,
  icon: Icon,
  href,
  ctaText = "Learn more",
}: ProductCardProps) {
  return (
    <HoverCard className="h-full">
      <Card className="bg-white border-none shadow-md h-full flex flex-col">
        <CardHeader>
          <div className="rounded-full bg-light-mint/10 w-12 h-12 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-deep-teal" />
          </div>
          <CardTitle className="text-deep-teal">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-deep-teal/80 mb-6">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-light-mint mr-2 text-lg">•</span>
                <span className="text-deep-teal/80">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link href={href} className="w-full">
            <Button variant="accent" className="w-full group">
              {ctaText}
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
        </CardFooter>
      </Card>
    </HoverCard>
  )
}

