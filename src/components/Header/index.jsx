import './Header.css';
import HeaderTitle from "../../ui/HeaderTitle";
import {profile1} from "../../assets";
import CodeBlock from '../../ui/CodeBlock';
import Facts from '../../ui/Facts';
import SocialHandles from '../../ui/SocialHandles';
import BreathCircle from '../../ui/BreathCircle';

const code = `
const developer = {
                   firstName: "Supun",
                   lastName: "Gamage",
                   aka: "Mr Supun",
                   hobby: repeat = () => {
                    //Play Cricket();
                    //Play Video Games();                        
                    //repeat();
                   }
                } 
`;                    

const Header = () => {
  return (
    <header id="header">
        <BreathCircle />
        <div className="section__wrapper">
            <div className="grid upper">
                <div className="column">
                    <HeaderTitle />
                </div>
                <div className="column">
                    <img src={profile1}className ='profile__photo' alt="" />
                </div>
            </div>
                <CodeBlock language={"javascript"} code={code} />
                <div>
                <p className="text__muted description">
                   "Bridging design and development to build complete, responsive, and scalable web solutions."
                </p>
                <Facts />
                <SocialHandles />
                </div>
            </div>
        </header>
  )
}

export default Header
