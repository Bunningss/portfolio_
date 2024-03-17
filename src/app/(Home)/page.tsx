import styles from "./page.module.css";
import Button from "@/Components/Button/Button";
import Container from "@/Components/Container/Container";
import Headers from "@/Components/Headers/Headers";
import Section from "@/Components/Section/Section";
import TextWrapper from "@/Components/TextWrapper/TextWrapper";

export default function Home() {
  return (
    <Container>
      <Section>
        <div className={styles.contentWrapper}>
          <Headers primary="Tayef Mahmud" />
          <Headers primary="I help build the web." />
          <TextWrapper>Full stack developer / designer</TextWrapper>
        </div>
        <div className={styles.buttonWrapper}>
          <Button label="say hi" />
        </div>
      </Section>
    </Container>
  );
}
