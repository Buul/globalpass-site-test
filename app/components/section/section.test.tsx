import { render, screen } from "@testing-library/react";
import Section, { SectionHeader } from "./section";
import { sectionAlt, sectionPad } from "../../lib/ui";

const heading = {
  eyebrow: "Eyebrow",
  title: "Título\ncom quebra",
  description: "Descrição da seção",
};

describe("SectionHeader", () => {
  it("renders eyebrow, title breaks and description", () => {
    const { container } = render(
      <SectionHeader id="demo" heading={heading} className="extra" />,
    );

    expect(screen.getByText("Eyebrow")).toBeInTheDocument();
    expect(container.querySelector("#demo-title")).toHaveTextContent("Título");
    expect(container.querySelector("br")).toBeInTheDocument();
    expect(screen.getByText("Descrição da seção")).toBeInTheDocument();
  });

  it("omits the description paragraph when it is missing", () => {
    render(
      <SectionHeader
        id="sem-desc"
        heading={{ eyebrow: "X", title: "Só título" }}
      />,
    );

    expect(screen.queryByText("Descrição da seção")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Só título" })).toHaveAttribute(
      "id",
      "sem-desc-title",
    );
  });
});

describe("Section", () => {
  it("uses the alt surface and injects a heading", () => {
    render(
      <Section id="alt" alt heading={heading}>
        <p>filho</p>
      </Section>,
    );

    const section = screen.getByRole("region", { name: /Título/ });
    expect(section).toHaveAttribute("id", "alt");
    expect(section).toHaveClass(...sectionAlt.split(" "));
    expect(screen.getByText("filho")).toBeInTheDocument();
  });

  it("skips the header when heading is omitted", () => {
    render(
      <Section id="plain">
        <h2 id="plain-title">Manual</h2>
      </Section>,
    );

    expect(screen.queryByText("Eyebrow")).not.toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Manual" })).toHaveClass(
      sectionPad,
    );
  });
});
