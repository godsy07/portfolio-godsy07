import React from "react";
import ProfileImage from '../../../assets/img/godsy_07.jpeg'

import "./about.styles.scss";

const About = () => {
  return (
    <div className='about-div' id="about">
      <div className="about-data">
        <img src={ProfileImage} height={300} width={300} className="profile-image" />
        <div className="my-intro">
          <h2>Hello, I am Godson.</h2>
          <span>Currently, learning MERN stack technologies.</span>
          <span>And open to new opportunities</span>
        </div>
      </div>
    </div>
  );
};

export default About;
