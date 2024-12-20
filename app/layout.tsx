import { AppContextProvider } from "@/context/AppContext";
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
  title: "Connect 4  game",
  description: "A connect 4 game with AI implemented using minimax algorithm",
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
          "bg-cLight font-space-grotesk antialiase",
          spaceGrotesk.variable
        )}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
