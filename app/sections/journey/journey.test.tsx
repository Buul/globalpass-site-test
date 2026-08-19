import { render, screen } from "@testing-library/react";
import Journey from "./journey";
import { content } from "../../content";

describe("Journey", () => {
  it("renders numbered steps", () => {
    render(<Journey />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "jornada");
    expect(screen.getByText(content.journey.steps[0].step)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.journey.steps[0].title }),
    ).toBeInTheDocument();
  });
});
