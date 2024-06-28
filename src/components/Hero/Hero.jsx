import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile-imgg.png"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' />
        <h4> <span> I'm Vishal Khile </span>frontend developer</h4>
        <p>As a skilled front-end developer from India, I specialize in crafting responsive, user-friendly web interfaces.I strive to deliver exceptional digital experiences..</p>
        <div className="hero-action">
             <div className="hero-resume">Resume</div>
             <div className="hero-connect">Connect</div>
        </div>
    </div>
  )
}

export default Hero
