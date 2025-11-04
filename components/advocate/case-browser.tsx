"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  User,
  MessageCircle,
  Eye,
} from "lucide-react";

interface ClientCase {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  datePosted: string;
  urgency: "low" | "medium" | "high";
  budget: string;
  clientName: string;
  isAnonymous: boolean;
  responses: number;
  languages: string[];
  experienceRequired: string;
}

export function CaseBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedUrgency, setSelectedUrgency] = useState("all");

  // Mock data - replace with actual data from backend
  const cases: ClientCase[] = [
    {
      id: "1",
      title: "Property Boundary Dispute with Neighbor",
      category: "Property Law",
      description:
        "I have a boundary dispute with my neighbor regarding a 2-foot strip of land. The neighbor has built a wall that encroaches on my property according to the survey documents I have. Need legal assistance to resolve this matter through proper legal channels.",
      location: "Mumbai, Maharashtra",
      datePosted: "2 hours ago",
      urgency: "medium",
      budget: "₹25,000 - ₹50,000",
      clientName: "Rajesh S.",
      isAnonymous: false,
      responses: 3,
      languages: ["English", "Hindi"],
      experienceRequired: "5-10 years",
    },
    {
      id: "2",
      title: "Employment Contract Dispute",
      category: "Employment Law",
      description:
        "Facing issues with my employment contract terms and potential wrongful termination. The company is not following proper procedures and I need legal guidance on my rights and next steps.",
      location: "Bangalore, Karnataka",
      datePosted: "4 hours ago",
      urgency: "high",
      budget: "₹15,000 - ₹30,000",
      clientName: "Anonymous",
      isAnonymous: true,
      responses: 7,
      languages: ["English", "Kannada"],
      experienceRequired: "0-4 years",
    },
    {
      id: "3",
      title: "Divorce and Child Custody Case",
      category: "Family Law",
      description:
        "Seeking legal assistance for divorce proceedings and child custody arrangements. Looking for guidance on mutual consent divorce process and ensuring fair custody rights for both parents.",
      location: "Delhi, NCR",
      datePosted: "1 day ago",
      urgency: "low",
      budget: "₹40,000 - ₹75,000",
      clientName: "Priya M.",
      isAnonymous: false,
      responses: 12,
      languages: ["English", "Hindi"],
      experienceRequired: "10+ years",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "🔴";
      case "medium":
        return "🟡";
      case "low":
        return "🟢";
      default:
        return "⚪";
    }
  };

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || caseItem.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "all" ||
      caseItem.location.includes(selectedLocation);
    const matchesUrgency =
      selectedUrgency === "all" || caseItem.urgency === selectedUrgency;

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesUrgency
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Cases</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {filteredCases.length} cases available
          </Badge>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases by title or description..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Property Law">Property Law</SelectItem>
                  <SelectItem value="Employment Law">Employment Law</SelectItem>
                  <SelectItem value="Family Law">Family Law</SelectItem>
                  <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                  <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedUrgency}
                onValueChange={setSelectedUrgency}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgency</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cases List */}
      <div className="space-y-4">
        {filteredCases.map((caseItem) => (
          <Card key={caseItem.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold mb-2">
                    {caseItem.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {caseItem.datePosted}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {caseItem.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {caseItem.responses} responses
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{caseItem.category}</Badge>
                    <Badge className={getUrgencyColor(caseItem.urgency)}>
                      {getUrgencyIcon(caseItem.urgency)} {caseItem.urgency}{" "}
                      priority
                    </Badge>
                    <Badge variant="secondary">{caseItem.budget}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {caseItem.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {caseItem.isAnonymous
                          ? "A"
                          : caseItem.clientName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {caseItem.clientName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Prefers: {caseItem.languages.join(", ")} •{" "}
                        {caseItem.experienceRequired} exp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Respond
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No cases found</h3>
            <p className="text-muted-foreground text-center">
              Try adjusting your search criteria or check back later for new
              cases.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
