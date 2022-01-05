import React from "react";
import Header from "../components/header/Header";
import About from "../components/portfolio/about/About";
import Skills from "../components/portfolio/skills/Skills";
import Works from "../components/portfolio/works/Works";
import Contact from "../components/portfolio/contact/Contact";


import './portfolio-page.styles.scss';

const PortfolioPage = () => {
  return (
    <div className='app' id="home">
      <Header />
      <div className='content'>
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default PortfolioPage;
