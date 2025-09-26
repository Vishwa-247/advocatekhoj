"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBannersByPosition, type Banner } from "@/lib/banner-data";

interface GlobalTopBannerProps {
  rotationInterval?: number; // in milliseconds, default 5000 (5 seconds)
  className?: string;
}

export default function GlobalTopBanner({
  rotationInterval = 5000,
  className = "",
}: GlobalTopBannerProps) {
  const [leftBanners, setLeftBanners] = useState<Banner[]>([]);
  const [rightBanners, setRightBanners] = useState<Banner[]>([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Load banners on component mount
  useEffect(() => {
    const leftBannerData = getBannersByPosition("left");
    const rightBannerData = getBannersByPosition("right");

    setLeftBanners(leftBannerData);
    setRightBanners(rightBannerData);

    // Show banner only if at least one slot has banners
    setIsVisible(leftBannerData.length > 0 || rightBannerData.length > 0);
  }, []);

  // Rotation effect for left banners
  useEffect(() => {
    if (leftBanners.length <= 1) return;

    const interval = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % leftBanners.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [leftBanners.length, rotationInterval]);

  // Rotation effect for right banners
  useEffect(() => {
    if (rightBanners.length <= 1) return;

    const interval = setInterval(() => {
      setRightIndex((prevIndex) => (prevIndex + 1) % rightBanners.length);
    }, rotationInterval + 500); // Offset slightly to avoid synchronized rotation

    return () => clearInterval(interval);
  }, [rightBanners.length, rotationInterval]);

  // Auto-collapse if no banners are available
  if (!isVisible) {
    return null;
  }

  const currentLeftBanner = leftBanners[leftIndex];
  const currentRightBanner = rightBanners[rightIndex];

  const BannerSlot = ({
    banner,
    position,
  }: {
    banner?: Banner;
    position: "left" | "right";
  }) => {
    if (!banner) {
      return (
        <div className="flex-1 h-[94px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-sm font-medium">
              Advertisement Space Available
            </div>
            <div className="text-xs mt-1">550 x 94</div>
          </div>
        </div>
      );
    }

    const BannerContent = () => (
      <div className="relative w-full h-[94px] bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
        {banner.imageUrl ? (
          <img
            src={banner.imageUrl}
            alt={banner.altText}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-center px-4">
              <div className="text-sm font-semibold text-gray-800 mb-1">
                {banner.title}
              </div>
              <div className="text-xs text-gray-600">
                Premium Advertisement Space
              </div>
              <div className="text-xs text-gray-500 mt-1">550 x 94</div>
            </div>
          </div>
        )}

        {/* Rotation indicator */}
        {(position === "left" ? leftBanners.length : rightBanners.length) >
          1 && (
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {Array.from({
              length:
                position === "left" ? leftBanners.length : rightBanners.length,
            }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === (position === "left" ? leftIndex : rightIndex)
                    ? "bg-primary"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );

    if (banner.linkUrl) {
      return (
        <Link
          href={banner.linkUrl}
          className="flex-1 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BannerContent />
        </Link>
      );
    }

    return (
      <div className="flex-1">
        <BannerContent />
      </div>
    );
  };

  return (
    <div className={`w-full bg-white/80 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <BannerSlot banner={currentLeftBanner} position="left" />
          <BannerSlot banner={currentRightBanner} position="right" />
        </div>
      </div>
    </div>
  );
}
