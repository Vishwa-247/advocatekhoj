"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  Plus,
  X,
  Save,
  Star,
  Phone,
  Award,
  BookOpen,
  Building,
} from "lucide-react";

export function ProfileManagement() {
  const [formData, setFormData] = useState({
    // Basic Information
    title: "Adv.",
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91-9876543210",
    location: "Mumbai, Maharashtra",
    barCouncilNumber: "MH/1234/2010",

    // Professional Information
    practiceAreas: ["Corporate Law", "Civil Litigation", "Property Law"],
    languages: ["English", "Hindi", "Marathi"],
    experience: "12",
    courtsPracticing: ["High Court of Bombay", "District Courts Mumbai"],

    // About
    bio: "Experienced advocate specializing in corporate law and civil litigation with over 12 years of practice.",

    // Education
    education: [
      {
        degree: "LLB",
        institution: "Government Law College, Mumbai",
        year: "2010",
        specialization: "Corporate Law",
      },
    ],

    // Employment
    employment: [
      {
        position: "Senior Associate",
        firm: "Kumar & Associates",
        duration: "2015 - Present",
        description: "Leading corporate law practice",
      },
    ],

    // Publications
    publications: [
      {
        title: "Corporate Governance in Modern India",
        journal: "Indian Law Review",
        year: "2022",
      },
    ],

    // Awards
    awards: [
      {
        title: "Best Corporate Lawyer",
        organization: "Mumbai Bar Association",
        year: "2021",
      },
    ],

    // Affiliations
    affiliations: [
      {
        organization: "Bar Council of Maharashtra",
        position: "Member",
        since: "2010",
      },
    ],
  });

  const [newItem, setNewItem] = useState({
    practiceArea: "",
    language: "",
    education: { degree: "", institution: "", year: "", specialization: "" },
    employment: { position: "", firm: "", duration: "", description: "" },
    publication: { title: "", journal: "", year: "" },
    award: { title: "", organization: "", year: "" },
    affiliation: { organization: "", position: "", since: "" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  const addItem = (type: string) => {
    switch (type) {
      case "practiceArea":
        if (newItem.practiceArea) {
          setFormData({
            ...formData,
            practiceAreas: [...formData.practiceAreas, newItem.practiceArea],
          });
          setNewItem({ ...newItem, practiceArea: "" });
        }
        break;
      case "language":
        if (newItem.language) {
          setFormData({
            ...formData,
            languages: [...formData.languages, newItem.language],
          });
          setNewItem({ ...newItem, language: "" });
        }
        break;
      case "education":
        if (newItem.education.degree && newItem.education.institution) {
          setFormData({
            ...formData,
            education: [...formData.education, newItem.education],
          });
          setNewItem({
            ...newItem,
            education: {
              degree: "",
              institution: "",
              year: "",
              specialization: "",
            },
          });
        }
        break;
      // Add similar cases for other types
    }
  };

  const removeItem = (type: string, index: number) => {
    switch (type) {
      case "practiceArea":
        setFormData({
          ...formData,
          practiceAreas: formData.practiceAreas.filter((_, i) => i !== index),
        });
        break;
      case "language":
        setFormData({
          ...formData,
          languages: formData.languages.filter((_, i) => i !== index),
        });
        break;
      // Add similar cases for other types
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Profile Management</h2>
        <Button form="profile-form" type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Profile
        </Button>
      </div>

      <form id="profile-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Header</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="text-2xl">
                  {formData.firstName.charAt(0)}
                  {formData.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
                <p className="text-sm text-muted-foreground">
                  Professional headshot recommended
                </p>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">4.8 (24 reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Select
                  value={formData.title}
                  onValueChange={(value) =>
                    setFormData({ ...formData, title: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Adv.">Adv.</SelectItem>
                    <SelectItem value="Sr. Adv.">Sr. Adv.</SelectItem>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Summary</Label>
              <Textarea
                id="bio"
                placeholder="Brief professional summary highlighting your expertise and experience"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="min-h-20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="barCouncilNumber">Bar Council Number *</Label>
                <Input
                  id="barCouncilNumber"
                  value={formData.barCouncilNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      barCouncilNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Practice Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.practiceAreas.map((area, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {area}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeItem("practiceArea", index)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add practice area"
                value={newItem.practiceArea}
                onChange={(e) =>
                  setNewItem({ ...newItem, practiceArea: e.target.value })
                }
              />
              <Button type="button" onClick={() => addItem("practiceArea")}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  {language}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeItem("language", index)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add language"
                value={newItem.language}
                onChange={(e) =>
                  setNewItem({ ...newItem, language: e.target.value })
                }
              />
              <Button type="button" onClick={() => addItem("language")}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.year} • {edu.specialization}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium">Add Education</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Degree"
                  value={newItem.education.degree}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        degree: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="Institution"
                  value={newItem.education.institution}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        institution: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="Year"
                  value={newItem.education.year}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: { ...newItem.education, year: e.target.value },
                    })
                  }
                />
                <Input
                  placeholder="Specialization"
                  value={newItem.education.specialization}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        specialization: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <Button type="button" onClick={() => addItem("education")}>
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {formData.employment.map((emp, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{emp.position}</h4>
                    <p className="text-muted-foreground">{emp.firm}</p>
                    <p className="text-sm text-muted-foreground">
                      {emp.duration}
                    </p>
                    <p className="text-sm mt-2">{emp.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Awards & Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.awards.map((award, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{award.title}</h4>
                    <p className="text-muted-foreground">
                      {award.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {award.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
