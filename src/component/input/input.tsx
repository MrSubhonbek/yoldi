import clsx from "clsx";
import { ChangeEvent, FC, ReactNode } from "react";

import styles from "./input.module.scss";

interface IInput {
  type: string;
  placeholder: string;
  error?: boolean;
  value: string;
  setValue: (value: string) => void;
  icon: ReactNode;
  eye?: ReactNode;
}

const Input: FC<IInput> = ({
  type,
  icon,
  placeholder,
  eye,
  error,
  setValue,
  value,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div
      className={
        error ? clsx(styles.error, styles.container) : styles.container
      }
    >
      {icon}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {eye}
    </div>
  );
};

export default Input;
