import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./components/cookie-consent";
import { content } from "./content";
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
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
