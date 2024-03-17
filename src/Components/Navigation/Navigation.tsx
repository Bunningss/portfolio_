import { FC } from "react";
import styles from "./Navigation.module.css";
import Container from "../Container/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/M.png";

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Container>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.col}>
          <Link href="/" className={styles.links}>
            home
          </Link>
          <Link href="/about" className={styles.links}>
            about
          </Link>
          <Link href="/projects" className={styles.links}>
            projects
          </Link>
          {/* <Link href="/contact" className={styles.links}>
            contact
          </Link> */}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
