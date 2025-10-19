"use client";

import type React from "react";

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import {
  validateContent,
  getProfanityErrorMessage,
} from "@/lib/content-filter";

export function PostCaseForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    legalIssue: "",
    description: "",
    location: "",
    urgency: "",
    budget: "",
    isAnonymous: false,
    language: "English",
    experienceLevel: "",
  });

  const [contentValidation, setContentValidation] = useState<{
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } | null>(null);

  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous validation and status
    setContentValidation(null);
    setSubmitStatus(null);

    // Validate content for profanity and offensive language
    const validation = validateContent(
      {
        title: formData.title,
        description: formData.description,
        location: formData.location,
      },
      true // strict mode enabled
    );

    setContentValidation(validation);

    if (!validation.isValid) {
      // Block submission - content has offensive language
      setSubmitStatus("error");
      return;
    }

    // If valid, proceed with submission
    try {
      // Handle form submission - connect to existing backend
      console.log("Case posted:", formData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: "",
          category: "",
          legalIssue: "",
          description: "",
          location: "",
          urgency: "",
          budget: "",
          isAnonymous: false,
          language: "English",
          experienceLevel: "",
        });
        setContentValidation(null);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error submitting case:", error);
      setSubmitStatus("error");
    }
  };

  const legalCategories = [
    "Administrative Law",
    "Arbitration",
    "Banking",
    "Capital Market",
    "Commercial",
    "Constitutional",
    "Consumer Rights",
    "Corporate Law",
    "Criminal",
    "Cyber Law",
    "Direct Taxation",
    "Environmental Law",
    "Export and Import Laws",
    "Family",
    "Heritage and National Importance",
    "Indirect Taxation",
    "Insurance and Infrastructure Law",
  ];

  const legalIssues = [
    "Central Sales Tax",
    "Excise",
    "Others",
    "Service Tax",
    "Value Added Tax",
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Post Your Legal Case</CardTitle>
        <p className="text-muted-foreground">
          Describe your legal matter and connect with qualified advocates
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Validation Messages */}
          {contentValidation && !contentValidation.isValid && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Content Blocked:</strong>{" "}
                {contentValidation.errors.join(". ")}
                <br />
                <span className="text-sm mt-1 block">
                  Your post contains offensive or inappropriate language and
                  cannot be submitted. Please review and remove any profanity or
                  controversial terms.
                </span>
              </AlertDescription>
            </Alert>
          )}
          {contentValidation && contentValidation.warnings.length > 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Warning:</strong>{" "}
                {contentValidation.warnings.join(". ")}
              </AlertDescription>
            </Alert>
          )}
          {submitStatus === "success" && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Case posted successfully! Advocates will be able to view and
                respond to your case.
              </AlertDescription>
            </Alert>
          )}

          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Case Details</h3>

            <div className="space-y-2">
              <Label htmlFor="title">Case Title *</Label>
              <Input
                id="title"
                placeholder="Brief title for your legal case"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Legal Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {legalCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalIssue">Specific Legal Issue *</Label>
                <Select
                  value={formData.legalIssue}
                  onValueChange={(value) =>
                    setFormData({ ...formData, legalIssue: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue" />
                  </SelectTrigger>
                  <SelectContent>
                    {legalIssues.map((issue) => (
                      <SelectItem key={issue} value={issue}>
                        {issue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Case Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your legal case in detail. Include relevant facts, timeline, and what kind of help you need."
                className="min-h-32"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              <p className="text-sm text-muted-foreground">
                Be specific but avoid sharing confidential information publicly
              </p>
            </div>
          </div>

          {/* Location and Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location & Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) =>
                    setFormData({ ...formData, language: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Bengali">Bengali</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Advocate Experience Preference</Label>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, experienceLevel: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-4" id="exp1" />
                  <Label htmlFor="exp1">0-4 years experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5-10" id="exp2" />
                  <Label htmlFor="exp2">5-10 years experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10+" id="exp3" />
                  <Label htmlFor="exp3">Over 10 years experience</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label>Case Urgency</Label>
              <RadioGroup
                value={formData.urgency}
                onValueChange={(value) =>
                  setFormData({ ...formData, urgency: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="urgent1" />
                  <Label htmlFor="urgent1">Not urgent - within a month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="urgent2" />
                  <Label htmlFor="urgent2">
                    Moderately urgent - within a week
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="urgent3" />
                  <Label htmlFor="urgent3">Very urgent - within 2-3 days</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Privacy Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Privacy Settings</h3>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={formData.isAnonymous}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isAnonymous: checked as boolean })
                }
              />
              <Label htmlFor="anonymous" className="text-sm">
                Post anonymously - Your name and contact details will not be
                displayed publicly
              </Label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Post Case
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
            >
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
