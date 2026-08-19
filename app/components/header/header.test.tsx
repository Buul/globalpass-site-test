import { render, screen } from "@testing-library/react";
import Header from "./header";
import { content } from "../../content";

describe("Header", () => {
  it("renders skip link, nav items and contact cta", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", { name: content.a11y.skipToContent }),
    ).toHaveAttribute("href", "#conteudo");
    expect(
      screen.getByRole("navigation", { name: content.nav.ariaLabel }),
    ).toBeInTheDocument();

    for (const item of content.nav.items) {
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href,
      );
    }

    expect(screen.getByRole("link", { name: content.nav.cta })).toHaveAttribute(
      "href",
      "#contato",
    );
  });
});
