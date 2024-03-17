import Link from "next/link";
import Container from "../Container/Container";
import Section from "../Section/Section";
import styles from "./Navbar.module.css";
import { FC } from "react";
import Image from "next/image";

//images
import fb from "@/images/fb.png";
import fiv from "@/images/fiv.png";
import git from "@/images/git.png";
import upw from "@/images/upw.png";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <Section>
          <div className={styles.socials}>
            <Link
              href="https://www.fiverr.com/tayef47?source=gig_page"
              target="_blank"
            >
              <Image className={styles.socialIcon} src={fiv} alt="" />
            </Link>
            <Link href="https://github.com/Bunningss" target="_blank">
              <Image className={styles.socialIcon} src={git} alt="" />
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~01c2e5116b1ee78ab7?mp_source=share"
              target="_blank"
            >
              <Image className={styles.socialIcon} src={upw} alt="" />
            </Link>
            <Link href="https://www.facebook.com/ovi.mahmud83/" target="_blank">
              <Image className={styles.socialIcon} src={fb} alt="" />
            </Link>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default Navbar;
