"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"
import Image from "next/image"

export default function AuthPage() {
  const [userType, setUserType] = useState<"client" | "advocate" | "admin">("client")
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.svg" alt="AdvocateKhoj" width={120} height={60} className="h-12 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to AdvocateKhoj</h1>
          <p className="text-muted-foreground">Your trusted platform for legal services and consultation</p>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-8">
          <Tabs value={userType} onValueChange={(value) => setUserType(value as any)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="advocate">Advocate</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Auth Mode Selection */}
        {userType !== "admin" && (
          <div className="flex justify-center mb-8">
            <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as any)} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}

        {/* Auth Forms */}
        <div className="flex justify-center">
          {authMode === "login" || userType === "admin" ? (
            <LoginForm userType={userType} />
          ) : (
            <SignupForm userType={userType as "client" | "advocate"} />
          )}
        </div>
      </div>
    </div>
  )
}
