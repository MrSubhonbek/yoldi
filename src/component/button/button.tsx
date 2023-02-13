import React, { FC, MouseEvent } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

interface IButton {
  active?: boolean;
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const Button: FC<IButton> = ({ text, active, onClick }) => (
  <button
    className={active ? clsx(styles.button, styles.active) : styles.button}
    onClick={onClick}
    disabled={!active}
  >
    {text}
  </button>
);

export default Button;
