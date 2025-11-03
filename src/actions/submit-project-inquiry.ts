"use server";

import { getPayload } from "payload";
import config from "@payload-config";

interface ProjectInquiryData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  goals: string[];
  features: string[];
  inspiration?: string;
  contact?: string;
}

export async function submitProjectInquiry(data: ProjectInquiryData) {
  try {
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      description,
      goals,
      features,
      inspiration,
      contact,
    } = data;

    // Validate required fields
    if (
      !name ||
      !email ||
      !description ||
      !projectType ||
      !budget ||
      !timeline
    ) {
      return { success: false, error: "Please fill in all required fields" };
    }

    const payload = await getPayload({ config });

    // Create submission - hooks will automatically send emails
    await payload.create({
      collection: "contact-submissions",
      data: {
        name,
        email,
        company: company || undefined,
        projectType: projectType as any,
        budget: budget as any,
        timeline: timeline as any,
        description,
        goals: (goals || []) as any,
        features: (features || []) as any,
        inspiration: inspiration || undefined,
        contact: contact as any,
        status: "new",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Project inquiry error:", error);
    return {
      success: false,
      error: "Failed to submit project inquiry. Please try again.",
    };
  }
}
