"use client";
import { FC, ReactNode } from "react";

import { useAppSelector } from "@/store/hooks";

import Header from "@/shared/header/header";

interface IContactsPage {
  children: ReactNode;
}

const ContactsPage: FC<IContactsPage> = ({ children }) => {
  const { name, value } = useAppSelector((state) => state.apiKey);

  return (
    <>
      <Header login={!!value} name={name} />
      {children}
    </>
  );
};
export default ContactsPage;
