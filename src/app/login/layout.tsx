import { FC } from "react";

import Footer from "@/shared/footer/footer";

interface ILoginLayout {
  children: React.ReactNode;
}

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
};
export default LoginLayout;
