"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

interface HowItWorksProps {
    steps: Step[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
    const getStepStyles = (index: number) => {
        const styles = [
            // Row 1: Tinted with Solid Borders
            { bg: "bg-[#0B1F3A]/5", text: "text-[#0B1F3A]", border: "border-[#0B1F3A]", iconBg: "bg-[#0B1F3A]/10", num: "text-[#0B1F3A]/5" },
            { bg: "bg-[#173E74]/5", text: "text-[#173E74]", border: "border-[#173E74]", iconBg: "bg-[#173E74]/10", num: "text-[#173E74]/5" },
            { bg: "bg-[#2F6FDB]/5", text: "text-[#2F6FDB]", border: "border-[#2F6FDB]", iconBg: "bg-[#2F6FDB]/10", num: "text-[#2F6FDB]/5" },
            // Row 2: Even Lighter Tinted with Borders
            { bg: "bg-[#5A92EA]/5", text: "text-[#0B1F3A]", border: "border-[#5A92EA]", iconBg: "bg-[#5A92EA]/10", num: "text-[#0B1F3A]/5" },
            { bg: "bg-[#C4D7F5]/5", text: "text-[#0B1F3A]", border: "border-[#C4D7F5]", iconBg: "bg-[#C4D7F5]/10", num: "text-[#0B1F3A]/5" },
            { bg: "bg-[#EAF1FB]", text: "text-[#0B1F3A]", border: "border-[#D6E4FA]", iconBg: "bg-[#D6E4FA]/20", num: "text-[#0B1F3A]/5" }
        ];
        return styles[index % 6];
    };

    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-1.5 relative font-sans">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;
                    const style = getStepStyles(globalIdx);

                    return (
                        <div key={globalIdx} className="relative flex-1 mb-4 lg:mb-0">
                            <div
                                className={cn(
                                    "h-full p-6 relative flex flex-col min-h-[165px] border",
                                    style.bg,
                                    style.text,
                                    style.border,
                                    // Sharper Chevron Shape: Pointier points (45px offset)
                                    "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%,_45px_50%)]",
                                    // Uniform horizontal alignment for all steps
                                    "lg:pl-16 lg:pr-14",
                                    isFirstInRow && "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%)]",
                                    // Mobile
                                    "rounded-xl lg:rounded-none"
                                )}
                            >
                                {/* Large Background Number */}
                                <span className={cn(
                                    "absolute top-4 right-12 text-6xl font-bold",
                                    style.num
                                )}>
                                    {step.step}
                                </span>

                                {/* Icon in Circle */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={cn("p-3 rounded-full", style.iconBg)}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-lg font-bold tracking-tight uppercase leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13px] leading-relaxed text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="space-y-4 lg:space-y-4 max-w-7xl mx-auto px-4 font-sans">
            {renderSteps(steps.slice(0, 3), 0)}
            {renderSteps(steps.slice(3, 6), 3)}
        </div>
    );
}




