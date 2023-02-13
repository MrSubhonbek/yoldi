"use client";
import useSWR from "swr";

import fetcher from "@/lib/api/fetcher";

import routes from "@/assets/api/routes";
import IUser from "@/assets/types";

import styles from "./guest.module.scss";

const GuestPage = ({ params }: { params: { slug: string } }) => {
  const { data: user } = useSWR<IUser>(`${routes.user}${params.slug}`, fetcher);

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
        </div>
        <div className={styles.description}>
          <div className={styles.email}>{user.email}</div>
          <p className={styles.text}>{user.description}</p>
        </div>
      </main>
    </>
  );
};

export default GuestPage;
