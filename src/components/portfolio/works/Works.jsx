import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import SnakeGame from '../../../assets/img/projects/snake.png';
import Clothing from '../../../assets/img/projects/crwn.png';

const Works = () => {
  return (
    <>
      <Container className='content-div d-flex flex-column justify-content-center align-items-center' id='works'>
        <Row>
          <Col className="text-center p-4" style={{ backgroundColor: "rgb(250,100,100)", borderRadius: "10px" }}>
            <h2>Works</h2>
            <span>Here are some of works I have done:</span>
            <Carousel className="mt-3" style={{ width: "500px", height: "300px", overflow: "hidden", borderRadius: "10px" }}>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={SnakeGame}
                  alt='Snake Game'
                />
                <Carousel.Caption>
                  <h3>Snake Game</h3>
                  <p>
                    A simple snake game using React JS.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={Clothing}
                    alt='E-Commerce site'
                  />
                <Carousel.Caption>
                  <h3>E-Commerce site</h3>
                  <p>
                    An e-commerce site using React JS and Firebase.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                  alt='Second slide'
                />
                <Carousel.Caption>
                  <h3>Snake Game</h3>
                  <p>
                    A simple snake game using React JS.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Works;
