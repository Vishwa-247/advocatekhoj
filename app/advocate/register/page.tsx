"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function AdvocateRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Contact Information
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    pincode: "",
    primaryPhone: "",
    primaryPhoneSTD: "",
    secondaryPhone: "",
    secondaryPhoneSTD: "",
    emergencyPhone: "",
    mobile: "",
    fax: "",
    email: "",
    alternateEmail: "",
    website: "",

    // Membership / Affiliations
    stateBarCouncil: "",
    barCouncilNumber: "",
    yearOfEnrollment: "",
    localBarAssociation: "No",
    localBarAssociationName: "",

    // Miscellaneous
    referralAdvocateId: "",
    additionalComments: "",

    // Step 2 will be handled after admin verification
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.primaryPhone.trim())
      newErrors.primaryPhone = "Primary phone is required";
    else if (!/^\d{10}$/.test(formData.primaryPhone)) {
      newErrors.primaryPhone = "Phone must be 10 digits";
    }
    if (!formData.stateBarCouncil.trim())
      newErrors.stateBarCouncil = "State BAR Council is required";
    if (!formData.barCouncilNumber.trim())
      newErrors.barCouncilNumber = "BAR Council Number is required";
    if (!formData.yearOfEnrollment.trim())
      newErrors.yearOfEnrollment = "Year of enrollment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep1()) return;

    setIsSubmitting(true);

    // Simulate API call to create advocate application
    // This would send email notification to admin and advocate
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // After successful registration, show confirmation
      setRegistrationComplete(true);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (registrationComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-xl">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Registration Submitted Successfully!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertDescription className="text-gray-700 text-sm">
                <p className="mb-3">
                  <strong>Thank you for registering with AdvocateKhoj!</strong>
                </p>
                <p className="mb-3">
                  Your application has been submitted and is now under review by
                  our admin team.
                </p>
                <div className="space-y-2 mt-4">
                  <p className="font-semibold">What happens next?</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>
                      Our admin team will verify your details and check for
                      duplicate records
                    </li>
                    <li>
                      You will receive an email notification with your username
                      and temporary password
                    </li>
                    <li>
                      Complete your profile by adding contact information,
                      practice areas, languages, and BAR Council affiliations
                    </li>
                    <li>
                      Your profile will be reviewed within 15 days for final
                      approval
                    </li>
                  </ol>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm">
                    <strong>Important:</strong> Please check your email inbox
                    (and spam folder) for login credentials. The email will be
                    sent from{" "}
                    <span className="font-mono text-xs">
                      customer_service@advocatekhoj.in
                    </span>
                  </p>
                </div>
              </AlertDescription>
            </Alert>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Registered Email:
              </p>
              <p className="text-base text-gray-900">{formData.email}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/auth">Login (After receiving credentials)</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-sm">
              Step 1 of 2
            </Badge>
            <Badge variant="outline" className="text-xs">
              New Application
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Advocate Registration
          </CardTitle>
          <p className="text-sm text-gray-600">
            Register your details to create a new advocate account. Once
            verified, you'll receive login credentials to complete your profile.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-primary rounded"></div>
            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleStep1Submit} className="space-y-5">
            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertDescription className="text-sm text-gray-700">
                <strong>Note:</strong> Once your application is submitted, the
                name cannot be changed or updated. Please ensure all details are
                correct.
              </AlertDescription>
            </Alert>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-semibold">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="middleName" className="text-sm font-semibold">
                  Middle Name
                </Label>
                <Input
                  id="middleName"
                  placeholder="Enter middle name"
                  value={formData.middleName}
                  onChange={(e) => updateFormData("middleName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-semibold">
                  Last Name / Surname <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold">
                Office Phone <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="stdCode"
                  placeholder="STD"
                  value={formData.primaryPhoneSTD}
                  onChange={(e) =>
                    updateFormData("primaryPhoneSTD", e.target.value)
                  }
                  className="w-24"
                />
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={formData.primaryPhone}
                    onChange={(e) =>
                      updateFormData(
                        "primaryPhone",
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    className={`pl-10 ${
                      errors.primaryPhone ? "border-red-500" : ""
                    }`}
                  />
                </div>
              </div>
              {errors.primaryPhone && (
                <p className="text-xs text-red-500">{errors.primaryPhone}</p>
              )}
            </div>

            {/* Important Info Box */}
            <Alert className="bg-blue-50 border-blue-200">
              <AlertDescription className="text-sm text-gray-700 space-y-2">
                <p className="font-semibold">Registration Process:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Submit this form with your basic details</li>
                  <li>Admin will verify and check for duplicate records</li>
                  <li>You'll receive username and password via email</li>
                  <li>
                    Login and complete your full profile (contact, practice
                    areas, BAR affiliations)
                  </li>
                  <li>
                    Admin reviews and approves your profile within 15 days
                  </li>
                </ol>
              </AlertDescription>
            </Alert>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                asChild
              >
                <Link href="/auth">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Link>
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Register
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-center text-gray-500 pt-2">
              Already have an account?{" "}
              <Link
                href="/auth"
                className="text-primary font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
