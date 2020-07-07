import React from 'react'
import data from '../../data'
import './index.css'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="heading">Projects</h1>
      {data.map((project) => {
        console.log(project.title)
        return (
          <div key={project.id}>
            <h1 className="title">{project.title}</h1>
            <div className="project-description">
              <div className="description">
                <p>{project.description}</p>
                <span className="tech">
                  <p>
                    {project.tech.map((tech) => {
                      return <span>{tech}</span>
                    })}
                    {/* <span>ReactJS</span>
                    <span>Redux</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Sequelize</span>
                    <span>PostgresSQL</span>
                    <span>HTML</span>
                    <span>CSS</span> */}
                  </p>
                </span>
                <p></p>
              </div>
              <div>
                <img src={project.img} />
                <div className="links">
                  <button type="button" className="btn">
                    <a href={project.website} target="_blank">
                      Visit Website
                    </a>
                    <span></span>
                  </button>
                  <button type="button" className="btn">
                    <a href={project.github} target="_blank">
                      View GitHub
                    </a>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
      {/* <h1 className="title">Diagon-E-lley</h1> */}
      {/* <div className="project-description">
        <div className="description">
          <p>
            A one stop shop for your next year essentials at Hogwarts School of
            Witchcraft and Wizardry
          </p>
          <p>
            Diagon e-lley is a fullstack mock e-commerce site, built around the
            theme of a Hogwarts campus supply store. This project was built over
            ten days. All users can browse all products, filter products by
            specific categories, add products to the cart, edit contents of the
            cart, "checkout" and "buy" products, have the cart automatically
            sync across multiple clients, receive a purchase confirmation email,
            view previous purchase history. Administrators have additional
            capabilities to add, update, and delete inventory, view all signed
            up users.
          </p>
          <span className="tech">
            <p>
              <span>ReactJS</span>
              <span>Redux</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Sequelize</span>
              <span>PostgresSQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </span>
          <p></p>
        </div>
        <div>
          <img src="/diagonmockupnew.png" />
          <div className="links">
            <button type="button" className="btn">
              <a href="https://diagon-e-lley.herokuapp.com/" target="_blank">
                Visit Website
              </a>
              <span></span>
            </button>
            <button type="button" className="btn">
              <a
                href="https://github.com/Rosalina-and-luma/grace-shopper"
                target="_blank"
              >
                View GitHub
              </a>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <hr /> */}
    </div>
  )
}

export default Projects
