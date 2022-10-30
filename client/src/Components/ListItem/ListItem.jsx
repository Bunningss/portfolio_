import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({ data, handleClick }) => {
  return (
    <>{
      data.target &&
        <a href={data.target} target='_blank' className='list-item-wrapper'>
          <li className="list-item">
            <img src={data.icon} alt="" />
          </li>
        </a>
    }
    {
      !data.target &&
        <Link to={data.href ? data.href : ''} className='list-item-wrapper'>
            <li className="list-item" onClick={handleClick}>
              {
                data.title && <h4>{data.title}</h4>
              }
              {
                data.icon && <img src={data.icon} alt={data.name} />
              }
            </li>
        </Link>
    }
    </>
  )
}

export default ListItem