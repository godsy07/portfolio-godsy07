import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className='app-header-div'>
      <div>
        <Link to="/" className='app-header-options'>Home</Link>
      </div>
      <div>
        <a href="#about"className='app-header-options'>About</a>
      </div>
      <div>
        <a href="#skills"className='app-header-options'>Skills</a>
      </div>
      <div>
        <a href="#works"className='app-header-options'>Works</a>
      </div>
      <div>
        <a href="#contact"className='app-header-options'>Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
