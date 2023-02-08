import React, { FC } from "react";

import EmailSvg from "@/assets/svg/email";
import EyeSvg from "@/assets/svg/eye";
import KeySvg from "@/assets/svg/key";
import UserSvg from "@/assets/svg/user";

import Input from "@/component/input/input";
import Button from "@/component/button/button";

import styles from "./register.module.scss";

const Register: FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.register}>
        <h3 className={styles.title}>Регистрация в Yoldi Agency</h3>
        <Input icon={<UserSvg />} placeholder="Имя" type="text" />
        <Input icon={<EmailSvg />} placeholder="E-mail" type="email" />
        <Input
          icon={<KeySvg />}
          placeholder="Пароль"
          type="password"
          eye={<EyeSvg />}
        />
        <Button text="Создать аккаунт" />
      </form>
    </div>
  );
};

export default Register;
