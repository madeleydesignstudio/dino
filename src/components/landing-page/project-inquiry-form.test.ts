import { describe, it, expect } from "vitest";
import { FormSchema } from "./project-inquiry-form"; // Change this line

describe("ProjectInquiryForm Schema", () => {
  it("should validate correct form data", () => {
    const validData = {
      fullname: "John Doe",
      email: "john@example.com",
      company: "Acme Inc",
      budget: "£1,000",
      projectName: "Website Redesign",
      projectDescription:
        "This is a detailed description of the project that meets the minimum length requirement for testing purposes.",
    };

    const result = FormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid email", () => {
    const invalidData = {
      fullname: "John Doe",
      email: "invalid-email",
      company: "Acme Inc",
      budget: "£1,000",
      projectName: "Website Redesign",
      projectDescription:
        "This is a detailed description of the project that meets the minimum length requirement for testing purposes.",
    };

    const result = FormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should reject invalid budget format", () => {
    const invalidData = {
      fullname: "John Doe",
      email: "john@example.com",
      company: "Acme Inc",
      budget: "invalid-budget",
      projectName: "Website Redesign",
      projectDescription:
        "This is a detailed description of the project that meets the minimum length requirement for testing purposes.",
    };

    const result = FormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
