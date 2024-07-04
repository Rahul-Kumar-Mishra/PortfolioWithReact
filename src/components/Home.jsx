import React from 'react';
import { Container } from 'react-bootstrap';
import TypewriterCompo from './TypewriterCompo';

const Home = () => {
  return (
    <section id="home">
      <div className="container text-center">
        <h2>Welcome to my portfolio</h2>
        <TypewriterCompo />
        <p>Here you can know about me, about my projects and contact me if required.<br />
          This page contains my professional information and you can download my resume.
        </p>
      </div>
    </section>
  );
};

export default Home;
