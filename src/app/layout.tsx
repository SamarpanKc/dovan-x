import type { Metadata } from "next";
import{Manrope, Sora} from 'next/font/google';
import "./globals.css";
import Navbar from "./components/navbar";
import Chatbot from "./chatbot/page";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DovanX",
  description: "Where Skills Meet Opportunities—AI",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`} >
      <div className="sticky top-0 z-50 bg-background">
        <Navbar />
      </div>
      <div className=" sticky top-96" style={{width:'60px', left:'94vw', top:'86vh'}} >
        <Chatbot />
      </div>
      {children}
      </body>
    </html>
  );
}
