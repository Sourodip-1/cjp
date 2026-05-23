import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cockroach Janta Party — Voice of the Lazy & Unemployed",
  description:
    "A political party for the people the system forgot to count. Five demands. Zero sponsors. One large, stubborn swarm. Est. 2026.",
  keywords: ["cockroach janta party", "CJP", "political party", "lazy", "unemployed"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&family=Oswald:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
