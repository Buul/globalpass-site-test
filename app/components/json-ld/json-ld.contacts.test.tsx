import { render } from "@testing-library/react";

jest.mock("../../content", () => {
  const actual = jest.requireActual("../../content") as typeof import("../../content");
  return {
    content: {
      ...actual.content,
      meta: {
        ...actual.content.meta,
        description: "quebra </script> \u2028\u2029 e >",
      },
      contact: {
        ...actual.content.contact,
        items: [],
      },
    },
  };
});

import JsonLd from "./json-ld";

describe("JsonLd without contact items", () => {
  it("escapes script breakers and omits sameAs/email", () => {
    const { container } = render(<JsonLd />);
    const html = container.querySelector("script")?.innerHTML ?? "";

    expect(html).toContain("\\u003c");
    expect(html).toContain("\\u003e");
    expect(html).toContain("\\u2028");
    expect(html).toContain("\\u2029");

    const parsed = JSON.parse(html) as {
      "@graph": Array<{ email?: string; sameAs?: string[] }>;
    };
    expect(parsed["@graph"][0].email).toBeUndefined();
    expect(parsed["@graph"][0].sameAs).toEqual([]);
  });
});
