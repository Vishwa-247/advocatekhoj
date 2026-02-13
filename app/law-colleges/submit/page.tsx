"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FileText, Upload, Send, HelpCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SubmitContentPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Thank you for sharing your content. Our team will review the information and publish it within 24-48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                            Submit Another
                        </Button>
                        <Button onClick={() => window.location.href = "/law-colleges"}>
                            Back to Directory
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Submit Legal Content</h2>
                <p className="text-gray-600 text-lg">
                    Share announcements, event details, or career opportunities with our extensive legal community.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <Card className="border-0 shadow-xl ring-1 ring-gray-200 overflow-hidden">
                        <div className="bg-primary/5 px-6 py-4 border-b border-primary/10 flex items-center justify-between">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Content Details</span>
                            <Badge variant="outline" className="bg-white font-medium">Drafting</Badge>
                        </div>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Content Category</Label>
                                        <Select required>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="admission">Admission Notice</SelectItem>
                                                <SelectItem value="conference">Conference / Seminar</SelectItem>
                                                <SelectItem value="internship">Internship Opportunity</SelectItem>
                                                <SelectItem value="workshop">Workshop / Course</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Headline / Title</Label>
                                        <Input id="title" placeholder="e.g. Summer Internship 2025" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description">Detailed Description</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Provide all relevant details, eligibility, dates, and application process..."
                                        className="min-h-[150px] resize-none"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="institution">Institution / Organization</Label>
                                        <Input id="institution" placeholder="Name of your college/firm" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Point of Contact Email</Label>
                                        <Input id="email" type="email" placeholder="poc@example.com" required />
                                    </div>
                                </div>

                                <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <Upload className="w-6 h-6 text-primary" />
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 mb-1">Upload Supporting Documents</p>
                                        <p className="text-xs text-gray-500">PDF, JPG, or PNG up to 10MB</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-end border-t border-gray-100 gap-4">
                                    <Button variant="ghost" type="button">Save Draft</Button>
                                    <Button size="lg" className="px-10 h-12 text-base font-bold shadow-lg shadow-primary/25">
                                        <Send className="w-4 h-4 mr-2" />
                                        Submit Review
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="border-0 shadow-sm ring-1 ring-gray-200 bg-orange-50/30">
                        <CardHeader>
                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-2">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg">Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                "Ensure all dates are clearly mentioned.",
                                "Include official links for verification.",
                                "Provide a clear point of contact.",
                                "Avoid using all caps in titles."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 text-sm text-gray-600">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-300" />
                                    <p>{text}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00377b] to-[#1453a3] text-white">
                        <FileText className="w-8 h-8 opacity-50 mb-4" />
                        <h4 className="font-bold text-lg mb-2 text-white">Need Help?</h4>
                        <p className="text-sm text-blue-100 mb-4">
                            Having trouble with the submission process? Our support team is here to assist you.
                        </p>
                        <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white border-0">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
