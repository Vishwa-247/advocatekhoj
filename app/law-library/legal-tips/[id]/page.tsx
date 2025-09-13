"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { legalTipsData, type LegalTip } from "@/lib/legal-tips-data";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Scale,
  FileText,
  Gavel,
  ChevronRight,
  Home,
} from "lucide-react";
const tips = [
  {
    id: "1",
    title: "Do you really need an advocate?",
    excerpt:
      "Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need.",
    content: `Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need. Advocates, however, aren't just for criminals or those in litigation.

A skilled advocate's advice can help you understand the complex rules associated with business negotiations and partnerships, estate planning, adoption, will and trust drafting, tax strategies and much more.

Advocates improve their clients' quality of life by protecting them from situations that might bring later plenty of emotional and financial hardship. We have enrolled a set of qualified advocates to help those in trouble and those who want to avoid trouble in the future. You can begin your search for legal help by presenting your case to AdvocateKhoj, wherein qualified advocates can review your case. Finding an advocate at AdvocateKhoj is fast, free and confidential!

## When Do You Need an Advocate?

**Criminal Matters**: If you're facing criminal charges, you need legal representation immediately. Even minor charges can have serious consequences.

**Civil Litigation**: Being sued or considering suing someone requires professional legal guidance to navigate complex court procedures.

**Family Law**: Divorce, child custody, adoption, and other family matters involve both legal and emotional complexities.

**Business Matters**: Contract negotiations, business formation, intellectual property issues, and employment matters benefit from legal expertise.

**Estate Planning**: Wills, trusts, and estate planning require careful legal structuring to ensure your wishes are properly executed.

## Types of Legal Representation

**Full Representation**: The advocate handles all aspects of your case from start to finish.

**Limited Scope Representation**: You hire an advocate for specific tasks while handling other aspects yourself.

**Legal Consultation**: One-time advice sessions to understand your legal position and options.

**Document Review**: Having an advocate review important documents before you sign them.

## Benefits of Having an Advocate

1. **Legal Expertise**: Advocates understand complex laws and procedures that laypeople cannot navigate effectively.

2. **Objective Perspective**: Legal matters can be emotionally charged. Advocates provide objective analysis and advice.

3. **Negotiation Skills**: Experienced advocates are skilled negotiators who can often achieve better outcomes.

4. **Court Experience**: If your matter goes to court, having someone familiar with court procedures is invaluable.

5. **Risk Management**: Advocates help you understand potential risks and consequences of different legal strategies.

## Finding the Right Advocate

Research their specialization and experience in cases similar to yours. Check their track record and client reviews. Consider their communication style and availability. Discuss fees and billing arrangements upfront.

Remember, having an advocate doesn't guarantee a specific outcome, but it significantly improves your chances of achieving the best possible result in your legal matter.`,
    category: "Getting Started",
    readTime: "8 min read",
    author: "Legal Team",
    publishedDate: "2024-01-15",
    views: 1234,
    likes: 89,
    featured: true,
  },
  {
    id: "2",
    title: "What to consider before you look for an advocate?",
    excerpt:
      "Before seeking legal representation, it's important to understand your specific needs and what type of legal expertise will best serve your situation.",
    content: `Before seeking legal representation, it's important to understand your specific needs and what type of legal expertise will best serve your situation.

## Assess Your Legal Needs

**Identify the Type of Legal Matter**: Is it criminal, civil, family, business, or estate-related? Different areas of law require different expertise.

**Determine Complexity**: Simple matters like reviewing a lease might need basic consultation, while complex litigation demands specialized expertise.

**Understand Urgency**: Some matters require immediate attention, while others allow for careful planning and selection.

## Financial Considerations

**Budget Planning**: Legal services can vary significantly in cost. Determine what you can afford and discuss payment options.

**Fee Structures**: Understand different billing methods:
- Hourly rates
- Flat fees for specific services
- Contingency fees (percentage of settlement)
- Retainer arrangements

**Cost vs. Consequences**: Consider the potential cost of not having proper legal representation versus the expense of hiring an advocate.

## Research and Selection Criteria

**Specialization**: Just as doctors specialize, advocates focus on specific areas. Ensure your chosen advocate has relevant experience.

**Experience Level**: Consider how much experience you need. Junior advocates may be suitable for simple matters, while complex cases require seasoned professionals.

**Track Record**: Research their success rate in cases similar to yours.

**Professional Standing**: Check their bar association status and any disciplinary actions.

## Communication and Accessibility

**Communication Style**: You need an advocate who can explain legal concepts clearly in terms you understand.

**Availability**: Consider their caseload and availability for your matter.

**Response Time**: How quickly do they respond to calls and emails?

**Language**: Ensure they can communicate effectively in your preferred language.

## Geographic Considerations

**Local Knowledge**: Local advocates understand regional laws, court procedures, and have relationships with local judges and court staff.

**Court Appearances**: If your matter requires court appearances, local representation is often more convenient and cost-effective.

**Remote Consultation**: Some matters can be handled remotely, expanding your options for representation.

## Preparation for Initial Consultation

**Document Gathering**: Collect all relevant documents before meeting with potential advocates.

**Question Preparation**: Prepare a list of questions about your case and their approach.

**Goal Clarification**: Be clear about what you want to achieve from the legal process.

## Red Flags to Avoid

- Advocates who guarantee specific outcomes
- Pressure to sign immediately
- Unclear fee arrangements
- Poor communication or unprofessional behavior
- Lack of specialization in your type of case

Taking time to consider these factors before selecting an advocate can save you time, money, and stress while increasing the likelihood of a favorable outcome.`,
    category: "Getting Started",
    readTime: "6 min read",
    author: "Legal Advisory Panel",
    publishedDate: "2024-01-14",
    views: 987,
    likes: 67,
  },
  // Add more tips here as needed
];

