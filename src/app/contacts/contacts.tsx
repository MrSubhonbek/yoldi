"use client";
import React, { FC } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";

import routes from "@/assets/api/routes";
import IUser from "@/assets/types";

import fetcher from "@/lib/api/fetcher";

import { useAppDispatch } from "@/store/hooks";
import { setInfoUser } from "@/store/guestSlices";

import styles from "./contacts.module.scss";

const Contacts: FC = () => {
  const { data, error, isLoading } = useSWR<IUser[]>(routes.contacts, fetcher);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Empty contacts</div>;

  const contact = data.map(({ name, email, slug, description }, index) => {
    const handleClickUser = () => {
      dispatch(setInfoUser({ name, email, slug, description }));
      router.push(`account/guest/${slug}`);
    };
    return (
      <div key={index} className={styles.users} onClick={handleClickUser}>
        <div className={styles.avatar}>{name.split("")[0].toUpperCase()}</div>
        <div className={styles.wrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
    );
  });

  return <div className={styles.list}>{contact}</div>;
};

export default Contacts;
