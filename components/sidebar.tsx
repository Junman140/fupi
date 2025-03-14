"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Rocket, Settings } from "lucide-react"
import { ConnectWalletButton } from "@/components/connect-wallet-button"

const Sidebar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gradient-dark backdrop-blur-md">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">fund.pi</span>
            </Link>
            <Button variant="outline" size="icon" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link href="/startups" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Startups
              </Button>
            </Link>
            <Link href="#investors" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Investors
              </Button>
            </Link>
            <Link href="#governance" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Governance
              </Button>
            </Link>
          </nav>
          <div className="mt-auto space-y-4">
            <Link href="/dashboard" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                Dashboard
              </Button>
            </Link>
            <Link href="/settings" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <ConnectWalletButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar

