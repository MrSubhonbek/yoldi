import { FC } from "react";

import Header from "@/shared/header/header";

interface IOwnerLayout {
  children: React.ReactNode;
}

const OwnerLayout: FC<IOwnerLayout> = ({ children }) => {
  return (
    <section>
      <Header login />
      {children}
    </section>
  );
};
export default OwnerLayout;
