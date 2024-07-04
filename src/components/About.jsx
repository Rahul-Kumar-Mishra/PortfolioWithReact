import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../assets/myImage.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <img src={myImage} alt="My Image" className="img-fluid rounded-circle mb-3" />
          </Col>
          <Col md={6}>
          <div data-aos="fade-right">
            <h2>About Me</h2>
            <p>My name is <b>Rahul Kumar Mishra</b>, and I am currently pursuing a Bachelor's degree in Computer Science and Engineering at the National Institute of Technology (NIT), Patna. I anticipate graduating in 2025.</p>
            <p>I am a full-stack web developer with expertise in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, and MongoDB. I am also passionate about technology and enjoy competitive programming.</p>
            <p>I am enthusiastic about creating interactive and user-friendly websites, and I strive to continually improve my skills and stay updated with the latest trends and technologies in the field.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
