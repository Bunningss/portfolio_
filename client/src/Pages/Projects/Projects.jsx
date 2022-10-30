import './Projects.scss';
import Project from '../../Components/Project/Project';
import { projects } from '../../staticData';
import { useEffect } from 'react';

const Projects = () => {

  return (
    <div className="projects default">
      <div className="wrapper">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
}

export default Projects