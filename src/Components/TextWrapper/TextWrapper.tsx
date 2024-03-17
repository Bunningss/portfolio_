import styles from "./TextWrapper.module.css";
import React, { FC, ReactNode } from "react";

interface TextWrapperProps {
  children: ReactNode;
}

const TextWrapper: FC<TextWrapperProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default TextWrapper;
