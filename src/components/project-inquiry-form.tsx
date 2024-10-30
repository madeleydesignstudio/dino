"use client";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  fullname: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Please enter your company name"),
  budget: z.string().min(1, "Please enter your budget"),
  projectName: z.string().min(1, "Please enter your project name"),
  projectDescription: z
    .string()
    .min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof FormSchema>;

export default function ProjectInquiryForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
    isLoading: false,
  });

  const onSubmit = async (data: FormData) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Project inquiry submission failed");
      }

      setState({
        isSubmitted: true,
        isError: false,
        isLoading: false,
      });

      reset();

      toast({
        title: "Project inquiry submitted!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setState({
        isSubmitted: false,
        isError: true,
        isLoading: false,
      });

      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again later.",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full max-w-md mx-auto p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-karla mb-2 font-bold">
              Start Your Project
            </h2>
            <p className="text-stone-600 text-sm font-karla">
              Tell us about your project and we&apos;ll get back to you with a
              custom solution.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              <div>
                <input
                  id="fullname"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.fullname ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("fullname")}
                />
                {errors.fullname && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.email ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="company"
                  placeholder="Company name"
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.company ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("company")}
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="budget"
                  placeholder="Project budget"
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.budget ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("budget")}
                />
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="projectName"
                  placeholder="Project name"
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.projectName ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("projectName")}
                />
                {errors.projectName && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.projectName.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  id="projectDescription"
                  placeholder="Project description"
                  rows={4}
                  className={`w-full px-4 py-3 bg-transparent rounded-md border ${
                    errors.projectDescription
                      ? "border-red-500"
                      : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("projectDescription")}
                />
                {errors.projectDescription && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.projectDescription.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full bg-[#2EA8A9] text-white py-3 px-6 hover:bg-[#237e7e] transition-colors duration-200 font-karla disabled:opacity-50 rounded-md disabled:cursor-not-allowed flex items-center justify-center"
            >
              {state.isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Project Inquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
