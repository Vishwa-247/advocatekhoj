"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BareActSectionPage() {
  const params = useParams();
  const actId = params.actId as string;
  const sectionId = params.sectionId as string;

  // Section content data
  const sectionData: Record<
    string,
    {
      chapter: string;
      chapterTitle: string;
      number: string;
      title: string;
      content: string[];
      prev: string | null;
      next: string | null;
    }
  > = {
    "1": {
      chapter: "Chapter I",
      chapterTitle: "Preliminary",
      number: "1",
      title: "Short title, extent and commencement",
      content: [
        "1. Short title, extent and commencement.-",
        "(1) This Act may be called the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016.",
        "(2) It shall extend to the whole of India save as otherwise provided in this Act and save as otherwise provided in this Act.",
        "(3) It shall come into force on such date(1) as the Central Government may, by notification in the Official Gazette, appoint; and different dates may be appointed for different provisions of this Act and any reference in any provision to the commencement of this Act shall be construed in relation to that provision, as a reference to the coming into force of that provision.",
      ],
      prev: null,
      next: "2",
    },
    "2": {
      chapter: "Chapter I",
      chapterTitle: "Preliminary",
      number: "2",
      title: "Definitions",
      content: [
        "2. Definitions.-",
        "In this Act, unless the context otherwise requires,—",
      ],
      prev: "1",
      next: "3",
    },
  };

  const section = sectionData[sectionId];
  const actTitle =
    "The Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016";

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Section Not Found
            </h1>
            <Link
              href={`/law-library/bare-acts/${actId}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Act
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Yellow gradient header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-3">Law Library</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Act Title */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-4 text-center">
            <h2 className="text-xl font-bold text-gray-900">{actTitle}</h2>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">{section.chapter}</span>
            </p>
            <p className="text-gray-600">{section.chapterTitle}</p>
          </div>

          {/* Section Content */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              {section.number}. {section.title}
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              {section.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 pt-6 border-t flex items-center justify-between">
              <Link
                href={`/law-library/bare-acts/${actId}`}
                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
              >
                <span>◄</span> Back
              </Link>

              <Link
                href={`/law-library/bare-acts/${actId}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Index
              </Link>

              {section.next ? (
                <Link
                  href={`/law-library/bare-acts/${actId}/${section.next}`}
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
                >
                  Next <span>►</span>
                </Link>
              ) : (
                <span className="text-gray-400 inline-flex items-center gap-2">
                  Next <span>►</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
