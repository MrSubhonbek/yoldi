import React from "react";

import Contacts from "./contacts";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Список аккаунтов</h3>
        <Contacts />
      </div>
    </main>
  );
};

export default Home;
