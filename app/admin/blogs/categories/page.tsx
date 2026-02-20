"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const INITIAL_BLOG_CATEGORIES = [
    "Accounting",
    "Administrative Law",
    "Anti-Hijacking Law",
    "Anti-Terrorism Law",
    "Arbitration",
    "Arrest and Bail",
    "Banking Law",
];

export default function BlogCategoriesPage() {
    const [categories, setCategories] = useState(INITIAL_BLOG_CATEGORIES);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSave = () => {
        if (name.trim()) {
            if (selectedCategory) {
                setCategories(categories.map(c => c === selectedCategory ? name.trim() : c));
            } else {
                setCategories([...categories, name.trim()]);
            }
            setName("");
            setIsActive(false);
            setSelectedCategory(null);
        }
    };

    const handleDelete = () => {
        if (selectedCategory) {
            setCategories(categories.filter(c => c !== selectedCategory));
            setSelectedCategory(null);
            setName("");
        }
    };

    const handleNew = () => {
        setSelectedCategory(null);
        setName("");
        setIsActive(false);
    };

    const handleSelect = (cat: string) => {
        setSelectedCategory(cat);
        setName(cat);
        setIsActive(true); // Defaulting for visual demo
    };

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto py-8">
                <h1 className="text-3xl font-bold text-[#8B4513] uppercase tracking-tight mb-8">
                    Blogs Directory
                </h1>

                <div className="mb-6">
                    <button className="px-5 py-1 text-sm font-bold border border-blue-900 bg-[#003366] text-white">
                        Categories
                    </button>
                </div>

                <div className="space-y-6">
                    {/* List Section */}
                    <div className="border border-gray-300 rounded overflow-hidden shadow-sm">
                        <div className="bg-[#8FBC8F] px-4 py-2 font-bold text-[#006400]">
                            BLOGS Category
                        </div>
                        <div className="bg-white p-2">
                            <select
                                multiple
                                className="w-full h-48 p-1 focus:outline-none focus:ring-0 text-sm text-gray-800"
                                value={selectedCategory ? [selectedCategory] : []}
                                onChange={(e) => handleSelect(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option
                                        key={cat}
                                        value={cat}
                                        className="p-0.5 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="border border-gray-300 rounded overflow-hidden shadow-sm">
                        <div className="bg-[#8FBC8F] px-4 py-2 font-bold text-[#006400]">
                            Information
                        </div>
                        <div className="bg-white p-4 space-y-4">
                            <div className="text-sm font-bold text-red-600 border-y border-red-200 py-2 text-center bg-red-50">
                                All Blog must fall under a category. For a category and its Blog' to appear on the website, you must check "Active" and "Archive" fields.
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                <Label htmlFor="cat-name" className="text-sm text-gray-700 font-medium">Name</Label>
                                <Input
                                    id="cat-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-9 border-gray-300 focus:ring-0 rounded-none bg-white"
                                />
                            </div>

                            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                                <Label htmlFor="is-active" className="text-sm text-gray-700 font-medium">Is Active</Label>
                                <div className="flex items-center">
                                    <Checkbox
                                        id="is-active"
                                        checked={isActive}
                                        onCheckedChange={(checked) => setIsActive(checked as boolean)}
                                        className="rounded-none border-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 pt-4 border-t border-gray-100">
                                <Button
                                    onClick={handleSave}
                                    className="h-8 px-5 bg-gray-100 hover:bg-gray-200 text-black border border-gray-400 rounded-none text-sm font-bold shadow-none"
                                >
                                    Save
                                </Button>
                                <Button
                                    onClick={handleDelete}
                                    disabled={!selectedCategory}
                                    className="h-8 px-5 bg-gray-100 hover:bg-gray-200 text-black border border-gray-400 rounded-none text-sm font-bold shadow-none disabled:opacity-50"
                                >
                                    Delete
                                </Button>
                                <Button
                                    onClick={handleNew}
                                    className="h-8 px-5 bg-gray-100 hover:bg-gray-200 text-black border border-gray-400 rounded-none text-sm font-bold shadow-none"
                                >
                                    New
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
