import { render, screen } from "@testing-library/react";
import Impact from "./impact";
import { content } from "../../content";

describe("Impact", () => {
  it("renders the comparison table", () => {
    render(<Impact />);

    expect(screen.getByRole("region")).toHaveAttribute("id", "impacto");
    expect(
      screen.getByRole("table", { name: content.impact.table.caption }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: content.impact.table.before }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("rowheader", {
        name: content.impact.table.rows[0].process,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(content.impact.table.rows[0].after),
    ).toBeInTheDocument();
  });
});
