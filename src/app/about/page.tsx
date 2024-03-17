import styles from "./About.module.css";
import Container from "@/Components/Container/Container";
import Headers from "@/Components/Headers/Headers";
import Section from "@/Components/Section/Section";
import Skill from "@/Components/Skill/Skills";
import TextWrapper from "@/Components/TextWrapper/TextWrapper";
import { skills } from "@/utils/static";
import { title } from "process";

export default function About() {
  return (
    <Container>
      <Section>
        <div className={styles.about}>
          <div className={styles.col}>
            <Headers primary="About me" />
            <TextWrapper>
              A computer enthusiast and motivated individual with full-stack web
              development skills and a fascination with data analysis. I am
              flexible, reliable and possess excellent time-keeping skills.
            </TextWrapper>
          </div>
          <div className={styles.col}>
            <Headers primary="Expertises" />
            <div className={styles.skills}>
              {skills.map((skill, indx) => (
                <Skill key={indx} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
