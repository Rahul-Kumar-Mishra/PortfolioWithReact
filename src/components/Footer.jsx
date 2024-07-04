import React from 'react';
//import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer>
    <div className="container text-center col-pd-1">
      <h4>Connect with me:</h4>
      <a href="https://www.linkedin.com/in/rahul-kumar-mishra-984a40256/" className="social-icon"><FaLinkedin size={32} /></a>
      <a href="https://github.com/Rahul-Kumar-Mishra" className="social-icon"><FaGithub size={32} /></a>
      <p>&copy; My Portfolio. All rights reserved. Copyright.</p>
    </div>
  </footer>

  );
};

export default Footer;
