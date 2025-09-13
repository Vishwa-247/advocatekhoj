"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseCard } from "@/components/client/case-card";
import { PostCaseForm } from "@/components/client/post-case-form";
import { MessageCenter } from "@/components/client/message-center";
import { ProfileForm } from "@/components/client/profile-form";
import { Plus, FileText, MessageSquare, User, Trash2 } from "lucide-react";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("cases");
  const [showPostCase, setShowPostCase] = useState(false);

  // Mock data - replace with actual data from backend
  const liveCases = [
    {
      id: "1",
      title: "Property Boundary Dispute with Neighbor",
      category: "Property Law",
      status: "active" as const,
      location: "Mumbai, Maharashtra",
      datePosted: "2 days ago",
      description:
        "I have a boundary dispute with my neighbor regarding a 2-foot strip of land. The neighbor has built a wall that encroaches on my property according to the survey documents I have.",
      responses: 5,
    },
    {
      id: "2",
      title: "Divorce and Child Custody Case",
      category: "Family Law",
      status: "pending" as const,
      location: "Delhi, NCR",
      datePosted: "1 week ago",
      description:
        "Seeking legal assistance for divorce proceedings and child custody arrangements. Need guidance on mutual consent divorce process and custody rights.",
      responses: 8,
    },
  ];

  const deletedCases = [
    {
      id: "3",
      title: "Employment Contract Dispute",
      category: "Employment Law",
      status: "closed" as const,
      location: "Bangalore, Karnataka",
      datePosted: "1 month ago",
      description:
        "Issue with employment contract terms and wrongful termination. Case was resolved successfully.",
      responses: 3,
    },
  ];

  if (showPostCase) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowPostCase(false)}>
              ← Back to Dashboard
            </Button>
          </div>
          <PostCaseForm />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Client Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your legal cases and connect with advocates
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              My Cases
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              My Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cases" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Cases</h2>
              <Button onClick={() => setShowPostCase(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Post New Case
              </Button>
            </div>

            <Tabs defaultValue="live" className="space-y-4">
              <TabsList>
                <TabsTrigger value="live">
                  Live Cases ({liveCases.length})
                </TabsTrigger>
                <TabsTrigger value="deleted">
                  Deleted Cases ({deletedCases.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="live" className="space-y-4">
                {liveCases.length > 0 ? (
                  <div className="grid gap-4">
                    {liveCases.map((caseData) => (
                      <CaseCard key={caseData.id} case={caseData} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        No active cases
                      </h3>
                      <p className="text-muted-foreground text-center mb-4">
                        You haven't posted any cases yet. Start by posting your
                        first legal case.
                      </p>
                      <Button onClick={() => setShowPostCase(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Post Your First Case
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="deleted" className="space-y-4">
                {deletedCases.length > 0 ? (
                  <div className="grid gap-4">
                    {deletedCases.map((caseData) => (
                      <div key={caseData.id} className="relative">
                        <CaseCard case={caseData} />
                        <div className="absolute top-4 right-4">
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Restore
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Trash2 className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        No deleted cases
                      </h3>
                      <p className="text-muted-foreground text-center">
                        Cases you delete will appear here and can be restored if
                        needed.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="messages">
            <MessageCenter />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileForm />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
