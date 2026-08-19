import {
  contentSecurityPolicy,
  getContentSecurityPolicy,
  getSecurityHeaders,
  securityHeaders,
} from "./security-headers";

describe("securityHeaders", () => {
  it("lists CSP, HSTS, DENY and COOP in production", () => {
    const keys = securityHeaders.map((header) => header.key);

    expect(contentSecurityPolicy).toContain("frame-ancestors 'none'");
    expect(contentSecurityPolicy).not.toContain("unsafe-eval");
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

  it("allows eval and websockets in development", () => {
    const csp = getContentSecurityPolicy(true);
    expect(csp).toContain("'unsafe-eval'");
    expect(csp).toContain("ws:");
    expect(
      getSecurityHeaders(true).find(
        (header) => header.key === "Content-Security-Policy",
      )?.value,
    ).toBe(csp);
  });
});
