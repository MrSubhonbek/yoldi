import React, { FC, ReactNode } from "react";

import styles from "./input.module.scss";

interface IInput {
  type: string;
  placeholder: string;
  icon: ReactNode;
  eye?: ReactNode;
}

const Input: FC<IInput> = ({ type, icon, placeholder, eye }) => {
  return (
    <div className={styles.container}>
      {icon}
      <input type={type} placeholder={placeholder} />
      {eye}
    </div>
  );
};

export default Input;
