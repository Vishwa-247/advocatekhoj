"use client";

import { useState } from "react";
import { AdvertiserDashboardLayout } from "@/components/advertiser/dashboard-layout";
import { AdvertiserDashboardOverview } from "@/components/advertiser/dashboard-overview";
import { BusinessManagement } from "@/components/advertiser/business-management";
import { CampaignManagement } from "@/components/advertiser/campaign-management";
import { CampaignHistory } from "@/components/advertiser/campaign-history";
import { ProfileManagement } from "@/components/advertiser/profile-management";

export default function AdvertiserDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <AdvertiserDashboardOverview onNavigate={setActiveSection} />;
      case "profile":
        return <ProfileManagement onNavigate={setActiveSection} />;
      case "businesses":
        return <BusinessManagement onNavigate={setActiveSection} />;
      case "new-campaign":
        return <CampaignManagement onNavigate={setActiveSection} />;
      case "campaigns":
        return <CampaignHistory onNavigate={setActiveSection} />;
      case "analytics":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Analytics Dashboard
            </h2>
            <p className="text-gray-600">
              Detailed analytics and performance insights coming soon
            </p>
          </div>
        );
      default:
        return <AdvertiserDashboardOverview onNavigate={setActiveSection} />;
    }
  };

  return (
    <AdvertiserDashboardLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      userInfo={{
        name: "John Business",
        email: "john@business.com",
        businessName: "Armada Marketing",
        status: "Active",
      }}
    >
      {renderSection()}
    </AdvertiserDashboardLayout>
  );
}
