"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Scale, FileText } from "lucide-react";
import { getCategoryById, getTopicContent } from "@/lib/areas-of-law-content";
import { useEffect, useState } from "react";

export default function TopicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.categoryId as string;
  const topicId = params.topicId as string;

  const [activeSection, setActiveSection] = useState<string>("");

  const category = getCategoryById(categoryId);
  const topicContent = getTopicContent(categoryId, topicId);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("data-section") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!topicContent || !category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Content Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested legal topic content is not available yet.
          </p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/areas-of-law" className="hover:underline">
              Areas of Law
            </Link>
            <span>&gt;</span>
            <span className="font-medium">{category.title}</span>
          </div>
          <h1 className="text-4xl font-bold">{topicContent.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-yellow-500" />
                    <h2 className="text-lg font-bold text-gray-800">
                      Contents
                    </h2>
                  </div>

                  <nav className="space-y-2">
                    {topicContent.sections.map((section, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(`section-${index}`)}
                        className={`w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                          activeSection === `section-${index}`
                            ? "bg-yellow-50 text-yellow-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {index + 1}. {section.title}
                      </button>
                    ))}
                  </nav>

                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    onClick={() => router.back()}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </div>

                {/* Sidebar Banner */}
                <div className="mt-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        Do It Yourself
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Legal Documents
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Sale Deed</li>
                        <li>• Joint Ventures</li>
                        <li>• Create a Will</li>
                        <li>• Adoption Deed</li>
                        <li>• Hire Agreement</li>
                        <li>• Mortgage Deed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-8">
                  {/* Title with Icon */}
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b">
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <Scale className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {topicContent.title}
                      </h1>
                      <p className="text-gray-600">
                        Comprehensive legal information and guidelines
                      </p>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {topicContent.introduction}
                    </p>
                  </div>

                  {/* Sections */}
                  <div className="space-y-8">
                    {topicContent.sections.map((section, index) => (
                      <div
                        key={index}
                        data-section={`section-${index}`}
                        className="scroll-mt-20"
                      >
                        <div className="bg-gradient-to-r from-yellow-50 to-transparent border-l-4 border-yellow-500 pl-6 py-4 mb-4">
                          <h2 className="text-2xl font-bold text-gray-900">
                            {section.title}
                          </h2>
                        </div>

                        <div className="space-y-4 ml-2">
                          {section.content.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-gray-700 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}

                          {/* Subsections */}
                          {section.subsections && (
                            <div className="mt-6 space-y-6">
                              {section.subsections.map(
                                (subsection, subIndex) => (
                                  <div
                                    key={subIndex}
                                    className="ml-4 pl-6 border-l-2 border-gray-200"
                                  >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                      {subsection.title}
                                    </h3>
                                    <div className="space-y-2">
                                      {subsection.content.map(
                                        (subPara, spIndex) => (
                                          <p
                                            key={spIndex}
                                            className="text-gray-700 leading-relaxed"
                                          >
                                            {subPara}
                                          </p>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Related Topics */}
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Related Topics in {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.subcategories.map((subcat, idx) => {
                        const subTopicId = (idx + 1).toString();
                        if (subTopicId === topicId) return null;

                        return (
                          <Link
                            key={idx}
                            href={`/law-library/areas-of-law/${categoryId}/${subTopicId}`}
                            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-yellow-50 hover:border-yellow-300 transition-colors"
                          >
                            <FileText className="w-5 h-5 text-yellow-600" />
                            <span className="text-gray-700 hover:text-yellow-700 font-medium">
                              {subcat}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
