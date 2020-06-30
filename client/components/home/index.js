import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className="container">
      <img src="/headshot.png" />
      <div className="name-description">
        <h1 className="name">Mohana Bansal</h1>
        <h2 className="designation">Front End Developer</h2>
        <p>
          I am a New York based Front End Developer. I started my career as a
          Data Analyst in a consulting firm when a front end development
          opportunity was presented to me. From that moment I wanted to be a
          Front End Developer. To sharpen my skills I joined the Grace Hopper
          Bootcamp and having successfully completed it, I am ready to join a
          firm that is looking for collaborative and passionate developers.
        </p>

        <div className="techstack">
          <h2>Technologies I am into</h2>
          <p>
            <span className="tech-heading">Language: </span>
            JavaScript(ES6)
          </p>
          <p>
            <span className="tech-heading">Frontend: </span>
            React.js, Redux, HTML, CSS
          </p>
          <p>
            <span className="tech-heading">Backend: </span>
            Node.js, Express, Sequelize, PostgresSQL, RESTful API
          </p>
          <p>
            <span className="tech-heading">DevOps: </span>
            Heroku, TDD(Jest, Enzyme)
          </p>
          <p>
            <span className="tech-heading">Tools: </span>
            GIT, GitHub, npm, Visual Studio Code, Postman, Postico
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
