"use client";

import { useState } from "react";
import { submitContactForm } from "@/actions/submit-contact-form";

// Constants
const FORM_MESSAGES = {
  success:
    "Thank you! We've received your message and will get back to you soon.",
  error: {
    default: "Something went wrong. Please try again.",
    network:
      "Failed to send message. Please check your connection and try again.",
  },
  loading: "Sending...",
  submit: "Send Message",
} as const;

// Form field configurations
const FORM_FIELDS = {
  email: {
    id: "email",
    name: "email",
    type: "email" as const,
    label: "Email Address",
    placeholder: "you@example.com",
    required: true,
  },
  message: {
    id: "message",
    name: "message",
    label: "Message",
    placeholder: "How can we help you?",
    rows: 6,
    required: true,
  },
} as const;

/**
 * ContactForm component handles user inquiries
 * Features email and message fields with validation and submission feedback
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Resets form state to initial values
   */
  const resetFormState = () => {
    setError(null);
    setSuccess(false);
  };

  /**
   * Handles form submission with error handling and user feedback
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    resetFormState();

    const formData = new FormData(event.currentTarget);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSuccess(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setError(result.error || FORM_MESSAGES.error.default);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(FORM_MESSAGES.error.network);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Email Field */}
      <div>
        <label
          htmlFor={FORM_FIELDS.email.id}
          className="block text-sm font-medium mb-2"
        >
          {FORM_FIELDS.email.label}
        </label>
        <input
          type={FORM_FIELDS.email.type}
          id={FORM_FIELDS.email.id}
          name={FORM_FIELDS.email.name}
          required={FORM_FIELDS.email.required}
          disabled={isSubmitting}
          className="w-full px-4 py-2 border border-neutral-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          placeholder={FORM_FIELDS.email.placeholder}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor={FORM_FIELDS.message.id}
          className="block text-sm font-medium mb-2"
        >
          {FORM_FIELDS.message.label}
        </label>
        <textarea
          id={FORM_FIELDS.message.id}
          name={FORM_FIELDS.message.name}
          required={FORM_FIELDS.message.required}
          disabled={isSubmitting}
          rows={FORM_FIELDS.message.rows}
          className="w-full px-4 py-2 border border-neutral-500 rounded-lg resize-vertical focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          placeholder={FORM_FIELDS.message.placeholder}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div
          id="form-error"
          role="alert"
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
        >
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div
          role="alert"
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
        >
          {FORM_MESSAGES.success}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        aria-describedby={isSubmitting ? "button-loading" : undefined}
      >
        {isSubmitting ? (
          <span id="button-loading">{FORM_MESSAGES.loading}</span>
        ) : (
          FORM_MESSAGES.submit
        )}
      </button>
    </form>
  );
}
