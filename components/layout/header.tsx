"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="AdvocateKhoj Logo"
              width={60}
              height={60}
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {[
            { href: "/client/dashboard", label: "Post a Case" },
            { href: "/advocate/dashboard", label: "Join as Advocate" },
            { href: "/law-library", label: "Law Library" },
            { href: "/law-colleges", label: "Law College" },
            { href: "/sawal-jawab", label: "Sawal Jawab" },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-sm font-medium transition-colors pb-2 ${
                pathname === tab.href
                  ? "text-primary border-b-2 border-orange-500"
                  : "hover:text-primary border-b-2 border-transparent"
              }`}
              style={{ transition: "border-color 0.2s" }}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" asChild>
            <Link href="/auth">Login</Link>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90" asChild>
            <Link href="/auth">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/client/dashboard"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Post a Case
            </Link>
            <Link
              href="/advocate/dashboard"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join as Advocate
            </Link>
            <Link
              href="/law-library"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Law Library
            </Link>
            <Link
              href="/law-colleges"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Law College
            </Link>
            <Link
              href="/sawal-jawab"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sawal Jawab
            </Link>
            <div className="pt-3 border-t space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/auth">Login</Link>
              </Button>
              <Button
                className="w-full bg-secondary hover:bg-secondary/90"
                asChild
              >
                <Link href="/auth">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
