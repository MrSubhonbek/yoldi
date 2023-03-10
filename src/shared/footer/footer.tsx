import Link from "next/link";
import { FC } from "react";

import styles from "./footer.module.scss";

interface IFooter {
  register?: boolean;
}

const Footer: FC<IFooter> = ({ register }) => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>
        {register ? (
          <>
            Уже есть аккаунт? <Link href={"login"}>Войти</Link>
          </>
        ) : (
          <>
            Еще нет аккаунта? <Link href={"register"}>Зарегистрироваться</Link>
          </>
        )}
      </h3>
    </footer>
  );
};

export default Footer;
