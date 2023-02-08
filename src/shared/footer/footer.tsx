import { FC } from "react";

import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>
        Уже есть аккаунт? <strong>Войти</strong>
      </h3>
    </footer>
  );
};

export default Footer;
