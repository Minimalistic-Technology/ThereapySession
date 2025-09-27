"use client"
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Routes where navbar & footer should be hidden
  const hideLayout = ["/Login", "/Signup"].includes(pathname);

  return (
    <html >
      <body>
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
