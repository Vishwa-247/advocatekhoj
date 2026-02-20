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
    const getStepColor = (index: number) => {
        const colors = [
            "bg-[#0B1F3A] text-white",     // Step 1
            "bg-[#173E74] text-white",     // Step 2
            "bg-[#2F6FDB] text-white",     // Step 3
            "bg-[#3F7BE0] text-white",     // Step 4
            "bg-[#5A92EA] text-white",     // Step 5
            "bg-[#EAF1FB] text-[#0B1F3A]"  // Step 6 (Light finish)
        ];
        return colors[index % 6];
    };

    const getNumberColor = (index: number) => {
        if (index % 6 === 5) return "text-[#0B1F3A]/5";
        return "text-white/20";
    };

    const getIconBg = (index: number) => {
        if (index % 6 === 5) return "bg-[#0B1F3A]/10";
        return "bg-white/20";
    };

    const getIconColor = (index: number) => {
        if (index % 6 === 5) return "text-[#0B1F3A]";
        return "text-white";
    };

    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-1.5 relative">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;

                    return (
                        <div key={globalIdx} className="relative flex-1 group mb-4 lg:mb-0">
                            <div
                                className={cn(
                                    "h-full p-6 lg:pr-14 relative flex flex-col min-h-[165px] transition-all duration-300",
                                    getStepColor(globalIdx),
                                    // Sharper Chevron Shape: Pointier points (45px offset)
                                    "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%,_45px_50%)]",
                                    isFirstInRow && "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%)]",
                                    // Mobile
                                    "rounded-xl lg:rounded-none"
                                )}
                            >
                                {/* Large Background Number */}
                                <span className={cn(
                                    "absolute top-4 right-12 text-6xl font-bold transition-transform group-hover:scale-110",
                                    getNumberColor(globalIdx)
                                )}>
                                    {step.step}
                                </span>

                                {/* Icon in Circle */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={cn("p-3 rounded-full", getIconBg(globalIdx))}>
                                        <step.icon className={cn("w-6 h-6", getIconColor(globalIdx))} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <h3 className="text-lg font-bold mb-1.5 tracking-tight uppercase">
                                        {step.title}
                                    </h3>
                                    <p className={cn(
                                        "text-[13px] leading-relaxed opacity-90 line-clamp-2 group-hover:line-clamp-none transition-all duration-300",
                                        (globalIdx % 6 === 5) ? "text-[#0B1F3A]/80" : "text-white/80"
                                    )}>
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
        <div className="space-y-4 lg:space-y-4 max-w-7xl mx-auto px-4">
            {renderSteps(steps.slice(0, 3), 0)}
            {renderSteps(steps.slice(3, 6), 3)}
        </div>
    );
}




