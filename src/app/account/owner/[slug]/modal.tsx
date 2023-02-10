"use client";
import { FC, useState } from "react";

import Input from "@/component/input/input";

import styles from "./modal.module.scss";

interface IModal {
  userName: string;
  userSlug: string;
  userDescription?: string;
  close: (value: boolean) => void;
}

const ModalWindow: FC<IModal> = ({
  userName,
  userSlug,
  userDescription,
  close,
}) => {
  const [name, setName] = useState(userName);
  const [slug, setSlug] = useState(userSlug);
  const [description, setDescription] = useState(userDescription);

  const handleClose = () => close(false);
  const handleSave = () => {};

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Редактировать профиль</h3>
        <div className={styles.list}>
          <div className={styles.name}>
            <p>Имя</p>
            <Input
              icon={null}
              placeholder={userName}
              setValue={setName}
              type={"text"}
              value={name}
            />
          </div>
          <div className={styles.slug}>
            <p>Адрес профиля</p>
            <div className={styles.address}>
              <div className={styles.example}>
                <p>example.com/</p>
                <input
                  type="text"
                  value={slug}
                  placeholder={userSlug}
                  onChange={(e) => setSlug(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>Описание</p>
            <textarea
              value={description}
              placeholder={userDescription}
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={handleClose}>
            Отмена
          </button>
          <button className={styles.save} onClick={handleSave}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
