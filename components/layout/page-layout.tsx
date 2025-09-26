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

  // Hide banner on login/auth pages
  const shouldShowBanner = showBanner && !pathname?.includes("/auth");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Global Top Banner */}
      {shouldShowBanner && (
        <GlobalTopBanner
          rotationInterval={8000} // 8 seconds rotation
          className="border-b border-gray-200"
        />
      )}

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
