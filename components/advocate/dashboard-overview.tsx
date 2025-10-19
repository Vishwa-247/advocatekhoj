"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Briefcase,
  MessageSquare,
  Star,
  Eye,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowUpRight,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
} from "lucide-react";

interface AdvocateDashboardOverviewProps {
  onNavigate: (section: string) => void;
}

export function AdvocateDashboardOverview({
  onNavigate,
}: AdvocateDashboardOverviewProps) {
  // Mock data - replace with actual data from backend
  const stats = {
    totalCases: 24,
    activeCases: 8,
    completedCases: 16,
    rating: 4.8,
    reviews: 32,
    totalEarnings: 125000,
    profileViews: 156,
    responseRate: 95,
  };

  const recentCases = [
    {
      id: "1",
      title: "Property Dispute in Mumbai",
      client: "Rajesh S.",
      category: "Property Law",
      budget: "₹15,000",
      status: "active",
      responses: 3,
      postedTime: "2 hours ago",
    },
    {
      id: "2",
      title: "Employment Termination Case",
      client: "Priya M.",
      category: "Employment Law",
      budget: "₹12,000",
      status: "new",
      responses: 1,
      postedTime: "5 hours ago",
    },
    {
      id: "3",
      title: "Contract Review Required",
      client: "Amit K.",
      category: "Business Law",
      budget: "₹8,000",
      status: "active",
      responses: 2,
      postedTime: "1 day ago",
    },
  ];

  const recentActivity = [
    {
      id: "1",
      type: "case_response",
      title: "New response from client",
      description: "Rajesh S. replied to your consultation offer",
      time: "1 hour ago",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      id: "2",
      type: "new_case",
      title: "New case matches your expertise",
      description: "Property dispute case in your preferred location",
      time: "3 hours ago",
      icon: Briefcase,
      color: "text-green-600",
    },
    {
      id: "3",
      type: "review",
      title: "New review received",
      description: "Priya M. gave you 5 stars for excellent service",
      time: "1 day ago",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      id: "4",
      type: "profile_view",
      title: "Profile views increased",
      description: "Your profile was viewed 12 times today",
      time: "2 days ago",
      icon: Eye,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Advocate!</h2>
          <p className="opacity-90">
            You have {stats.activeCases} active cases and {recentCases.length}{" "}
            new opportunities waiting for you.
          </p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <Badge variant="secondary" className="text-xs">
                +3 this week
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalCases}
            </p>
            <p className="text-sm text-gray-600">Total Cases</p>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="text-green-600">{stats.activeCases} active</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">
                {stats.completedCases} completed
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <Badge variant="secondary" className="text-xs">
                {stats.reviews} reviews
              </Badge>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-bold text-gray-900">{stats.rating}</p>
              <p className="text-sm text-gray-600">/5.0</p>
            </div>
            <p className="text-sm text-gray-600">Average Rating</p>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(stats.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <Badge
                variant="secondary"
                className="text-xs bg-green-100 text-green-700"
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                +12%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              ₹{(stats.totalEarnings / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-xs text-gray-500 mt-2">This month: ₹45K</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <Badge variant="secondary" className="text-xs">
                +28 today
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {stats.profileViews}
            </p>
            <p className="text-sm text-gray-600">Profile Views</p>
            <p className="text-xs text-gray-500 mt-2">
              Response rate: {stats.responseRate}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Cases */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-lg font-semibold">
              Available Cases
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("cases")}
            >
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {caseItem.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {caseItem.client}
                      </span>
                      <span>•</span>
                      <span>{caseItem.postedTime}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      caseItem.status === "new" ? "default" : "secondary"
                    }
                    className="ml-2"
                  >
                    {caseItem.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-4 text-sm">
                    <Badge variant="outline">{caseItem.category}</Badge>
                    <span className="font-semibold text-primary">
                      {caseItem.budget}
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex gap-3">
                  <div className={`p-2 rounded-full bg-gray-100 h-fit`}>
                    <Icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="justify-start h-auto py-4"
              onClick={() => onNavigate("cases")}
            >
              <Briefcase className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-sm">Browse Cases</p>
                <p className="text-xs text-gray-500">Find new opportunities</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4"
              onClick={() => onNavigate("profile")}
            >
              <Users className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-sm">Update Profile</p>
                <p className="text-xs text-gray-500">Keep info current</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4"
              onClick={() => onNavigate("messages")}
            >
              <MessageSquare className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-sm">Messages</p>
                <p className="text-xs text-gray-500">Chat with clients</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4"
              onClick={() => onNavigate("membership")}
            >
              <Star className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-sm">Upgrade Plan</p>
                <p className="text-xs text-gray-500">Get more features</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
