import "./TextZone.scss";
import { Link } from "react-router-dom";

const TextZone = ({ text, href, linkText }) => {
  return (
    <>
      <p className="textzone-text">{text}</p>
      <Link className="textzone-link" to={href ? href : ""}>
        {linkText}
      </Link>
    </>
  );
};

export default TextZone;
