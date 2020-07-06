import React from 'react'
import './index.css'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="heading">Projects</h1>
      <h1 className="title">Diagon-E-lley</h1>
      <div className="project-description">
        <div className="description">
          {/* <div className = "heading-and-links"> */}

          {/* <div className="links">
              <button type="button" className="btn">
                <a>Visit Website</a>
                <span></span>
              </button>
              <button type="button" className="btn">
                <a>GitHub</a>
                <span></span>
              </button>
            </div> */}
          {/* </div> */}
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
            view previous purchase history
          </p>
          {/* <p>
            Logged-in users can update their profile, have cart automatically
            sync among multiple clients, have cart be saved after logout,
            receive a purchase confirmation email, view previous purchase
            history
          </p> */}
          <p>
            Administrators have these additional capabilities add, update, and
            delete inventory, view all signed up users
          </p>
        </div>
        <div>
          <img src="/diagonmockupnew.png" />
        </div>
      </div>
      <div className="tech">
        <p>
          Technologies used: <span>ReactJS</span>
          <span>Redux</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Sequelize</span>
          <span>PostgresSQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </p>
      </div>
      <div className="meta-data"></div>
    </div>
  )
}

export default Projects
