import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simmer",
  description: ""
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-simmer font-articulat">{children}</body>
    </html>
  );
}
