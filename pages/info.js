import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Home.module.css";
export default function Info() {
  let { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("info:love")}</h1>
    </div>
  );
}
