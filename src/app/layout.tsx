import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Bizfinx79 | Rise With Us",
  description: "Your Trusted Partner in Accounting, Tax, and CFO Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[13px] md:text-[16px] overflow-x-hidden">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-698C7X01E2"></script>
        <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-698C7X01E2');
        `,
      }}
    />
      </head>
      <body className="overflow-x-hidden">
        <BackToTop />
        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="">{children}</div>
        <div className="bg-foreground">
          <Footer />
        </div>
      </body>
    </html>
  );
}
