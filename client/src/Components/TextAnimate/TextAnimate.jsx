import Letter from "../Letter/Letter";
import "./TextAnimate.scss";

const TextAnimate = ({ text }) => {
  return (
    <div className="textAnimate">
      <h1 aria-label={text}>
        {text.split("").map((letter, indx) => (
          <Letter letter={letter} key={indx} />
        ))}
      </h1>
    </div>
  );
};

export default TextAnimate;
