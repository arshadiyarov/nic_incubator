import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beautyness | Beauty is power a smile is its sword.",
  description: "NIC Incubator test",
  icons: "/img/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} text-designBlack`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
