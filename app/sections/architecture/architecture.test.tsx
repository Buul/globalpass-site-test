import { render, screen } from "@testing-library/react";
import Architecture from "./architecture";
import { content } from "../../content";

describe("Architecture", () => {
  it("renders numbered architecture items", () => {
    render(<Architecture />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "arquitetura");
    expect(
      screen.getByText(content.architecture.items[0].number),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: content.architecture.items[0].title,
      }),
    ).toBeInTheDocument();
  });
});
