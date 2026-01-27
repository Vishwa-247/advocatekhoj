"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function RuleSectionPage() {
  const params = useParams();
  const ruleId = params.ruleId as string;
  const sectionId = params.sectionId as string;

  // Section content data
  const sectionData: {
    [ruleId: string]: {
      title: string;
      sections: Array<{
        id: string;
        title: string;
        content: string;
      }>;
    };
  } = {
    "aadhaar-authentication-2020": {
      title:
        "The Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020",
      sections: [
        {
          id: "1",
          title: "Short title and commencement",
          content: `(1) These rules may be called the Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020.

(2) They shall come into force on the date of their publication in the Official Gazette.`,
        },
        {
          id: "2",
          title: "Definitions",
          content: `In these rules, unless the context otherwise requires,-

(a) "Act" means the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 (18 of 2016);

(b) "Aadhaar authentication" means authentication as defined in clause (c) of sub-section (1) of section 2 of the Act;

(c) "competent authority" means the authority specified under rule 4;

(d) "proposal" means a proposal referred to in rule 3 and includes a revised proposal, if any;

(e) "requesting entity" means an entity or person who seeks to authenticate individuals under these rules.`,
        },
        {
          id: "3",
          title: "Purposes for Aadhaar authentication",
          content: `(1) Subject to the provisions of these rules, Aadhaar authentication may be used by any requesting entity for establishing the identity of an individual for any purpose, whether by the State or any body corporate or person pursuant to any contract to this effect, related to any of the following, namely:-

(a) social welfare schemes or programmes;
(b) innovation projects;
(c) knowledge creation or dissemination;
(d) improving ease of living; or
(e) enabling better access to services for citizens.

(2) The purposes specified in sub-rule (1) shall be in addition to the purposes specified under section 4 and section 7 of the Act.`,
        },
        {
          id: "4",
          title: "Preparation of the proposal",
          content: `(1) Every requesting entity seeking to use Aadhaar authentication for any purpose referred to in rule 3 shall prepare a proposal in writing.

(2) The proposal shall contain the following particulars, namely:-

(a) description of the proposed activity or service;
(b) the purpose for which Aadhaar authentication is to be used;
(c) the estimated number of individuals likely to be authenticated;
(d) the manner of obtaining consent from individuals;
(e) security and privacy safeguards to be adopted;
(f) impact assessment including benefits to individuals and the State.`,
        },
        {
          id: "5",
          title: "Examination of proposal",
          content: `(1) The competent authority shall examine the proposal to determine whether the purpose falls within the scope of rule 3.

(2) The competent authority may seek such additional information or clarification from the requesting entity as it may deem fit.

(3) After examination, the competent authority may either approve the proposal with or without modifications, or reject it.

(4) The decision of the competent authority shall be communicated to the requesting entity within sixty days from the date of receipt of the complete proposal.`,
        },
      ],
    },
  };

  const ruleContent = sectionData[ruleId];
  const section = ruleContent?.sections.find((s) => s.id === sectionId);

  // Find previous and next sections
  const currentIndex = ruleContent?.sections.findIndex(
    (s) => s.id === sectionId,
  );
  const prevSection =
    currentIndex > 0 ? ruleContent.sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < ruleContent.sections.length - 1
      ? ruleContent.sections[currentIndex + 1]
      : null;

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
              href={`/law-library/rules/${ruleId}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Index
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
          {/* Rule Title */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              {ruleContent.title}
            </h2>
          </div>

          {/* Section Content */}
          <div className="bg-white rounded-lg shadow-sm border mb-6">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                Section {section.id} - {section.title}
              </h3>
            </div>

            <div className="p-6">
              <div className="prose max-w-none">
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center">
              <div>
                {prevSection ? (
                  <Link
                    href={`/law-library/rules/${ruleId}/${prevSection.id}`}
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
                  >
                    <span>◄</span> Back
                  </Link>
                ) : (
                  <span className="text-gray-400 inline-flex items-center gap-2">
                    <span>◄</span> Back
                  </span>
                )}
              </div>

              <Link
                href={`/law-library/rules/${ruleId}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Index
              </Link>

              <div>
                {nextSection ? (
                  <Link
                    href={`/law-library/rules/${ruleId}/${nextSection.id}`}
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
      </div>

      <Footer />
    </div>
  );
}
