"use server";

import { getPayload } from "payload";
import config from "@payload-config";

export async function submitContactForm(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!email || !message) {
      return { success: false, error: "Email and message are required" };
    }

    const payload = await getPayload({ config });

    // Create submission - hooks will automatically send emails
    // Using "other" as default project type for simple contact form
    await payload.create({
      collection: "contact-submissions",
      data: {
        name: email.split("@")[0] || "Contact Form User", // Extract name from email
        email,
        projectType: "other",
        budget: "not-sure",
        timeline: "flexible",
        description: message,
        goals: [],
        features: [],
        status: "new",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send message" };
  }
}
