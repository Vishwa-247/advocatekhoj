"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";

function AuthContent() {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<"client" | "advocate">("client");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    // Get URL parameters
    const urlUserType = searchParams.get("userType");
    const urlAuthMode = searchParams.get("authMode");

    // Set user type from URL
    if (urlUserType === "advocate" || urlUserType === "client") {
      setUserType(urlUserType);
    }

    // Set auth mode from URL
    if (urlAuthMode === "login" || urlAuthMode === "signup") {
      setAuthMode(urlAuthMode);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      {/* Close button */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <X className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block mb-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="AdvocateKhoj"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to AdvocateKhoj
          </h1>
          <p className="text-muted-foreground">
            Your trusted platform for legal services and consultation
          </p>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-8">
          <Tabs
            value={userType}
            onValueChange={(value) => setUserType(value as any)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="client"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/90 hover:text-white transition-colors duration-200"
              >
                Client
              </TabsTrigger>
              <TabsTrigger
                value="advocate"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/90 hover:text-white transition-colors duration-200"
              >
                Advocate
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Auth Mode Selection */}
        <div className="flex justify-center mb-8">
          <Tabs
            value={authMode}
            onValueChange={(value) => setAuthMode(value as any)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-secondary/90 hover:text-white transition-colors duration-200"
              >
                Log In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-secondary/90 hover:text-white transition-colors duration-200"
              >
                Register
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Auth Forms */}
        <div className="flex justify-center">
          {authMode === "login" ? (
            <LoginForm userType={userType} />
          ) : (
            <SignupForm userType={userType} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
