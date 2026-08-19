import sitemap from "./sitemap";
import { siteUrl } from "./site";

describe("sitemap", () => {
  it("lists home and privacy URLs", () => {
    const entries = sitemap();
    expect(entries.map((entry) => entry.url)).toEqual([
      siteUrl,
      `${siteUrl}/privacidade`,
    ]);
  });
});
