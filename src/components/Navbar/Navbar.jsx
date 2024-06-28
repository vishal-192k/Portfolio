import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    // <div className="navbar">
    //     <img  src={logo} alt="" />
    //     <ul className="nav-menu">
    //         <li><AnchorLink className="anchor-link"  href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
    //         <li><AnchorLink className="anchor-link" offset={50} href='#about' ><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
    //         <li><AnchorLink className="anchor-link" offset={50} href='#mywork' ><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline}/>:<></>}</li>
    //         <li><AnchorLink className="anchor-link" offset={50} href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
    //     </ul>
    //     <div className="nav-contact">Connect</div>
    // </div>

    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <ScrollLink
            className="anchor-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </ScrollLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <ScrollLink
            className="anchor-link"
            to="about"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
          </ScrollLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <ScrollLink
            className="anchor-link"
            to="mywork"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("portfolio")}
          >
            <p>Portfolio</p>
          </ScrollLink>
          {menu === "portfolio" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <ScrollLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </ScrollLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-contact">Connect</div>
    </div>
  );
};

export default Navbar;
