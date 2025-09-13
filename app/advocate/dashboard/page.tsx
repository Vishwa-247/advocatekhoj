"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProfileManagement } from "@/components/advocate/profile-management";
import { CaseBrowser } from "@/components/advocate/case-browser";
import { MembershipPayment } from "@/components/advocate/membership-payment";
import {
  User,
  FileText,
  CreditCard,
  MessageSquare,
  TrendingUp,
  Star,
  Calendar,
  DollarSign,
  Eye,
} from "lucide-react";

export default function AdvocateDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with actual data from backend
  const stats = {
    totalCases: 24,
    activeCases: 8,
    completedCases: 16,
    rating: 4.8,
    reviews: 32,
    earnings: 125000,
    profileViews: 156,
  };

  const recentActivities = [
    {
      id: "1",
      type: "case_response",
      title: "Responded to Property Dispute Case",
      time: "2 hours ago",
      client: "Rajesh S.",
    },
    {
      id: "2",
      type: "message",
      title: "New message from Priya M.",
      time: "4 hours ago",
      client: "Priya M.",
    },
    {
      id: "3",
      type: "case_won",
      title: "Successfully resolved Employment Case",
      time: "1 day ago",
      client: "Anonymous",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Advocate Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your practice and connect with clients
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Cases
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="membership" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Membership
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Cases
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalCases}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats.activeCases} active, {stats.completedCases} completed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.rating}</div>
                  <p className="text-xs text-muted-foreground">
                    Based on {stats.reviews} reviews
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Earnings
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ₹{stats.earnings.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Profile Views
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.profileViews}</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.client} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full justify-start"
                    onClick={() => setActiveTab("cases")}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Browse New Cases
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Update Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Check Messages
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Membership Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Membership Status
                  <Badge className="bg-green-100 text-green-800">
                    Professional Plan
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Your Professional membership expires on March 15, 2025
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Enjoy unlimited case responses and priority listing
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("membership")}
                  >
                    Manage Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cases">
            <CaseBrowser />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileManagement />
          </TabsContent>

          <TabsContent value="membership">
            <MembershipPayment />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
