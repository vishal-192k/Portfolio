import React,{useState} from 'react'
import './Hero.css'
import profile_img from "../../assets/profile-imgg.png"
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";

const Hero = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' />
        <h4> <span> I'm Vishal Khile </span>frontend developer</h4>
        <p>As a skilled front-end developer from India, I specialize in crafting responsive, user-friendly web interfaces.I strive to deliver exceptional digital experiences..</p>
        <div className="hero-action">
             <div className="hero-resume">Resume</div>
             <div className="hero-connect"><ScrollLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("contact")}
          > Connect</ScrollLink></div>
        </div>
    </div>
  )
}

export default Hero
