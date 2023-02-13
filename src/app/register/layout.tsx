"use client";
import { FC, ReactNode } from "react";

import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

import { useAppSelector } from "@/store/hooks";

interface IRegisterLayout {
  children: ReactNode;
}

const RegisterLayout: FC<IRegisterLayout> = ({ children }) => {
  const { name, value } = useAppSelector((state) => state.apiKey);

  return (
    <>
      <Header login={!!value} name={name} />
      {children}
      <Footer register />
    </>
  );
};
export default RegisterLayout;
