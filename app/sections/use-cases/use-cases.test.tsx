import { render, screen } from "@testing-library/react";
import UseCases from "./use-cases";
import { content } from "../../content";

describe("UseCases", () => {
  it("renders use case cards", () => {
    render(<UseCases />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "casos");
    expect(
      screen.getByRole("heading", { name: content.useCases.items[0].title }),
    ).toBeInTheDocument();
  });
});
