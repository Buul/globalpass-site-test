import { render, screen } from "@testing-library/react";
import Platform from "./platform";
import { content } from "../../content";

describe("Platform", () => {
  it("renders platform features", () => {
    render(<Platform />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "plataforma");
    expect(
      screen.getByRole("heading", { name: content.platform.features[0].title }),
    ).toBeInTheDocument();
  });
});
