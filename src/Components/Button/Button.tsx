import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
