import { FC } from "react";
import styles from "./Projects.module.css";
import Container from "@/Components/Container/Container";
import Section from "@/Components/Section/Section";
import TimelineItem from "@/Components/TimelineItem/TimelineItem";
import { projects } from "@/utils/static";

const Projects: FC = () => {
  return (
    <Container>
      <div className={styles.timelineWrapper}>
        {projects.map((project, indx) => (
          <TimelineItem key={indx} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
