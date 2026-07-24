import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BlueprintBackground } from "@/components/blueprint/BlueprintBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bavya Raghu — Software Engineer",
  description:
    "Final-year IT student at GNITS, Hyderabad. Building backend systems, AI applications, and software that quietly does the hard work.",
  keywords: [
    "Bavya Raghu",
    "Software Engineer",
    "Backend Engineer",
    "Full Stack",
    "AI Engineering",
    "GNITS",
    "Hyderabad",
  ],
  authors: [{ name: "Bavya Raghu" }],
  openGraph: {
    title: "Bavya Raghu — Software Engineer",
    description:
      "Portfolio of Bavya Raghu — backend systems, AI applications, and thoughtful software architecture.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <BlueprintBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
