import { render, screen } from "@testing-library/react";
import Hero from "./hero";
import { content } from "../../content";

describe("Hero", () => {
  it("renders title, description and both CTAs", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveAttribute(
      "id",
      "hero-title",
    );
    expect(screen.getByText(content.hero.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(content.hero.description)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: content.hero.ctaPrimary }),
    ).toHaveAttribute("href", content.contact.whatsappUrl);
    expect(
      screen.getByRole("link", { name: content.hero.ctaSecondary }),
    ).toHaveAttribute("href", "#jornada");
    expect(screen.getByAltText(content.hero.imageAlt)).toBeInTheDocument();
  });
});
