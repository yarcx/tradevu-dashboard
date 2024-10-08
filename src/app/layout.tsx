import type { Metadata } from "next";
import { Rubik } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({ subsets: ["latin"] });
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

export const metadata: Metadata = {
  title: "Tradevu",
  description: "Tradevu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
