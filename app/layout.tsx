import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./components/cookie-consent/cookie-consent";
import JsonLd from "./components/json-ld/json-ld";
import { content } from "./content";
import { siteUrl } from "./site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.meta.title,
    template: `%s | ${content.brand.name}`,
  },
  description: content.meta.description,
  applicationName: content.brand.name,
  keywords: [...content.meta.keywords],
  authors: [{ name: content.brand.name, url: siteUrl }],
  creator: content.brand.name,
  publisher: content.brand.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: content.brand.name,
    title: content.meta.title,
    description: content.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#5A00E3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth bg-[#faf5ff] bg-[length:1200px_800px,100%_100%] bg-no-repeat antialiased [scroll-padding-top:100px] [background-image:radial-gradient(1200px_800px_at_top_left,rgba(90,0,227,0.08),transparent_70%),linear-gradient(180deg,#f8fafc_0%,#faf5ff_100%)]`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="m-0 min-h-screen bg-transparent font-sans text-foreground">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
