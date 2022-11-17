import ListItem from "../ListItem/ListItem";
import "./Navigator.scss";
import { sidebarList } from "../../staticData";

const Navigator = () => {
  return (
    <>
      <ul className="navigator">
        {sidebarList.map((data, indx) => (
          <ListItem data={data} key={indx} />
        ))}
      </ul>
    </>
  );
};

export default Navigator;
