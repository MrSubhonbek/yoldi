"use client";
import { FC, MouseEvent, useState } from "react";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import UserSvg from "@/assets/svg/user";
import routes from "@/assets/api/routes";
import fetcher from "@/assets/api/fetcher";

import Input from "@/component/input/input";
import Button from "@/component/button/button";

import styles from "./register.module.scss";

const Register: FC = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { mutate, cache } = useSWRConfig();

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    mutate(
      routes.register,
      fetcher(routes.register, {
        method: "POST",
        headers: {
          "X-API-KEY": "",
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email, name }),
      })
    );
    if (cache.get(routes.register)?.data.value) {
      mutate(
        routes.profile,
        fetcher(routes.profile, {
          method: "GET",
          headers: {
            "X-API-KEY": `${cache.get(routes.register)?.data.value}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      );
      router.push(`/account/owner/${cache.get(routes.profile)?.data.slug}`);
    } else setError(cache.get(routes.register)?.data.message);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.register}>
          <h3 className={styles.title}>Регистрация в Yoldi Agency</h3>
          <Input
            value={name}
            setValue={setName}
            icon={<UserSvg />}
            placeholder="Имя"
            type="text"
          />
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
            text="Создать аккаунт"
            onClick={handleSubmit}
            active={!!email && !!password && !!name}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
