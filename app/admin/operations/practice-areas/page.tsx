"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const INITIAL_CATEGORIES = [
    "Administrative Law",
    "Arbitration",
    "Banking",
    "Capital Market",
    "Commercial",
];

export default function PracticeAreasPage() {
    const [activeTab, setActiveTab] = useState<"category" | "area">("category");
    const [categories, setCategories] = useState(INITIAL_CATEGORIES);
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSaveCategory = () => {
        if (newCategory.trim()) {
            setCategories([...categories, newCategory.trim()]);
            setNewCategory("");
        }
    };

    const handleDeleteCategory = () => {
        if (selectedCategory) {
            setCategories(categories.filter((cat) => cat !== selectedCategory));
            setSelectedCategory(null);
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto py-8">
                <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-[#8B4513] uppercase tracking-tight">
                        Practice Category
                    </h1>
                </div>

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab("category")}
                        className={cn(
                            "px-4 py-1 text-sm font-bold border border-blue-900 transition-colors",
                            activeTab === "category" ? "bg-[#003366] text-white" : "bg-white text-[#003366] hover:bg-gray-100"
                        )}
                    >
                        Practice Category
                    </button>
                    <button
                        onClick={() => setActiveTab("area")}
                        className={cn(
                            "px-4 py-1 text-sm font-bold border border-blue-900 transition-colors",
                            activeTab === "area" ? "bg-[#003366] text-white" : "bg-white text-[#003366] hover:bg-gray-100"
                        )}
                    >
                        Practice Area
                    </button>
                </div>

                <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-lg">
                    <div className="mb-8">
                        <Label className="text-lg font-semibold text-gray-700 mb-3 block">
                            Category :
                        </Label>
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <select
                                multiple
                                className="w-full h-48 p-2 focus:outline-none focus:ring-0 text-gray-700"
                                value={selectedCategory ? [selectedCategory] : []}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option
                                        key={cat}
                                        value={cat}
                                        className="p-1 px-2 hover:bg-gray-100 cursor-pointer text-base"
                                    >
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <button
                                onClick={() => setNewCategory("")}
                                className="text-sm font-bold text-white bg-[#003366] px-4 py-1.5 rounded hover:bg-[#002244] transition-colors"
                            >
                                New Category
                            </button>
                            <button
                                onClick={handleDeleteCategory}
                                disabled={!selectedCategory}
                                className="text-sm font-bold text-white bg-[#003366] px-4 py-1.5 rounded hover:bg-[#002244] transition-colors disabled:opacity-50"
                            >
                                Delete Category
                            </button>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <h3 className="text-xl font-bold text-[#6B8E23] mb-6">
                            Practice Category :
                        </h3>
                        <div className="flex items-center gap-6">
                            <Label htmlFor="category-name" className="text-lg font-medium text-gray-600 whitespace-nowrap">
                                Category Name
                            </Label>
                            <div className="flex-1 flex gap-3">
                                <Input
                                    id="category-name"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="flex-1 h-11 border-gray-300 focus:border-[#8B4513] focus:ring-[#8B4513]"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button
                                onClick={handleSaveCategory}
                                className="h-11 px-10 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold border border-gray-400"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
