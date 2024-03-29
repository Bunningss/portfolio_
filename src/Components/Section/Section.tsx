import { FC, ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export default Section;
