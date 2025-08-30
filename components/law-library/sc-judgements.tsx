import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Eye, Calendar, FileText } from "lucide-react"

interface SCJudgement {
  id: string
  caseNumber: string
  title: string
  parties: {
    petitioner: string
    respondent: string
  }
  judges: string[]
  dateOfJudgement: string
  headnotes: string
  category: string
  citation: string
  pages: number
}

export function SCJudgements() {
  // Mock data - replace with actual SC judgements
  const judgements: SCJudgement[] = [
    {
      id: "1",
      caseNumber: "Civil Appeal No. 1234 of 2024",
      title: "State of Maharashtra vs. Rajesh Kumar",
      parties: {
        petitioner: "State of Maharashtra",
        respondent: "Rajesh Kumar",
      },
      judges: ["Justice A.K. Sharma", "Justice B.R. Patel", "Justice C.D. Singh"],
      dateOfJudgement: "2024-01-15",
      headnotes:
        "Constitutional Law - Article 21 - Right to Life and Personal Liberty - Police custody - Torture allegations - Compensation awarded",
      category: "Constitutional Law",
      citation: "2024 SCC 123",
      pages: 45,
    },
    {
      id: "2",
      caseNumber: "Criminal Appeal No. 5678 of 2024",
      title: "Priya Sharma vs. Union of India",
      parties: {
        petitioner: "Priya Sharma",
        respondent: "Union of India",
      },
      judges: ["Justice D.E. Gupta", "Justice F.G. Verma"],
      dateOfJudgement: "2024-01-12",
      headnotes: "Criminal Law - Section 498A IPC - Dowry harassment - Evidence - Burden of proof - Acquittal upheld",
      category: "Criminal Law",
      citation: "2024 SCC 124",
      pages: 32,
    },
    {
      id: "3",
      caseNumber: "Civil Appeal No. 9012 of 2024",
      title: "ABC Corporation vs. XYZ Limited",
      parties: {
        petitioner: "ABC Corporation",
        respondent: "XYZ Limited",
      },
      judges: ["Justice H.I. Joshi", "Justice J.K. Mehta", "Justice L.M. Nair"],
      dateOfJudgement: "2024-01-10",
      headnotes: "Contract Law - Breach of contract - Specific performance - Damages - Commercial dispute resolution",
      category: "Commercial Law",
      citation: "2024 SCC 125",
      pages: 28,
    },
    {
      id: "4",
      caseNumber: "Writ Petition No. 3456 of 2024",
      title: "Environmental Protection Society vs. State of Gujarat",
      parties: {
        petitioner: "Environmental Protection Society",
        respondent: "State of Gujarat",
      },
      judges: ["Justice N.O. Pandey", "Justice P.Q. Rao"],
      dateOfJudgement: "2024-01-08",
      headnotes:
        "Environmental Law - Pollution control - Industrial emissions - Public interest litigation - Compensation for environmental damage",
      category: "Environmental Law",
      citation: "2024 SCC 126",
      pages: 67,
    },
  ]

  const categories = [
    "All",
    "Constitutional Law",
    "Criminal Law",
    "Civil Law",
    "Commercial Law",
    "Environmental Law",
    "Tax Law",
    "Family Law",
  ]
  const years = ["2024", "2023", "2022", "2021", "2020"]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Supreme Court Judgements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Free access to Supreme Court of India judgements with full text, case numbers, parties' names, judges' names,
          and headnotes. Based on the Supreme Court's Justice Information System database.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by case number, parties, or keywords..." className="pl-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Latest First</SelectItem>
              <SelectItem value="date-asc">Oldest First</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Judgements List */}
      <div className="space-y-4">
        {judgements.map((judgement) => (
          <Card key={judgement.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{judgement.category}</Badge>
                    <Badge variant="secondary">{judgement.citation}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{judgement.title}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-2">
                    <strong>Case No:</strong> {judgement.caseNumber}
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(judgement.dateOfJudgement).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {judgement.pages} pages
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Petitioner:</strong> {judgement.parties.petitioner}
                  </div>
                  <div>
                    <strong>Respondent:</strong> {judgement.parties.respondent}
                  </div>
                </div>

                <div className="text-sm">
                  <strong>Judges:</strong> {judgement.judges.join(", ")}
                </div>

                <div className="text-sm">
                  <strong>Headnotes:</strong>
                  <p className="text-muted-foreground mt-1">{judgement.headnotes}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Read Full Text
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Judgements
        </Button>
      </div>
    </div>
  )
}
