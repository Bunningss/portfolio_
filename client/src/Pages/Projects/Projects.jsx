import './Projects.scss';
import Project from '../../Components/Project/Project';
import { projects } from '../../staticData';

const Projects = () => {
  return (
    <div className='projects default'>
        <div className="wrapper">
          {/* {
            projects.map((project, indx) => (
              <Project key={indx} project={project} />
            ))
          } */}
        </div>
    </div>
  )
}

export default Projects