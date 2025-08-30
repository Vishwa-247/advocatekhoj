import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="AdvocateKhoj" width={32} height={32} className="invert" />
             
            </div>
            <p className="text-gray-300 text-sm">
              India's leading legal services platform connecting clients with qualified advocates.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/law-library" className="block text-gray-300 hover:text-white text-sm">
                Law Library
              </Link>
              <Link href="/law-colleges" className="block text-gray-300 hover:text-white text-sm">
                Law Colleges
              </Link>
              <Link href="/sawal-jawab" className="block text-gray-300 hover:text-white text-sm">
                Sawal Jawab
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white text-sm">
                Terms & Conditions
              </Link>
              <Link href="/user-agreement" className="block text-gray-300 hover:text-white text-sm">
                User Agreement
              </Link>
              <Link href="/advertise" className="block text-gray-300 hover:text-white text-sm">
                Advertise
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@advocatekhoj.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 11 4567 8900</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 AdvocateKhoj. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}
