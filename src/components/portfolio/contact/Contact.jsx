import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_mkllog9', formRef.current, 'user_bZ5ZdERCoFPJHnHCQcU2k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <Container className='content-div' id='contact'>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className='d-flex justify-content-center align-items-center my-2'
            // className='contact-div d-flex justify-content-center align-items-center my-2'
          >
            <div
              className='p-3'
              style={{ backgroundColor: "#fff", borderRadius: "10px", height: "280px", width: "400px" }}
            >
                <h4>Contact Details:</h4>
                <strong>Email:</strong> godsonemmanuel07@gmail.com<br/>
                <strong>Mobile No.:</strong> 7978008810<br/>
                <strong>---OR---</strong><br/>
                <strong>Connect in Social Media:</strong>
              <div>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/godsy07/'
                  title='My LinkedIn'
                  style={{ marginRight: "10px", fontSize: "30px" }}
                  >
                  <FaLinkedin style={{ color: "#2867B2" }} />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/godsy07'
                  title='My Github'
                  style={{ marginRight: "10px", fontSize: "30px" }}
                  >
                  <FaGithub style={{ color: "#333" }} />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/godsy__07/'
                  title='My Instagram'
                  style={{ marginRight: "10px", fontSize: "30px" }}
                  >
                  <FaInstagram style={{ color: "#bc2a8d" }} />
                </a>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className='d-flex justify-content-center align-items-center my-2'
            // className='contact-div d-flex justify-content-center align-items-center my-2'
          >
            <Form
              ref={formRef}
              className='d-flex flex-column p-3'
              style={{ backgroundColor: "#fff", borderRadius: "10px", height: "280px", width: "400px" }}
            >
              <h4>Send message:</h4>
              <Form.Group className='mb-2'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' placeholder='Enter your email ID' style={{ fontSize: "inherit" }} />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as='textarea'
                  type='message'
                  placeholder='Enter your message'
                  style={{ fontSize: "inherit" }}
                />
              </Form.Group>
              <Button className='mb-2' style={{ fontSize: "inherit" }} onClick={sendMessage}>Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
