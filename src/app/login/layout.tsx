import { FC } from "react";

import Footer from "@/shared/footer/footer";
import Header from "@/shared/header/header";

interface ILoginLayout {
  children: React.ReactNode;
}

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default LoginLayout;
