import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Logo from "./logo";

import styles from "./header.module.scss";

interface IHeader {
  login?: boolean;
  name?: string;
}

const Header: FC<IHeader> = ({ login, name }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <p className={styles.title}>
          Разрабатываем и запускаем сложные веб проекты
        </p>
      </div>
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
