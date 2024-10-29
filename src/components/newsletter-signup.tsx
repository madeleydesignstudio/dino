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
});

type FormData = z.infer<typeof FormSchema>;

export default function NewsletterForm() {
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
      const formData = new FormData();

      formData.append("u", "4");
      formData.append("f", "4");
      formData.append("s", "s");
      formData.append("c", "0");
      formData.append("m", "0");
      formData.append("act", "sub");
      formData.append("v", "2");
      formData.append("or", "c0c3bf12af7fa3ad55cceb047972db9");

      formData.append("fullname", data.fullname);
      formData.append("email", data.email);

      await fetch(process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_URL!, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      const newsletterResponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          fullname: data.fullname,
        }),
      });

      if (!newsletterResponse.ok) {
        throw new Error("Newsletter submission failed");
      }

      setState({
        isSubmitted: true,
        isError: false,
        isLoading: false,
      });

      reset();

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
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
        title: "Subscription failed",
        description: "Please try again later.",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full max-w-md mx-auto bg-stone-50/80 backdrop-blur-sm p-8 border border-stone-900">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-nanum mb-2">Join Our Newsletter</h2>
            <p className="text-stone-600 text-sm font-karla">
              Stay updated with our latest insights and developments in web
              design, engineering, and digital marketing.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              <div>
                <input
                  id="fullname"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.fullname ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("fullname", { required: true })}
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
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.email ? "border-red-500" : "border-stone-900"
                  } focus:outline-none focus:ring-1 focus:ring-[#2EA8A9] font-karla transition-colors duration-200`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-karla">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full bg-[#2EA8A9] text-white py-3 px-6 hover:bg-[#237e7e] transition-colors duration-200 font-karla disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {state.isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe to Newsletter"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
