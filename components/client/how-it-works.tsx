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

// All steps styled exactly like Step 6 — light blue-gray tint, dark navy text.
// Each step gets a progressively slightly different tint so they're distinguishable.
const STEP_STYLES = [
    { bg: "#D6E5F4", iconBg: "#C0D5E9", border: "#C0D5E9" },
    { bg: "#D9E7F5", iconBg: "#C3D8EB", border: "#C3D8EB" },
    { bg: "#DCE9F6", iconBg: "#C6DAEC", border: "#C6DAEC" },
    { bg: "#E0ECF7", iconBg: "#CADEEE", border: "#CADEEE" },
    { bg: "#E5EFF8", iconBg: "#CEE1EF", border: "#CEE1EF" },
    { bg: "#EAF1FB", iconBg: "#D6E4FA", border: "#D6E4FA" },
];

const TEXT_HEADING = "#0B1F3A";
const TEXT_BODY = "#4A5568";
const NUM_COLOR = "rgba(11,31,58,0.06)";
const ICON_COLOR = "#2F6FDB";

export function HowItWorks({ steps }: HowItWorksProps) {
    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-1.5">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;
                    const s = STEP_STYLES[globalIdx % 6];

                    return (
                        <div key={globalIdx} className="relative flex-1 mb-4 lg:mb-0">
                            <div
                                style={{ background: s.bg, borderColor: s.border }}
                                className={cn(
                                    "h-full p-6 relative flex flex-col min-h-[165px] border",
                                    // Chevron shape — 45px offset
                                    "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%,_45px_50%)]",
                                    "lg:pl-16 lg:pr-14",
                                    isFirstInRow && "lg:[clip-path:polygon(0%_0%,_calc(100%_-_45px)_0%,_100%_50%,_calc(100%_-_45px)_100%,_0%_100%)]",
                                    "rounded-xl lg:rounded-none"
                                )}
                            >
                                {/* Background Step Number */}
                                <span
                                    style={{ color: NUM_COLOR }}
                                    className="absolute top-3 right-12 text-6xl font-bold select-none"
                                >
                                    {step.step}
                                </span>

                                {/* Icon */}
                                <div className="mb-4">
                                    <div
                                        style={{ background: s.iconBg }}
                                        className="p-3 rounded-full w-fit"
                                    >
                                        <step.icon style={{ color: ICON_COLOR }} className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-1.5">
                                    <h3
                                        style={{ color: TEXT_HEADING }}
                                        className="text-[14px] font-bold tracking-wide uppercase leading-snug"
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        style={{ color: TEXT_BODY }}
                                        className="text-[12.5px] leading-relaxed"
                                    >
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
