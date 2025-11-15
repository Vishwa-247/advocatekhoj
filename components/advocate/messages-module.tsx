"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, Paperclip, MoreVertical, ArrowLeft } from "lucide-react";

interface AdvocateMessagesModuleProps {
  onNavigate: (section: string) => void;
}

export function AdvocateMessagesModule({
  onNavigate,
}: AdvocateMessagesModuleProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: "1",
      clientName: "Rajesh Sharma",
      lastMessage: "Thank you for your consultation. When can we meet?",
      time: "10 min ago",
      unread: 2,
      caseTitle: "Property Dispute",
      online: true,
    },
    {
      id: "2",
      clientName: "Priya Patel",
      lastMessage: "I've uploaded the documents you requested",
      time: "1 hour ago",
      unread: 0,
      caseTitle: "Employment Law",
      online: false,
    },
    {
      id: "3",
      clientName: "Amit Kumar",
      lastMessage: "What are the next steps in the process?",
      time: "2 hours ago",
      unread: 1,
      caseTitle: "Contract Review",
      online: true,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "client",
      text: "Hello Advocate, I need your help with a property dispute case.",
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "me",
      text: "Hello Rajesh, I'd be happy to help. Can you provide more details about the dispute?",
      time: "10:35 AM",
    },
    {
      id: "3",
      sender: "client",
      text: "My neighbor has encroached on my property. I have all the documents.",
      time: "10:40 AM",
    },
    {
      id: "4",
      sender: "me",
      text: "Perfect. Please upload the property documents and we can schedule a consultation.",
      time: "10:45 AM",
    },
    {
      id: "5",
      sender: "client",
      text: "Thank you for your consultation. When can we meet?",
      time: "11:00 AM",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
          <p className="text-sm text-gray-600">Communicate with your clients</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate("overview")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedChat === conv.id
                      ? "bg-primary/5 border-l-4 border-l-primary"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedChat(conv.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                          {conv.clientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm truncate">
                          {conv.clientName}
                        </p>
                        {conv.unread > 0 && (
                          <Badge className="bg-primary text-white px-2 py-0 text-xs">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">
                        {conv.caseTitle}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {conv.lastMessage}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{conv.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col min-h-[500px]">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        RS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Rajesh Sharma</p>
                      <p className="text-xs text-gray-500">Property Dispute</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "me"
                            ? "text-white/70"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-end gap-2">
                  <Button variant="outline" size="icon">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Textarea
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="min-h-[60px] resize-none"
                  />
                  <Button
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <p>Select a conversation to start messaging</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
