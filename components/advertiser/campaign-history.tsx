"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Eye,
  MousePointerClick,
  Edit,
  Trash2,
  IndianRupee,
  TrendingUp,
  Pause,
  Play,
} from "lucide-react";

interface CampaignHistoryProps {
  onNavigate?: (section: string) => void;
}

export function CampaignHistory({ onNavigate }: CampaignHistoryProps) {
  const [campaigns] = useState([
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
      remaining: 1900,
      startDate: "15-01-2024",
      target: "AdvocateKhoj Homepage",
      mode: "click",
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
      remaining: 3200,
      startDate: "01-02-2024",
      target: "Law Library",
      mode: "click",
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
      spent: 5000,
      remaining: 0,
      startDate: "10-02-2024",
      target: "Law Colleges",
      mode: "view",
    },
    {
      id: "4",
      name: "Summer Offer 2023",
      business: "Armada Marketing",
      status: "Completed",
      views: 25000,
      clicks: 950,
      ctr: 3.8,
      budget: 10000,
      spent: 10000,
      remaining: 0,
      startDate: "15-06-2023",
      target: "AdvocateKhoj Homepage",
      mode: "click",
    },
    {
      id: "5",
      name: "Test Campaign",
      business: "EduTech Solutions",
      status: "Paused",
      views: 5000,
      clicks: 180,
      ctr: 3.6,
      budget: 2700,
      spent: 1200,
      remaining: 1500,
      startDate: "20-01-2024",
      target: "Bare Acts",
      mode: "click",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-50 text-green-700 border-green-200";
      case "Completed":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Paused":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Pending":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const activeCampaigns = campaigns.filter((c) => c.status === "Active");
  const completedCampaigns = campaigns.filter((c) => c.status === "Completed");
  const pausedCampaigns = campaigns.filter((c) => c.status === "Paused");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign History</h2>
          <p className="text-gray-600">
            View and manage all your advertising campaigns
          </p>
        </div>
        <Button onClick={() => onNavigate && onNavigate("new-campaign")}>
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {campaigns.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Campaigns</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">
                {activeCampaigns.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Active</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {pausedCampaigns.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Paused</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {completedCampaigns.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Completed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign List */}
      {campaigns.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-600 mb-4">You Have No Approved Campaigns</p>
            <Button onClick={() => onNavigate && onNavigate("new-campaign")}>
              Create Your First Campaign
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Campaign Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {campaign.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className={getStatusColor(campaign.status)}
                        >
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">
                          {campaign.mode === "click" ? (
                            <>
                              <MousePointerClick className="h-3 w-3 mr-1" />
                              Click Mode
                            </>
                          ) : (
                            <>
                              <Eye className="h-3 w-3 mr-1" />
                              View Mode
                            </>
                          )}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Business: {campaign.business} | Target:{" "}
                        {campaign.target}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Started: {campaign.startDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {campaign.status === "Active" && (
                        <Button variant="outline" size="sm">
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                      )}
                      {campaign.status === "Paused" && (
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>

                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500">Views</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Eye className="h-4 w-4 text-blue-600" />
                        <p className="text-lg font-semibold">
                          {campaign.views.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Clicks</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MousePointerClick className="h-4 w-4 text-green-600" />
                        <p className="text-lg font-semibold">
                          {campaign.clicks.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">CTR</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                        <p className="text-lg font-semibold">{campaign.ctr}%</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Budget</p>
                      <div className="flex items-center gap-1 mt-1">
                        <IndianRupee className="h-4 w-4 text-gray-600" />
                        <p className="text-lg font-semibold">
                          {campaign.budget.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Spent / Remaining</p>
                      <div className="flex items-center gap-1 mt-1">
                        <IndianRupee className="h-4 w-4 text-gray-600" />
                        <p className="text-lg font-semibold">
                          {campaign.spent.toLocaleString()} /{" "}
                          <span className="text-primary">
                            {campaign.remaining.toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {campaign.status !== "Completed" && (
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Budget Utilization</span>
                        <span>
                          {Math.round((campaign.spent / campaign.budget) * 100)}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${Math.min(
                              (campaign.spent / campaign.budget) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
