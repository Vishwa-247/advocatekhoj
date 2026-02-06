"use client";

import { SignupForm } from "@/components/auth/signup-form";
import { AdvertiserRegistrationForm } from "@/components/auth/advertiser-registration-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const [userType, setUserType] = useState<
    "client" | "advocate" | "advertiser"
  >("client");
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlUserType = params.get("userType");
      if (
        urlUserType === "advocate" ||
        urlUserType === "client" ||
        urlUserType === "advertiser"
      ) {
        setUserType(urlUserType as any);
      }
    } catch (e) {
      // ignore server-side
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4 overflow-y-auto">
      {/* Close button */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <X className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-4xl py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-block mb-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="AdvocateKhoj"
              width={120}
              height={60}
              className="h-10 sm:h-12 w-auto"
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Join AdvocateKhoj
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Create your account to get started
          </p>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-6 sm:mb-8 px-2">
          <Tabs
            value={userType}
            onValueChange={(value) => setUserType(value as any)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="client"
                className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-transparent cursor-pointer"
              >
                Client
              </TabsTrigger>
              <TabsTrigger
                value="advocate"
                className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-transparent cursor-pointer"
              >
                Advocate
              </TabsTrigger>
              <TabsTrigger
                value="advertiser"
                className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/90 hover:text-white transition-colors duration-200"
              >
                Advertiser
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Register Form */}
        <div className="flex justify-center">
          {userType === "advertiser" ? (
            <AdvertiserRegistrationForm userType={userType} />
          ) : (
            <SignupForm userType={userType} />
          )}
        </div>
      </div>
    </div>
  );
}
