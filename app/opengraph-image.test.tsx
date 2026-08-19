import OpenGraphImage, { alt, contentType, size } from "./opengraph-image";
import { content } from "./content";

jest.mock("next/og", () => ({
  ImageResponse: jest.fn((element, options) => ({ element, options })),
}));

describe("OpenGraphImage", () => {
  it("builds a 1200x630 card from site copy", () => {
    const response = OpenGraphImage() as unknown as {
      options: { width: number; height: number };
    };

    expect(alt).toBe(content.meta.ogAlt);
    expect(contentType).toBe("image/png");
    expect(size).toEqual({ width: 1200, height: 630 });
    expect(response.options).toEqual(size);
  });
});
