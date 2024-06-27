import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home">
      <Container className="text-center">
        <h2>Welcome to my portfolio</h2>
        <p>Here you can know about me, about my projects and contact me if required.<br />
          This page contains my professional information and you can download my resume.
        </p>
      </Container>
    </section>
  );
};

export default Home;
