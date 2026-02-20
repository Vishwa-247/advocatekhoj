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

// Step-specific styles: border color, bg tint, icon bg, text color
const STEP_STYLES = [
    // Row 1
    { borderColor: "#0B1F3A", bgTint: "rgba(11,31,58,0.06)", iconBg: "rgba(11,31,58,0.10)", textColor: "#0B1F3A", numColor: "rgba(11,31,58,0.06)" },
    { borderColor: "#173E74", bgTint: "rgba(23,62,116,0.06)", iconBg: "rgba(23,62,116,0.10)", textColor: "#173E74", numColor: "rgba(23,62,116,0.06)" },
    { borderColor: "#2F6FDB", bgTint: "rgba(47,111,219,0.06)", iconBg: "rgba(47,111,219,0.10)", textColor: "#2F6FDB", numColor: "rgba(47,111,219,0.06)" },
    // Row 2
    { borderColor: "#5A92EA", bgTint: "rgba(90,146,234,0.06)", iconBg: "rgba(90,146,234,0.12)", textColor: "#0B1F3A", numColor: "rgba(11,31,58,0.05)" },
    { borderColor: "#5A92EA", bgTint: "rgba(196,215,245,0.15)", iconBg: "rgba(196,215,245,0.30)", textColor: "#0B1F3A", numColor: "rgba(11,31,58,0.05)" },
    { borderColor: "#D6E4FA", bgTint: "#EAF1FB", iconBg: "#D6E4FA", textColor: "#0B1F3A", numColor: "rgba(11,31,58,0.05)" },
];

export function HowItWorks({ steps }: HowItWorksProps) {
    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-1.5 relative">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;
                    const s = STEP_STYLES[globalIdx % 6];

                    return (
                        <div key={globalIdx} className="relative flex-1 mb-4 lg:mb-0">
                            <div
                                style={{
                                    background: s.bgTint,
                                    borderColor: s.borderColor,
                                    color: s.textColor,
                                }}
                                className={cn(
                                    "h-full p-6 relative flex flex-col min-h-[165px] border",
                                    // Chevron shape with 45px offset
                                    "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%,_45px_50%)]",
                                    "lg:pl-16 lg:pr-14",
                                    isFirstInRow && "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%)]",
                                    "rounded-xl lg:rounded-none"
                                )}
                            >
                                {/* Background Step Number */}
                                <span
                                    style={{ color: s.numColor }}
                                    className="absolute top-3 right-12 text-6xl font-bold select-none"
                                >
                                    {step.step}
                                </span>

                                {/* Icon */}
                                <div className="flex items-center mb-4">
                                    <div
                                        style={{ background: s.iconBg }}
                                        className="p-3 rounded-full"
                                    >
                                        <step.icon
                                            style={{ color: s.textColor }}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1.5">
                                    <h3
                                        style={{ color: s.textColor }}
                                        className="text-[15px] font-bold tracking-wide uppercase leading-snug"
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500">
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
        <div className="space-y-4 max-w-7xl mx-auto px-4">
            {renderSteps(steps.slice(0, 3), 0)}
            {renderSteps(steps.slice(3, 6), 3)}
        </div>
    );
}
