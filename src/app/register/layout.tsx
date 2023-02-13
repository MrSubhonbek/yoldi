import Footer from "@/shared/footer/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Footer register />
    </section>
  );
}
