import React from 'react'
import './index.css'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="heading">Projects</h1>
      <div className="project-description">
        <div className="description">
          <h1 className="title">Diagon-E-lley</h1>
          <p>
            A one stop shop for your next year essentials at Hogwarts School of
            Witchcraft and Wizardry
          </p>
          <p>
            Diagon e-lley is a fullstack mock e-commerce site, built around the
            theme of a Hogwarts campus supply store. This project was built over
            ten days.All users can browse all products, filter products by
            specific categories, add products to the cart, edit contents of the
            cart, "checkout" and "buy" products, have the cart automatically
            save across page refreshes
          </p>
          <p>
            Logged-in users can update their profile, have cart automatically
            sync among multiple clients, have cart be saved after logout,
            receive a purchase confirmation email, view previous purchase
            history
          </p>
          <p>
            Administrators have these additional capabilities add, update, and
            delete inventory, view all signed up users
          </p>
        </div>
        <div>
          <img src="/diagonelley.png" />
        </div>
      </div>
      <div className="meta-data">
        <div className="buttons">
          <button type="button" className="raise">
            <a>Checkout Project</a>
          </button>

          <a>Visit GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
