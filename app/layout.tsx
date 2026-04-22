import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Kverne",
  description: "Christopher Kverne's Portfolio Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
