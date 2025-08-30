"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { LegalTips } from "@/components/law-library/legal-tips"
import { Agreements } from "@/components/law-library/agreements"
import { AreasOfLaw } from "@/components/law-library/areas-of-law"
import { SCJudgements } from "@/components/law-library/sc-judgements"
import { Glossary } from "@/components/law-library/glossary"
import { BookOpen, FileText, Scale, Gavel, ScrollText, Hash, FileCheck, BookMarked } from "lucide-react"

export default function LawLibrary() {
  const [activeTab, setActiveTab] = useState("tips")

  const libraryStats = {
    totalDocuments: "50,000+",
    scJudgements: "25,000+",
    bareActs: "1,000+",
    glossaryTerms: "2,300+",
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Law Library</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your comprehensive resource for legal knowledge and documentation
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{libraryStats.totalDocuments}</div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{libraryStats.scJudgements}</div>
              <div className="text-sm text-muted-foreground">SC Judgements</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{libraryStats.bareActs}</div>
              <div className="text-sm text-muted-foreground">Bare Acts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{libraryStats.glossaryTerms}</div>
              <div className="text-sm text-muted-foreground">Glossary Terms</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto">
          <TabsTrigger value="tips" className="flex flex-col items-center gap-1 p-3">
            <BookOpen className="h-4 w-4" />
            <span className="text-xs">Legal Tips</span>
          </TabsTrigger>
          <TabsTrigger value="agreements" className="flex flex-col items-center gap-1 p-3">
            <FileText className="h-4 w-4" />
            <span className="text-xs">Agreements</span>
          </TabsTrigger>
          <TabsTrigger value="forms" className="flex flex-col items-center gap-1 p-3">
            <FileCheck className="h-4 w-4" />
            <span className="text-xs">Forms</span>
          </TabsTrigger>
          <TabsTrigger value="areas" className="flex flex-col items-center gap-1 p-3">
            <Scale className="h-4 w-4" />
            <span className="text-xs">Areas of Law</span>
          </TabsTrigger>
          <TabsTrigger value="judgements" className="flex flex-col items-center gap-1 p-3">
            <Gavel className="h-4 w-4" />
            <span className="text-xs">SC Judgements</span>
          </TabsTrigger>
          <TabsTrigger value="acts" className="flex flex-col items-center gap-1 p-3">
            <ScrollText className="h-4 w-4" />
            <span className="text-xs">Bare Acts</span>
          </TabsTrigger>
          <TabsTrigger value="rules" className="flex flex-col items-center gap-1 p-3">
            <BookMarked className="h-4 w-4" />
            <span className="text-xs">Rules</span>
          </TabsTrigger>
          <TabsTrigger value="glossary" className="flex flex-col items-center gap-1 p-3">
            <Hash className="h-4 w-4" />
            <span className="text-xs">Glossary</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tips">
          <LegalTips />
        </TabsContent>

        <TabsContent value="agreements">
          <Agreements />
        </TabsContent>

        <TabsContent value="forms">
          <div className="text-center py-12">
            <FileCheck className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Legal Forms</h3>
            <p className="text-muted-foreground">
              Central, state and legal forms in India - downloadable as PDF. Coming soon!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="areas">
          <AreasOfLaw />
        </TabsContent>

        <TabsContent value="judgements">
          <SCJudgements />
        </TabsContent>

        <TabsContent value="acts">
          <div className="text-center py-12">
            <ScrollText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bare Acts</h3>
            <p className="text-muted-foreground">
              Online collection of 1000+ bare acts passed by Indian Parliament since 1834. Coming soon!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="rules">
          <div className="text-center py-12">
            <BookMarked className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rules</h3>
            <p className="text-muted-foreground">
              Online digest of 130+ major rules framed under the acts. Coming soon!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="glossary">
          <Glossary />
        </TabsContent>
      </Tabs>
    </div>
  )
}
