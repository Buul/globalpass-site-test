import { render, screen } from "@testing-library/react";
import Why from "./why";
import { content } from "../../content";

describe("Why", () => {
  it("renders benefit cards", () => {
    render(<Why />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "beneficios");
    expect(
      screen.getByRole("heading", { name: content.why.items[0].title }),
    ).toBeInTheDocument();
  });
});
