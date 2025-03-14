"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket, ChevronDown, ChevronUp } from "lucide-react"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { usePathname } from "next/navigation"
import { MenuBar } from "@/components/menu-bar"
import { usePiWallet } from "@/components/pi-wallet-provider"
import { motion, AnimatePresence } from "framer-motion"

interface DropdownItem {
  title: string
  href: string
  description?: string
}

interface NavItem {
  title: string
  href?: string
  dropdown?: DropdownItem[]
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { isConnected } = usePiWallet()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Navigation items with dropdowns
  const navItems: NavItem[] = [
    {
      title: "For Fund Managers",
      dropdown: [
        {
          title: "Fund Administration",
          href: "/fund-managers/administration",
          description: "Streamline your fund operations with our comprehensive administration tools",
        },
        {
          title: "Capital Formation",
          href: "/fund-managers/capital-formation",
          description: "Raise capital efficiently with our digital subscription workflows",
        },
        {
          title: "Portfolio Management",
          href: "/fund-managers/portfolio",
          description: "Track and manage your investments with powerful analytics",
        },
        {
          title: "Fund Reporting",
          href: "/fund-managers/reporting",
          description: "Generate professional reports for your LPs and stakeholders",
        },
      ],
    },
    {
      title: "For Startups",
      dropdown: [
        {
          title: "Raise Capital",
          href: "/startups",
          description: "Connect with investors and secure funding for your venture",
        },
        {
          title: "Apply for Funding",
          href: "/apply",
          description: "Submit your startup for consideration by our investor network",
        },
        {
          title: "Startup Resources",
          href: "/startups/resources",
          description: "Access guides, templates, and tools to help your startup grow",
        },
        {
          title: "Success Stories",
          href: "/startups/success-stories",
          description: "Learn from startups that have successfully raised on our platform",
        },
      ],
    },
    {
      title: "For Investors",
      dropdown: [
        {
          title: "Investment Opportunities",
          href: "/investors",
          description: "Discover vetted startups and investment opportunities",
        },
        {
          title: "Portfolio Dashboard",
          href: "/dashboard",
          description: "Track and manage your investment portfolio",
        },
        {
          title: "Investor Network",
          href: "/investors/network",
          description: "Connect with other investors and form syndicates",
        },
        {
          title: "Due Diligence Tools",
          href: "/investors/due-diligence",
          description: "Access comprehensive tools to evaluate potential investments",
        },
      ],
    },
    {
      title: "Resources",
      dropdown: [
        {
          title: "Blog",
          href: "/blog",
          description: "Insights and updates from the fupi team",
        },
        {
          title: "Documentation",
          href: "/docs",
          description: "Technical guides and API documentation",
        },
        {
          title: "Help Center",
          href: "/help",
          description: "FAQs and support resources",
        },
        {
          title: "Webinars & Events",
          href: "/events",
          description: "Join our educational webinars and networking events",
        },
      ],
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`} ref={dropdownRef}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-light-mint" />
              <span className="text-xl font-bold text-white">fupi</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      openDropdown === item.title ? "text-light-mint" : "text-white hover:text-light-mint"
                    }`}
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    {openDropdown === item.title ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href ? "text-light-mint" : "text-white hover:text-light-mint"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                <AnimatePresence>
                  {openDropdown === item.title && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 rounded-md bg-deep-teal shadow-lg ring-1 ring-light-mint/10 z-50"
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-light-mint/10 transition-colors"
                            onClick={closeDropdown}
                          >
                            <div className="font-medium text-light-mint">{dropdownItem.title}</div>
                            {dropdownItem.description && (
                              <p className="text-sm text-white/70 mt-1">{dropdownItem.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isConnected && (
              <Link href="/dashboard" className="hidden lg:block">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            )}
            <ConnectWalletButton variant="highlight" size="sm" />
            <MenuBar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

