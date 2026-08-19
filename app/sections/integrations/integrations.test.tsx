import { render, screen } from "@testing-library/react";
import Integrations from "./integrations";
import { content } from "../../content";

describe("Integrations", () => {
  it("renders every integration badge", () => {
    render(<Integrations />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "integracoes");
    for (const item of content.integrations.items) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });
});
