"use client";
import routes from "@/assets/api/routes";
import { getProfile } from "@/lib/api/auth";
import Header from "@/shared/header/header";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  const { name, value } = useAppSelector((state) => state.apiKey);

  return (
    <>
      <Header login={!!value} name={name} />
      {children}
    </>
  );
}
