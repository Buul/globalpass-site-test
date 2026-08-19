import { render, screen } from "@testing-library/react";
import { withBreaks } from "./with-breaks";

describe("withBreaks", () => {
  it("renders a single line without a break", () => {
    render(<p>{withBreaks("só uma linha")}</p>);

    expect(screen.getByText("só uma linha")).toBeInTheDocument();
    expect(screen.queryByRole("generic")).not.toHaveProperty("tagName", "BR");
  });

  it("inserts a br between lines", () => {
    const { container } = render(<p>{withBreaks("linha um\nlinha dois")}</p>);

    expect(container.querySelector("br")).toBeInTheDocument();
    expect(container.textContent).toBe("linha umlinha dois");
  });
});
