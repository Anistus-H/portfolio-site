import type { Metadata } from "next";
import { Inter, Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
  keywords: ["Embedded Systems", "Software Engineer", "Full-Stack Developer", "IoT", "STM32", "Next.js", "React"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.summary,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} ${spaceMono.variable} antialiased bg-bg-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
