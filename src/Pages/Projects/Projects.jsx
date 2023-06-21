import "./Projects.scss";
import Project from "../../Components/Project/Project";
import { projects } from "../../staticData";

const Projects = () => {
  return (
    <div className="projects default">
      <div className="wrapper">
        {projects.map((proj, indx) => (
          <Project project={proj} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
