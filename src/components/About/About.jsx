import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_imgg from '../../assets/profile-imgg.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_imgg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a skilled front-end developer from India, I specialize in crafting responsive, user-friendly web interfaces.</p>
                    <p>I strive to deliver exceptional digital experiences..</p>
                </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React Js</p> <hr style={{width:"58%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"65%"}}/></div>
                        <div className="about-skill"><p>Java</p> <hr style={{width:"70%"}}/></div>
                    </div>
                
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
