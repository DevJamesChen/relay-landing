import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Relay — The universal content API for LLM pipelines",
  description:
    "Relay turns any website, documentation, or Notion workspace into clean, chunked Markdown with metadata. Synced in real time. Ready for RAG.",
  metadataBase: new URL("https://relay.dev"),
  openGraph: {
    title: "Relay — The universal content API for LLM pipelines",
    description:
      "Turn any website into clean, chunked Markdown your model can actually use. One API. Always in sync.",
    type: "website",
    url: "https://relay.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relay — The universal content API for LLM pipelines",
    description:
      "Turn any website into clean, chunked Markdown your model can actually use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