export default function LegalTipDetail() {
  const params = useParams();
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  const tipId = params.id as string;
  const tip = tips.find((t) => t.id === tipId);

  if (!tip) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Legal Tip Not Found
              </h1>
              <p className="text-gray-600 mb-6">
                The legal tip you're looking for doesn't exist.
              </p>
              <Button onClick={() => router.push("/law-library/legal-tips")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Legal Tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sidebarSections = [
    {
      title: "BARE Acts",
      icon: <Scale className="w-5 h-5" />,
      items: [
        {
          title: "Constitution of India",
          count: "New",
          href: "/law-library/bare-acts/constitution",
        },
        {
          title: "Indian Penal Code",
          count: "25k+",
          href: "/law-library/bare-acts/ipc",
        },
        {
          title: "Civil Procedure Code",
          count: "6k+",
          href: "/law-library/bare-acts/cpc",
        },
        {
          title: "Criminal Procedure Code",
          count: "1k+",
          href: "/law-library/bare-acts/crpc",
        },
      ],
    },
    {
      title: "SEARCH Judgements",
      icon: <Gavel className="w-5 h-5" />,
      items: [
        {
          title: "Supreme Court",
          count: "25k+",
          href: "/law-library/judgements/supreme-court",
        },
        {
          title: "High Courts",
          count: "6k+",
          href: "/law-library/judgements/high-courts",
        },
        {
          title: "Tribunals",
          count: "1k+",
          href: "/law-library/judgements/tribunals",
        },
      ],
    },
    {
      title: "LAW Dictionary",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          title: "Legal Terms",
          count: "5k+",
          href: "/law-library/dictionary/terms",
        },
        {
          title: "Latin Phrases",
          count: "500+",
          href: "/law-library/dictionary/latin",
        },
        {
          title: "Definitions",
          count: "2k+",
          href: "/law-library/dictionary/definitions",
        },
      ],
    },
    {
      title: "AREAS of Law",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { title: "Criminal Law", href: "/law-library/areas/criminal" },
        { title: "Civil Law", href: "/law-library/areas/civil" },
        { title: "Corporate Law", href: "/law-library/areas/corporate" },
        { title: "Family Law", href: "/law-library/areas/family" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={() => router.push("/")}
              className="hover:text-blue-600 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button
              onClick={() => router.push("/law-library")}
              className="hover:text-blue-600"
            >
              Law Library
            </button>
            <ChevronRight className="w-4 h-4" />
            <button
              onClick={() => router.push("/law-library/legal-tips")}
              className="hover:text-blue-600"
            >
              Legal Tips
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{tip.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Back Button */}
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => router.push("/law-library/legal-tips")}
                className="mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Legal Tips
              </Button>
            </div>

            {/* Article Content */}
            <Card className="shadow-lg">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {tip.category}
                  </Badge>
                  {tip.featured && (
                    <Badge className="bg-amber-100 text-amber-800">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-3xl font-bold text-gray-900 leading-tight">
                  {tip.title}
                </CardTitle>

                <p className="text-xl text-gray-600 leading-relaxed mt-4">
                  {tip.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-6 pt-6 border-t">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {tip.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(tip.publishedDate)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {tip.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {tip.views.toLocaleString()} views
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked
                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${liked ? "fill-current" : ""}`}
                    />
                    {liked ? tip.likes + 1 : tip.likes}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {tip.content}
                  </div>
                </div>

                {/* Related Tips */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Related Legal Tips
                  </h3>
                  <div className="grid gap-4">
                    {tips
                      .filter(
                        (t) => t.id !== tip.id && t.category === tip.category
                      )
                      .slice(0, 3)
                      .map((relatedTip) => (
                        <div
                          key={relatedTip.id}
                          onClick={() =>
                            router.push(
                              `/law-library/legal-tips/${relatedTip.id}`
                            )
                          }
                          className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 mb-2">
                            {relatedTip.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedTip.excerpt}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>{relatedTip.readTime}</span>
                            <span>{relatedTip.views} views</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Navigation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => router.push("/law-library")}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Law Library Home
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => router.push("/law-library/legal-tips")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    All Legal Tips
                  </Button>
                </CardContent>
              </Card>

              {/* Law Library Sections */}
              {sidebarSections.map((section) => (
                <Card key={section.title}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      {section.icon}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {section.items.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => router.push(item.href)}
                        className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                      >
                        <span>{item.title}</span>
                        {"count" in item && item.count && (
                          <Badge variant="secondary" className="text-xs">
                            {item.count}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
