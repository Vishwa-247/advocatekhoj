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
    // Top row: solid dark bg + white text + same color as border
    // Bottom row: very light tint bg + dark navy text + same color as border
    const getStyle = (index: number) => {
        const styles = [
            // Row 1 — dark solid backgrounds, white font
            {
                bg: "#0B1F3A",
                border: "#0B1F3A",
                text: "#FFFFFF",
                subText: "rgba(255,255,255,0.75)",
                numColor: "rgba(255,255,255,0.08)",
                iconBg: "rgba(255,255,255,0.15)",
                iconColor: "#FFFFFF",
            },
            {
                bg: "#173E74",
                border: "#173E74",
                text: "#FFFFFF",
                subText: "rgba(255,255,255,0.75)",
                numColor: "rgba(255,255,255,0.08)",
                iconBg: "rgba(255,255,255,0.15)",
                iconColor: "#FFFFFF",
            },
            {
                bg: "#2F6FDB",
                border: "#2F6FDB",
                text: "#FFFFFF",
                subText: "rgba(255,255,255,0.75)",
                numColor: "rgba(255,255,255,0.08)",
                iconBg: "rgba(255,255,255,0.15)",
                iconColor: "#FFFFFF",
            },
            // Row 2 — light tint backgrounds, dark font
            {
                bg: "#ECF3FD",
                border: "#5A92EA",
                text: "#0B1F3A",
                subText: "#4A5568",
                numColor: "rgba(11,31,58,0.06)",
                iconBg: "#D6E8F9",
                iconColor: "#2F6FDB",
            },
            {
                bg: "#EFF5FD",
                border: "#7AAAF0",
                text: "#0B1F3A",
                subText: "#4A5568",
                numColor: "rgba(11,31,58,0.06)",
                iconBg: "#DCEcFA",
                iconColor: "#2F6FDB",
            },
            {
                bg: "#EAF1FB",
                border: "#B8D0F5",
                text: "#0B1F3A",
                subText: "#4A5568",
                numColor: "rgba(11,31,58,0.06)",
                iconBg: "#D6E4FA",
                iconColor: "#2F6FDB",
            },
        ];
        return styles[index % 6];
    };

    const renderSteps = (stepsToRender: Step[], startIndex: number) => {
        return (
            <div className="flex flex-col lg:flex-row items-stretch lg:gap-1.5">
                {stepsToRender.map((step, idx) => {
                    const globalIdx = startIndex + idx;
                    const isFirstInRow = idx === 0;
                    const s = getStyle(globalIdx);

                    return (
                        <div key={globalIdx} className="relative flex-1 mb-4 lg:mb-0">
                            <div
                                style={{
                                    background: s.bg,
                                    borderColor: s.border,
                                }}
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
                                    style={{ color: s.numColor }}
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
                                        <step.icon
                                            style={{ color: s.iconColor }}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                </div>

                                {/* Content — no mt-auto so all headings align */}
                                <div className="flex flex-col gap-1">
                                    <h3
                                        style={{ color: s.text }}
                                        className="text-[14px] font-bold tracking-wide uppercase leading-snug"
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        style={{ color: s.subText }}
                                        className="text-[12px] leading-relaxed"
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
