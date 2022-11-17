import { useEffect } from "react";
import { useRef } from "react";
import "./HeaderPrimary.scss";

const HeaderPrimary = ({ text }) => {
  const getHeight = useRef();

  return (
    <div className="header-container">
      <div className="header-primary">
        <h2 ref={getHeight} className="header-text header">
          {text}
        </h2>
        <h2 className="header-text header">{text}</h2>
      </div>
    </div>
  );
};

export default HeaderPrimary;
