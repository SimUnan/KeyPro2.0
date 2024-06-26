import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Key Pro",
  description: "Best keyboard store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-800 bg-neutral-200 bg-opacity-80`}>
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
          </div>  
      </body>
    </html>
  );
}
