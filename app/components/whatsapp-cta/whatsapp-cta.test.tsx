import { render, screen } from "@testing-library/react";
import WhatsAppCta from "./whatsapp-cta";
import { content } from "../../content";

describe("WhatsAppCta", () => {
  it("opens WhatsApp in a new tab with noopener", () => {
    render(<WhatsAppCta>Fale agora</WhatsAppCta>);

    const link = screen.getByRole("link", { name: "Fale agora" });
    expect(link).toHaveAttribute("href", content.contact.whatsappUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("merges an extra className", () => {
    render(<WhatsAppCta className="hero-cta">Fale agora</WhatsAppCta>);

    expect(screen.getByRole("link")).toHaveClass("hero-cta");
  });
});
