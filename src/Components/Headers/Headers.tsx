import { FC } from "react";
import styles from "./Headers.module.css";

interface HeaderProps {
  primary: string;
}

const Headers: FC<HeaderProps> = ({ primary }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerPrimary}>
        <h2 className={styles.headerText}>{primary}</h2>
        <h2 className={styles.headerText}>{primary}</h2>
      </div>
    </div>
  );
};

export default Headers;
