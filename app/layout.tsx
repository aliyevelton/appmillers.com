import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppMillers | AI Agents, Automation & Vibe Coding",
  description:
    "Join the AppMillers Skool community for AI Agents, Automation & Vibe Coding to learn faster, build real workflows, and stay accountable with other builders.",
  icons: {
    icon: "./appmillers-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
