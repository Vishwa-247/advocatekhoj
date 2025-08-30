"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, Calendar, FileText, Briefcase, Trophy } from "lucide-react"
import AdBanner from "@/components/home/ad-banner"

export default function LawCollegesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const colleges = [
    {
      id: 1,
      name: "National Law School of India University",
      location: "Bangalore, Karnataka",
      rating: 4.8,
      established: 1987,
      courses: ["BA LLB", "LLM", "PhD"],
      fees: "₹2,50,000/year",
      image: "/law-college-building.png",
    },
    {
      id: 2,
      name: "Rajiv Gandhi School of Intellectual Property Law",
      location: "Kharagpur, West Bengal",
      rating: 4.6,
      established: 2006,
      courses: ["BA LLB", "LLM", "PhD"],
      fees: "₹1,80,000/year",
      image: "/modern-law-school.png",
    },
    {
      id: 3,
      name: "Gujarat National Law University",
      location: "Gandhinagar, Gujarat",
      rating: 4.5,
      established: 2003,
      courses: ["BA LLB", "LLM", "PhD"],
      fees: "₹2,00,000/year",
      image: "/law-university-campus.png",
    },
  ]

  const announcements = [
    {
      id: 1,
      type: "Admissions",
      title: "CLAT 2024 Registration Open",
      description: "Common Law Admission Test registration is now open for undergraduate and postgraduate programs.",
      date: "2024-01-15",
      sponsored: true,
    },
    {
      id: 2,
      type: "Conference",
      title: "International Conference on Intellectual Property Rights",
      description: "Join leading experts discussing the future of IP law in the digital age.",
      date: "2024-02-20",
      sponsored: false,
    },
    {
      id: 3,
      type: "Workshop",
      title: "Legal Research Methodology Workshop",
      description: "Learn advanced techniques for legal research and writing.",
      date: "2024-02-10",
      sponsored: false,
    },
    {
      id: 4,
      type: "Internship",
      title: "Summer Internship Program at Top Law Firms",
      description: "Apply for prestigious internship opportunities with leading law firms across India.",
      date: "2024-03-01",
      sponsored: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" position="top" />

        <div className="mt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Education Hub</h1>
            <p className="text-gray-600">Discover law colleges, admissions, conferences, and career opportunities</p>
          </div>

          <Tabs defaultValue="colleges" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="colleges">Law Colleges</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="internships">Internships</TabsTrigger>
              <TabsTrigger value="submit">Submit Content</TabsTrigger>
            </TabsList>

            <TabsContent value="colleges" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input
                  placeholder="Search law colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="md:max-w-md"
                />
                <Button variant="outline">Filter by Location</Button>
                <Button variant="outline">Filter by Course</Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {colleges.map((college) => (
                    <Card key={college.id} className="hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={college.image || "/placeholder.svg"}
                            alt={college.name}
                            className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{college.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>{college.rating}</span>
                              </div>
                              <span>Est. {college.established}</span>
                            </div>
                          </CardHeader>
                          <CardContent className="p-0">
                            <div className="space-y-3">
                              <div>
                                <span className="text-sm font-medium text-gray-700">Courses: </span>
                                <div className="flex gap-2 mt-1">
                                  {college.courses.map((course) => (
                                    <Badge key={course} variant="secondary">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-primary">{college.fees}</span>
                                <Button>View Details</Button>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <AdBanner size="medium" position="sidebar" />

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Total Law Colleges</span>
                          <Badge>1,200+</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Active Admissions</span>
                          <Badge>45</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Upcoming Events</span>
                          <Badge>28</Badge>
                        </div>
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
                    <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={announcement.sponsored ? "default" : "secondary"}>
                                {announcement.type}
                              </Badge>
                              {announcement.sponsored && (
                                <Badge variant="outline" className="text-xs">
                                  Sponsored
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg mb-2">{announcement.title}</CardTitle>
                            <CardDescription>{announcement.description}</CardDescription>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(announcement.date).toLocaleDateString()}</span>
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
                  <CardDescription>Find internships and career opportunities in the legal field</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                    <p className="text-gray-600 mb-4">
                      We're building a comprehensive internship and job portal for legal professionals.
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
                  <CardDescription>Share announcements, events, or opportunities with our community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Title" />
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>Select Category</option>
                      <option>Law Admissions</option>
                      <option>Conference/Workshop</option>
                      <option>Call for Papers</option>
                      <option>Competitions</option>
                      <option>Internship and Jobs</option>
                    </select>
                  </div>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Description"
                    rows={4}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="date" placeholder="Event Date" />
                    <Input placeholder="Contact Email" />
                  </div>
                  <Button>Submit for Review</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
