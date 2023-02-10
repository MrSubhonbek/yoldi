"use client";
import { FC, MouseEvent, useState } from "react";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

import Button from "@/component/button/button";
import Input from "@/component/input/input";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import routes from "@/assets/api/routes";
import fetcher from "@/assets/api/fetcher";

import styles from "./login.module.scss";

const Login: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { mutate, cache } = useSWRConfig();

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    mutate(
      routes.login,
      fetcher(routes.login, {
        method: "POST",
        headers: {
          "X-API-KEY": "",
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
      })
    );
    if (cache.get(routes.login)?.data.value) {
      mutate(
        routes.profile,
        fetcher(routes.profile, {
          method: "GET",
          headers: {
            "X-API-KEY": `${cache.get(routes.login)?.data.value}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      );
      router.push(`/account/owner/${cache.get(routes.profile)?.data.slug}`);
    } else setError(cache.get(routes.login)?.data.message);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
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
          <h2>{error}</h2>
          <Button
            text="Войти"
            onClick={handleSubmit}
            active={!!email && !!password}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
