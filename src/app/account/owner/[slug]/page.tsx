"use client";
import Link from "next/link";
import useSWR from "swr";
import { useState } from "react";

import ModalWindow from "./modal";

import fetcher from "@/assets/api/fetcher";
import routes from "@/assets/api/routes";
import IUser from "@/assets/types";

import EditSvg from "./edit";
import LogoutSvg from "./logout";

import styles from "./owner.module.scss";

const page = ({ params }: { params: { slug: string } }) => {
  const [showModal, setShowModal] = useState(false);
  const { data: user } = useSWR<IUser>(`${routes.user}${params.slug}`, fetcher);

  const handleOpenModal = () => setShowModal(true);

  if (!user) return <h1>No found user:(</h1>;

  return (
    <>
      <div className={styles.wrapper}></div>
      <main className={styles.main}>
        <div className={styles.avatar}>
          <p>{user?.name?.split("")[0].toUpperCase()}</p>
        </div>
        <div className={styles.head}>
          <p className={styles.name}>{user.name}</p>
          <button className={styles.edit} onClick={handleOpenModal}>
            <EditSvg />
            <p>Редактировать</p>
          </button>
        </div>
        <div className={styles.description}>
          <div className={styles.email}>{user.email}</div>
          <p className={styles.text}>{user.description}</p>
          <Link href={"login"} className={styles.button}>
            <LogoutSvg />
            <p>Выйти</p>
          </Link>
        </div>
      </main>
      {showModal && (
        <ModalWindow
          close={setShowModal}
          userName={user.name}
          userSlug={user.slug}
          userDescription={user.description}
        />
      )}
    </>
  );
};

export default page;
