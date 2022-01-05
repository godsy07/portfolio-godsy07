import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className='contact-div' id='contact'>
      <div className='contact-details'>
        <span>
          <strong>Contact Details:</strong>
        </span>
        <span>
          <strong>Email:</strong> godsonemmanuel07@gmail.com
        </span>
        <span>
          <strong>Mobile No.:</strong> 7978008810
        </span>
        <span style={{ textAlign: "center" }}>
          <strong>---OR---</strong>
        </span>
        <span>
          <strong>Connect in Social Media:</strong>
        </span>
        <div style={{ fontSize: "30px" }}>
          <a
            href='https://www.linkedin.com/in/godsy07/'
            target='_blank'
            title="My LinkedIn"
            style={{ marginRight: "10px" }}
          >
            <FaLinkedin style={{ color: "#2867B2" }} />
          </a>
          <a
            href='https://github.com/godsy07'
            target='_blank'
            title="My Github"
            style={{ marginRight: "10px" }}
          >
            <FaGithub style={{ color: "#333" }} />
          </a>
          <a
            href='https://www.instagram.com/godsy__07/'
            target='_blank'
            title="My Instagram"
            style={{ marginRight: "10px" }}
          >
            <FaInstagram style={{ color: "#bc2a8d" }} />
          </a>
        </div>
      </div>
      <div className='send-message'>
        <h2 style={{ marginBottom: "10px" }}>Send some message:</h2>
        <span>Email ID:</span>
        <input type='email' placeholder='Enter your Email...' />
        <span>Message:</span>
        <textarea placeholder='Enter your message'></textarea>
        <button className='btn-submit'>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
