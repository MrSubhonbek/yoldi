import { FC } from "react";

import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      {children}
      <Footer register />
    </section>
  );
}
