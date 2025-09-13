import Link from "next/link";

export function Agreements() {
  const agreementCategories = [
    { id: "1", title: "Arbitration", count: 20 },
    { id: "2", title: "Banking", count: 15 },
    { id: "3", title: "Bonds", count: 12 },
    { id: "4", title: "Business", count: 25 },
    { id: "5", title: "Civil Procedure Code", count: 18 },
    { id: "6", title: "Company Law", count: 30 },
    { id: "7", title: "Compromise and family settlements", count: 14 },
    { id: "8", title: "Consumer Law", count: 16 },
    { id: "9", title: "Contract Law", count: 22 },
    { id: "10", title: "Criminal Law", count: 19 },
    {
      id: "11",
      title: "Double Taxation Agreements with Various Countries",
      count: 8,
    },
    { id: "12", title: "Employment Agreements", count: 17 },
    { id: "13", title: "Family Law", count: 21 },
    { id: "14", title: "Foreign collaboration", count: 11 },
    { id: "15", title: "Gift", count: 9 },
    { id: "16", title: "Hire Purchases", count: 13 },
    { id: "17", title: "Indemnity", count: 10 },
    { id: "18", title: "Intellectual Property Rights", count: 24 },
    { id: "19", title: "Labour Law", count: 26 },
    { id: "20", title: "Lease, license and lease financing", count: 28 },
    { id: "21", title: "Mortgage and pledge", count: 15 },
    { id: "22", title: "Partition", count: 12 },
    { id: "23", title: "Partnership", count: 18 },
    { id: "24", title: "Power of attorney", count: 16 },
    { id: "25", title: "Sale", count: 23 },
    { id: "26", title: "Shipping Agreements", count: 11 },
    { id: "27", title: "Trust Agreements", count: 14 },
    { id: "28", title: "Will", count: 19 },
    { id: "29", title: "Miscellaneous Agreements", count: 31 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <span>Agreements</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Agreements</h2>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agreementCategories.map((category, index) => (
                  <div key={category.id} className="flex gap-4 py-2">
                    <span className="text-blue-600 font-medium w-8">{index + 1}.</span>
                    <div className="flex-1">
                      <Link
                        href={`/law-library/agreements/${category.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {category.title}
                      </Link>
                      <span className="text-gray-500 text-xs ml-2">({category.count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
                    <span className="text-xs font-bold">🎓</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-blue-600">
                  Search Law Colleges
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white">
            <div className="space-y-2">
              {agreementCategories.map((category, index) => (
                <div key={category.id} className="flex gap-4">
                  <span className="text-blue-600 font-medium">
                    {index + 1}.
                  </span>
                  <Link
                    href={`/law-library/agreements/${category.id}`}
                    className="text-blue-600 hover:text-blue-800 underline flex-1"
                  >
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Back Link */}
            <div className="mt-8 pt-4 border-t">
              <Link
                href="/law-library"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-48 flex-shrink-0">
          <div className="space-y-4">
            {/* Legal Information */}
            <div className="bg-red-800 text-white p-3 rounded">
              <h3 className="font-bold text-sm mb-2">LEGAL Information</h3>
              <p className="text-xs leading-relaxed">
                AdvocateKhoj provides summaries of Indian statutes, Law codes,
                and the areas of law most likely to affect you in life's "fine"
                of law.
              </p>
              <div className="mt-2 text-right">
                <span className="text-xs bg-red-600 px-2 py-1 rounded">
                  KNOW MORE &gt;
                </span>
              </div>
            </div>

            {/* Law Dictionary */}
            <div className="bg-blue-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW Dictionary</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Areas of Law */}
            <div className="bg-yellow-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">AREAS of Law</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Search Judgements */}
            <div className="bg-red-900 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">SEARCH Judgements</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Bare Acts */}
            <div className="bg-gray-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">BARE Acts</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
