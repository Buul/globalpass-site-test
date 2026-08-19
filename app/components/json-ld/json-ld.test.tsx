import { render } from "@testing-library/react";
import JsonLd from "./json-ld";
import { content } from "../../content";
import { siteUrl } from "../../site";

describe("JsonLd", () => {
  it("emits escaped JSON-LD with organization data", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    );
    const parsed = JSON.parse(script?.innerHTML ?? "{}") as {
      "@graph": Array<Record<string, unknown>>;
    };

    expect(parsed["@graph"][0]).toMatchObject({
      name: content.brand.name,
      url: siteUrl,
      telephone: `+${content.contact.phoneDigits}`,
    });
  });
});
