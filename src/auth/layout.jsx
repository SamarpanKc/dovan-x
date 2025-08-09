import{Manrope, Sora} from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
