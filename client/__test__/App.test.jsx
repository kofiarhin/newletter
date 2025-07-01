import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Landing from "../src/components/Landing/Landing";
import "@testing-library/jest-dom/vitest";

describe("app", () => {
  it("passing test", () => {
    expect(1).toBe(1);
  });

  it("should test landing component", async () => {
    render(<Landing />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
