import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen } from "lucide-react"

interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
  relatedTerms: string[]
  examples?: string[]
}

export function Glossary() {
  // Mock data - replace with actual glossary (2300+ entries as mentioned)
  const terms: GlossaryTerm[] = [
    {
      id: "1",
      term: "Affidavit",
      definition:
        "A written statement confirmed by oath or affirmation, for use as evidence in court. It is a voluntary declaration of facts that the person making it believes to be true.",
      category: "Legal Documents",
      relatedTerms: ["Oath", "Declaration", "Evidence", "Testimony"],
      examples: ["Affidavit of income", "Affidavit of residence", "Affidavit of identity"],
    },
    {
      id: "2",
      term: "Bail",
      definition:
        "The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged to guarantee their appearance in court.",
      category: "Criminal Law",
      relatedTerms: ["Custody", "Surety", "Bond", "Remand"],
      examples: ["Regular bail", "Anticipatory bail", "Interim bail"],
    },
    {
      id: "3",
      term: "Caveat",
      definition:
        "A legal notice requesting a court or other tribunal to suspend a proceeding until the notifier has been given a chance to be heard.",
      category: "Civil Procedure",
      relatedTerms: ["Notice", "Injunction", "Stay", "Proceeding"],
    },
    {
      id: "4",
      term: "Decree",
      definition:
        "The formal expression of an adjudication which conclusively determines the rights of the parties with regard to all or any of the matters in controversy in the suit.",
      category: "Civil Procedure",
      relatedTerms: ["Judgment", "Order", "Adjudication", "Rights"],
    },
    {
      id: "5",
      term: "Ex-parte",
      definition:
        "A legal proceeding brought by one party only, without notice to or challenge by the other side. Done for, on behalf of, or on the application of one party alone.",
      category: "Legal Procedure",
      relatedTerms: ["Unilateral", "One-sided", "Without notice", "Default"],
    },
    {
      id: "6",
      term: "Force Majeure",
      definition:
        "Unforeseeable circumstances that prevent a party from fulfilling a contract. These extraordinary circumstances are beyond the reasonable control of the parties.",
      category: "Contract Law",
      relatedTerms: ["Act of God", "Impossibility", "Frustration", "Contract"],
      examples: ["Natural disasters", "War", "Government actions", "Pandemic"],
    },
  ]

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const categories = [
    "All",
    "Legal Documents",
    "Criminal Law",
    "Civil Procedure",
    "Contract Law",
    "Constitutional Law",
    "Property Law",
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Legal Glossary</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive dictionary of legal terms, words, names, and acronyms. Over 2,300 entries with clear definitions
          and examples to help you understand legal language.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search legal terms..." className="pl-10" />
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {alphabet.map((letter) => (
          <Button key={letter} variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
            {letter}
          </Button>
        ))}
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

      {/* Terms List */}
      <div className="space-y-4">
        {terms.map((term) => (
          <Card key={term.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{term.term}</CardTitle>
                <Badge variant="secondary">{term.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{term.definition}</p>

                {term.examples && (
                  <div>
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {term.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-medium mb-2">Related Terms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {term.relatedTerms.map((relatedTerm) => (
                      <Badge key={relatedTerm} variant="outline" className="cursor-pointer hover:bg-muted">
                        {relatedTerm}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All 2,300+ Terms
        </Button>
      </div>
    </div>
  )
}
