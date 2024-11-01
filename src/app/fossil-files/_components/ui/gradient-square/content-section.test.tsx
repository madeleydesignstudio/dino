import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentSection } from "./content-section";
import userEvent from "@testing-library/user-event";

describe("ContentSection", () => {
  it("should render correct section description", () => {
    render(<ContentSection selectedItem="Frontend" />);
    expect(
      screen.getByText(/Tools and technologies for building user interfaces/)
    ).toBeInTheDocument();
  });

  it("should display correct categories based on selected item", () => {
    render(<ContentSection selectedItem="Frontend" />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("should handle category selection", async () => {
    render(<ContentSection selectedItem="Frontend" />);
    const user = userEvent.setup();
    const firstCategory = screen.getByText(/Programming Languages/i);
    await user.click(firstCategory);
    expect(firstCategory).toHaveClass("bg-stone-100");
  });
});
