import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ProfileImage from "../../../assets/img/godson.jpeg";
// import ProfileImage from '../../../assets/img/godsy_07.jpeg'

const About = () => {
  return (
    <>
      <Container className='content-div d-flex justify-content-center align-items-center' id="about">
        <Row>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center my-2'>
            <Image src={ProfileImage} height={350} width={350} roundedCircle />
          </Col>
          <Col xs={12} md={6} className='d-flex flex-column justify-content-center align-items-center my-2'>
              <h2>Hello, I am Godson.</h2>
              <span>Currently, learning MERN stack technologies.</span>
              <span>And open to new opportunities</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
