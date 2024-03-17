import styles from "./Container.module.css";
import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>{children}</div>
    </div>
  );
};

export default Container;
