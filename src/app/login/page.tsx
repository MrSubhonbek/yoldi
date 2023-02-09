"use client";
import { FC, useState } from "react";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import Button from "@/component/button/button";
import Input from "@/component/input/input";
import Footer from "@/shared/footer/footer";

import styles from "./login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} action="submit">
          <h3 className={styles.title}>Вход в Yoldi Agency</h3>
          <Input
            value={email}
            setValue={setEmail}
            icon={<EmailSvg />}
            placeholder="E-mail"
            type="email"
          />
          <Input
            value={password}
            setValue={setPassword}
            icon={<KeySvg />}
            placeholder="Пароль"
            type="password"
            eye={<EyeSvg />}
          />
          <Button text="Войти" />
        </form>
      </div>
      <Footer register />
    </>
  );
};

export default Login;
