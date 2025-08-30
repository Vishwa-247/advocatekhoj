import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Download, Search, FileText, Eye } from "lucide-react"

interface Agreement {
  id: string
  title: string
  description: string
  category: string
  format: string
  size: string
  downloads: number
  lastUpdated: string
}

export function Agreements() {
  // Mock data - replace with actual agreements
  const agreements: Agreement[] = [
    {
      id: "1",
      title: "Rental Agreement Template",
      description:
        "Standard rental agreement for residential properties including terms, conditions, and legal clauses.",
      category: "Property",
      format: "PDF",
      size: "245 KB",
      downloads: 1250,
      lastUpdated: "2024-01-15",
    },
    {
      id: "2",
      title: "Employment Contract Template",
      description:
        "Comprehensive employment agreement covering salary, benefits, responsibilities, and termination clauses.",
      category: "Employment",
      format: "PDF",
      size: "189 KB",
      downloads: 890,
      lastUpdated: "2024-01-12",
    },
    {
      id: "3",
      title: "Non-Disclosure Agreement (NDA)",
      description: "Standard NDA template for protecting confidential information in business relationships.",
      category: "Business",
      format: "PDF",
      size: "156 KB",
      downloads: 2100,
      lastUpdated: "2024-01-10",
    },
    {
      id: "4",
      title: "Partnership Agreement",
      description:
        "Legal framework for business partnerships including profit sharing, responsibilities, and dissolution terms.",
      category: "Business",
      format: "PDF",
      size: "298 KB",
      downloads: 567,
      lastUpdated: "2024-01-08",
    },
    {
      id: "5",
      title: "Sale Agreement for Property",
      description: "Comprehensive property sale agreement with all necessary legal clauses and conditions.",
      category: "Property",
      format: "PDF",
      size: "312 KB",
      downloads: 1890,
      lastUpdated: "2024-01-05",
    },
    {
      id: "6",
      title: "Service Agreement Template",
      description: "Professional service agreement for consultants and service providers with payment terms.",
      category: "Business",
      format: "PDF",
      size: "201 KB",
      downloads: 734,
      lastUpdated: "2024-01-03",
    },
  ]

  const categories = ["All", "Property", "Employment", "Business", "Family", "Commercial", "Technology"]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Legal Agreements & Templates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download professionally drafted legal agreement templates for various purposes. All templates are legally
          compliant and regularly updated.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search agreements..." className="pl-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Agreements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agreements.map((agreement) => (
          <Card key={agreement.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{agreement.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{agreement.format}</span>
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">{agreement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{agreement.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Size: {agreement.size}</span>
                  <span>{agreement.downloads} downloads</span>
                </div>

                <div className="text-xs text-muted-foreground">
                  Last updated: {new Date(agreement.lastUpdated).toLocaleDateString()}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Agreements
        </Button>
      </div>
    </div>
  )
}
