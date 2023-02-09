"use client";
import { FC, MouseEvent, useState } from "react";
import useSwr, { useSWRConfig } from "swr";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import UserSvg from "@/assets/svg/user";

import Input from "@/component/input/input";
import Button from "@/component/button/button";
import Footer from "@/shared/footer/footer";

import fetcher from "@/assets/api/fetcher";

import styles from "./register.module.scss";

const Register: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useSWRConfig();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    mutate(
      "https://frontend-test-api.yoldi.agency/api/auth/sign-up",
      fetcher("https://frontend-test-api.yoldi.agency/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({ name, password, email }),
      })
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.register}>
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
          <Button text="Создать аккаунт" onClick={handleSubmit} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
