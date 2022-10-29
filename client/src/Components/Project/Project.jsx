import './Project.scss';
import demo from '../../img/product.png';

const Project = ({ project }) => {
  return (
    <a target='_blank' href='' className='project'>
        <div className="circle-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <img src={project.img} alt="" className='project-image' loading='lazy' />
    </a>
  )
}

export default Project