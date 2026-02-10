"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GlobalTopBanner from "@/components/global/global-top-banner";

interface PageLayoutProps {
  children: React.ReactNode;
  showBanner?: boolean;
}

export default function PageLayout({
  children,
  showBanner = true,
}: PageLayoutProps) {
  const pathname = usePathname();

  // Optionally hide banners on dedicated auth routes
  const shouldShowBanner =
    showBanner &&
    !pathname?.startsWith("/login") &&
    !pathname?.startsWith("/register");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Top Banner */}
      {shouldShowBanner && (
        <GlobalTopBanner
          rotationInterval={8000} // 8 seconds rotation
          className="border-b border-[#001944]/20"
          placement="top"
        />
      )}

      <Header />

      <main className="flex-1">{children}</main>

      {shouldShowBanner && (
        <GlobalTopBanner
          rotationInterval={8000}
          className="border-t border-[#001944]/20"
          placement="bottom"
        />
      )}

      <Footer />
    </div>
  );
}
