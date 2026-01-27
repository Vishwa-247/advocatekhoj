"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ReportDetailPage() {
  const params = useParams();
  const reportId = params.reportId as string;

  // Report data with table of contents structure
  const reportData: {
    [key: string]: {
      reportNo: string;
      title: string;
      chapters: Array<{
        number: string;
        title: string;
        href: string;
      }>;
    };
  } = {
    "liability-state-tort": {
      reportNo: "01",
      title: "Liability of the State in Tort",
      chapters: [
        {
          number: "Chapter I",
          title: "Introductory",
          href: `/law-library/law-commission-reports/${reportId}/chapter-1`,
        },
        {
          number: "Chapter II",
          title: "Existing Law in India (1)",
          href: `/law-library/law-commission-reports/${reportId}/chapter-2`,
        },
        {
          number: "Chapter III",
          title: "The Law in England",
          href: `/law-library/law-commission-reports/${reportId}/chapter-3`,
        },
        {
          number: "Chapter IV",
          title: "The Law in The U.S.A",
          href: `/law-library/law-commission-reports/${reportId}/chapter-4`,
        },
        {
          number: "Chapter V",
          title: "The Law in Australia",
          href: `/law-library/law-commission-reports/${reportId}/chapter-5`,
        },
        {
          number: "Chapter VI",
          title: "The Law in France",
          href: `/law-library/law-commission-reports/${reportId}/chapter-6`,
        },
        {
          number: "Chapter VII",
          title: "Rule of Statutory Construction",
          href: `/law-library/law-commission-reports/${reportId}/chapter-7`,
        },
        {
          number: "Chapter VIII",
          title: "Conclusions and Proposals",
          href: `/law-library/law-commission-reports/${reportId}/chapter-8`,
        },
      ],
    },
  };

  const report = reportData[reportId];

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Report Not Found
            </h1>
            <Link
              href="/law-library/law-commission-reports"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Law Commission Reports
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
          {/* Report Title Section */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-6 text-center">
            <p className="text-gray-600 mb-2">Report No. {report.reportNo}</p>
            <h2 className="text-2xl font-bold text-gray-900">{report.title}</h2>
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
                      Chapter
                    </th>
                    <th className="text-left py-2 px-3 bg-gray-50 font-bold text-gray-700">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.chapters.map((chapter, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="py-2 px-3 text-gray-700">
                        {chapter.number}
                      </td>
                      <td className="py-2 px-3">
                        <Link
                          href={chapter.href}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {chapter.title}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Back Button */}
              <div className="mt-6 pt-4 border-t flex items-center">
                <Link
                  href="/law-library/law-commission-reports"
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
