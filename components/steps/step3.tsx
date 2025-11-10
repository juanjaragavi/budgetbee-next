"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { commonStrings } from "@/lib/constants";
import { step3Texts } from "@/lib/strings";
import ProgressIndicator from "../ProgressIndicator";

interface Step3Props {
  formData: {
    email: string;
    firstName: string;
    receiveMessages: boolean;
  };
  updateFormData: (
    data: Partial<{
      email: string;
      firstName: string;
      receiveMessages: boolean;
    }>,
  ) => void;
  onSubmit: (e?: React.FormEvent) => void;
  isSubmitting?: boolean;
  submissionStatus?: "idle" | "success" | "duplicate" | "error";
  submissionMessage?: string | null;
}

export default function Step3({
  formData,
  updateFormData,
  onSubmit,
  isSubmitting = false,
  submissionStatus = "idle",
  submissionMessage,
}: Step3Props) {
  const [email, setEmail] = useState(formData.email);
  const [firstName, setFirstName] = useState(formData.firstName);
  const [receiveMessages, setReceiveMessages] = useState(
    formData.receiveMessages,
  );
  const [errors, setErrors] = useState<{
    email: string | null;
    firstName: string | null;
    general: string | null;
  }>({
    email: null,
    firstName: null,
    general: null,
  });

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailRequired,
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailInvalid,
      }));
      return false;
    }

    const domainPart = email.split("@")[1]?.toLowerCase();
    if (domainPart) {
      if (domainPart.split(".").length < 2 || domainPart.endsWith(".")) {
        setErrors((prev) => ({
          ...prev,
          email: step3Texts.validationErrors.emailDomainIncomplete,
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, email: null }));
    return true;
  };

  const validateFirstName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        firstName: step3Texts.validationErrors.nameRequired,
      }));
      return false;
    }

    if (name.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        firstName: step3Texts.validationErrors.nameLength,
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, firstName: null }));
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    updateFormData({ email: value });
    if (value.length > 5) {
      validateEmail(value);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    updateFormData({ firstName: value });
    if (value.length > 0) {
      validateFirstName(value);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setReceiveMessages(checked);
    updateFormData({ receiveMessages: checked });
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateFirstName(firstName);

    if (!receiveMessages) {
      setErrors((prev) => ({
        ...prev,
        general: step3Texts.validationErrors.acceptTerms,
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, general: null }));
    }

    return isEmailValid && isFirstNameValid && receiveMessages;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit();
    }
  };

  // Check if form is complete and valid for button activation
  const isFormValid = () => {
    // Check if fields are filled
    const hasEmail = email.trim().length > 0;
    const hasFirstName = firstName.trim().length > 0;
    const hasAcceptedTerms = receiveMessages;

    // Check if there are no validation errors
    const noErrors = !errors.email && !errors.firstName;

    // All conditions must be met
    return hasEmail && hasFirstName && hasAcceptedTerms && noErrors;
  };

  return (
    <div className="space-y-6">
      <ProgressIndicator step={3} />

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Excellent!</h2>
        <motion.p
          className="text-lg font-semibold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#F7B500]">
            Enter your details and instantly access the credit card
            that&apos;s{" "}
          </span>
          <span className="text-[#2E74B5]">perfect for you</span>
        </motion.p>
      </div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-900">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => validateEmail(email)}
            required
            className={`h-11 text-base bg-white border text-gray-900 ${
              errors.email
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-300 focus-visible:ring-[#F7B500] focus-visible:border-[#F7B500]"
            }`}
            placeholder="your@email.com"
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-900"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={() => validateFirstName(firstName)}
            required
            className={`h-11 text-base bg-white border text-gray-900 ${
              errors.firstName
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-300 focus-visible:ring-[#F7B500] focus-visible:border-[#F7B500]"
            }`}
            placeholder="Your first name"
            aria-describedby="firstName-error"
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-xs text-red-500 mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="pt-2">
          <label
            htmlFor="receiveMessages"
            className="flex items-start gap-2 text-sm text-gray-700 leading-normal cursor-pointer"
          >
            <input
              type="checkbox"
              id="receiveMessages"
              checked={receiveMessages}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
              className="mt-0.5 h-4 w-4 min-w-[16px] flex-shrink-0 rounded border-2 border-gray-400 text-[#F7B500] focus:ring-2 focus:ring-[#F7B500] focus:ring-offset-0 cursor-pointer accent-[#F7B500]"
            />
            <span className="flex-1">
              I agree to receive personalized credit card recommendations and
              accept the{" "}
              <a href="/terms" className="text-[#F7B500] underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-[#F7B500] underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 space-y-4"
      >
        {errors.general && (
          <p className="text-xs text-red-500 text-left">{errors.general}</p>
        )}

        <button
          type="button"
          onClick={handleFormSubmit}
          disabled={!isFormValid() || isSubmitting}
          aria-busy={isSubmitting}
          className={`w-full py-4 text-base font-semibold rounded-lg transition-all ${
            isFormValid() && !isSubmitting
              ? "bg-[#F7B500] hover:bg-[#E5A600] text-white shadow-md hover:shadow-lg"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Sending..." : "GET MY RECOMMENDATIONS"}
        </button>

        {submissionStatus !== "idle" && submissionMessage && (
          <p
            className={`mt-3 text-sm text-center ${
              submissionStatus === "error"
                ? "text-red-500"
                : submissionStatus === "duplicate"
                  ? "text-[#F7B500]"
                  : "text-[#2E74B5]"
            }`}
            role={submissionStatus === "error" ? "alert" : undefined}
          >
            {submissionMessage}
          </p>
        )}
      </motion.div>

      <div className="mt-6 pt-4 space-y-3">
        <p className="text-sm text-gray-700 text-left">
          <span className="font-bold text-[#F7B500]">Important:</span> Please
          ensure your email is correct so we can send you personalized
          recommendations
        </p>
        <p className="text-center text-xs text-gray-500">
          {commonStrings.copyright}
        </p>
      </div>
    </div>
  );
}
