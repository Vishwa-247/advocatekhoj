import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"

interface LegalTip {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  author: string
  publishedDate: string
}

export function LegalTips() {
  // Mock data - replace with actual content
  const tips: LegalTip[] = [
    {
      id: "1",
      title: "When Do You Need a Lawyer? Essential Legal Situations",
      excerpt:
        "Understanding when to seek legal counsel can save you time, money, and stress. Learn about the key situations where professional legal advice is crucial for protecting your rights and interests.",
      category: "General Legal Advice",
      readTime: "5 min read",
      author: "Legal Team",
      publishedDate: "2024-01-15",
    },
    {
      id: "2",
      title: "Understanding Your Rights During Police Investigation",
      excerpt:
        "Know your fundamental rights when dealing with law enforcement. This guide covers what you should and shouldn't do during police questioning, searches, and arrests.",
      category: "Criminal Law",
      readTime: "7 min read",
      author: "Criminal Law Expert",
      publishedDate: "2024-01-10",
    },
    {
      id: "3",
      title: "Property Purchase: Legal Checklist for Buyers",
      excerpt:
        "Essential legal steps to follow when buying property in India. From title verification to registration, ensure your property purchase is legally sound.",
      category: "Property Law",
      readTime: "10 min read",
      author: "Property Law Specialist",
      publishedDate: "2024-01-08",
    },
    {
      id: "4",
      title: "Employment Rights: What Every Worker Should Know",
      excerpt:
        "Comprehensive guide to employee rights in India including working hours, wages, termination procedures, and workplace harassment protection.",
      category: "Employment Law",
      readTime: "8 min read",
      author: "Employment Law Expert",
      publishedDate: "2024-01-05",
    },
    {
      id: "5",
      title: "Family Law: Understanding Divorce Procedures in India",
      excerpt:
        "Navigate the complexities of divorce proceedings including mutual consent divorce, contested divorce, alimony, and child custody arrangements.",
      category: "Family Law",
      readTime: "12 min read",
      author: "Family Law Specialist",
      publishedDate: "2024-01-03",
    },
    {
      id: "6",
      title: "Consumer Rights: How to File Complaints Effectively",
      excerpt:
        "Learn about your consumer rights and the step-by-step process to file complaints against defective products or poor services through consumer courts.",
      category: "Consumer Law",
      readTime: "6 min read",
      author: "Consumer Rights Expert",
      publishedDate: "2024-01-01",
    },
  ]

  const categories = [
    "All",
    "General Legal Advice",
    "Criminal Law",
    "Property Law",
    "Employment Law",
    "Family Law",
    "Consumer Law",
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Legal Tips & Guidance</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential legal knowledge to help you understand your rights and navigate common legal situations. Written by
          legal experts to provide clear, actionable guidance.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
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

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Card key={tip.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{tip.category}</Badge>
                <span className="text-sm text-muted-foreground">{tip.readTime}</span>
              </div>
              <CardTitle className="text-lg line-clamp-2">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{tip.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{tip.author}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{new Date(tip.publishedDate).toLocaleDateString()}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
