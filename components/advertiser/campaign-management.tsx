"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { MousePointerClick, Eye, Calendar, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CampaignManagementProps {
  onNavigate?: (section: string) => void;
}

export function CampaignManagement({ onNavigate }: CampaignManagementProps) {
  const { toast } = useToast();
  const [businesses] = useState([
    { id: 1, name: "Armada Marketing" },
    { id: 2, name: "EduTech Solutions" },
  ]);

  const [campaignForm, setCampaignForm] = useState({
    name: "",
    business: "",
    webUrl: "",
    target: "",
    mode: "click" as "click" | "view",
    maxClicks: "",
    startDate: "",
    banner: null as File | null,
  });

  const targetOptions = [
    {
      value: "advocate-khoj-home",
      label: "1. AdvocateKhoj - Homepage [vertical ads]",
    },
    {
      value: "advocate-khoj-co-branding-1",
      label: "1. AdvocateKhoj - Co-branding Banner 1 [horizontal]",
    },
    {
      value: "advocate-khoj-co-branding-2",
      label: "1. AdvocateKhoj - Co-branding Banner 2 [horizontal]",
    },
    {
      value: "advocate-khoj-co-branding-3",
      label: "1. AdvocateKhoj - Co-branding Banner 3 [horizontal]",
    },
    {
      value: "advocate-khoj-premium-1",
      label: "1. AdvocateKhoj - Premium Banner1 [horizontal]",
    },
    {
      value: "advocate-khoj-premium-2",
      label: "1. AdvocateKhoj - Premium Banner2 [horizontal]",
    },
    {
      value: "law-colleges",
      label: "2. Law Colleges - Homepage [vertical ads]",
    },
    {
      value: "law-colleges-banner",
      label: "2. Law Colleges - Banner [horizontal ads]",
    },
    { value: "law-juwaab", label: "3. Law Juwaab - Homepage [vertical ads]" },
    {
      value: "agreements-main",
      label: "3. Agreements - Main Index [vertical ads]",
    },
    {
      value: "agreements-content",
      label: "3. Agreements - Content Page [vertical ads]",
    },
    {
      value: "areas-of-law-main",
      label: "3. Areas of Law - Main [vertical ads]",
    },
    {
      value: "areas-of-law-sub",
      label: "3. Areas of Law - Sub Index [vertical ads]",
    },
    {
      value: "areas-of-law-content",
      label: "3. Areas of Law - Content Page [vertical ads]",
    },
    {
      value: "bare-acts-main",
      label: "2. Bare Acts - Main Index [vertical ads]",
    },
    {
      value: "bare-acts-sub",
      label: "3. Bare Acts - Sub Index [vertical ads]",
    },
    {
      value: "bare-acts-content",
      label: "4. Bare Acts - Content Page [vertical ads]",
    },
    { value: "forms-main", label: "3. Forms - Main Index [vertical ads]" },
    { value: "forms-sub", label: "4. Forms - Sub Index [vertical ads]" },
    { value: "forms-content", label: "5. Forms - Content Page [vertical ads]" },
    {
      value: "legal-tips-content",
      label: "4. Legal Tips - Content Page [vertical ads]",
    },
    { value: "rules-main", label: "2. Rules - Main Index [vertical ads]" },
    { value: "rules-sub", label: "3. Rules - Sub Index [vertical ads]" },
    { value: "rules-content", label: "4. Rules - Content Page [vertical ads]" },
    {
      value: "supreme-court-judgments",
      label: "2. Supreme Court Judgments [vertical ads]",
    },
  ];

  const clickPackages = [
    { clicks: 500, price: 2700 },
    { clicks: 1000, price: 5100 },
    { clicks: 2500, price: 10000 },
    { clicks: 5000, price: 22000 },
  ];

  const viewPackages = [
    { views: 50000, price: 2700 },
    { views: 100000, price: 5100 },
    { views: 250000, price: 10000 },
    { views: 500000, price: 22000 },
  ];

  const handleSubmitCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campaign Submitted",
      description: "Your advertising campaign has been submitted for review.",
    });
    if (onNavigate) {
      onNavigate("campaigns");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Campaign</CardTitle>
        <CardDescription>
          Create a new advertising campaign to promote your business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitCampaign} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="campaignName">Campaign Name *</Label>
            <Input
              id="campaignName"
              value={campaignForm.name}
              onChange={(e) =>
                setCampaignForm({ ...campaignForm, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="business">Business *</Label>
            <Select
              value={campaignForm.business}
              onValueChange={(value) =>
                setCampaignForm({ ...campaignForm, business: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select business" />
              </SelectTrigger>
              <SelectContent>
                {businesses.map((business) => (
                  <SelectItem key={business.id} value={business.name}>
                    {business.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-blue-600">
              Want to add another business?{" "}
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("businesses")}
                className="underline"
              >
                Click here
              </button>
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="webUrl">Web URL *</Label>
            <Input
              id="webUrl"
              type="url"
              placeholder="https://www.example.com"
              value={campaignForm.webUrl}
              onChange={(e) =>
                setCampaignForm({ ...campaignForm, webUrl: e.target.value })
              }
              required
            />
            <p className="text-xs text-gray-500">
              (Format: www.advocatekhoj.com)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="target">Target *</Label>
            <Select
              value={campaignForm.target}
              onValueChange={(value) =>
                setCampaignForm({ ...campaignForm, target: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select target pages" />
              </SelectTrigger>
              <SelectContent className="max-h-96">
                {targetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-red-600">
              (The location where your campaign would be displayed)
            </p>
          </div>

          {/* Ad/Banner Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Ad / Banner Requirements</h4>
            <div className="text-sm space-y-1">
              <p>
                <strong>Dimensions:</strong>
              </p>
              <p>Width: ~728 px</p>
              <p>Height: ~90 px (Maximum)</p>
              <p>
                <strong>Type:</strong> .jpg, .jpeg, .gif
              </p>
            </div>
          </div>

          {/* Campaign Mode */}
          <div className="space-y-2">
            <Label>Campaign Mode *</Label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="click"
                  checked={campaignForm.mode === "click"}
                  onChange={() =>
                    setCampaignForm({ ...campaignForm, mode: "click" })
                  }
                  className="w-4 h-4"
                />
                <span className="flex items-center gap-2">
                  <MousePointerClick className="h-4 w-4" />
                  Click Mode
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="view"
                  checked={campaignForm.mode === "view"}
                  onChange={() =>
                    setCampaignForm({ ...campaignForm, mode: "view" })
                  }
                  className="w-4 h-4"
                />
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Mode
                </span>
              </label>
            </div>
          </div>

          {/* Maximum Clicks/Views */}
          <div className="space-y-2">
            <Label htmlFor="maxClicks">
              {campaignForm.mode === "click"
                ? "Maximum Clicks *"
                : "Maximum Views *"}
            </Label>
            <Select
              value={campaignForm.maxClicks}
              onValueChange={(value) =>
                setCampaignForm({ ...campaignForm, maxClicks: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="--select a plan--" />
              </SelectTrigger>
              <SelectContent>
                {(campaignForm.mode === "click"
                  ? clickPackages
                  : viewPackages
                ).map((pkg) => {
                  const count =
                    campaignForm.mode === "click"
                      ? "clicks" in pkg
                        ? pkg.clicks
                        : 0
                      : "views" in pkg
                      ? pkg.views
                      : 0;
                  return (
                    <SelectItem key={count} value={String(count)}>
                      {count.toLocaleString()}{" "}
                      {campaignForm.mode === "click" ? "Clicks" : "Views"} for
                      Rs. {pkg.price.toLocaleString()}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label htmlFor="startDate">Preferred Start Date *</Label>
            <div className="flex gap-2">
              <Input
                id="startDate"
                type="text"
                placeholder="DD-MM-YYYY"
                value={campaignForm.startDate}
                onChange={(e) =>
                  setCampaignForm({
                    ...campaignForm,
                    startDate: e.target.value,
                  })
                }
                required
              />
              <Button type="button" variant="outline">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500">(DD-MM-YYYY)</p>
          </div>

          {/* Banner Upload */}
          <div className="space-y-2">
            <Label htmlFor="banner">Banner *</Label>
            <div className="flex gap-2">
              <Input
                id="banner"
                type="file"
                accept=".jpg,.jpeg,.gif"
                onChange={(e) =>
                  setCampaignForm({
                    ...campaignForm,
                    banner: e.target.files?.[0] || null,
                  })
                }
                required
              />
              <Button type="button" variant="outline">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit">Submit Campaign</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate && onNavigate("overview")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
