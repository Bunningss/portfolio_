import './Project.scss';

const Project = ({ project }) => {
  return (
    <a target='_blank' href={project.link} className='project'>
        <div className="circle-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <img src={project.image} alt="" className='project-image' loading='lazy' />
    </a>
  )
}

export default Project