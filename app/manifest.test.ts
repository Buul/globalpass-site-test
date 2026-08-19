import manifest from "./manifest";
import { content } from "./content";

describe("manifest", () => {
  it("describes the PWA shell", () => {
    expect(manifest()).toMatchObject({
      name: content.brand.name,
      start_url: "/",
      display: "standalone",
    });
  });
});
