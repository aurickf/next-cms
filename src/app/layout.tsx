"use client";

import { Inter } from "next/font/google";
import Auth from "./components/Auth";
import Footer from "./components/Footer";

import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pathArray = pathname.split("/");

  pathArray.shift();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex bg-neutral-50 overflow-x-auto">
          <Auth />
          <div className="flex flex-col w-full">
            <div className="page-header">CMS Mockup</div>
            <div className="p-8">
              <div>{children}</div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
