"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Building2, Edit, Trash2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BusinessManagementProps {
  onNavigate?: (section: string) => void;
}

export function BusinessManagement({ onNavigate }: BusinessManagementProps) {
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<"list" | "add" | "edit">("list");
  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "Armada Marketing",
      category: "Legal Services",
      website: "https://www.armadamarketing.com",
      email: "contact@armadamarketing.com",
      phone: "+91-9876543210",
      activeCampaigns: 2,
      status: "Active",
    },
    {
      id: 2,
      name: "EduTech Solutions",
      category: "Education & Training",
      website: "https://www.edutech.com",
      email: "info@edutech.com",
      phone: "+91-9876543211",
      activeCampaigns: 1,
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    website: "",
    email: "",
    phone: "",
    gstNumber: "",
  });

  const businessCategories = [
    "Legal Services",
    "E-Commerce",
    "Education & Training",
    "Law Firms",
    "Legal Technology",
    "Consulting Services",
    "Publishing",
    "Software & IT Services",
    "Financial Services",
    "Real Estate",
    "Healthcare",
    "Manufacturing",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Business Registered",
      description: "Your business has been successfully registered.",
    });
    setViewMode("list");
    setFormData({
      name: "",
      category: "",
      description: "",
      website: "",
      email: "",
      phone: "",
      gstNumber: "",
    });
  };

  const renderList = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Businesses</h2>
          <p className="text-gray-600">
            Manage your registered business profiles for advertising
          </p>
        </div>
        <Button onClick={() => setViewMode("add")}>
          <Plus className="mr-2 h-4 w-4" />
          Register New Business
        </Button>
      </div>

      {businesses.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No businesses registered yet</p>
            <Button onClick={() => setViewMode("add")}>
              <Plus className="mr-2 h-4 w-4" />
              Register Your First Business
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {businesses.map((business) => (
            <Card key={business.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {business.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {business.category}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        {business.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Website</p>
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {business.website}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="text-gray-900">{business.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="text-gray-900">{business.phone}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">
                          {business.activeCampaigns}
                        </span>{" "}
                        active advertising campaigns
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
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
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>
          {viewMode === "add" ? "Register New Business" : "Edit Business"}
        </CardTitle>
        <CardDescription>
          {viewMode === "add"
            ? "Add your business details to create advertising campaigns"
            : "Update your business information"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Business Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Business Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://www.example.com"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Business Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of your business"
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Business Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstNumber">GST Number (Optional)</Label>
              <Input
                id="gstNumber"
                placeholder="Enter GST number if applicable"
                value={formData.gstNumber}
                onChange={(e) =>
                  setFormData({ ...formData, gstNumber: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit">
              {viewMode === "add" ? "Register Business" : "Update Business"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setViewMode("list")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {viewMode === "list" && renderList()}
      {(viewMode === "add" || viewMode === "edit") && renderForm()}
    </div>
  );
}
