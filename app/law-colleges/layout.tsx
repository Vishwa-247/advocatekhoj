"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/layout/page-layout";
import { cn } from "@/lib/utils";

const subNavItems = [
    { href: "/law-colleges", label: "Directory" },
    { href: "/law-colleges/announcements", label: "Announcements" },
    { href: "/law-colleges/internships", label: "Internships" },
    { href: "/law-colleges/submit", label: "Submit Content" },
];

export default function LawCollegesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <PageLayout>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                        Legal Education Hub
                    </h1>
                    <p className="text-base sm:text-xl opacity-90 max-w-3xl mx-auto">
                        Discover top law colleges, admissions, conferences, and career
                        opportunities in legal education
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                {/* Sub-Navigation Bar */}
                <div className="flex flex-wrap items-center gap-2 p-1 bg-gray-100/80 rounded-xl border border-gray-200/50">
                    {subNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <main>{children}</main>
        </PageLayout>
    );
}
