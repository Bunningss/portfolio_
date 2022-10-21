import './Navbar.scss';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { navbarData } from '../../staticData';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='logoContainer' to='/'>
        <h1 className="logo">M</h1>
      </Link>
      <ul className="navbarList">
        {
          navbarData.map((data) => (
            <ListItem key={data.id} data={data}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar