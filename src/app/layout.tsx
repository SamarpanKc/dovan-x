import type { Metadata } from "next";
import{Manrope, Sora} from 'next/font/google';
import "./globals.css";
import Navbar from "./components/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SkillMatch",
  description: "Find Projects That Fit Your skills",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
      <div className="sticky top-0 z-50 backdrop-blur-xs">
        <Navbar />
      </div>
      {children}
      </body>
    </html>
  );
}
