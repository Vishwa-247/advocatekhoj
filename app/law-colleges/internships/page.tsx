"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function InternshipsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Card className="border-0 shadow-lg overflow-hidden ring-1 ring-gray-200">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 sm:p-12 text-center">
                    <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border-2 border-gray-100 mx-auto mb-8 transform -rotate-6">
                        <Briefcase className="w-10 h-10 text-primary" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Legal Internship & Career Portal
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        We're building a comprehensive hub to connect top law firms, corporate legal departments, and NGO's with the brightest legal talent in India.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                        <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm">
                            <div className="text-primary font-bold text-xl mb-1">500+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Partner Firms</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm">
                            <div className="text-primary font-bold text-xl mb-1">Coming</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Q3 2025</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm">
                            <div className="text-primary font-bold text-xl mb-1">Verified</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Listings</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="px-8 h-12 text-base font-semibold">
                            Get Early Access
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 h-12 text-base font-semibold">
                            Register as Recruiter
                        </Button>
                    </div>

                    <p className="text-sm text-gray-400 mt-8">
                        Be the first to know when we launch. No spam, just legal opportunities.
                    </p>
                </div>
            </Card>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why recruit through AdvocateKhoj?</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Targeted Audience", desc: "Reach law students from top NIRF ranked colleges across India." },
                            { title: "Simplified Screening", desc: "Automated filters to find candidates matching your specific requirements." },
                            { title: "Direct Connection", desc: "No middleman. Message and interview candidates directly through our portal." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform rotate-3"></div>
                    <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            <div>
                                <div className="h-4 w-32 bg-gray-200 rounded-full mb-2"></div>
                                <div className="h-3 w-20 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-3 mb-6">
                            <div className="h-3 w-full bg-gray-50 rounded-full"></div>
                            <div className="h-3 w-full bg-gray-50 rounded-full"></div>
                            <div className="h-3 w-2/3 bg-gray-50 rounded-full"></div>
                        </div>
                        <div className="flex justify-end">
                            <div className="h-10 w-24 bg-primary/20 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
