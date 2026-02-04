import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LegalTips } from "@/components/law-library/legal-tips";

export default function LegalTipsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <LegalTips />
      <Footer />
    </div>
  );
}
