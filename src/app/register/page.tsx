"use client";
import { FC, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { setKey } from "@/store/apiKeySlice";
import { useAppDispatch } from "@/store/hooks";

import { getKeyRegister, getProfile } from "@/lib/api/auth";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import UserSvg from "@/assets/svg/user";
import routes from "@/assets/api/routes";

import Input from "@/component/input/input";
import Button from "@/component/button/button";

import styles from "./register.module.scss";

const Register: FC = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = await getKeyRegister({ email, password, name }, setError);
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
