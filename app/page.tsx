import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import AdBanner from "@/components/home/ad-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Top Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner size="large" position="top" />
      </div>

      <HeroSection />

      {/* Middle Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="medium" position="middle" />
      </div>

      <FeaturesSection />

      {/* Bottom Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" position="bottom" />
      </div>

      <Footer />
    </div>
  )
}
