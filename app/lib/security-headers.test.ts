import { contentSecurityPolicy, securityHeaders } from "./security-headers";

describe("securityHeaders", () => {
  it("lists CSP, HSTS, DENY and COOP", () => {
    const keys = securityHeaders.map((header) => header.key);

    expect(contentSecurityPolicy).toContain("frame-ancestors 'none'");
    expect(keys).toEqual(
      expect.arrayContaining([
        "Content-Security-Policy",
        "Strict-Transport-Security",
        "X-Frame-Options",
        "Cross-Origin-Opener-Policy",
      ]),
    );
    expect(
      securityHeaders.find((header) => header.key === "X-Frame-Options")?.value,
    ).toBe("DENY");
  });
});
