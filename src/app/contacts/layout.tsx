import Header from "@/shared/header/header";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
