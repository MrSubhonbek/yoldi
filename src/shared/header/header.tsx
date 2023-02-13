"use client";
import { FC } from "react";
import Link from "next/link";

import { useAppSelector } from "@/store/hooks";

import Logo from "./logo";

import styles from "./header.module.scss";

interface IHeader {
  login?: boolean;
  name?: string;
}

const Header: FC<IHeader> = ({ login, name }) => {
  const { slug } = useAppSelector((state) => state.apiKey);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"contacts"}>
          <Logo />
        </Link>
        <p className={styles.title}>
          Разрабатываем и запускаем сложные веб проекты
        </p>
      </div>
      {login ? (
        <Link href={`/account/owner/${slug}`} className={styles.user}>
          <span>{name}</span>
          <div>{name?.split("")[0].toUpperCase()}</div>
        </Link>
      ) : (
        <Link href={"login"} className={styles.login}>
          Войти
        </Link>
      )}
    </header>
  );
};

export default Header;
