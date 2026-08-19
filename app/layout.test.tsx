import { renderToStaticMarkup } from "react-dom/server";
import RootLayout, { metadata, viewport } from "./layout";
import { content } from "./content";

describe("RootLayout", () => {
  it("wraps children and exposes production-aware metadata", () => {
    expect(metadata.title).toEqual(
      expect.objectContaining({ default: content.meta.title }),
    );
    expect(viewport.themeColor).toBe("#5A00E3");

    const markup = renderToStaticMarkup(
      <RootLayout params={Promise.resolve({})}>
        <p>página</p>
      </RootLayout>,
    );

    expect(markup).toContain("página");
    expect(markup).toContain('lang="pt-BR"');
  });

  it("indexes in production metadata", async () => {
    process.env.VERCEL_ENV = "production";
    jest.resetModules();
    const { metadata: prodMetadata } = await import("./layout");
    expect(prodMetadata.robots).toEqual(
      expect.objectContaining({ index: true, follow: true }),
    );
  });
});
