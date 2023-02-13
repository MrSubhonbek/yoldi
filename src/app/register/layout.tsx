import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer register />
    </>
  );
}
