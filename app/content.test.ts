import { content } from "./content";

describe("content", () => {
  it("keeps required marketing blocks", () => {
    expect(content.brand.name).toBe("GlobalPass");
    expect(content.hero.title.length).toBeGreaterThan(0);
    expect(content.privacy.sections.length).toBeGreaterThan(0);
  });
});
