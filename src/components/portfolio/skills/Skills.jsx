import React from "react";

import "./skills.styles.scss";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <Container id='skills' className='skills-div d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
            <div className='skills-content d-flex flex-column py-2 px-4'>
              <h2 className='text-center'>Skills</h2>
              <div className='text-center mb-3'>
                Here are some technologies I have worked on:
              </div>
              <Tabs defaultActiveKey='programming' className='mb-3'>
                <Tab eventKey='programming' title='Languages'>
                  <div>
                    Programming
                    <ul>
                      <li>HTML, CSS and JavaScript</li>
                      <li>React JS, Node JS</li>
                      <li>PHP</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey='db' title='Database'>
                  <div>
                    DB
                    <ul>
                      <li>SQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey='sw' title='Softwares'>
                  <div>
                    S/W
                    <ul>
                      <li>GitHub</li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
