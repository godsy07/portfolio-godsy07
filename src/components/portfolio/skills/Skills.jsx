import React from "react";
import { Tabs, Carousel } from "antd";

import "./skills.styles.scss";

const Skills = () => {
  const {TabPane} = Tabs;
  return (
    <div className='skills-div' id='skills'>
      <div className="skills-content">
        <h2>Skills</h2>
        <span>Here are some technologies I have worked on:</span>
        <div style={{ backgroundColor: "#000", height: "2px", width: "100%", margin: "10px 0" }}></div>
        <div className="skills-info-div">
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Programming" key="1" className="skills-info">
            <ul>
              <li>HTML, CSS and JavaScript</li>
              <li>React JS, Node JS</li>
              <li>PHP</li>
            </ul>
          </TabPane>
          <TabPane tab="Database" key="2" className="skills-info">
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </TabPane>
          <TabPane tab="S/W Development" key="3" className="skills-info">
            <ul>
              <li>GitHub</li>
            </ul>
          </TabPane>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Skills;
