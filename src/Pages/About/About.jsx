import "./About.scss";
import TextAnimate from "../../Components/TextAnimate/TextAnimate";
import TextZone from "../../Components/TextZone/TextZone";
import { aboutText, expertiseData } from "../../staticData";
import Chart from "../../Components/Chart/Chart";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import Container from "../../Components/Container/Container";

const About = () => {
  const text = "Myself";
  const expertiseText = "Expertises";
  return (
    <Container>
      <div className="about">
        <div className="aboutLeft">
          {/* <TextAnimate text={text}/> */}
          <HeaderPrimary text={text} />
          <TextZone
            text={aboutText}
            href={"/contact"}
            linkText={"Let's make something amazing"}
          />
        </div>
        <div className="aboutRight">
          {/* <TextAnimate text={expertiseText}/> */}
          <HeaderPrimary text={expertiseText} />
          {expertiseData.map((data) => (
            <Chart data={data} key={data.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
