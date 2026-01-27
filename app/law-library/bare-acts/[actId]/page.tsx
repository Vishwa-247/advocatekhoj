"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BareActDetailPage() {
  const params = useParams();
  const actId = params.actId as string;

  // Enhanced act data with chapters and detailed structure
  const actData: {
    [key: string]: {
      title: string;
      fullTitle: string;
      year: string;
      actNumber: string;
      enactmentDate: string;
      chapters: Array<{
        number: string;
        title: string;
        sections: Array<{
          number: string;
          title: string;
          href: string;
        }>;
      }>;
    };
  } = {
    "aadhaar-2016": {
      title:
        "The Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
      fullTitle:
        "The Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
      year: "2016",
      actNumber: "[Act No. 18 of 2016]",
      enactmentDate: "[25th March, 2016.]",
      chapters: [
        {
          number: "Chapter I",
          title: "Preliminary",
          sections: [
            {
              number: "1",
              title: "Short title, extent and commencement",
              href: `/law-library/bare-acts/${actId}/1`,
            },
            {
              number: "2",
              title: "Definitions",
              href: `/law-library/bare-acts/${actId}/2`,
            },
          ],
        },
        {
          number: "Chapter II",
          title: "Enrolment",
          sections: [
            {
              number: "3",
              title: "Aadhaar number",
              href: `/law-library/bare-acts/${actId}/3`,
            },
            {
              number: "3A",
              title: "Aadhaar number of children",
              href: `/law-library/bare-acts/${actId}/3a`,
            },
            {
              number: "4",
              title: "Properties of Aadhaar number",
              href: `/law-library/bare-acts/${actId}/4`,
            },
            {
              number: "5",
              title:
                "Special measures for Issuance of Aadhaar number to certain category of persons",
              href: `/law-library/bare-acts/${actId}/5`,
            },
            {
              number: "6",
              title: "Update of certain information",
              href: `/law-library/bare-acts/${actId}/6`,
            },
          ],
        },
        {
          number: "Chapter III",
          title: "Authentication",
          sections: [
            {
              number: "7",
              title:
                "Proof of Aadhaar number necessary for receipt of certain subsidies, benefits and services, etc.",
              href: `/law-library/bare-acts/${actId}/7`,
            },
            {
              number: "8",
              title: "Authentication of Aadhaar number",
              href: `/law-library/bare-acts/${actId}/8`,
            },
            {
              number: "8A",
              title: "Offline verification of Aadhaar number",
              href: `/law-library/bare-acts/${actId}/8a`,
            },
            {
              number: "9",
              title:
                "Aadhaar number not evidence of citizenship or domicile, etc.",
              href: `/law-library/bare-acts/${actId}/9`,
            },
            {
              number: "10",
              title: "Central Identities Data Repository",
              href: `/law-library/bare-acts/${actId}/10`,
            },
          ],
        },
        {
          number: "Chapter IV",
          title: "Unique Identification Authority of India",
          sections: [
            {
              number: "11",
              title: "Establishment of Authority",
              href: `/law-library/bare-acts/${actId}/11`,
            },
            {
              number: "12",
              title: "Composition of Authority",
              href: `/law-library/bare-acts/${actId}/12`,
            },
            {
              number: "13",
              title:
                "Qualifications for appointment of Chairperson and Members of Authority",
              href: `/law-library/bare-acts/${actId}/13`,
            },
            {
              number: "14",
              title:
                "Term of office and other conditions of service of Chairperson and Members",
              href: `/law-library/bare-acts/${actId}/14`,
            },
            {
              number: "15",
              title: "Removal of Chairperson and Members",
              href: `/law-library/bare-acts/${actId}/15`,
            },
            {
              number: "16",
              title:
                "Restrictions on Chairperson or Members on employment after cessation of office",
              href: `/law-library/bare-acts/${actId}/16`,
            },
            {
              number: "17",
              title: "Functions of Chairperson",
              href: `/law-library/bare-acts/${actId}/17`,
            },
            {
              number: "18",
              title: "Chief executive officer",
              href: `/law-library/bare-acts/${actId}/18`,
            },
            {
              number: "19",
              title: "Meetings of Authority",
              href: `/law-library/bare-acts/${actId}/19`,
            },
            {
              number: "20",
              title:
                "Vacancies, etc., not to invalidate proceedings of Authority",
              href: `/law-library/bare-acts/${actId}/20`,
            },
            {
              number: "21A",
              title: "Power of Authority to issue directions",
              href: `/law-library/bare-acts/${actId}/21a`,
            },
          ],
        },
        {
          number: "Chapter V",
          title: "Grants, Accountsand Auditand Annual Report",
          sections: [
            {
              number: "24",
              title: "Grants by Central Government",
              href: `/law-library/bare-acts/${actId}/24`,
            },
            {
              number: "25",
              title: "Fund",
              href: `/law-library/bare-acts/${actId}/25`,
            },
            {
              number: "26",
              title: "Accounts and audit",
              href: `/law-library/bare-acts/${actId}/26`,
            },
            {
              number: "27",
              title: "Returns and annual report, etc.",
              href: `/law-library/bare-acts/${actId}/27`,
            },
          ],
        },
        {
          number: "Chapter VI",
          title: "Protectionof Information",
          sections: [
            {
              number: "28",
              title: "Security and confidentiality of information",
              href: `/law-library/bare-acts/${actId}/28`,
            },
            {
              number: "29",
              title: "Restriction on sharing information",
              href: `/law-library/bare-acts/${actId}/29`,
            },
            {
              number: "30",
              title:
                "Biometric information deemed to be sensitive personal information",
              href: `/law-library/bare-acts/${actId}/30`,
            },
            {
              number: "31",
              title:
                "Alteration of demographic information or biometric information",
              href: `/law-library/bare-acts/${actId}/31`,
            },
            {
              number: "32",
              title:
                "Access to own information and records of requests for authentication",
              href: `/law-library/bare-acts/${actId}/32`,
            },
            {
              number: "33",
              title: "Disclosure of information in certain cases",
              href: `/law-library/bare-acts/${actId}/33`,
            },
          ],
        },
        {
          number: "Chapter VIA",
          title: "Civil Penalties",
          sections: [
            {
              number: "33A",
              title:
                "Penalty for failure to comply with provisions of this Act, rules, regulations and directions",
              href: `/law-library/bare-acts/${actId}/33a`,
            },
            {
              number: "33B",
              title: "Power to adjudicate",
              href: `/law-library/bare-acts/${actId}/33b`,
            },
            {
              number: "33C",
              title: "Appeals to Appellate Tribunal",
              href: `/law-library/bare-acts/${actId}/33c`,
            },
            {
              number: "33D",
              title: "Procedure and powers of the Appellate Tribunal",
              href: `/law-library/bare-acts/${actId}/33d`,
            },
            {
              number: "33E",
              title: "Appeal to Supreme Court of India",
              href: `/law-library/bare-acts/${actId}/33e`,
            },
            {
              number: "33F",
              title: "Civil court not to have jurisdiction",
              href: `/law-library/bare-acts/${actId}/33f`,
            },
          ],
        },
        {
          number: "Chapter VII",
          title: "Offencesand Penalties",
          sections: [
            {
              number: "34",
              title: "Penalty for impersonation at time of enrolment",
              href: `/law-library/bare-acts/${actId}/34`,
            },
            {
              number: "35",
              title:
                "Penalty for impersonation of Aadhaar number holder by changing demographic information or biometric information or both",
              href: `/law-library/bare-acts/${actId}/35`,
            },
            {
              number: "36",
              title: "Penalty for impersonation",
              href: `/law-library/bare-acts/${actId}/36`,
            },
            {
              number: "37",
              title: "Penalty for disclosing identity information",
              href: `/law-library/bare-acts/${actId}/37`,
            },
            {
              number: "38",
              title:
                "Penalty for unauthorised access to the Central Identities Data Repository",
              href: `/law-library/bare-acts/${actId}/38`,
            },
            {
              number: "39",
              title:
                "Penalty for tampering with data in Central Identities Data Repository",
              href: `/law-library/bare-acts/${actId}/39`,
            },
            {
              number: "40",
              title:
                "Penalty for unauthorised use by requesting entity or offline verification-seeking entity",
              href: `/law-library/bare-acts/${actId}/40`,
            },
            {
              number: "41",
              title: "Penalty for non-compliance with intimation requirements",
              href: `/law-library/bare-acts/${actId}/41`,
            },
            {
              number: "42",
              title: "General penalty",
              href: `/law-library/bare-acts/${actId}/42`,
            },
            {
              number: "43",
              title: "Offences by companies",
              href: `/law-library/bare-acts/${actId}/43`,
            },
            {
              number: "44",
              title:
                "Act to apply for offence or contravention committed outside India",
              href: `/law-library/bare-acts/${actId}/44`,
            },
            {
              number: "45",
              title: "Power to investigate offences",
              href: `/law-library/bare-acts/${actId}/45`,
            },
            {
              number: "46",
              title: "Penalties not to interfere with other punishments",
              href: `/law-library/bare-acts/${actId}/46`,
            },
            {
              number: "47",
              title: "Cognizance of offences",
              href: `/law-library/bare-acts/${actId}/47`,
            },
          ],
        },
        {
          number: "Chapter VIII",
          title: "Miscellaneous",
          sections: [
            {
              number: "48",
              title: "Power of Central Government to supersede Authority",
              href: `/law-library/bare-acts/${actId}/48`,
            },
            {
              number: "49",
              title: "Members, officers, etc., to be public servants",
              href: `/law-library/bare-acts/${actId}/49`,
            },
            {
              number: "50",
              title: "Power of Central Government to issue directions",
              href: `/law-library/bare-acts/${actId}/50`,
            },
            {
              number: "50A",
              title: "Exemption from tax on income",
              href: `/law-library/bare-acts/${actId}/50a`,
            },
            {
              number: "51",
              title: "Delegation",
              href: `/law-library/bare-acts/${actId}/51`,
            },
            {
              number: "52",
              title: "Protection of action taken in good faith",
              href: `/law-library/bare-acts/${actId}/52`,
            },
            {
              number: "53",
              title: "Power of Central Government to make rules",
              href: `/law-library/bare-acts/${actId}/53`,
            },
            {
              number: "54",
              title: "Power of Authority to make regulations",
              href: `/law-library/bare-acts/${actId}/54`,
            },
            {
              number: "55",
              title: "Laying of rules and regulations before Parliament",
              href: `/law-library/bare-acts/${actId}/55`,
            },
            {
              number: "56",
              title: "Application of other laws not barred",
              href: `/law-library/bare-acts/${actId}/56`,
            },
            {
              number: "57",
              title: "[Omitted]",
              href: `/law-library/bare-acts/${actId}/57`,
            },
            {
              number: "58",
              title: "Power to remove difficulties",
              href: `/law-library/bare-acts/${actId}/58`,
            },
            {
              number: "59",
              title: "Savings",
              href: `/law-library/bare-acts/${actId}/59`,
            },
          ],
        },
      ],
    },
  };

  const act = actData[actId];

  if (!act) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Act Not Found
            </h1>
            <Link
              href="/law-library/bare-acts"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Bare Acts
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
          <div className="flex items-center gap-2 text-sm">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/bare-acts" className="hover:underline">
              Bare Acts
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Act Title Section */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {act.title}
            </h2>
            <p className="text-gray-600 font-semibold">{act.actNumber}</p>
            <p className="text-gray-600">{act.enactmentDate}</p>
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
                      Title
                    </th>
                    <th className="text-left py-2 px-3 bg-gray-50 font-bold text-gray-700">
                      Sections
                    </th>
                    <th className="text-left py-2 px-3 bg-gray-50 font-bold text-gray-700">
                      Particulars
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {act.chapters.map((chapter, chapterIndex) => (
                    <>
                      <tr
                        key={`chapter-${chapterIndex}`}
                        className="border-b border-gray-200 bg-gray-50"
                      >
                        <td
                          colSpan={3}
                          className="py-2 px-3 font-bold text-gray-800"
                        >
                          {chapter.number}
                        </td>
                        <td className="py-2 px-3 font-bold text-gray-800">
                          {chapter.title}
                        </td>
                      </tr>
                      {chapter.sections.map((section, sectionIndex) => (
                        <tr
                          key={`section-${chapterIndex}-${sectionIndex}`}
                          className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                        >
                          <td className="py-2 px-3 text-gray-700">
                            {section.number}
                          </td>
                          <td colSpan={2} className="py-2 px-3">
                            <Link
                              href={section.href}
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {section.title}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>

              {/* Back Button */}
              <div className="mt-6 pt-4 border-t flex items-center">
                <Link
                  href="/law-library/bare-acts"
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
