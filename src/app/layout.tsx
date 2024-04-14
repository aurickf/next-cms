import { Metadata } from "next";
import { Inter } from "next/font/google";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS Mockup",
  description: "CMS mockup using NextJS and DaisyUI",
  authors: { name: "Aurick Frederick", url: "https://aurickf.com" },
  applicationName: "Content Management System",
  keywords: ["nextjs", "daisyui", "javascript", "CMS", "custom development"],
  openGraph: {
    type: "website",
    countryName: "Indonesia",
    emails: "aurick@aurickf.com",
    description: "CMS Mockup using NextJS and DaisyUI",
    url: "https://cms.aurickf.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
