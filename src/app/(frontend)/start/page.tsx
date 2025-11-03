"use client";

import { useState } from "react";
import SevenMaxWidth from "@/components/providers/7-max-width";
import { Separator } from "@/components/universal/separator";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { submitProjectInquiry } from "@/actions/submit-project-inquiry";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  goals: string[];
  features: string[];
  inspiration: string;
  contact: string;
}

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    goals: [],
    features: [],
    inspiration: "",
    contact: "",
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: "goals" | "features", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitProjectInquiry(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Let's get to know you",
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateFormData("company", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Acme Inc."
            />
          </div>
        </div>
      ),
    },
    {
      title: "What type of project do you have in mind?",
      component: (
        <div className="space-y-4">
          {[
            { label: "Website Design", value: "website-design" },
            { label: "Website Development", value: "website-development" },
            { label: "Mobile App", value: "mobile-app" },
            { label: "E-commerce Platform", value: "ecommerce-platform" },
            { label: "SaaS Application", value: "saas-application" },
            { label: "Corporate Website", value: "corporate-website" },
            { label: "Creative Design", value: "creative-design" },
            { label: "AI Integration", value: "ai-integration" },
            { label: "Other", value: "other" },
          ].map((type) => (
            <label
              key={type.value}
              className={`block p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                formData.projectType === type.value
                  ? "border-accent bg-accent/5"
                  : "border-[#D9E0C1]"
              }`}
            >
              <input
                type="radio"
                name="projectType"
                value={type.value}
                checked={formData.projectType === type.value}
                onChange={(e) => updateFormData("projectType", e.target.value)}
                className="sr-only"
              />
              <span className="font-medium">{type.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "What's your budget range?",
      component: (
        <div className="space-y-4">
          {[
            { label: "Under $5,000", value: "under-5k" },
            { label: "$5,000 - $15,000", value: "5k-15k" },
            { label: "$15,000 - $50,000", value: "15k-50k" },
            { label: "$50,000 - $100,000", value: "50k-100k" },
            { label: "Over $100,000", value: "over-100k" },
            { label: "I'm not sure yet", value: "not-sure" },
          ].map((budget) => (
            <label
              key={budget.value}
              className={`block p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                formData.budget === budget.value
                  ? "border-accent bg-accent/5"
                  : "border-[#D9E0C1]"
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={budget.value}
                checked={formData.budget === budget.value}
                onChange={(e) => updateFormData("budget", e.target.value)}
                className="sr-only"
              />
              <span className="font-medium">{budget.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "When do you need this completed?",
      component: (
        <div className="space-y-4">
          {[
            { label: "ASAP (Rush project)", value: "asap" },
            { label: "1-2 months", value: "1-2-months" },
            { label: "3-6 months", value: "3-6-months" },
            { label: "6-12 months", value: "6-12-months" },
            { label: "More than a year", value: "more-than-year" },
            { label: "Flexible timeline", value: "flexible" },
          ].map((timeline) => (
            <label
              key={timeline.value}
              className={`block p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                formData.timeline === timeline.value
                  ? "border-accent bg-accent/5"
                  : "border-[#D9E0C1]"
              }`}
            >
              <input
                type="radio"
                name="timeline"
                value={timeline.value}
                checked={formData.timeline === timeline.value}
                onChange={(e) => updateFormData("timeline", e.target.value)}
                className="sr-only"
              />
              <span className="font-medium">{timeline.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "What are your main goals?",
      component: (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">Select all that apply:</p>
          {[
            { label: "Increase online sales", value: "increase-sales" },
            { label: "Improve brand awareness", value: "improve-brand" },
            { label: "Better user experience", value: "better-ux" },
            { label: "Mobile optimization", value: "mobile-optimization" },
            { label: "SEO improvement", value: "seo-improvement" },
            { label: "Streamline processes", value: "streamline-processes" },
            { label: "Generate more leads", value: "generate-leads" },
            { label: "Showcase portfolio/work", value: "showcase-portfolio" },
          ].map((goal) => (
            <label
              key={goal.value}
              className={`block p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                formData.goals.includes(goal.value)
                  ? "border-accent bg-accent/5"
                  : "border-[#D9E0C1]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.goals.includes(goal.value)}
                onChange={() => toggleArrayValue("goals", goal.value)}
                className="sr-only"
              />
              <span className="font-medium">{goal.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "What features do you need?",
      component: (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">Select all that apply:</p>
          {[
            { label: "Contact forms", value: "contact-forms" },
            { label: "E-commerce functionality", value: "ecommerce" },
            { label: "User accounts/login", value: "user-accounts" },
            { label: "Content management", value: "content-management" },
            { label: "Payment processing", value: "payment-processing" },
            { label: "Social media integration", value: "social-media" },
            { label: "Analytics tracking", value: "analytics" },
            { label: "Multi-language support", value: "multi-language" },
            { label: "API integrations", value: "api-integrations" },
            { label: "Custom animations", value: "custom-animations" },
          ].map((feature) => (
            <label
              key={feature.value}
              className={`block p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                formData.features.includes(feature.value)
                  ? "border-accent bg-accent/5"
                  : "border-[#D9E0C1]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.features.includes(feature.value)}
                onChange={() => toggleArrayValue("features", feature.value)}
                className="sr-only"
              />
              <span className="font-medium">{feature.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: "Tell us more about your project",
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Project Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none"
              placeholder="Describe your project in detail. What problem are you trying to solve? Who is your target audience?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Inspiration & References
            </label>
            <textarea
              value={formData.inspiration}
              onChange={(e) => updateFormData("inspiration", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-24 resize-none"
              placeholder="Share any websites, apps, or designs you like. Include URLs if possible."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Preferred Contact Method
            </label>
            <select
              value={formData.contact}
              onChange={(e) => updateFormData("contact", e.target.value)}
              className="w-full p-3 border border-[#D9E0C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select preference</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="video">Video call</option>
              <option value="in-person">In-person meeting</option>
            </select>
          </div>
        </div>
      ),
    },
  ];

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email;
      case 1:
        return formData.projectType;
      case 2:
        return formData.budget;
      case 3:
        return formData.timeline;
      case 4:
        return formData.goals.length > 0;
      case 5:
        return formData.features.length > 0;
      case 6:
        return formData.description;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16">
        <SevenMaxWidth>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-lg text-gray-600 mb-6">
                We've received your project details and will be in touch within
                24 hours. You should also receive a confirmation email shortly.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/"
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  Back to Home
                </a>
                <a
                  href="/casestudies"
                  className="border border-[#D9E0C1] px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </SevenMaxWidth>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SevenMaxWidth>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Start Your Project</h1>
            <p className="text-lg text-gray-600">
              Let's learn about your needs so we can provide the best solution
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <Separator className="bg-[#D9E0C1] w-full mb-8" />

          {/* Current Step */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">
              {steps[currentStep].title}
            </h2>
            {steps[currentStep].component}
          </div>

          <Separator className="bg-[#D9E0C1] w-full mb-8" />

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50 border border-[#D9E0C1]"
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  !isStepValid() || isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-accent text-white hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Project Details
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  !isStepValid()
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-accent text-white hover:bg-opacity-90"
                }`}
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </SevenMaxWidth>
    </div>
  );
}
