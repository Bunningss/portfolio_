import "./PrimaryButton.scss";
import { Link } from "react-router-dom";

const PrimaryButton = ({ handleClick, text, href }) => {
  return (
    <button onClick={handleClick} className="btnPrimary">
      {text}
    </button>
  );
};

export default PrimaryButton;
