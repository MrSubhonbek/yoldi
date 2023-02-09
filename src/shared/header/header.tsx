import { FC } from "react";

import Logo from "./logo";

import styles from "./header.module.scss";
import Link from "next/link";

interface IHeader {
  login?: boolean;
  name?: string;
}

const Header: FC<IHeader> = ({ login, name }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <p className={styles.title}>
        Разрабатываем и запускаем сложные веб проекты
      </p>
      {login ? (
        <div className={styles.user}>
          <span>{name}</span>
          <div>{name?.split("")[0].toUpperCase()}</div>
        </div>
      ) : (
        <Link href={"login"} className={styles.login}>
          Войти
        </Link>
      )}
    </header>
  );
};

export default Header;
