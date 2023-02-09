"use client";
import { FC, MouseEvent, useState } from "react";
import { useSWRConfig } from "swr";

import Button from "@/component/button/button";
import Input from "@/component/input/input";
import Footer from "@/shared/footer/footer";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import fetcher from "@/assets/api/fetcher";
import validEmail from "@/assets/api/validValue";

import styles from "./login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const mutate = useSWRConfig();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (password.length < 3) setErrorPassword(true);
    else setErrorPassword(false);
    if (!email.match(validEmail)) setErrorEmail(true);
    else setErrorEmail(false);
    if (!errorEmail && !errorPassword) {
      mutate.mutate(
        "https://frontend-test-api.yoldi.agency/api/auth/login",
        fetcher("https://frontend-test-api.yoldi.agency/api/auth/login", {
          method: "POST",
          headers: {
            "X-API-KEY": "",
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, email }),
        })
      );
      if (
        !mutate.cache.get(
          "https://frontend-test-api.yoldi.agency/api/auth/login"
        )?.data.value
      ) {
        setErrorEmail(true), setErrorPassword(true);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <h3 className={styles.title}>Вход в Yoldi Agency</h3>
          <Input
            value={email}
            error={errorEmail}
            setValue={setEmail}
            icon={<EmailSvg />}
            placeholder="E-mail"
            type="email"
          />
          <Input
            value={password}
            setValue={setPassword}
            error={errorPassword}
            icon={<KeySvg />}
            placeholder="Пароль"
            type="password"
            eye={<EyeSvg />}
          />
          <Button
            text="Войти"
            onClick={handleSubmit}
            active={!!email && !!password}
          />
        </div>
      </div>
      <Footer register />
    </>
  );
};

export default Login;
