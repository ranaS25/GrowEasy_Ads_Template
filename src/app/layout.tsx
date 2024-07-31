import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "GrowEasyAds Creation",
  description: "GrowEasy Intern Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
