import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "I hate CS",
  description: "Fuck web dev and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-space-grotesk antialiase",
          spaceGrotesk.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
