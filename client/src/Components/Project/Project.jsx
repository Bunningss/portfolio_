import './Project.scss';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return (
    <div className="project">
      <Link to=':id'>
        <img src={project.img} alt="" className="project-img" />
        <div className="project-title-container">
          <div className="project-title">
            <h2 className="project-title-text header">{project.title}</h2>
            <h2 className="project-title-text header">{project.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Project