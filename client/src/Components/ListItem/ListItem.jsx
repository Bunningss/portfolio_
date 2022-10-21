import { Link } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ data, handleClick }) => {

  return (
    <Link to={data.href ? data.href : ''}>
        <li className="listItem" onClick={handleClick}>
          {
            data.title && <h4>{data.title}</h4>
          }
          {
            data.icon && <img src={data.icon} alt={data.name} />
          }
        </li>
    </Link>
  )
}

export default ListItem