"use client"

import { Button } from "@/components/ui/button"
import { Loader2, Wallet, LogOut } from "lucide-react"
import { usePiWallet } from "@/components/pi-wallet-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { useEffect } from "react"

interface ConnectWalletButtonProps {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "xs" // Added xs size option
}

export function ConnectWalletButton({ variant = "default", size = "default" }: ConnectWalletButtonProps) {
  const { user, isConnecting, isConnected, error, connectWallet, disconnectWallet } = usePiWallet()

  // Show error toast if connection fails
  useEffect(() => {
    if (error) {
      toast({
        title: "Connection Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }, [error])

  if (isConnected && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={size} className="gap-1">
            <Wallet className={size === "xs" ? "h-3 w-3" : "h-4 w-4"} />
            <span className="truncate max-w-[80px]">{user.username}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Transactions</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnectWallet} className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button variant={variant} size={size} onClick={connectWallet} disabled={isConnecting}>
      {isConnecting ? (
        <>
          <Loader2 className={`mr-1 ${size === "xs" ? "h-3 w-3" : "h-4 w-4"} animate-spin`} />
          <span className={size === "xs" ? "text-xs" : ""}>Connecting...</span>
        </>
      ) : (
        <>
          <Wallet className={`mr-1 ${size === "xs" ? "h-3 w-3" : "h-4 w-4"}`} />
          <span className={size === "xs" ? "text-xs" : ""}>Connect</span>
        </>
      )}
    </Button>
  )
}

