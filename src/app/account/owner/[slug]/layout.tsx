"use client";
import Header from "@/shared/header/header";
import { useAppSelector } from "@/store/hooks";

export default function Page({ children }: { children: React.ReactNode }) {
  const { name, value } = useAppSelector((state) => state.apiKey);

  return (
    <>
      <Header login={!!value} name={name} />

      {children}
    </>
  );
}
