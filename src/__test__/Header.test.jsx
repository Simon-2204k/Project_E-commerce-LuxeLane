import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/extra/Header";

// Import jest-dom matchers for Vitest
import "@testing-library/jest-dom/vitest";

describe("Header component", () => {
  it("renders logo and navigation link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText(/luxelane/i);
    expect(logo).toBeInTheDocument();

    const navLink = screen.getByText(/← Go to Home/i);
    expect(navLink).toBeInTheDocument();

    expect(navLink.closest("a")).toHaveAttribute("href", "/home");
  });
});
