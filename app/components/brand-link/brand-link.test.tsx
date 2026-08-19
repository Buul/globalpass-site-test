import { render, screen } from "@testing-library/react";
import BrandLink from "./brand-link";
import { content } from "../../content";

describe("BrandLink", () => {
  it("links home with the brand image", () => {
    render(<BrandLink />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(screen.getByAltText(content.brand.name)).toBeInTheDocument();
  });

  it("applies optional class names and priority", () => {
    render(
      <BrandLink
        className="extra"
        imageClassName="invert"
        priority
      />,
    );

    expect(screen.getByRole("link")).toHaveClass("extra");
    expect(screen.getByAltText(content.brand.name)).toHaveClass("invert");
  });
});
