// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const robotoMedium = localFont({
  src: "/fonts/Roboto-Medium.ttf", 
  variable: "--font-roboto-medium", 
  weight: "500",
});

export const metadata: Metadata = {
  title: "Swensen's",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMedium.variable} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
