export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://globalpass.app"
).replace(/\/$/, "");

export const isProduction = process.env.VERCEL_ENV === "production";

