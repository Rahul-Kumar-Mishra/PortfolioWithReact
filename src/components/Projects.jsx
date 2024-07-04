import React from "react";
import Cards from "./Cards";
import Resume from "./Resume";

const Projects = ({projects}) => {
  
  const applyFlip = (index) => {
    return index % 2 === 0 ? "fade-right" : "fade-left";
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <Cards project={project} index={index} applyFlip={applyFlip}/>
          ))}
        </div>
        <Resume />
      </div>
    </section>
  );
};

export default Projects;
