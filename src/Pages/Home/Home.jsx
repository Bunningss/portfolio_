import "./Home.scss";
import { useNavigate } from "react-router";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import TextAnimate from "../../Components/TextAnimate/TextAnimate";
import TextZone from "../../Components/TextZone/TextZone";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";

const Home = () => {
  const navigate = useNavigate();
  const text = `Tayef Mahmud\nI help build the web.`;
  const textZone = "Full stack developer / designer";

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="home default">
      <div className="textArea">
        {/* <TextAnimate text={text}/> */}
        <HeaderPrimary text={"Tayef Mahmud"} />
        <HeaderPrimary text={"I help build the web."} />
        <TextZone text={textZone} />
        <PrimaryButton handleClick={handleClick} text={"Say Hi"} />
      </div>
    </div>
  );
};

export default Home;
