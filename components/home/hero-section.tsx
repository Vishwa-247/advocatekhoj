import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Scale, Users, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your One-Stop <span className="text-primary">Legal</span> Solution
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with qualified advocates, access comprehensive law library, and get expert legal consultation all in
            one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/client/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Find a Lawyer
              </Button>
            </Link>
            <Link href="/advocate/dashboard">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Join as Advocate
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Verified Advocates</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Scale className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-600">Cases Resolved</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1,000+</div>
                <div className="text-sm text-gray-600">Legal Documents</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Search className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">110+</div>
                <div className="text-sm text-gray-600">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
