import Head from "next/head";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
export default function Home() {
  let { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{t("global:hello")}</div>
    </div>
  );
}
