import Link from "next/link";

import EditSvg from "./edit";
import LogoutSvg from "./logout";

import styles from "./owner.module.scss";

const page = () => {
  return (
    <>
      <div className={styles.wrapper}></div>
      <main className={styles.main}>
        <div className={styles.avatar}>
          <p>D</p>
        </div>
        <div className={styles.head}>
          <p className={styles.name}>Владислав</p>
          <button className={styles.edit}>
            <EditSvg />
            <p>Редактировать</p>
          </button>
        </div>
        <div className={styles.description}>
          <div className={styles.email}>example@gmail.com</div>
          <p className={styles.text}>
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым. Это тестовый контент, который не должен нести никакого
            смысла, лишь показать наличие самого текста или продемонстрировать
            типографику в деле.
          </p>
          <Link href={"login"} className={styles.button}>
            <LogoutSvg />
            <p>Выйти</p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default page;
