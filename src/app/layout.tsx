import { Inter } from "@next/font/google";

import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
