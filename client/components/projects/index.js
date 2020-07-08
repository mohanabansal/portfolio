import React from 'react'
import data from '../../data'
import './index.css'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="heading">Projects</h1>
      {data.map((project) => {
        return (
          <div key={project.id}>
            <h1 className="title">{project.title}</h1>
            <div className="project-description">
              <div className="description">
                <p>{project.description}</p>
                <div className="tech">
                  {project.tech.map((tech) => {
                    return (
                      <div>
                        <span>{tech}</span>
                      </div>
                    )
                  })}
                </div>
                <p></p>
              </div>
              <div>
                <img src={project.img} />
                <div className="links">
                  <a href={project.website} target="_blank">
                    <button type="button" className="btn">
                      Visit Website
                      <span></span>
                    </button>
                  </a>
                  <a href={project.github} target="_blank">
                    <button type="button" className="btn">
                      View GitHub
                      <span></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
