"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  BookOpen,
  Scale,
} from "lucide-react";
import { getJudgmentById } from "@/lib/sc-judgments-content";
import { useParams } from "next/navigation";

export default function JudgementDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const judgment = getJudgmentById(id);

  if (!judgment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Judgement Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The requested judgment is not available.
            </p>
            <Button asChild>
              <Link href="/law-library/judgements">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Judgements
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const yearRanges = [
    {
      label: "2020 - 2025",
      years: ["2025", "2024", "2023", "2022", "2021", "2020"],
    },
    {
      label: "2010 - 2019",
      years: [
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
      ],
    },
    {
      label: "2000 - 2009",
      years: [
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
      ],
    },
    {
      label: "1990 - 1999",
      years: [
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",
        "1991",
        "1990",
      ],
    },
    {
      label: "1980 - 1989",
      years: [
        "1989",
        "1988",
        "1987",
        "1986",
        "1985",
        "1984",
        "1983",
        "1982",
        "1981",
        "1980",
      ],
    },
    {
      label: "1970 - 1979",
      years: [
        "1979",
        "1978",
        "1977",
        "1976",
        "1975",
        "1974",
        "1973",
        "1972",
        "1971",
        "1970",
      ],
    },
    {
      label: "1960 - 1969",
      years: [
        "1969",
        "1968",
        "1967",
        "1966",
        "1965",
        "1964",
        "1963",
        "1962",
        "1961",
        "1960",
      ],
    },
    {
      label: "1950 - 1959",
      years: [
        "1959",
        "1958",
        "1957",
        "1956",
        "1955",
        "1954",
        "1953",
        "1952",
        "1951",
        "1950",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section - Yellow gradient banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-3">Supreme Court Judgements</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/judgements" className="hover:underline">
              Supreme Court Judgements
            </Link>
            <span>&gt;</span>
            <span className="font-medium">Announcement</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Year Navigation */}
            <div className="lg:col-span-2">
              <div className="sticky top-4 space-y-3">
                {yearRanges.map((range, idx) => (
                  <div
                    key={idx}
                    className="bg-green-600 text-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="bg-green-700 px-3 py-2 text-center font-semibold text-sm">
                      {range.label}
                    </div>
                    {idx === 0 && (
                      <div className="p-2 space-y-1">
                        {range.years.map((year) => (
                          <Link
                            key={year}
                            href={`/law-library/judgements/${year}`}
                            className="block text-center text-sm hover:bg-green-500 py-1 rounded transition-colors"
                          >
                            {year}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Header with Share Buttons */}
                <div className="border-b px-6 py-4 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-gray-700">
                    Latest Judgments
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Share
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Post
                    </Button>
                  </div>
                </div>

                {/* Case Title and Details */}
                <div className="px-8 py-6">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">
                      {judgment.title}
                    </h1>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="font-medium">{judgment.caseNumber}</p>
                      <p>
                        [{judgment.caseType} No. ___________ of {judgment.year}{" "}
                        @ SLP (Crl.) No. {judgment.id.replace(/\D/g, "")} of{" "}
                        {judgment.year}]
                      </p>
                    </div>
                  </div>

                  {/* Judges List */}
                  <div className="mb-6 pb-6 border-b">
                    {judgment.judges.map((judge, idx) => (
                      <p key={idx} className="text-sm mb-1">
                        <span className="font-semibold text-gray-700">
                          {judge}
                        </span>
                      </p>
                    ))}
                  </div>

                  {/* Judgment Content - Numbered Paragraphs */}
                  <div className="space-y-4">
                    {judgment.paragraphs.map((para, index) => {
                      // Skip empty paragraphs
                      if (!para.trim()) return null;

                      return (
                        <p
                          key={index}
                          className="text-sm text-gray-700 leading-relaxed text-justify"
                        >
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  {/* Judge Signatures */}
                  <div className="mt-8 pt-6 border-t text-right space-y-1">
                    {judgment.judges.map((judge, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        ....................................................
                        {judge}
                      </p>
                    ))}
                    <p className="text-sm text-gray-600 mt-4">New Delhi</p>
                    <p className="text-sm text-gray-600">{judgment.date}</p>
                  </div>

                  {/* Citations */}
                  {judgment.citations && judgment.citations.length > 0 && (
                    <div className="mt-8 pt-6 border-t">
                      <div className="space-y-1">
                        {judgment.citations.map((citation, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {citation}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Facebook Like Button */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        Like
                      </div>
                      <span className="text-xs text-gray-500">
                        Sign Up to see what your friends like.
                      </span>
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="mt-8 pt-6 border-t">
                    <Button variant="ghost" asChild>
                      <Link
                        href="/law-library/judgements"
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-4 space-y-4">
                {/* Bare Acts */}
                <Link
                  href="/law-library/bare-acts"
                  className="block bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">BARE</h3>
                      <p className="text-sm">Acts</p>
                    </div>
                    <div className="w-16 h-20 bg-gray-600 mx-auto rounded flex items-center justify-center">
                      <Scale className="w-8 h-8" />
                    </div>
                  </div>
                </Link>

                {/* Law Dictionary */}
                <Link
                  href="/law-library"
                  className="block bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">LAW</h3>
                      <p className="text-sm">Dictionary</p>
                    </div>
                    <div className="w-16 h-20 bg-blue-400 mx-auto rounded flex items-center justify-center">
                      <BookOpen className="w-8 h-8" />
                    </div>
                  </div>
                </Link>

                {/* Law College */}
                <Link
                  href="/law-colleges"
                  className="block bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">LAW</h3>
                      <p className="text-sm">College</p>
                    </div>
                    <div className="w-16 h-20 bg-indigo-400 mx-auto rounded flex items-center justify-center">
                      <BookOpen className="w-8 h-8" />
                    </div>
                  </div>
                </Link>

                {/* Areas of Law */}
                <Link
                  href="/law-library/areas-of-law"
                  className="block bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">AREAS</h3>
                      <p className="text-sm">of Law</p>
                    </div>
                    <div className="w-16 h-20 bg-orange-400 mx-auto rounded flex items-center justify-center">
                      <Scale className="w-8 h-8" />
                    </div>
                  </div>
                </Link>

                {/* Legal Tips */}
                <Link
                  href="/law-library/legal-tips"
                  className="block bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg">LEGAL</h3>
                      <p className="text-sm">Tips</p>
                    </div>
                    <div className="w-16 h-20 bg-red-400 mx-auto rounded flex items-center justify-center">
                      <BookOpen className="w-8 h-8" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
