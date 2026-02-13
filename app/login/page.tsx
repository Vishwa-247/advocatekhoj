"use client";

import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [userType, setUserType] = useState<"client" | "advocate">("client");
  useEffect(() => {
    // Read query param from the browser URL to avoid using next/navigation
    // hooks which can cause prerender-time errors during static build.
    try {
      const params = new URLSearchParams(window.location.search);
      const urlUserType = params.get("userType");
      if (
        urlUserType === "advocate" ||
        urlUserType === "client"
      ) {
        setUserType(urlUserType as any);
      }
    } catch (e) {
      // window not available during SSR — ignore
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
            Welcome Back to AdvocateKhoj
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Login to access your account
          </p>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-6 sm:mb-8 px-2">
          <Tabs
            value={userType}
            onValueChange={(value) => setUserType(value as any)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
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
            </TabsList>
          </Tabs>
        </div>

        {/* Login Form */}
        <div className="flex justify-center">
          <LoginForm userType={userType} />
        </div>
      </div>
    </div>
  );
}
