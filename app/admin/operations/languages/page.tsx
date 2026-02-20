"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const INITIAL_LANGUAGES = [
    "Urdu",
    "Telugu",
    "Tamil",
    "Sindhi",
    "Sanskrit",
    "Punjabi",
    "Oriya",
    "Nepali",
    "Marathi",
    "Manipuri",
];

export default function LanguagesPage() {
    const [languages, setLanguages] = useState(INITIAL_LANGUAGES);
    const [newLanguage, setNewLanguage] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleAddLanguage = () => {
        if (newLanguage.trim()) {
            setLanguages([...languages, newLanguage.trim()]);
            setNewLanguage("");
        }
    };

    const handleDeleteLanguage = () => {
        if (selectedLanguage) {
            setLanguages(languages.filter((lang) => lang !== selectedLanguage));
            setSelectedLanguage(null);
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto py-8">
                <h1 className="text-3xl font-bold text-[#8B4513] border-b-2 border-[#8B4513] pb-2 mb-8 uppercase tracking-tight">
                    Languages
                </h1>

                <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-lg">
                    <div className="mb-8">
                        <Label className="text-lg font-semibold text-gray-700 mb-3 block">
                            Language List :
                        </Label>
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <select
                                multiple
                                className="w-full h-64 p-2 focus:outline-none focus:ring-0 text-gray-700"
                                value={selectedLanguage ? [selectedLanguage] : []}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                            >
                                {languages.map((lang) => (
                                    <option
                                        key={lang}
                                        value={lang}
                                        className="p-2 hover:bg-gray-100 cursor-pointer text-base"
                                    >
                                        {lang}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleDeleteLanguage}
                            disabled={!selectedLanguage}
                            className="mt-3 text-sm font-bold text-white bg-[#003366] px-4 py-1.5 rounded hover:bg-[#002244] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Delete Language
                        </button>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                        <Label htmlFor="new-language" className="text-lg font-medium text-gray-600 whitespace-nowrap">
                            New Language
                        </Label>
                        <div className="flex-1 flex gap-3">
                            <Input
                                id="new-language"
                                value={newLanguage}
                                onChange={(e) => setNewLanguage(e.target.value)}
                                placeholder="Enter language name"
                                className="flex-1 h-11 border-gray-300 focus:border-[#8B4513] focus:ring-[#8B4513]"
                            />
                            <Button
                                onClick={handleAddLanguage}
                                className="h-11 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold border border-gray-400"
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
