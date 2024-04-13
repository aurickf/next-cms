"use client";

import { Inter } from "next/font/google";
import { PrimeReactPTOptions, PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";
import Auth from "./components/Auth";
import Footer from "./components/Footer";

import "primeicons/primeicons.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const customTheme: PrimeReactPTOptions = {
  button: {
    root: {
      className:
        "bg-blue-200 hover:bg-blue-100 p-2 text-blue-800 hover:text-blue-800 rounded",
    },
    icon: {
      className: "px-2",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customTailWind = usePassThrough(Tailwind, customTheme);
  return (
    <html lang="en" className="scroll-smooth">
      <PrimeReactProvider value={{ pt: customTailWind }}>
        <body className={inter.className}>
          <div className="flex w-full bg-gray-50">
            <Auth />
            <div className="flex flex-col w-full">
              <div className="page-header">Welcome</div>
              <div>{children}</div>
            </div>
          </div>
          <Footer />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
