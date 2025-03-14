import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  description: string
}

export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <Card className="bg-white border-none shadow-md">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-medium text-deep-teal/70">{title}</h3>
        <p className="text-3xl font-bold text-bronze-gold">{value}</p>
        <p className="text-xs text-deep-teal/70">{description}</p>
      </CardContent>
    </Card>
  )
}

