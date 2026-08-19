import { render, screen } from "@testing-library/react";
import CardGrid from "./card-grid";

const items = [
  { title: "Alpha", description: "Primeiro" },
  { title: "Beta", description: "Segundo" },
];

describe("CardGrid", () => {
  it("renders a card for each item", () => {
    render(
      <CardGrid className="grid-cols-2" cardClassName="custom-card" items={items} />,
    );

    expect(screen.getByRole("heading", { name: "Alpha" })).toBeInTheDocument();
    expect(screen.getByText("Primeiro")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Beta" })).toBeInTheDocument();
  });

  it("renders media and extra typography classes", () => {
    render(
      <CardGrid
        className="grid-cols-2"
        cardClassName="custom-card"
        titleClassName="title-extra"
        textClassName="text-extra"
        items={items}
        renderMedia={(item) => <span>media-{item.title}</span>}
      />,
    );

    expect(screen.getByText("media-Alpha")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Alpha" })).toHaveClass(
      "title-extra",
    );
    expect(screen.getByText("Primeiro")).toHaveClass("text-extra");
  });
});
