"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, FileText, Trophy, Briefcase } from "lucide-react";
import AdBanner from "@/components/home/ad-banner";

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

export default function AnnouncementsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-[#1e293b]">Legal Announcements & Events</h2>
                <div className="h-[1px] bg-gray-200 flex-1 hidden sm:block mx-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {announcements.map((announcement) => (
                        <Card
                            key={announcement.id}
                            className="hover:shadow-md transition-shadow border-0 shadow-sm ring-1 ring-gray-200"
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
                                        <CardTitle className="text-xl mb-2 text-primary hover:underline cursor-pointer">
                                            {announcement.title}
                                        </CardTitle>
                                        <CardDescription className="text-base">
                                            {announcement.description}
                                        </CardDescription>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-1 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {announcement.date &&
                                                new Date(
                                                    announcement.date,
                                                ).toLocaleDateString()}
                                            {announcement.deadline &&
                                                `Deadline: ${new Date(
                                                    announcement.deadline,
                                                ).toLocaleDateString()}`}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        {announcement.venue && (
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{announcement.venue}</span>
                                            </div>
                                        )}
                                    </div>
                                    <Button variant="outline" className="sm:w-auto w-full">Learn More & Apply</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <AdBanner size="medium" position="sidebar" />

                    <Card className="border-0 shadow-sm ring-1 ring-gray-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Filter Categories</CardTitle>
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
                                        className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-2 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <category.icon className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm font-medium">{category.name}</span>
                                        </div>
                                        <Badge variant="outline" className="text-xs bg-white">
                                            {category.count}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
