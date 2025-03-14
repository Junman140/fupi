import { Card } from "@/components/ui/card"
import { HoverCard } from "@/components/hover-card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
  imageSrc?: string
}

export function TestimonialCard({ quote, author, role, company, rating = 5, imageSrc }: TestimonialCardProps) {
  return (
    <HoverCard className="h-full">
      <Card className="testimonial-card h-full flex flex-col">
        {/* Rating stars */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-bronze-gold fill-bronze-gold" : "text-gray-300"}`} />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-grow mb-6">
          <p className="text-deep-teal italic">&ldquo;{quote}&rdquo;</p>
        </blockquote>

        {/* Author info */}
        <div className="flex items-center">
          {imageSrc ? (
            <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
              <img src={imageSrc || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="mr-4 w-12 h-12 rounded-full bg-deep-teal flex items-center justify-center">
              <span className="text-light-mint font-bold text-lg">{author.charAt(0)}</span>
            </div>
          )}
          <div>
            <p className="font-semibold text-deep-teal">{author}</p>
            <p className="text-sm text-deep-teal/70">
              {role}, {company}
            </p>
          </div>
        </div>
      </Card>
    </HoverCard>
  )
}

