"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

const libraryCategories = [
  {
    title: "Bare Acts",
    description: "Access all Indian acts passed by Parliament.",
    link: "/law-library/bare-acts",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Supreme Court Judgments",
    description: "Find judgments passed by the Supreme Court of India.",
    link: "/law-library/judgements",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Glossary",
    description: "Look up legal terms and their definitions easily.",
    link: "/law-library/glossary",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function LawLibrary() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = libraryCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fcfbf7]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e293b] tracking-wider mb-4">
            LAW LIBRARY
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">
            Free & Authoritative Legal Resources of India
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden p-1 pr-1 pl-4 group transition-all hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary/20">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Act, Case, or Topic..."
                className="border-none focus-visible:ring-0 text-lg placeholder:text-gray-400 h-12 w-full bg-transparent"
              />
              <button
                className="bg-[#1e293b] text-white p-3 rounded-full hover:bg-black transition-colors flex items-center justify-center w-12 h-12"
                aria-label="Search"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Legal Tips Restoration */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-1/4 bg-yellow-50 flex items-center justify-center p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="flex-1 p-8">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Legal Tips</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Do you have questions about hiring an advocate or do you need some tips on what to say when you do meet an advocate?
                  We provide some pointers on everything from hiring an advocate to negotiating the best deal!
                  Find the best possible advocate for your legal problems.
                </p>
                <Link
                  href="/law-library/legal-tips"
                  className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  Read Legal Tips <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-2xl font-bold text-[#1e293b] whitespace-nowrap">
            Explore the Law Library
          </h2>
          <div className="h-[1px] bg-gray-200 w-full"></div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map((category) => (
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
                  <div className="mt-auto flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all uppercase tracking-wider">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 grayscale opacity-50">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-900">No categories found</h3>
            <p className="text-gray-600">Try searching for something else like "Act" or "Judgments"</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
