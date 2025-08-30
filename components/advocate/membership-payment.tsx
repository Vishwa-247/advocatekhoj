"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, CreditCard, Shield } from "lucide-react"

export function MembershipPayment() {
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: "",
  })

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 2999,
      duration: "6 months",
      features: ["Profile listing", "Respond to up to 10 cases/month", "Basic messaging", "Email support"],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: 4999,
      duration: "12 months",
      features: [
        "Enhanced profile with ratings",
        "Respond to unlimited cases",
        "Priority listing in search",
        "Advanced messaging & file sharing",
        "Phone & email support",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: 8999,
      duration: "12 months",
      features: [
        "All Professional features",
        "Featured advocate badge",
        "Top search placement",
        "Dedicated account manager",
        "Marketing support",
        "Custom profile URL",
      ],
      popular: false,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing - connect to payment gateway
    console.log("Processing payment:", { selectedPlan, paymentMethod, formData })
  }

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Choose Your Membership Plan</h2>
        <p className="text-muted-foreground">
          Join our network of legal professionals and start connecting with clients
        </p>
      </div>

      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`cursor-pointer transition-all ${
              selectedPlan === plan.id ? "ring-2 ring-primary border-primary" : "hover:shadow-md"
            } ${plan.popular ? "relative" : ""}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">₹{plan.price.toLocaleString()}</span>
                <span className="text-muted-foreground">/{plan.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Form */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="flex justify-between items-center mb-2">
                <span>
                  {selectedPlanDetails?.name} Plan ({selectedPlanDetails?.duration})
                </span>
                <span>₹{selectedPlanDetails?.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>GST (18%)</span>
                <span>₹{selectedPlanDetails ? Math.round(selectedPlanDetails.price * 0.18).toLocaleString() : 0}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center font-semibold">
                <span>Total Amount</span>
                <span>₹{selectedPlanDetails ? Math.round(selectedPlanDetails.price * 1.18).toLocaleString() : 0}</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                  className={`cursor-pointer transition-all ${paymentMethod === "card" ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CardContent className="flex items-center justify-center p-4">
                    <div className="text-center">
                      <CreditCard className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Credit/Debit Card</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all ${paymentMethod === "upi" ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <CardContent className="flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">UPI</span>
                      </div>
                      <span className="text-sm font-medium">UPI Payment</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all ${
                    paymentMethod === "netbanking" ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod("netbanking")}
                >
                  <CardContent className="flex items-center justify-center p-4">
                    <div className="text-center">
                      <Shield className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Net Banking</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Payment Form Fields */}
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardholderName">Cardholder Name *</Label>
                  <Input
                    id="cardholderName"
                    placeholder="Enter cardholder name"
                    value={formData.cardholderName}
                    onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date *</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID *</Label>
                <Input
                  id="upiId"
                  placeholder="yourname@upi"
                  value={formData.upiId}
                  onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                  required
                />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                    <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg">
              Pay ₹{selectedPlanDetails ? Math.round(selectedPlanDetails.price * 1.18).toLocaleString() : 0}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By proceeding, you agree to our Terms of Service and Privacy Policy. Your payment is secured with 256-bit
              SSL encryption.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
