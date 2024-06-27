import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import blogImage from "../assets/blog.png";
import hospitalImage from "../assets/hospital.jpg";
import drumImage from "../assets/drum.jpg";
import weatherImage from "../assets/weather.png";
const Projects = () => {
  const projects = [
    {
      title: "Blog Site",
      description:
        "Here anyone can login with their credentials, can upload their blog, article and notes.",
      image: blogImage,
      link: "https://github.com/Rahul-Kumar-Mishra/rBlog",
    },
    {
      title: "Hospital Management System",
      description:
        "Here you can select doctor, book appointment, enroll yourself, etc",
      image: hospitalImage,
      link: "https://github.com/Rahul-Kumar-Mishra/HospitalManagementSystem",
    },
    {
      title: "Weather App",
      description: "Reflect current weather of the city with temperature",
      image: weatherImage,
      link: "https://github.com/Rahul-Kumar-Mishra/Weather-App",
    },
    {
      title: "Musical Drum",
      description: "Produces sound when hover or keys are pressed.",
      image: drumImage,
      link: "https://rahul-kumar-mishra.github.io/Drum/",
    },
  ];

  return (
    <section id="projects">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4 project">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="warning" href={project.link} target="_blank">
                    Click Here
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div id="resume-download" className="text-center text-primary mt-4">
          <p className="lead">Looking for my resume?</p>
          <Button
            variant="success"
            href="https://drive.google.com/file/d/1cdudspqdSezPJlf-2NwTh9Mrrhr7XkZG/view?usp=drive_link"
            target="_blank"
          >
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
