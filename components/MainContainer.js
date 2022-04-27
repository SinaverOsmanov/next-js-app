import React from "react";
import A from "./A";
import Head from "next/head";
import styles from "../styles/navbar.module.scss";

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <A href="/">Главная</A>
        <A href="/users">Пользователи</A>
      </div>
      <div>{children}</div>
    </>
  );
}
