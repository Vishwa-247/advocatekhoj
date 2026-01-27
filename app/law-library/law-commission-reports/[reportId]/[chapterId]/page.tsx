"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ReportChapterPage() {
  const params = useParams();
  const reportId = params.reportId as string;
  const chapterId = params.chapterId as string;

  // Chapter content data
  const chapterData: {
    [reportId: string]: {
      reportNo: string;
      reportTitle: string;
      chapters: Array<{
        id: string;
        number: string;
        title: string;
        content: string;
      }>;
    };
  } = {
    "liability-state-tort": {
      reportNo: "01",
      reportTitle: "Liability of the State in Tort",
      chapters: [
        {
          id: "chapter-1",
          number: "Chapter I",
          title: "Introductory",
          content: `**1. Reference:**

On the initiative of the President of India, the Law Ministry took up for consideration the question whether legislation on the lines of the Crown Proceedings Act, 1947 of the United Kingdom in respect of claims against the Union and the States based on tort is needed and, if so, to what extent. After the constitution of this Law Commission, the Law Ministry referred the matter to the Commission for examination and report.

**2. Existing Law:**

The law regarding the liability of the Union and the States in respect of contracts, property etc., is not in doubt. But the law relating to the liability of the Union and the States for tortious acts is in a state of uncertainty. It becomes necessary therefore, to examine the existing law with a view to determine the extent of the liability of the Union and the States for tortious acts.

**3. Scope of Inquiry:**

In examining this question, we have taken into consideration the provisions of Article 300 of the Constitution, the decisions of the Supreme Court and various High Courts, and the law prevailing in other countries having similar constitutional systems. We have also examined whether any legislation is necessary and if so, what should be its scope and content.`,
        },
        {
          id: "chapter-2",
          number: "Chapter II",
          title: "Existing Law in India (1)",
          content: `**4. Constitutional Provisions:**

Article 300(1) of the Constitution provides that the Government of India and the Government of each State may sue or be sued by the name of the Union of India and the State respectively. This provision enables suits to be brought against the Union and the States in the same way as suits could be brought against the Dominion and the corresponding Provinces before the commencement of the Constitution.

**5. Pre-Constitutional Position:**

Before the Constitution came into force, the liability of the Government was governed by Section 176 of the Government of India Act, 1935. This section provided that the liability of the Government should be determined by reference to the law applicable to the liability of persons in similar circumstances in India.

**6. Current Legal Position:**

The current position regarding the liability of the State in tort is largely based on judicial interpretation of Article 300 read with the pre-constitutional law. The Supreme Court has held that the Union and State Governments can be made liable in tort in appropriate cases, subject to certain limitations and principles derived from common law and statutes.`,
        },
        {
          id: "chapter-3",
          number: "Chapter III",
          title: "The Law in England",
          content: `**7. Crown Proceedings Act, 1947:**

The Crown Proceedings Act, 1947 of the United Kingdom brought about a fundamental change in the law relating to the liability of the Crown in England. Before this Act, the Crown enjoyed complete immunity from liability in tort, based on the maxim "The King can do no wrong."

**8. Key Provisions:**

The Act makes the Crown liable in tort in respect of:
(a) The tortious acts of its servants or agents
(b) Breach of duties attaching to the ownership, occupation, possession or control of property
(c) Breach of the common law duty to take reasonable care in respect of those in its employment

**9. Section 2(1) - Vicarious Liability:**

Section 2(1) provides that the Crown shall be liable in tort for the acts and omissions of its servants or agents in respect of which, if the Crown were a private person of full age and capacity, the Crown would be liable. This establishes the principle of vicarious liability for the Crown, making it liable in the same way as a private employer would be liable for the tortious acts of its employees committed in the course of employment.

**10. Exceptions and Limitations:**

The Act also provides certain exceptions and limitations to the Crown's liability, including immunity in respect of certain acts done in the exercise of statutory powers and duties, and special provisions relating to the armed forces and postal services.`,
        },
        {
          id: "chapter-4",
          number: "Chapter IV",
          title: "The Law in The U.S.A",
          content: `**11. Federal Tort Claims Act:**

In the United States, the Federal Tort Claims Act, 1946 provides for the liability of the federal government in tort. Prior to this Act, the United States Government enjoyed sovereign immunity from tort claims.

**12. Scope of Liability:**

The Act makes the United States liable for tort claims in the same manner and to the same extent as a private individual under like circumstances. However, the Act contains numerous exceptions and limitations on the government's liability.

**13. Key Features:**

The main features of the Federal Tort Claims Act include:
(a) Waiver of sovereign immunity for certain tort claims
(b) Liability based on the law of the place where the tort occurred
(c) Exclusive remedy through suit against the United States
(d) Various exceptions including discretionary function exception
(e) Special procedures for filing and prosecuting claims`,
        },
        {
          id: "chapter-5",
          number: "Chapter V",
          title: "The Law in Australia",
          content: `**14. Crown Proceedings Legislation:**

Australian states have enacted their own Crown Proceedings Acts, generally following the model of the English Crown Proceedings Act, 1947. These Acts establish the liability of the Crown in tort in circumstances where a private person would be liable.

**15. Commonwealth of Australia:**

At the Commonwealth level, the Judiciary Act, 1903 and subsequent amendments deal with proceedings by and against the Commonwealth. Section 64 of the Judiciary Act provides that in any suit to which the Commonwealth is a party, the rights of the parties shall as nearly as possible be the same as in a suit between subject and subject.

**16. State Legislation:**

Each Australian state has its own legislation dealing with Crown liability in tort. These statutes generally provide that the Crown is liable in tort in the same way as a private person would be liable, subject to certain exceptions and modifications appropriate to the governmental context.`,
        },
        {
          id: "chapter-6",
          number: "Chapter VI",
          title: "The Law in France",
          content: `**17. Administrative Law System:**

The French system of administrative law provides a unique approach to state liability. In France, there is a separate system of administrative courts (tribunaux administratifs) that deal with claims against the state and public authorities.

**18. Principles of State Liability:**

French law recognizes two main types of state liability:
(a) Liability based on fault (responsabilité pour faute)
(b) Liability without fault (responsabilité sans faute)

**19. Development Through Case Law:**

The principles governing state liability in France have been developed primarily through decisions of the Conseil d'État (Council of State), which is the highest administrative court. These principles have evolved to provide extensive protection to individuals harmed by governmental action or inaction.

**20. No-Fault Liability:**

One distinctive feature of French administrative law is the recognition of no-fault liability in certain circumstances, such as cases involving dangerous activities undertaken by the state or unequal burdens imposed on individuals for the benefit of the community.`,
        },
        {
          id: "chapter-7",
          number: "Chapter VII",
          title: "Rule of Statutory Construction",
          content: `**21. General Principles:**

In determining the liability of the State in tort, courts apply various rules of statutory construction and interpretation. These principles help in understanding the scope and extent of state liability under the constitutional and statutory framework.

**22. Construction of Article 300:**

Article 300 of the Constitution must be construed in the context of the overall constitutional scheme and the principles of state liability that existed before the Constitution. The courts have held that Article 300 should be interpreted liberally to ensure that the State can be held accountable for tortious acts.

**23. Reference to Pre-Constitutional Law:**

In interpreting Article 300, courts often refer to the law that existed before the Constitution, including Section 176 of the Government of India Act, 1935, and the principles derived from English common law as applicable in India.

**24. Principle of Governmental Accountability:**

The modern approach to statutory construction emphasizes the principle of governmental accountability. Courts recognize that in a democratic system governed by the rule of law, the government should not be above the law and should be held responsible for its tortious acts in appropriate cases.`,
        },
        {
          id: "chapter-8",
          number: "Chapter VIII",
          title: "Conclusions and Proposals",
          content: `**25. Need for Legislation:**

Based on our examination of the existing law and comparative study of other jurisdictions, we have concluded that comprehensive legislation on the lines of the Crown Proceedings Act, 1947 is necessary to clarify and establish the liability of the Union and State Governments in tort.

**26. Proposed Framework:**

We recommend that legislation should be enacted providing that:
(a) The Union and State Governments shall be liable in tort in the same manner as a private person
(b) The Government shall be vicariously liable for the tortious acts of its servants and agents
(c) Appropriate exceptions and immunities should be provided for sovereign and governmental functions
(d) Special provisions should be made for claims arising out of armed forces operations and postal services

**27. Implementation:**

The proposed legislation should be implemented at both the Union and State levels to ensure uniform application of principles of state liability throughout India. Suitable procedural provisions should also be included to facilitate the filing and prosecution of claims against the government.

**28. Final Recommendations:**

This Commission recommends that the Government take early steps to introduce comprehensive legislation on the liability of the State in tort, incorporating the principles and provisions outlined in this report. Such legislation will promote the rule of law, ensure governmental accountability, and provide adequate remedies to citizens who suffer harm due to tortious acts of the State or its servants.`,
        },
      ],
    },
  };

  const reportContent = chapterData[reportId];
  const chapter = reportContent?.chapters.find((c) => c.id === chapterId);

  // Find previous and next chapters
  const currentIndex = reportContent?.chapters.findIndex(
    (c) => c.id === chapterId,
  );
  const prevChapter =
    currentIndex > 0 ? reportContent.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < reportContent.chapters.length - 1
      ? reportContent.chapters[currentIndex + 1]
      : null;

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Chapter Not Found
            </h1>
            <Link
              href={`/law-library/law-commission-reports/${reportId}`}
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
          {/* Report Title */}
          <div className="bg-white rounded-lg shadow-sm border mb-6 p-6 text-center">
            <p className="text-gray-600 mb-2">
              Report No. {reportContent.reportNo}
            </p>
            <h2 className="text-xl font-bold text-gray-900">
              {reportContent.reportTitle}
            </h2>
          </div>

          {/* Chapter Content */}
          <div className="bg-white rounded-lg shadow-sm border mb-6">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                {chapter.number} - {chapter.title}
              </h3>
            </div>

            <div className="p-6">
              <div className="prose max-w-none">
                {chapter.content.split("\n\n").map((paragraph, index) => (
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
                {prevChapter ? (
                  <Link
                    href={`/law-library/law-commission-reports/${reportId}/${prevChapter.id}`}
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
                href={`/law-library/law-commission-reports/${reportId}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Index
              </Link>

              <div>
                {nextChapter ? (
                  <Link
                    href={`/law-library/law-commission-reports/${reportId}/${nextChapter.id}`}
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
