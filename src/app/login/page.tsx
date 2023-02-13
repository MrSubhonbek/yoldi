"use client";
import { FC, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/component/button/button";
import Input from "@/component/input/input";

import { useAppDispatch } from "@/store/hooks";
import { setKey } from "@/store/apiKeySlice";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import routes from "@/assets/api/routes";

import { getKeyLogin, getProfile } from "@/lib/api/auth";

import styles from "./login.module.scss";

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = await getKeyLogin({ email, password }, setError);
    console.log(value);
    console.log(error);
    if (value) {
      dispatch(setKey(value));
      const { slug } = await getProfile(routes.profile, value);
      router.push(`/account/owner/${slug}`);
    }
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
