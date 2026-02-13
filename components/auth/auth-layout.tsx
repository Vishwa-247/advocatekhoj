"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, Users, Scale, CheckCircle } from "lucide-react";

interface AuthLayoutProps {
    children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Panel - Dynamic Content */}
            <div className="w-full md:w-1/2 flex flex-col bg-gray-50/50">
                {/* Minimal Navbar */}
                <div className="w-full bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="relative w-8 h-8">
                                    <Scale className="w-8 h-8 text-[#f17313]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-gray-900">
                                        Advocate<span className="text-[#f17313]">Khoj</span>
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-sm font-medium">Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-md">{children}</div>
                </div>
            </div>

            {/* Right Panel - Fixed Blue Section */}
            <div className="hidden md:flex w-1/2 bg-[#001944] text-white sticky top-0 h-screen">
                <div className="flex flex-col justify-center px-12 lg:px-16 w-full relative overflow-hidden">
                    {/* Subtle Background Surface */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#001944] to-[#002868] opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 space-y-16">
                        {/* Header */}
                        <div className="space-y-3">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                                Find the right
                                <br />
                                <span className="text-[#f17313]">Advocate.</span>
                            </h1>
                            <p className="text-lg text-blue-100/80">
                                Join India's trusted legal platform.
                            </p>
                        </div>

                        {/* Process Steps - Simplified to 3 Points */}
                        <div className="space-y-8">
                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0 w-10 h-10 border border-blue-400/30 rounded-full flex items-center justify-center text-blue-100 font-medium text-sm">
                                        01
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold">Post Your Case</h4>
                                        <p className="text-blue-200/60 text-sm">Describe your legal issue</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0 w-10 h-10 border border-blue-400/30 rounded-full flex items-center justify-center text-blue-100 font-medium text-sm">
                                        02
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold">Receive Proposals</h4>
                                        <p className="text-blue-200/60 text-sm">Get responses from verified lawyers</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0 w-10 h-10 border border-blue-400/30 rounded-full flex items-center justify-center text-blue-100 font-medium text-sm">
                                        03
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold">Hire & Resolve</h4>
                                        <p className="text-blue-200/60 text-sm">Choose the best expert for you</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="pt-8 border-t border-blue-800/30">
                            <p className="text-sm text-blue-200 italic">
                                "Your trusted platform for finding verified legal professionals
                                across India"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
