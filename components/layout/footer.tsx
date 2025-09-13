import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Company
            </h3>
            <div className="space-y-2">
              <Link
                href="/about-us"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/media-coverage"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Media Coverage
              </Link>
              <Link
                href="/contact-us"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Resources
            </h3>
            <div className="space-y-2">
              <Link
                href="/blogs"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/advertise"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Advertise
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Legal</h3>
            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/user-agreement"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                User Agreement
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Social
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/advocatekhoj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com/scjudgments"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/advocatekho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
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
