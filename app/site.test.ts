describe("site.ts", () => {
  const originalPublicUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const originalVercelEnv = process.env.VERCEL_ENV;

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = originalPublicUrl;
    process.env.VERCEL_ENV = originalVercelEnv;
    jest.resetModules();
  });

  it("strips a trailing slash from NEXT_PUBLIC_SITE_URL", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/";
    jest.resetModules();
    const { siteUrl } = await import("./site");
    expect(siteUrl).toBe("https://example.com");
  });

  it("falls back to globalpass.app", async () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    jest.resetModules();
    const { siteUrl } = await import("./site");
    expect(siteUrl).toBe("https://globalpass.app");
  });

  it("detects production from VERCEL_ENV", async () => {
    process.env.VERCEL_ENV = "production";
    jest.resetModules();
    const { isProduction } = await import("./site");
    expect(isProduction).toBe(true);
  });

  it("is not production outside Vercel production", async () => {
    process.env.VERCEL_ENV = "preview";
    jest.resetModules();
    const { isProduction } = await import("./site");
    expect(isProduction).toBe(false);
  });
});
