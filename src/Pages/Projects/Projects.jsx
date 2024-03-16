import "./Projects.scss";
import Project from "../../Components/Project/Project";
import { projects } from "../../staticData";
import TimelineItem from "../../Components/TimelineItem/TimelineItem";
import Container from "../../Components/Container/Container";

const Projects = () => {
  return (
    <Container>
      <div className="projects">
        <div className="timelineWrapper">
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
