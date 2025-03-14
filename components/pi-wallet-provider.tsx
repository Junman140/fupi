"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { connectPiWallet, isPiSDKAvailable, type PiUser } from "@/lib/pi-sdk"

interface PiWalletContextType {
  user: PiUser | null
  isConnecting: boolean
  isConnected: boolean
  error: Error | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

const PiWalletContext = createContext<PiWalletContextType>({
  user: null,
  isConnecting: false,
  isConnected: false,
  error: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
})

export const usePiWallet = () => useContext(PiWalletContext)

interface PiWalletProviderProps {
  children: ReactNode
}

export function PiWalletProvider({ children }: PiWalletProviderProps) {
  const [user, setUser] = useState<PiUser | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Check for stored user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("pi_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsConnected(true)
      } catch (e) {
        console.error("Failed to parse stored user:", e)
        localStorage.removeItem("pi_user")
      }
    }
  }, [])

  const connectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      if (!isPiSDKAvailable()) {
        throw new Error("Pi SDK not available. Please use the Pi Browser.")
      }

      const user = await connectPiWallet()
      if (user) {
        setUser(user)
        setIsConnected(true)
        // Store user in localStorage for session persistence
        localStorage.setItem("pi_user", JSON.stringify(user))
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"))
      console.error("Wallet connection error:", err)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setUser(null)
    setIsConnected(false)
    localStorage.removeItem("pi_user")
  }

  return (
    <PiWalletContext.Provider
      value={{
        user,
        isConnecting,
        isConnected,
        error,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </PiWalletContext.Provider>
  )
}

