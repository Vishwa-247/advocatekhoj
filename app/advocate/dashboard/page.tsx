"use client";

import { useState } from "react";
import { AdvocateDashboardLayout } from "@/components/advocate/dashboard-layout";
import { AdvocateDashboardOverview } from "@/components/advocate/dashboard-overview";
import { ProfileManagement } from "@/components/advocate/profile-management";
import { CaseBrowser } from "@/components/advocate/case-browser";
import { AdvocateMessagesModule } from "@/components/advocate/messages-module";
import { MembershipPayment } from "@/components/advocate/membership-payment";

export default function AdvocateDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <AdvocateDashboardOverview onNavigate={setActiveSection} />;
      case "profile":
        return <ProfileManagement onNavigate={setActiveSection} />;
      case "cases":
        return <CaseBrowser onNavigate={setActiveSection} />;
      case "messages":
        return <AdvocateMessagesModule onNavigate={setActiveSection} />;
      case "membership":
        return <MembershipPayment onNavigate={setActiveSection} />;
      default:
        return <AdvocateDashboardOverview onNavigate={setActiveSection} />;
    }
  };

  return (
    <AdvocateDashboardLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      userInfo={{
        name: "Adv. Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        membershipType: "Premium",
        advocateId: "A393472",
        status: "Live",
      }}
    >
      {renderSection()}
    </AdvocateDashboardLayout>
  );
}
