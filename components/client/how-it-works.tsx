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
        const cycle = index % 3;
        if (cycle === 0) return "bg-[#1a365d] text-white";
        if (cycle === 1) return "bg-[#4a90e2] text-white";
        return "bg-[#f0f4f8] text-[#1a365d]";
    };

    const getNumberColor = (index: number) => {
        const cycle = index % 3;
        if (cycle === 0) return "text-white/20";
        if (cycle === 1) return "text-white/30";
        return "text-[#1a365d]/10";
    };

    const getIconBg = (index: number) => {
        const cycle = index % 3;
        if (cycle === 2) return "bg-[#1a365d]/10";
        return "bg-white/20";
    };

    const getIconColor = (index: number) => {
        const cycle = index % 3;
        if (cycle === 2) return "text-[#1a365d]";
        return "text-white";
    };

    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-3 relative">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;

                    return (
                        <div key={globalIdx} className="relative flex-1 group mb-4 lg:mb-0">
                            <div
                                className={cn(
                                    "h-full p-8 lg:pr-12 relative flex flex-col min-h-[220px] transition-all duration-300",
                                    getStepColor(globalIdx),
                                    // Chevron Shape: Indented on left (except first), Pointy on right
                                    "lg:[clip-path:polygon(0%_0%,_calc(100%_-_25px)_0%,_100%_50%,_calc(100%_-_25px)_100%,_0%_100%,_25px_50%)]",
                                    isFirstInRow && "lg:[clip-path:polygon(0%_0%,_calc(100%_-_25px)_0%,_100%_50%,_calc(100%_-_25px)_100%,_0%_100%)]",
                                    // Mobile
                                    "rounded-xl lg:rounded-none"
                                )}
                            >
                                {/* Large Background Number */}
                                <span className={cn(
                                    "absolute top-6 right-10 text-7xl font-bold transition-transform group-hover:scale-110",
                                    getNumberColor(globalIdx)
                                )}>
                                    {step.step}
                                </span>

                                {/* Icon in Circle */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className={cn("p-4 rounded-full", getIconBg(globalIdx))}>
                                        <step.icon className={cn("w-7 h-7", getIconColor(globalIdx))} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <h3 className="text-xl font-bold mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className={cn(
                                        "text-sm leading-relaxed opacity-90",
                                        globalIdx % 3 === 2 ? "text-[#1a365d]/80" : "text-white/80"
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
        <div className="space-y-6 lg:space-y-4 max-w-7xl mx-auto px-4">
            {renderSteps(steps.slice(0, 3), 0)}
            {renderSteps(steps.slice(3, 6), 3)}
        </div>
    );
}




