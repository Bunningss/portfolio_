import { FC } from "react";
import styles from "./HeroText.module.css";
import { roboto } from "@/utils/fonts";

interface HeroTextProps {}

const HeroText: FC<HeroTextProps> = () => {
  return (
    <h2 className={`${styles.heroText} ${roboto.className}`}>
      Tayef <span>Mahmud</span> <br /> I help build the web
    </h2>
  );
};

export default HeroText;
