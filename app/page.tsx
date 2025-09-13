import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import AdBanner from "@/components/home/ad-banner";
import NewsTicker from "@/components/home/news-ticker";
import AdvertiserSection from "@/components/home/advertiser-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* News Ticker */}
      <NewsTicker />

      {/* Top Advertisement Banner - Two banners side by side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner size="large" position="top" layout="double" />
      </div>

      <HeroSection />

      {/* Middle Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="medium" position="middle" />
      </div>

      <FeaturesSection />

      {/* Advertiser Section */}
      <AdvertiserSection />

      {/* Bottom Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" position="bottom" />
      </div>

      <Footer />
    </div>
  );
}
