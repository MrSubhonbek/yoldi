"use client";
import { FC, ReactNode } from "react";

import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

import { useAppSelector } from "@/store/hooks";

interface ILoginLayout {
  children: ReactNode;
}

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
  const { name, value } = useAppSelector((state) => state.apiKey);

  return (
    <>
      <Header login={!!value} name={name} />
      {children}
      <Footer />
    </>
  );
};
export default LoginLayout;
