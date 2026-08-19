import { render, screen } from "@testing-library/react";
import PrivacyPage, { metadata } from "./page";
import { content } from "../content";

describe("PrivacyPage", () => {
  it("exposes metadata and lists privacy sections", () => {
    expect(metadata.title).toBe(content.privacy.title);

    render(<PrivacyPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: content.privacy.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.privacy.updated)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: content.privacy.sections[0].title,
      }),
    ).toBeInTheDocument();
  });
});
