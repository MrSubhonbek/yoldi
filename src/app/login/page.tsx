import React from "react";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import Button from "@/component/button/button";
import Input from "@/component/input/input";

import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="submit">
        <h3 className={styles.title}>Вход в Yoldi Agency</h3>
        <Input icon={<EmailSvg />} placeholder="E-mail" type="email" />
        <Input
          icon={<KeySvg />}
          placeholder="Пароль"
          type="password"
          eye={<EyeSvg />}
        />
        <Button text="Войти" />
      </form>
    </div>
  );
};

export default Login;
