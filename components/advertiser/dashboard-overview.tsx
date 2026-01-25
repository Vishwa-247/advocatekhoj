"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Eye,
  MousePointerClick,
  TrendingUp,
  Building2,
  FileText,
  BarChart3,
  Calendar,
  IndianRupee,
  Activity,
} from "lucide-react";

interface DashboardOverviewProps {
  onNavigate: (section: string) => void;
}

export function AdvertiserDashboardOverview({
  onNavigate,
}: DashboardOverviewProps) {
  const stats = {
    activeCampaigns: 3,
    totalViews: 45250,
    totalClicks: 1847,
    registeredBusinesses: 2,
    totalSpent: 15800,
    avgCTR: 4.08,
  };

  const quickActions = [
    {
      title: "Create Campaign",
      description: "Launch a new advertising campaign",
      icon: Plus,
      color: "bg-primary",
      action: () => onNavigate("new-campaign"),
      highlighted: true,
    },
    {
      title: "Register Business",
      description: "Add a new business profile",
      icon: Building2,
      color: "bg-primary",
      action: () => onNavigate("businesses"),
    },
    {
      title: "View Campaigns",
      description: "Manage your active campaigns",
      icon: FileText,
      color: "bg-primary",
      action: () => onNavigate("campaigns"),
      badge:
        stats.activeCampaigns > 0
          ? stats.activeCampaigns.toString()
          : undefined,
    },
    {
      title: "Analytics",
      description: "View performance insights",
      icon: BarChart3,
      color: "bg-primary",
      action: () => onNavigate("analytics"),
    },
  ];

  const activeCampaigns = [
    {
      id: "1",
      name: "Armada C1",
      business: "Armada Marketing",
      status: "Active",
      views: 15420,
      clicks: 612,
      ctr: 3.97,
      budget: 5100,
      spent: 3200,
      startDate: "2024-01-15",
      target: "AdvocateKhoj Homepage",
    },
    {
      id: "2",
      name: "Legal Services Promo",
      business: "Armada Marketing",
      status: "Active",
      views: 18230,
      clicks: 789,
      ctr: 4.33,
      budget: 10000,
      spent: 6800,
      startDate: "2024-02-01",
      target: "Law Library",
    },
    {
      id: "3",
      name: "Law College Banner",
      business: "EduTech Solutions",
      status: "Active",
      views: 11600,
      clicks: 446,
      ctr: 3.84,
      budget: 5000,
      spent: 5800,
      startDate: "2024-02-10",
      target: "Law Colleges",
    },
  ];

  const recentActivity = [
    {
      id: "1",
      type: "campaign_performance",
      title: "Armada C1 reached 15K views",
      description: "Your campaign performance is exceeding expectations",
      time: "2 hours ago",
    },
    {
      id: "2",
      type: "campaign_update",
      title: "Legal Services Promo updated",
      description: "Campaign targeting was successfully modified",
      time: "5 hours ago",
    },
    {
      id: "3",
      type: "business_added",
      title: "New business registered",
      description: "EduTech Solutions has been added to your account",
      time: "1 day ago",
    },
    {
      id: "4",
      type: "campaign_created",
      title: "Law College Banner campaign created",
      description: "New campaign is now live and running",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Ad Manager</h2>
        <p className="text-primary-foreground/80 mb-4">
          Manage your advertising campaigns and track performance across
          AdvocateKhoj platform
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>{stats.activeCampaigns} active campaigns</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{stats.totalViews.toLocaleString()} total views</span>
          </div>
          <div className="flex items-center gap-2">
            <MousePointerClick className="h-4 w-4" />
            <span>{stats.totalClicks.toLocaleString()} total clicks</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Campaigns
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.activeCampaigns}
                </p>
                <p className="text-sm text-primary flex items-center mt-1">
                  <Activity className="h-4 w-4 mr-1" />
                  Running
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-gray-900">
                  {(stats.totalViews / 1000).toFixed(1)}K
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stats.avgCTR}% CTR
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Clicks
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {(stats.totalClicks / 1000).toFixed(1)}K
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <MousePointerClick className="h-4 w-4 mr-1" />
                  This month
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MousePointerClick className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900 flex items-center">
                  <IndianRupee className="h-6 w-6" />
                  {(stats.totalSpent / 1000).toFixed(1)}K
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Building2 className="h-4 w-4 mr-1" />
                  {stats.registeredBusinesses} businesses
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-4"
                onClick={action.action}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary">
                    <action.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{action.title}</p>
                      {action.badge && (
                        <Badge variant="default" className="text-xs">
                          {action.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 pb-3 border-b last:border-0"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {activity.type === "campaign_performance" && (
                    <TrendingUp className="h-4 w-4 text-primary" />
                  )}
                  {activity.type === "campaign_update" && (
                    <FileText className="h-4 w-4 text-primary" />
                  )}
                  {activity.type === "business_added" && (
                    <Building2 className="h-4 w-4 text-primary" />
                  )}
                  {activity.type === "campaign_created" && (
                    <Plus className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Campaigns</CardTitle>
            <Button variant="outline" onClick={() => onNavigate("campaigns")}>
              View All Campaigns
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-gray-900">
                      {campaign.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <p className="text-xs text-gray-500">Business</p>
                      <p className="font-medium">{campaign.business}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Views / Clicks</p>
                      <p className="font-medium">
                        {campaign.views.toLocaleString()} /{" "}
                        {campaign.clicks.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">CTR</p>
                      <p className="font-medium">{campaign.ctr}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Budget / Spent</p>
                      <p className="font-medium flex items-center">
                        <IndianRupee className="h-3 w-3" />
                        {campaign.budget.toLocaleString()} /{" "}
                        {campaign.spent.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("campaigns")}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Reach Information */}
      <Card className="bg-gradient-to-br from-blue-50 to-transparent">
        <CardHeader>
          <CardTitle>Platform Reach</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-primary">5+ Lakh</p>
              <p className="text-sm text-gray-600 mt-1">Monthly Visitors</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-primary">12+ Lakh</p>
              <p className="text-sm text-gray-600 mt-1">Page Views per Month</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-gray-600 mt-1">Legal Professionals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
