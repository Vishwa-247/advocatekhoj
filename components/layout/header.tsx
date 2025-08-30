"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="AdvocateKhoj" width={90} height={90} />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border py-2">
                  <Link href="/client/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Find a Lawyer
                  </Link>
                  <Link href="/advocate/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Join as Advocate
                  </Link>
                  <Link href="/messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Messages
                  </Link>
                </div>
              )}
            </div>

            <Link href="/law-library" className="text-gray-700 hover:text-primary transition-colors">
              Law Library
            </Link>
            <Link href="/law-colleges" className="text-gray-700 hover:text-primary transition-colors">
              Law Colleges
            </Link>
            <Link href="/sawal-jawab" className="text-gray-700 hover:text-primary transition-colors">
              Sawal Jawab
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-4">
              <Link href="/client/dashboard" className="block text-gray-700 hover:text-primary">
                Find a Lawyer
              </Link>
              <Link href="/advocate/dashboard" className="block text-gray-700 hover:text-primary">
                Join as Advocate
              </Link>
              <Link href="/law-library" className="block text-gray-700 hover:text-primary">
                Law Library
              </Link>
              <Link href="/law-colleges" className="block text-gray-700 hover:text-primary">
                Law Colleges
              </Link>
              <Link href="/sawal-jawab" className="block text-gray-700 hover:text-primary">
                Sawal Jawab
              </Link>
              {/* Added messages link to mobile menu */}
              <Link href="/messages" className="block text-gray-700 hover:text-primary">
                Messages
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/auth" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Login
                  </Button>
                </Link>
                <Link href="/auth" className="block">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
