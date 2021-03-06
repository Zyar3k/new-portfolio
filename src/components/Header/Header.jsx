import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";

import "./Header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jane Doe</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
// https://www.youtube.com/watch?v=G-Cr00UYokU
// 1:06:54

export default Header;
