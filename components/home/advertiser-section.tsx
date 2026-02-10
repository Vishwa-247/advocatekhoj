"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

const advertisers = [
  { id: 1, name: "ABBS", logo: "/images/ABBS.png" },
  { id: 2, name: "ALC", logo: "/images/ALC.png" },
  { id: 3, name: "APU", logo: "/images/APU.png" },
  { id: 4, name: "Alliance", logo: "/images/Alliance.png" },
  { id: 5, name: "BGU", logo: "/images/BGU.png" },
  { id: 6, name: "BITS", logo: "/images/BITS.png" },
  { id: 7, name: "BML Munjal", logo: "/images/BMLMunjal.png" },
  { id: 8, name: "Bharati", logo: "/images/Bharati.png" },
  { id: 9, name: "CII", logo: "/images/CII.png" },
  { id: 10, name: "DSU", logo: "/images/DSU.png" },
  { id: 11, name: "FICCI", logo: "/images/FICCI.png" },
  { id: 12, name: "GNLU", logo: "/images/GNLU.png" },
  { id: 13, name: "Geeta", logo: "/images/Geeta.png" },
  { id: 14, name: "Gitam", logo: "/images/Gitam.png" },
  { id: 15, name: "Glocal", logo: "/images/Glocal.png" },
  { id: 16, name: "Goenka", logo: "/images/Goenka.png" },
  { id: 17, name: "Hindustan", logo: "/images/Himdustan.png" },
  { id: 18, name: "IFIM", logo: "/images/IFIM.png" },
  { id: 19, name: "IICA", logo: "/images/IICA.png" },
  { id: 20, name: "JECRC", logo: "/images/JECRC.png" },
  { id: 21, name: "JGLS", logo: "/images/JGLSpng.png" },
  { id: 22, name: "LPU", logo: "/images/LPU.png" },
  { id: 23, name: "MSU", logo: "/images/MSU.png" },
  { id: 24, name: "Mahindra", logo: "/images/Mahindra.png" },
  { id: 25, name: "NLUD", logo: "/images/NLUD.png" },
  { id: 26, name: "NMIMS", logo: "/images/NMIMS.png" },
  { id: 27, name: "NUJS", logo: "/images/NUJS.png" },
  { id: 28, name: "Presidency", logo: "/images/Presidency.png" },
];

export default function AdvertiserSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advertisers Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading legal organizations and educational institutions to bring you the best resources and opportunities.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {advertisers.map((advertiser) => (
              <div
                key={advertiser.id}
                className="flex-[0_0_25%] min-w-0 pl-4"
              >
                <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
                  <div className="w-full aspect-[144/99] flex items-center justify-center p-2">
                    <img
                      src={advertiser.logo}
                      alt={advertiser.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to advertise with us or become a partner?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
