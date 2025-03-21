import type { Metadata } from "next";
import { Raleway, Lexend_Deca, Racing_Sans_One } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const raleway = Raleway({
  subsets: ["vietnamese", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: 'swap',
});

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend-deca",
  display: 'swap',
});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"], // Racing Sans One only has a weight of 400
  variable: "--font-racing-sans-one",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${lexendDeca.variable} ${racingSansOne.variable} font-raleway`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
