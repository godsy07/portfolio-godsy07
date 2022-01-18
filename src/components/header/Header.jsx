import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect={true} className='app-header-div' expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand href='#'>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#skills'>Skills</Nav.Link>
              <Nav.Link href='#works'>Works</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className='app-header-div'>
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
      </div> */}
    </>
  );
};

export default Header;
