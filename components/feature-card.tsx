import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-mint-green/20 bg-gradient-dark backdrop-blur-sm p-6">
      <div className="rounded-full bg-mint-green/10 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-mint-green" />
      </div>
      <h3 className="text-xl font-bold text-mint-green mb-2">{title}</h3>
      <p className="text-mint-green/80">{description}</p>
    </div>
  )
}

