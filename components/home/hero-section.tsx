"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // Mock auth state
  const [isLoggedIn] = useState(false);

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find the Right Advocate -{" "}
            <span className="text-primary">Half the battle won</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AdvocateKhoj helps you connect with qualified advocates by providing
            access to their background, education, experience and previous case
            work. Your peace of mind is compromised, not them!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/client-area">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00377b] to-[#1453a3] hover:from-[#1453a3] hover:to-[#1f64c7] hover:brightness-90 text-white shadow-md border border-[#001944]/80 transition-all duration-200"
              >
                Post a Case
              </Button>
            </Link>
            <Link href="/advocate-area">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#d67c40] hover:bg-[#c26a36] hover:brightness-90 text-white font-semibold shadow-md border border-[#d67c40]/70 transition-all duration-200"
              >
                Join as Advocate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
