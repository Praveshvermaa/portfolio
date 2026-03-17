import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pravesh Verma | Full Stack Developer",
  description:
    "Portfolio of Pravesh Verma – Full Stack Developer specializing in MERN, Next.js, Supabase, and modern cloud tools. Building scalable web apps.",
  keywords: [
    "Pravesh Verma",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Pravesh Verma" }],
  openGraph: {
    title: "Pravesh Verma | Full Stack Developer",
    description:
      "Building scalable web apps with MERN, Next.js and modern cloud tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
