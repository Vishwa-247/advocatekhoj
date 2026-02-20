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

// All steps styled like Step 6 (#EAF1FB) but each progressively slightly darker.
// Colored borders differentiate the steps; text is always dark navy.
const STEP_STYLES = [
    { borderColor: "#0B1F3A", bgTint: "#FFFFFF", iconBg: "#E8EEF5" },
    { borderColor: "#173E74", bgTint: "#FFFFFF", iconBg: "#E8EEF5" },
    { borderColor: "#2F6FDB", bgTint: "#FFFFFF", iconBg: "#EAF0FB" },
    { borderColor: "#5A92EA", bgTint: "#FFFFFF", iconBg: "#EAF1FC" },
    { borderColor: "#7AAAF0", bgTint: "#FFFFFF", iconBg: "#EBF2FC" },
    { borderColor: "#D6E4FA", bgTint: "#FFFFFF", iconBg: "#EAF1FB" },
];

const TEXT_COLOR = "#0B1F3A";
const NUM_COLOR = "rgba(11,31,58,0.07)";

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
                                    color: TEXT_COLOR,
                                }}
                                className={cn(
                                    "h-full p-6 relative flex flex-col min-h-[165px] border",
                                    // Chevron shape
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
                                <div className="flex items-center mb-4">
                                    <div
                                        style={{ background: s.iconBg }}
                                        className="p-3 rounded-full"
                                    >
                                        <step.icon
                                            style={{ color: TEXT_COLOR }}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1.5">
                                    <h3
                                        style={{ color: TEXT_COLOR }}
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
