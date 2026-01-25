"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Building2 } from "lucide-react";
import ReCaptcha from "@/components/ui/recaptcha";
import { useToast } from "@/hooks/use-toast";

interface AdvertiserRegistrationFormProps {
  userType: "advertiser";
}

export function AdvertiserRegistrationForm({
  userType,
}: AdvertiserRegistrationFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Login Information
    email: "",
    password: "",
    confirmPassword: "",
    recoveryQuestion: "",
    recoveryAnswer: "",

    // Business Information
    businessName: "",
    businessCategory: "",
    businessDescription: "",
    websiteUrl: "",
    gstNumber: "",

    // Contact Information
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    primaryPhone: "",
    secondaryPhone: "",
    alternateEmail: "",

    // Terms
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Mock registration
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description:
          "Your advertiser account has been created. Redirecting to login...",
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }, 1000);
  };

  const recoveryQuestions = [
    "What was your first pet's name?",
    "What is your mother's maiden name?",
    "What was the name of your first school?",
    "What is your favorite book?",
    "What city were you born in?",
  ];

  const salutations = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];

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

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const indianCities = [
    "Agra",
    "Ahmedabad",
    "Bengaluru",
    "Bhopal",
    "Chennai",
    "Coimbatore",
    "Delhi",
    "Gurgaon",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kanpur",
    "Kochi",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Nagpur",
    "Noida",
    "Pune",
    "Surat",
    "Vadodara",
    "Visakhapatnam",
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Building2 className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Advertiser Registration
        </CardTitle>
        <CardDescription>
          Create your advertiser account to promote your business on
          AdvocateKhoj
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Login Information</h3>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="This will be your username"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password * (min 7 characters)</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    minLength={7}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Re-Type Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="recoveryQuestion">
                  Password Recovery Question *
                </Label>
                <Select
                  value={formData.recoveryQuestion}
                  onValueChange={(value) =>
                    setFormData({ ...formData, recoveryQuestion: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a question" />
                  </SelectTrigger>
                  <SelectContent>
                    {recoveryQuestions.map((question) => (
                      <SelectItem key={question} value={question}>
                        {question}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recoveryAnswer">
                  Password Recovery Answer *
                </Label>
                <Input
                  id="recoveryAnswer"
                  placeholder="Enter your answer"
                  value={formData.recoveryAnswer}
                  onChange={(e) =>
                    setFormData({ ...formData, recoveryAnswer: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Information</h3>

            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="businessCategory">Business Category *</Label>
                <Select
                  value={formData.businessCategory}
                  onValueChange={(value) =>
                    setFormData({ ...formData, businessCategory: value })
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
                <Label htmlFor="websiteUrl">Website URL</Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  placeholder="https://www.example.com"
                  value={formData.websiteUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, websiteUrl: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessDescription">Business Description</Label>
              <Textarea
                id="businessDescription"
                placeholder="Brief description of your business"
                rows={4}
                value={formData.businessDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessDescription: e.target.value,
                  })
                }
              />
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

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Person Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salutation">Salutation</Label>
                <Select
                  value={formData.salutation}
                  onValueChange={(value) =>
                    setFormData({ ...formData, salutation: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {salutations.map((sal) => (
                      <SelectItem key={sal} value={sal}>
                        {sal}
                      </SelectItem>
                    ))}
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
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({ ...formData, middleName: e.target.value })
                  }
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
              <Label htmlFor="designation">Designation *</Label>
              <Input
                id="designation"
                placeholder="e.g., Marketing Manager, Director"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1 *</Label>
                <Input
                  id="address1"
                  value={formData.address1}
                  onChange={(e) =>
                    setFormData({ ...formData, address1: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <Input
                  id="address2"
                  value={formData.address2}
                  onChange={(e) =>
                    setFormData({ ...formData, address2: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {indianCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryPhone">Primary Phone *</Label>
                <Input
                  id="primaryPhone"
                  placeholder="Area/STD code - Number"
                  value={formData.primaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryPhone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryPhone">Secondary Phone</Label>
                <Input
                  id="secondaryPhone"
                  placeholder="Area/STD code - Number"
                  value={formData.secondaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, secondaryPhone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alternateEmail">Alternate Email</Label>
              <Input
                id="alternateEmail"
                type="email"
                placeholder="Alternate email address"
                value={formData.alternateEmail}
                onChange={(e) =>
                  setFormData({ ...formData, alternateEmail: e.target.value })
                }
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I accept the{" "}
                <a
                  href="/user-agreement"
                  className="text-primary hover:underline"
                >
                  Terms & Conditions
                </a>{" "}
                *
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.acceptPrivacy}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acceptPrivacy: checked as boolean,
                  })
                }
                required
              />
              <Label htmlFor="privacy" className="text-sm">
                I accept the{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                *
              </Label>
            </div>
          </div>

          {/* Google reCAPTCHA */}
          <ReCaptcha />

          <Button type="submit" className="w-full" size="lg">
            Create Advertiser Account
          </Button>

          <div className="text-center text-sm pt-2">
            <span className="text-muted-foreground">
              Already have an account?{" "}
            </span>
            <a href="/login" className="text-primary hover:underline">
              Log in here
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
