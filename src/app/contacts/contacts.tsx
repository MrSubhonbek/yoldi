"use client";
import React, { FC } from "react";
import useSWR from "swr";

import routes from "@/assets/api/routes";
import IUser from "@/assets/types";

import fetcher from "@/lib/api/fetcher";

import styles from "./contacts.module.scss";

const Contacts: FC = () => {
  const { data, error, isLoading } = useSWR<IUser[]>(routes.contacts, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Empty contacts</div>;
  const contact = data.map(({ name, email }, index) => (
    <div key={index} className={styles.users}>
      <div className={styles.avatar}>{name.split("")[0].toUpperCase()}</div>
      <div className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  ));

  return <div className={styles.list}>{contact}</div>;
};

export default Contacts;
