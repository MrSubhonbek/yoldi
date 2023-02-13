"use client";
import { Provider } from "react-redux";
import { FC, ReactNode } from "react";

import { store } from "@/store/store";

import "./globals.scss";

interface IRootLayout {
  children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};
export default RootLayout;
