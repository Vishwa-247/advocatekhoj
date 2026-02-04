import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Glossary from "@/components/law-library/glossary";

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Glossary />
      <Footer />
    </div>
  );
}
