import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mavu&Self",
  description: "This is a container for self verification link for Mavu.",
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
