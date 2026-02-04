"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ConversationList } from "@/components/messaging/conversation-list";
import { ChatInterface } from "@/components/messaging/chat-interface";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquarePlus, Settings } from "lucide-react";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | undefined
  >(undefined);

  // Mock data - replace with actual data from backend
  const conversations = [
    {
      id: "1",
      participantName: "Adv. Rajesh Kumar",
      participantType: "advocate" as const,
      lastMessage:
        "I'll need the property deed and tax receipts for the last 3 years...",
      timestamp: "10:40 AM",
      unreadCount: 2,
      caseTitle: "Property Boundary Dispute",
      isPinned: true,
      isOnline: true,
    },
    {
      id: "2",
      participantName: "Adv. Priya Sharma",
      participantType: "advocate" as const,
      lastMessage:
        "Thank you for choosing our services. I have scheduled our initial consultation...",
      timestamp: "Yesterday",
      unreadCount: 0,
      caseTitle: "Divorce Proceedings",
      isPinned: false,
      isOnline: false,
    },
    {
      id: "3",
      participantName: "Adv. Amit Patel",
      participantType: "advocate" as const,
      lastMessage:
        "The court hearing has been scheduled for next Monday at 10 AM...",
      timestamp: "2 days ago",
      unreadCount: 1,
      caseTitle: "Contract Dispute",
      isPinned: false,
      isOnline: true,
    },
  ];

  const selectedConv = conversations.find(
    (conv) => conv.id === selectedConversation,
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Messages
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Communicate with your legal team
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
              <Settings className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
            <Button size="sm" className="flex-1 sm:flex-none">
              <MessageSquarePlus className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">New Message</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 h-[calc(100vh-280px)] min-h-[400px] sm:h-[600px]">
          {/* Conversations List */}
          <div
            className={`lg:col-span-1 ${selectedConversation ? "hidden lg:block" : ""}`}
          >
            <ConversationList
              conversations={conversations}
              selectedConversation={selectedConversation}
              onSelectConversation={setSelectedConversation}
            />
          </div>

          {/* Chat Interface */}
          <div
            className={`lg:col-span-2 ${!selectedConversation ? "hidden lg:block" : ""}`}
          >
            {selectedConv ? (
              <div className="h-full flex flex-col">
                {/* Mobile back button */}
                <div className="lg:hidden mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedConversation(undefined)}
                    className="text-gray-600"
                  >
                    ← Back to conversations
                  </Button>
                </div>
                <div className="flex-1">
                  <ChatInterface
                    conversationId={selectedConv.id}
                    participantName={selectedConv.participantName}
                    participantType={selectedConv.participantType}
                    caseTitle={selectedConv.caseTitle}
                  />
                </div>
              </div>
            ) : (
              <Card className="h-full">
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center px-4">
                    <MessageSquarePlus className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Choose a conversation from the list to start messaging
                    </p>
                    <Button>Start New Conversation</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
