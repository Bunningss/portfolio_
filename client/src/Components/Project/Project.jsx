import './Project.scss';
import { Link } from 'react-router-dom';

const Project = () => {

  return (
    <div className="project">
      <Link to='/home'>
        <img src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="project-img" />
        <div className="project-title-container">
          <div className="project-title">
            <h2 className="project-title-text header">Pocobun</h2>
            <h2 className="project-title-text header">Pocobun</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Project