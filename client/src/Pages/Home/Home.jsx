import './Home.scss';
import { useNavigate } from 'react-router';
import Figure from '../../Components/Figure/Figure';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import TextAnimate from '../../Components/TextAnimate/TextAnimate';
import TextZone from '../../Components/TextZone/TextZone';

const Home = () => {
  const navigate = useNavigate();
  const text = `Hello\nI'm Mahmud,\nWeb Developer`;
  const textZone = "web developer / designer";

  const handleClick = () => {
    navigate('/contact')
  };
  
  return (
    <div className='home default'>
      <div className="textArea">
        <TextAnimate text={text}/>
        <TextZone text={textZone}/>
        <PrimaryButton handleClick={handleClick} text={"Contact Me!"}/>
      </div>
      <Figure/>
    </div>
  )
}

export default Home