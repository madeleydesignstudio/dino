import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    const result = cn("base-class", "additional-class", {
      "conditional-class": true,
    });
    expect(result).toContain("base-class");
    expect(result).toContain("additional-class");
    expect(result).toContain("conditional-class");
  });

  it("should handle conditional classes", () => {
    const result = cn("base-class", {
      "true-class": true,
      "false-class": false,
    });
    expect(result).toContain("base-class");
    expect(result).toContain("true-class");
    expect(result).not.toContain("false-class");
  });
});
