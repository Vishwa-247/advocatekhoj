import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const libraryCategories = [
  {
    title: "Bare Acts",
    description: "Access all Indian acts passed by Parliament.",
    link: "/law-library/bare-acts",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Supreme Court Judgments",
    description: "Find judgments passed by the Supreme Court of India.",
    link: "/law-library/judgements",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Forms",
    description: "Free downloads of formats of legal forms and documents.",
    link: "/law-library/forms",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Areas of Law",
    description: "Learn about different areas of Indian law and practice.",
    link: "/law-library/areas-of-law",
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Agreements",
    description: "Understand the essentials of contract agreements.",
    link: "/law-library/agreements",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca09c78?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rules",
    description: "Access latest rules laid down to give effect to law.",
    link: "/law-library/rules",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a7ba20a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Law Commission Reports",
    description: "Read reports published by the Law Commission of India.",
    link: "/law-library/law-commission-reports",
    image: "https://images.unsplash.com/photo-1543165796-5426273ea458?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Glossary",
    description: "Look up legal terms and their definitions easily.",
    link: "/law-library/glossary",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function LawLibrary() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#1e293b] tracking-wide mb-4">
            LAW LIBRARY
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">
            Free & Authoritative Legal Resources of India
          </p>

          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden p-1 pr-1 pl-4 group transition-all hover:border-[#1e293b]/30">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-primary" />
              <Input
                placeholder="Search by Act, Case, or Topic..."
                className="border-none focus-visible:ring-0 text-lg placeholder:text-gray-400 h-12 w-full bg-transparent"
              />
              <button
                className="bg-[#1e293b] text-white p-3 rounded-full hover:bg-black transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Popular:</span>
            {["IPC", "CrPC", "Consumer Law", "Property Law"].map((tag) => (
              <Link key={tag} href={`/search?q=${tag}`} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-2xl font-serif text-[#1e293b] whitespace-nowrap">
            Explore the Law Library
          </h2>
          <div className="h-[1px] bg-gray-200 w-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {libraryCategories.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  Explore <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
