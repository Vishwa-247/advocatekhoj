"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export type ReportReason =
  | "offensive_language"
  | "spam"
  | "harassment"
  | "misleading"
  | "inappropriate_content"
  | "copyright"
  | "privacy_violation"
  | "other";

interface ReportAbuseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contentType: "question" | "answer" | "case" | "comment";
  contentId: string | number;
  onSubmit?: (report: {
    contentId: string | number;
    contentType: string;
    reason: ReportReason;
    details: string;
    anonymous: boolean;
  }) => Promise<void>;
}

export function ReportAbuseDialog({
  open,
  onOpenChange,
  contentType,
  contentId,
  onSubmit,
}: ReportAbuseDialogProps) {
  const [reason, setReason] = useState<ReportReason | "">("");
  const [details, setDetails] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const reportReasons: { value: ReportReason; label: string }[] = [
    { value: "offensive_language", label: "Offensive or abusive language" },
    { value: "spam", label: "Spam or irrelevant content" },
    { value: "harassment", label: "Harassment or bullying" },
    { value: "misleading", label: "Misleading or false information" },
    {
      value: "inappropriate_content",
      label: "Inappropriate or explicit content",
    },
    { value: "copyright", label: "Copyright violation" },
    { value: "privacy_violation", label: "Privacy violation" },
    { value: "other", label: "Other (please specify)" },
  ];

  const handleSubmit = async () => {
    if (!reason) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Call the onSubmit callback if provided
      if (onSubmit) {
        await onSubmit({
          contentId,
          contentType,
          reason: reason as ReportReason,
          details,
          anonymous,
        });
      } else {
        // Default implementation - send to API
        const response = await fetch("/api/moderation/report-abuse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contentId,
            contentType,
            reason,
            details,
            anonymous,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit report");
        }
      }

      setSubmitStatus("success");

      // Reset form and close after delay
      setTimeout(() => {
        setReason("");
        setDetails("");
        setAnonymous(false);
        setSubmitStatus(null);
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting report:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setReason("");
      setDetails("");
      setAnonymous(false);
      setSubmitStatus(null);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Report Abuse</DialogTitle>
          <DialogDescription>
            Help us maintain a safe and respectful community. Your report will
            be reviewed by our moderation team.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Thank you for your report. Our moderation team will review it
              shortly.
            </AlertDescription>
          </Alert>
        ) : submitStatus === "error" ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to submit report. Please try again.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Why are you reporting this {contentType}?
              </Label>
              <RadioGroup value={reason} onValueChange={setReason as any}>
                {reportReasons.map((r) => (
                  <div key={r.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={r.value} id={r.value} />
                    <Label
                      htmlFor={r.value}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {r.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details" className="text-sm font-medium">
                Additional details (optional)
              </Label>
              <Textarea
                id="details"
                placeholder="Please provide any additional context that might help us understand the issue..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={anonymous}
                onCheckedChange={(checked) => setAnonymous(checked as boolean)}
              />
              <Label
                htmlFor="anonymous"
                className="text-sm font-normal cursor-pointer"
              >
                Submit report anonymously
              </Label>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                False reports may result in action against your account. Please
                only report content that genuinely violates our community
                guidelines.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!reason || isSubmitting || submitStatus === "success"}
          >
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
