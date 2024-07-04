import React from "react";

const Cards = ({project, index, applyFlip}) => {

    return(
        <>
            <div className="col-md-6 mb-4" key={index}>
              <div
                className="card h-100 project"
                data-aos={`${applyFlip(index)}`}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
        </>
    )
}

export default Cards;