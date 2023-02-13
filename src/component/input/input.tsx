import { ChangeEvent, FC, ReactNode } from "react";

import styles from "./input.module.scss";

interface IInput {
  type: string;
  placeholder: string;
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
  setValue,
  value,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div className={styles.container}>
      {icon}
      <input
        type={type}
        value={value}
        required
        placeholder={placeholder}
        onChange={handleChange}
      />
      {eye}
    </div>
  );
};

export default Input;
