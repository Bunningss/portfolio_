import { extData, sidebarList } from "../../staticData";
import ListItem from "../ListItem/ListItem";
import "./Sidebar.scss";

const Sidebar = ({ active, setActive }) => {
  const handleClick = () => {
    setActive(false);
  };

  return (
    <div
      className={active ? "sidebar visible" : "sidebar"}
      onClick={handleClick}
    >
      <ul className="sidebar-list">
        {sidebarList.map((data, indx) => (
          <ListItem data={data} key={indx} handleClick={handleClick} />
        ))}
        <ul className="social-list">
          {extData.map((data, indx) => (
            <ListItem data={data} key={indx} />
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
