import React, { FC } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

interface IButton {
  active?: boolean;
  text: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ text, active, onClick }) => (
  <button
    className={active ? clsx(styles.button, styles.active) : styles.button}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
