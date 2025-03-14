import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SettingsProvider } from "@/components/theme-provider"
import { PiWalletProvider } from "@/components/pi-wallet-provider"
import { Toaster } from "@/components/toaster"
import PiSdkScript from "@/app/pi-sdk-script"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "fupi - Comprehensive Fund Management Platform on Pi Network",
  description:
    "A comprehensive platform for fund managers, startups, and investors in the Pi Network ecosystem, providing tools for fund administration, capital raising, and portfolio management.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-deep-teal text-white flex flex-col`}>
        <SettingsProvider>
          <PiWalletProvider>
            <PiSdkScript />
            <Header />
            <main className="flex-grow pt-16 relative z-10">{children}</main>
            <Footer />
            <Toaster />
          </PiWalletProvider>
        </SettingsProvider>
      </body>
    </html>
  )
}

