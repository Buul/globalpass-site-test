import { cn } from "./cn";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops false and undefined parts", () => {
    expect(cn("a", false, undefined, "b")).toBe("a b");
  });
});
