describe("robots", () => {
  const originalVercelEnv = process.env.VERCEL_ENV;

  afterEach(() => {
    process.env.VERCEL_ENV = originalVercelEnv;
    jest.resetModules();
  });

  it("disallows indexing outside production", async () => {
    process.env.VERCEL_ENV = "preview";
    jest.resetModules();
    const robots = (await import("./robots")).default;
    expect(robots()).toEqual({
      rules: { userAgent: "*", disallow: "/" },
    });
  });

  it("allows indexing in production", async () => {
    process.env.VERCEL_ENV = "production";
    jest.resetModules();
    const robots = (await import("./robots")).default;
    const { siteUrl } = await import("./site");
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    });
  });
});
