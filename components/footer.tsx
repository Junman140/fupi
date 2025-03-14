import Link from "next/link"
import { Rocket, Twitter, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-deep-teal border-t border-light-mint/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-light-mint" />
              <span className="text-xl font-bold text-white">fupi</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              fupi is a comprehensive platform for fund managers, startups, and investors in the Pi Network ecosystem,
              providing tools for fund administration, capital raising, and portfolio management.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-light-mint transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-light-mint transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-light-mint transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:info@fupi.com" className="text-white/70 hover:text-light-mint transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-light-mint font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fund-managers/administration"
                  className="text-white/70 hover:text-light-mint transition-colors"
                >
                  Fund Administration
                </Link>
              </li>
              <li>
                <Link
                  href="/fund-managers/capital-formation"
                  className="text-white/70 hover:text-light-mint transition-colors"
                >
                  Capital Formation
                </Link>
              </li>
              <li>
                <Link href="/fund-managers/portfolio" className="text-white/70 hover:text-light-mint transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/fund-managers/reporting" className="text-white/70 hover:text-light-mint transition-colors">
                  Fund Reporting
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-light-mint transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-light-mint font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-white/70 hover:text-light-mint transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-white/70 hover:text-light-mint transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-white/70 hover:text-light-mint transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-light-mint transition-colors">
                  Webinars & Events
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/70 hover:text-light-mint transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-light-mint font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-light-mint transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-light-mint transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-light-mint transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-light-mint transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-light-mint transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-light-mint/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-light-mint font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/70">
                Stay updated with the latest news, product updates, and industry insights.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-deep-teal border border-light-mint/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-light-mint/50"
              />
              <Button variant="highlight">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-light-mint/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} fupi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

