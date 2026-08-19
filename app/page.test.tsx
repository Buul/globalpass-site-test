import { render, screen } from "@testing-library/react";
import Home from "./page";
import { content } from "./content";

describe("Home", () => {
  it("renders the main landmark and primary sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("main", { name: content.a11y.main }),
    ).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(document.getElementById("jornada")).toBeInTheDocument();
    expect(document.getElementById("plataforma")).toBeInTheDocument();
  });
});
