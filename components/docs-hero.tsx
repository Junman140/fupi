interface DocsHeroProps {
  title: string
  description: string
}

export function DocsHero({ title, description }: DocsHeroProps) {
  return (
    <div className="py-20 border-b border-mint-green/20 bg-gradient-dark backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint-green mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-mint-green/80 max-w-3xl">{description}</p>
      </div>
    </div>
  )
}

