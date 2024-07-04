import React from "react";
import Projects from "./Projects";
import blogImage from "../assets/blog.png";
import hospitalImage from "../assets/hospital.jpg";
import drumImage from "../assets/drum.jpg";
import weatherImage from "../assets/weather.png";
import hospital2 from "../assets/hospital2.webp";
import hospital22 from "../assets/hospital22.jpg";

const ProjectDetails = () => {
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
      image: hospital22,
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
    <>
        <Projects projects={projects} />
    </>
  )
};

export default ProjectDetails;
