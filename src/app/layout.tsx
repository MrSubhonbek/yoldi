"use client";
import { Provider } from "react-redux";

import { store } from "@/store/store";

import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
