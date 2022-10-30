import './Navbar.scss';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { extData } from '../../staticData';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'>
          <h2 className='logo-main'>m</h2>
          <h2 className='logo-main'>m</h2>
        </Link>
      </div>
      <div className="links">
        <ul className="list">
          {
            extData.map((item, indx) => (
              <ListItem data={item} key={indx}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar