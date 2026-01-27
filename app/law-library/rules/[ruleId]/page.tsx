"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function RuleDetailPage() {
  const params = useParams();
  const ruleId = params.ruleId as string;

  // Rule data with table of contents structure
  const ruleData: {
    [key: string]: {
      title: string;
      year: string;
      updateInfo?: string;
      sections: Array<{
        number: string;
        title: string;
        href: string;
      }>;
    };
  } = {
    "aadhaar-authentication-2020": {
      title:
        "The Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020",
      year: "2020",
      updateInfo: "[Updated as on 1.4.2025]",
      sections: [
        {
          number: "1",
          title: "Short title and commencement",
          href: `/law-library/rules/${ruleId}/1`,
        },
        {
          number: "2",
          title: "Definitions",
          href: `/law-library/rules/${ruleId}/2`,
        },
        {
          number: "3",
          title: "Purposes for Aadhaar authentication",
          href: `/law-library/rules/${ruleId}/3`,
        },
        {
          number: "4",
          title: "Preparation of the proposal",
          href: `/law-library/rules/${ruleId}/4`,
        },
        {
          number: "5",
          title: "Examination of proposal",
          href: `/law-library/rules/${ruleId}/5`,
        },
      ],
    },
  };

  const rule = ruleData[ruleId];

  if (!rule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Rule Not Found
            </h1>
            <Link
              href="/law-library/rules"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Rules
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
          {/* Rule Title Section */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {rule.title}
            </h2>
            {rule.updateInfo && (
              <p className="text-gray-600">{rule.updateInfo}</p>
            )}
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="border-b px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800">Contents</h3>
            </div>

            <div className="p-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 px-3 bg-gray-50 font-bold text-gray-700">
                      Sections
                    </th>
                    <th className="text-left py-2 px-3 bg-gray-50 font-bold text-gray-700">
                      Particulars
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rule.sections.map((section, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="py-2 px-3 text-gray-700">
                        {section.number}
                      </td>
                      <td className="py-2 px-3">
                        <Link
                          href={section.href}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {section.title}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Back Button */}
              <div className="mt-6 pt-4 border-t flex items-center">
                <Link
                  href="/law-library/rules"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
                >
                  <span>◄</span> Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
