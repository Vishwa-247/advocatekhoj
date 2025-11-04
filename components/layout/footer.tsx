import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Site Map */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Site Map
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/media-coverage"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Law Library */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Law Library
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/law-library/legal-tips"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Legal Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/areas-of-law"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Area of Law
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/bare-acts"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Indian Bare Acts
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/glossary"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/agreements"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Agreements
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/forms"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/judgements"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Judgements
                </Link>
              </li>
              <li>
                <Link
                  href="/law-library/rules"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Area */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Client Area
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/register"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/auth?userType=client&authMode=login"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          {/* Advocate Area */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Advocate Area
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/advocate/register"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/auth?userType=advocate&authMode=login"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/advocate-area#faqs"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/advocate-area#how-it-works"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Law School */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Law School
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/law-colleges"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Search Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="/sawal-jawab"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Search a Sawaal
                </Link>
              </li>
              <li>
                <Link
                  href="/sawal-jawab?mode=ask"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Ask a Sawaal
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-semibold mb-3 mt-6 text-secondary">
              Blogs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blogs"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-secondary">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/user-agreement"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  User Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/client/dashboard?section=advertisements"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  href="/media-coverage"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  Site Map
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-semibold mb-3 mt-6 text-secondary">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/advocatekhoj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/scjudgments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/advocatekho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-secondary text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Disclaimer */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="text-center text-xs text-white/60 leading-relaxed">
            <p className="mb-2">
              Information provided on advocatekhoj.com is solely available at
              your request for informational purposes only and should not be
              interpreted as soliciting or advertisement
            </p>
            <p>&copy; 2025 AdvocateKhoj. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
