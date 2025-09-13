"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Star,

  Calendar,
  FileText,
  Briefcase,
  Trophy,
} from "lucide-react";
import AdBanner from "@/components/home/ad-banner";

export default function LawCollegesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all-locations");
  const [selectedCourse, setSelectedCourse] = useState("all-courses");

  const colleges = [
    {
      id: 1,
      name: "National Law School of India University",
      location: "Bangalore, Karnataka",
      nirfRanking: 1,
      established: 1987,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A++ by NAAC",
      logo: "/logos/nlsiu-logo.png",
      website: "https://www.nls.ac.in",
    },
    {
      id: 2,
      name: "Rajiv Gandhi School of Intellectual Property Law",
      location: "Kharagpur, West Bengal",
      nirfRanking: 2,
      established: 2006,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A+ by NAAC",
      logo: "/logos/rgsoipl-logo.png",
      website: "https://www.rgsoipl.iitkgp.ac.in",
    },
    {
      id: 3,
      name: "Gujarat National Law University",
      location: "Gandhinagar, Gujarat",
      nirfRanking: 3,
      established: 2003,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A by NAAC",
      logo: "/logos/gnlu-logo.png",
      website: "https://www.gnlu.ac.in",
    },
    {
      id: 4,
      name: "The West Bengal National University of Juridical Sciences",
      location: "Kolkata, West Bengal",
      nirfRanking: 4,
      established: 1999,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A++ by NAAC",
      logo: "/logos/wbnujs-logo.png",
      website: "https://www.wbnujs.ac.in",
    },
    {
      id: 5,
      name: "Jamia Millia Islamia (Faculty of Law)",
      location: "New Delhi, Delhi",
      nirfRanking: 5,
      established: 1920,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A by NAAC",
      logo: "/logos/jmi-logo.png",
      website: "https://www.jmi.ac.in",
    },
    {
      id: 6,
      name: "Aligarh Muslim University (Faculty of Law)",
      location: "Aligarh, Uttar Pradesh",
      nirfRanking: 6,
      established: 1875,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A by NAAC",
      logo: "/logos/amu-logo.png",
      website: "https://www.amu.ac.in",
    },
    {
      id: 7,
      name: "Symbiosis Law School",
      location: "Pune, Maharashtra",
      nirfRanking: 7,
      established: 1977,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A+ by NAAC",
      logo: "/logos/sls-logo.png",
      website: "https://www.slspune.edu.in",
    },
    {
      id: 8,
      name: "Banaras Hindu University (Faculty of Law)",
      location: "Varanasi, Uttar Pradesh",
      nirfRanking: 8,
      established: 1916,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A+ by NAAC",
      logo: "/logos/bhu-logo.png",
      website: "https://www.bhu.ac.in",
    },
    {
      id: 9,
      name: "University of Delhi (Faculty of Law)",
      location: "New Delhi, Delhi",
      nirfRanking: 9,
      established: 1922,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A++ by NAAC",
      logo: "/logos/du-logo.png",
      website: "https://www.du.ac.in",
    },
    {
      id: 10,
      name: "Hidayatullah National Law University",
      location: "Raipur, Chhattisgarh",
      nirfRanking: 10,
      established: 2003,
      courses: ["BA LLB", "LLM", "PhD"],
      accreditation: "A by NAAC",
      logo: "/logos/hnlu-logo.png",
      website: "https://www.hnlu.ac.in",
    },
  ];

  const announcements = [
    {
      id: 1,
      type: "Admissions",
      title: "CLAT 2025 Registration Open",
      description:
        "Common Law Admission Test registration is now open for undergraduate and postgraduate programs.",
      deadline: "2025-12-31",
      venue: "Online",
      sponsored: true,
    },
    {
      id: 2,
      type: "Conference",
      title: "International Conference on Intellectual Property Rights",
      description:
        "Join leading experts discussing the future of IP law in the digital age.",
      date: "2025-11-20",
      venue: "IIT Delhi, New Delhi",
      sponsored: false,
    },
    {
      id: 3,
      type: "Workshop",
      title: "Legal Research Methodology Workshop",
      description: "Learn advanced techniques for legal research and writing.",
      date: "2025-10-15",
      venue: "NALSAR University, Hyderabad",
      sponsored: false,
    },
    {
      id: 4,
      type: "Internship",
      title: "Summer Internship Program at Top Law Firms",
      description:
        "Apply for prestigious internship opportunities with leading law firms across India.",
      deadline: "2025-11-30",
      venue: "Multiple Locations",
      sponsored: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Education Hub</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover top law colleges, admissions, conferences, and career
            opportunities in legal education
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Advertisement Banner */}
        <AdBanner size="large" position="top" layout="double" />

        <div className="mt-8">
          <Tabs defaultValue="colleges" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 h-12">
              <TabsTrigger value="colleges" className="text-base">
                Law Colleges
              </TabsTrigger>
              <TabsTrigger value="announcements" className="text-base">
                Announcements
              </TabsTrigger>
              <TabsTrigger value="internships" className="text-base">
                Internships
              </TabsTrigger>
              <TabsTrigger value="submit" className="text-base">
                Submit Content
              </TabsTrigger>
            </TabsList>

            <TabsContent value="colleges" className="space-y-8">
              {/* Search and Filter Section */}
              <Card className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search law colleges by name or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="w-full lg:w-48 h-12">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-locations">
                        All Locations
                      </SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Pune">Pune</SelectItem>
                      <SelectItem value="Kolkata">Kolkata</SelectItem>
                      <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                      <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedCourse}
                    onValueChange={setSelectedCourse}
                  >
                    <SelectTrigger className="w-full lg:w-48 h-12">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-courses">All Courses</SelectItem>
                      <SelectItem value="BA LLB">BA LLB</SelectItem>
                      <SelectItem value="LLB">LLB</SelectItem>
                      <SelectItem value="LLM">LLM</SelectItem>
                      <SelectItem value="PhD">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3 space-y-6">
                  {colleges.map((college) => (
                    <Card
                      key={college.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* College Logo/Image */}
                        <div className="lg:w-1/4 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <img
                              src={college.logo || "/placeholder-logo.png"}
                              alt={college.name}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        </div>

                        {/* College Information */}
                        <div className="lg:w-3/4 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                  {college.name}
                                </h3>
                                <Badge
                                  variant="default"
                                  className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold"
                                >
                                  NIRF #{college.nirfRanking}
                                </Badge>
                              </div>

                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span className="font-medium">
                                    {college.location}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Trophy className="w-4 h-4 text-yellow-500" />
                                  <span className="font-medium">
                                    {college.accreditation}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span>Est. {college.established}</span>
                                </div>
                              </div>

                              {/* Courses */}
                              <div className="mb-4">
                                <span className="text-sm font-semibold text-gray-700 mb-2 block">
                                  Available Courses:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {college.courses.map((course) => (
                                    <Badge
                                      key={course}
                                      variant="secondary"
                                      className="bg-secondary/10 text-secondary border-secondary/20"
                                    >
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex flex-wrap gap-3">
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90"
                                  asChild
                                >
                                  <a
                                    href={college.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Visit Website
                                  </a>
                                </Button>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-primary"
                                >
                                  Compare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="xl:col-span-1 space-y-6">
                  {/* Advertisement */}
                  <AdBanner size="medium" position="sidebar" />

                  {/* Quick Stats */}
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Legal Education Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">
                            Top Law Colleges
                          </span>
                          <Badge
                            variant="default"
                            className="bg-primary text-primary-foreground"
                          >
                            1,200+
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">
                            Active Admissions
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground"
                          >
                            45
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">
                            Upcoming Events
                          </span>
                          <Badge
                            variant="outline"
                            className="border-yellow-500 text-yellow-700"
                          >
                            28
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">
                            NIRF Ranked
                          </span>
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-700"
                          >
                            200+
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Quick Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-2">
                        <a
                          href="/law-library"
                          className="block p-2 text-sm text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          Law Library
                        </a>
                        <a
                          href="/sawal-jawab"
                          className="block p-2 text-sm text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          Sawal Jawab
                        </a>
                        <a
                          href="/advocate/dashboard"
                          className="block p-2 text-sm text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          Join as Advocate
                        </a>
                        <a
                          href="/client/dashboard"
                          className="block p-2 text-sm text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          Post a Case
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="announcements" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {announcements.map((announcement) => (
                    <Card
                      key={announcement.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant={
                                  announcement.sponsored
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {announcement.type}
                              </Badge>
                              {announcement.sponsored && (
                                <Badge variant="outline" className="text-xs">
                                  Sponsored
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg mb-2">
                              {announcement.title}
                            </CardTitle>
                            <CardDescription>
                              {announcement.description}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {announcement.date &&
                                new Date(
                                  announcement.date
                                ).toLocaleDateString()}
                              {announcement.deadline &&
                                `Deadline: ${new Date(
                                  announcement.deadline
                                ).toLocaleDateString()}`}
                              {announcement.venue && (
                                <div className="flex items-center gap-1 mt-1">
                                  <MapPin className="w-3 h-3" />
                                  <span className="text-xs">
                                    {announcement.venue}
                                  </span>
                                </div>
                              )}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline">Learn More</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <AdBanner size="medium" position="sidebar" />

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { name: "Admissions", count: 12, icon: FileText },
                          { name: "Conferences", count: 8, icon: Calendar },
                          { name: "Workshops", count: 15, icon: Trophy },
                          { name: "Internships", count: 22, icon: Briefcase },
                        ].map((category) => (
                          <div
                            key={category.name}
                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <div className="flex items-center gap-2">
                              <category.icon className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{category.name}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="internships" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Internship & Job Opportunities</CardTitle>
                  <CardDescription>
                    Find internships and career opportunities in the legal field
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Coming Soon
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We're building a comprehensive internship and job portal
                      for legal professionals.
                    </p>
                    <Button>Get Notified</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submit" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Content for Review</CardTitle>
                  <CardDescription>
                    Share announcements, events, or opportunities with our
                    community
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="mb-6">
                    <img
                      src="/placeholder.svg"
                      alt="Submit Content"
                      className="w-32 h-32 mx-auto mb-4 opacity-50"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Want to Submit Content?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Share your announcements, events, conferences, workshops, or
                    job opportunities with our legal community.
                  </p>
                  <a href="/contact-us">
                    <Button size="lg" className="px-8">
                      Contact Us to Submit Content
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 mt-4">
                    All submissions are reviewed before publication
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
