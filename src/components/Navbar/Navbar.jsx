import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nav_underline.svg";
import underline from "../../assets/nav_underline.svg";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu =()=>{
    menuRef.current.style.right='-350px';
  }

  return (
   
    <div className="navbar">
      <div className="logoV">
      <h1>Vishal</h1>
      <img src={logo} alt="Logo" />
      </div>
      <img  src={menu_open} alt="" 
     onClick={openMenu} className="nav-mob-open"/>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
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
      <div className="nav-contact"><ScrollLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("contact")}
          >
            {/* <p>Contact</p> */}
          Connect  </ScrollLink></div>
    </div>
  );
};

export default Navbar;
