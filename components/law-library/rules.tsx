import Link from "next/link";

export function Rules() {
  const rules = [
    {
      id: "aadhaar-authentication-2020",
      title:
        "Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020",
    },
    {
      id: "air-pollution-1982",
      title: "Air (Prevention and Control of Pollution) Rules, 1982",
    },
    {
      id: "aiims-1958",
      title: "All India Institute of Medical Sciences Rules, 1958",
    },
    {
      id: "anti-hijacking-2017",
      title: "Anti-Hijacking Rules, 2017",
    },
    {
      id: "foreign-companies-1975",
      title: "Application of Sections 108 to Foreign Companies Rules, 1975",
    },
    {
      id: "army-air-force-1963",
      title: "Army and Air Force (Disposal of Private Property) Rules, 1963",
    },
    {
      id: "auroville-1997",
      title: "Auroville Foundation Rules, 1997",
    },
    {
      id: "banking-regulation-1949",
      title: "Banking Regulation (Companies) Rules, 1949",
    },
    {
      id: "unregulated-deposit-2020",
      title: "Banning of Unregulated Deposit Schemes Rules, 2020",
    },
    {
      id: "central-civil-services-classification-1965",
      title:
        "Central Civil Services (Classification, Control and Appeal) Rules, 1965",
    },
    {
      id: "central-civil-services-conduct-1964",
      title: "Central Civil Services (Conduct) Rules, 1964",
    },
    {
      id: "central-civil-services-leave-1972",
      title: "Central Civil Services (Leave) Rules, 1972",
    },
    {
      id: "central-civil-services-pension-2021",
      title: "Central Civil Services (Pension) Rules, 2021",
    },
    {
      id: "central-government-pensioners-welfare-1990",
      title: "Central Government Civil Pensioners' Welfare Fund Rules, 1990",
    },
    {
      id: "central-gst-2017",
      title: "Central Goods and Services Tax Rules, 2017",
    },
    {
      id: "central-motor-vehicles-1989",
      title: "Central Motor Vehicles Rules, 1989",
    },
    {
      id: "chemical-accidents-1996",
      title:
        "Chemical Accidents (Emergency Planning, Preparedness and Response) Rules, 1996",
    },
    {
      id: "child-labour-1988",
      title: "Child Labour (Prohibition and Regulation) Rules, 1988",
    },
    {
      id: "cinematograph-1983",
      title: "Cinematograph Rules, 1983",
    },
    {
      id: "companies-incorporation-2014",
      title: "Companies (Incorporation) Rules, 2014",
    },
    {
      id: "companies-management-2014",
      title: "Companies (Management and Administration) Rules, 2014",
    },
    {
      id: "companies-meetings-2014",
      title: "Companies (Meetings of Board and its Powers) Rules, 2014",
    },
    {
      id: "companies-share-capital-2014",
      title: "Companies (Share Capital and Debentures) Rules, 2014",
    },
    {
      id: "consumer-protection-2020",
      title: "Consumer Protection Rules, 2020",
    },
    {
      id: "copyright-2013",
      title: "Copyright Rules, 2013",
    },
    {
      id: "criminal-rules-practice-2019",
      title: "Criminal Rules of Practice, 2019",
    },
    {
      id: "customs-concessional-duty-2017",
      title:
        "Customs (Import of Goods at Concessional Rate of Duty) Rules, 2017",
    },
    {
      id: "delimitation-2002",
      title: "Delimitation Rules, 2002",
    },
    {
      id: "disaster-management-2008",
      title: "Disaster Management Rules, 2008",
    },
    {
      id: "drugs-cosmetics-1945",
      title: "Drugs and Cosmetics Rules, 1945",
    },
    {
      id: "election-symbols-1968",
      title: "Election Symbols (Reservation and Allotment) Rules, 1968",
    },
    {
      id: "electricity-2005",
      title: "Electricity Rules, 2005",
    },
    {
      id: "environment-impact-2006",
      title: "Environment Impact Assessment Rules, 2006",
    },
    {
      id: "factories-1950",
      title: "Factories Rules, 1950",
    },
    {
      id: "family-courts-1987",
      title: "Family Courts Rules, 1987",
    },
    {
      id: "foreign-exchange-non-debt-2019",
      title: "Foreign Exchange Management (Non-debt Instruments) Rules, 2019",
    },
    {
      id: "forest-conservation-2003",
      title: "Forest (Conservation) Rules, 2003",
    },
    {
      id: "gst-compensation-2017",
      title: "Goods and Services Tax (Compensation to States) Rules, 2017",
    },
    {
      id: "income-tax-1962",
      title: "Income Tax Rules, 1962",
    },
    {
      id: "medical-council-ethics-2002",
      title:
        "Indian Medical Council (Professional Conduct, Etiquette and Ethics) Rules, 2002",
    },
    {
      id: "it-intermediary-guidelines-2021",
      title:
        "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
    },
    {
      id: "insolvency-bankruptcy-2016",
      title:
        "Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016",
    },
    {
      id: "insurance-1939",
      title: "Insurance Rules, 1939",
    },
    {
      id: "legal-services-1995",
      title: "Legal Services Authorities Rules, 1995",
    },
    {
      id: "maternity-benefit-1963",
      title: "Maternity Benefit Rules, 1963",
    },
    {
      id: "medical-termination-pregnancy-2003",
      title: "Medical Termination of Pregnancy Rules, 2003",
    },
    {
      id: "minimum-wages-1950",
      title: "Minimum Wages Rules, 1950",
    },
    {
      id: "national-green-tribunal-2011",
      title: "National Green Tribunal Rules, 2011",
    },
    {
      id: "patents-2003",
      title: "Patents Rules, 2003",
    },
    {
      id: "prevention-corruption-1988",
      title: "Prevention of Corruption Rules, 1988",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <span>Rules</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Rules</h2>
            </div>

            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {rules.map((rule, index) => (
                      <tr key={rule.id} className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 w-12">
                          {index + 1}.
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/law-library/rules/${rule.id}`}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {rule.title}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
