"use client";
import Header from "@/shared/header/header";
import { store } from "@/store/store";
import { Inter } from "@next/font/google";
import { Provider } from "react-redux";

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
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
