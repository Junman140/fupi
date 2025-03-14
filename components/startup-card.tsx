"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { HoverCard } from "@/components/hover-card"
import { motion } from "framer-motion"

interface StartupCardProps {
  name: string
  description: string
  raised: string
  goal: string
  progress: number
  category: string
  daysLeft: number
}

export function StartupCard({ name, description, raised, goal, progress, category, daysLeft }: StartupCardProps) {
  return (
    <HoverCard className="h-full">
      <Card className="overflow-hidden h-full flex flex-col bg-white border-none shadow-md">
        <CardHeader className="p-0">
          <div className="h-48 bg-deep-teal flex items-center justify-center">
            <div className="text-4xl font-bold text-light-mint">{name}</div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <Badge variant="outline" className="bg-light-mint/10 text-deep-teal border-light-mint">
              {category}
            </Badge>
            <div className="flex items-center text-sm text-deep-teal/70">
              <Clock className="mr-1 h-4 w-4" />
              {daysLeft} days left
            </div>
          </div>
          <h3 className="font-semibold text-xl mb-2 text-deep-teal">{name}</h3>
          <p className="text-deep-teal/80 mb-4">{description}</p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-deep-teal/70">
              <span>Raised: {raised}</span>
              <span>Goal: {goal}</span>
            </div>
            <Progress value={progress} className="h-2 bg-deep-teal/10" />
            <div className="text-sm text-right text-deep-teal/70">{progress}% funded</div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/startups/${name.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
            <Button variant="accent" className="w-full group">
              View Details
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

