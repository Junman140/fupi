"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Rocket, Users, Vote, FileText, Settings, MenuIcon, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { usePiWallet } from "@/components/pi-wallet-provider"

export function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isConnected } = usePiWallet()

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Startups", href: "/startups", icon: Rocket },
    { name: "Investors", href: "/investors", icon: Users },
    { name: "Governance", href: "/governance", icon: Vote },
    { name: "Documentation", href: "/docs", icon: FileText },
  ]

  // Only show dashboard if wallet is connected
  const authenticatedItems = [{ name: "Dashboard", href: "/dashboard", icon: Settings, requiresAuth: true }]

  const allItems = [...menuItems, ...(isConnected ? authenticatedItems : [])]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px] bg-gradient-dark backdrop-blur-md">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Rocket className="h-6 w-6 text-mint-green" />
              <span className="text-xl font-bold text-mint-green">fupi</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-1">
            {allItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-mint-green/10 text-mint-green"
                    : "text-vibrant-text hover:bg-mint-green/5 hover:text-mint-green"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-mint-green/10">
            <ConnectWalletButton variant="outline" className="w-full" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

