import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomNavigationBar from "@/components/BottomNavigationBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Music Player",
  description: "A beautiful music player built with Next.js and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased pb-36 md:pb-0", // pb-36 untuk padding bottom agar tidak tertutup BottomNavigationBar di layar kecil, md:pb-0 untuk menghilangkan padding di layar besar
          inter.variable
        )}
      >
        {children}
        <BottomNavigationBar />
      </body>
    </html>
  );
}