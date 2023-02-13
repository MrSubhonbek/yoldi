"use client";
import useSWR from "swr";

import Header from "@/shared/header/header";

import routes from "@/assets/api/routes";
import fetcher from "@/lib/api/fetcher";
import IUser from "@/assets/types";

export default function Page({
  children,
  params,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const { data: user } = useSWR<IUser>(`${routes.user}${params.slug}`, fetcher);
  return (
    <section>
      <Header login name={user?.name} />
      {children}
    </section>
  );
}
