import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, ArrowRight, Scale } from "lucide-react"

interface LawArea {
  id: string
  title: string
  description: string
  keyTopics: string[]
  caseCount: number
  popularityRank: number
}

export function AreasOfLaw() {
  // Mock data - replace with actual law areas (110 categories as mentioned)
  const lawAreas: LawArea[] = [
    {
      id: "1",
      title: "Criminal Law",
      description:
        "Deals with crimes and their punishments, including procedures for investigation, trial, and sentencing of criminal offenses.",
      keyTopics: ["Murder", "Theft", "Fraud", "Assault", "Drug Offenses"],
      caseCount: 15420,
      popularityRank: 1,
    },
    {
      id: "2",
      title: "Civil Law",
      description:
        "Governs disputes between individuals and organizations, including contracts, property rights, and personal injury claims.",
      keyTopics: ["Contract Disputes", "Property Rights", "Personal Injury", "Defamation", "Negligence"],
      caseCount: 12890,
      popularityRank: 2,
    },
    {
      id: "3",
      title: "Family Law",
      description:
        "Covers legal matters related to family relationships including marriage, divorce, child custody, and adoption.",
      keyTopics: ["Divorce", "Child Custody", "Alimony", "Adoption", "Domestic Violence"],
      caseCount: 9876,
      popularityRank: 3,
    },
    {
      id: "4",
      title: "Property Law",
      description:
        "Governs ownership and use of real and personal property, including buying, selling, and leasing of property.",
      keyTopics: ["Real Estate", "Land Records", "Property Disputes", "Tenancy", "Property Registration"],
      caseCount: 8765,
      popularityRank: 4,
    },
    {
      id: "5",
      title: "Corporate Law",
      description: "Regulates the formation, operation, and dissolution of corporations and other business entities.",
      keyTopics: [
        "Company Formation",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Securities Law",
        "Compliance",
      ],
      caseCount: 7654,
      popularityRank: 5,
    },
    {
      id: "6",
      title: "Employment Law",
      description:
        "Governs the relationship between employers and employees, including wages, working conditions, and termination.",
      keyTopics: ["Wrongful Termination", "Workplace Harassment", "Labor Disputes", "Employee Benefits", "Wage Issues"],
      caseCount: 6543,
      popularityRank: 6,
    },
    {
      id: "7",
      title: "Constitutional Law",
      description:
        "Deals with the interpretation and application of the Constitution, fundamental rights, and government powers.",
      keyTopics: [
        "Fundamental Rights",
        "Judicial Review",
        "Separation of Powers",
        "Federalism",
        "Constitutional Amendments",
      ],
      caseCount: 5432,
      popularityRank: 7,
    },
    {
      id: "8",
      title: "Tax Law",
      description:
        "Covers taxation policies, procedures, and disputes related to income tax, GST, and other tax matters.",
      keyTopics: ["Income Tax", "GST", "Tax Appeals", "Tax Planning", "Tax Compliance"],
      caseCount: 4321,
      popularityRank: 8,
    },
    {
      id: "9",
      title: "Intellectual Property Law",
      description: "Protects creations of the mind including patents, trademarks, copyrights, and trade secrets.",
      keyTopics: ["Patents", "Trademarks", "Copyrights", "Trade Secrets", "IP Infringement"],
      caseCount: 3210,
      popularityRank: 9,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Areas of Law</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive guide to 110+ legal categories with clear explanations and practical guidance. Find the legal
          area relevant to your situation and understand the law better.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search legal areas..." className="pl-10" />
      </div>

      {/* Popular Categories */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Most Searched Legal Areas</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {lawAreas.slice(0, 6).map((area) => (
            <Badge
              key={area.id}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {area.title}
            </Badge>
          ))}
        </div>
      </div>

      {/* Law Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawAreas.map((area) => (
          <Card key={area.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">#{area.popularityRank}</Badge>
                </div>
                <span className="text-sm text-muted-foreground">{area.caseCount.toLocaleString()} cases</span>
              </div>
              <CardTitle className="text-lg">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{area.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.keyTopics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {area.keyTopics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{area.keyTopics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          <BookOpen className="h-4 w-4 mr-2" />
          View All 110 Legal Areas
        </Button>
      </div>
    </div>
  )
}
