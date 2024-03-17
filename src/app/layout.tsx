import type { Metadata } from "next";
import "./globals.css";
import { ubuntu } from "@/utils/fonts";
import Navbar from "@/Components/Navbar/Navbar";
import Navigation from "@/Components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Tayef Mahmud",
  description: "Web developer and English language trainer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navigation />
        <div className="layout-wrapper">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
