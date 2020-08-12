import React from 'react'
import {FaLinkedin, FaGithub, FaRegEnvelopeOpen} from 'react-icons/fa'
import './index.css'

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div>
          <img src="/headshot.png" />
          <div className="social-media">
            <a href="https://www.linkedin.com/in/mohanabansal/" target="_blank">
              <FaLinkedin className="linkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="http://github.com/mohanabansal/" target="_blank">
              <FaGithub className="github" />
              <span>GitHub</span>
            </a>
            <a href="mailto:mohanabansal10@gmail.com" target="_blank">
              <FaRegEnvelopeOpen className="email" />
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="name-description">
          <div className="name-designation">
            <h1 className="heading">Mohana Bansal</h1>
            <h2 className="designation">Front End Developer</h2>
          </div>
          <p className="bio">
            I am a New York based Front End Developer with a background in Data
            Analytics. I started my career as a Data Analyst in a consulting
            firm, where I was presented with a development opportunity and from
            that moment I wanted to be a Front End Developer. To sharpen my
            skills I joined the Grace Hopper Bootcamp. Having completed it, I am
            ready to join a firm that is looking for collaborative and
            passionate developers. Nothing gets me more excited than building,
            creating, and learning new technologies.
            {/* <div>
              <a
                href="https://www.linkedin.com/in/mohanabansal/"
                target="_blank"
              >
                <FaLinkedin className="linkedIn" />
                <span>LinkedIn</span>
              </a>
              <a href="http://github.com/mohanabansal/" target="_blank">
                <FaGithub className="github" />
                <span>GitHub</span>
              </a>
              <a href="mailto:mohanabansal10@gmail.com" target="_blank">
                <FaRegEnvelopeOpen className="email" />
                <span>Email</span>
              </a>
            </div> */}
          </p>

          <div className="tech">
            <span>JavaScript(ES6)</span>
            <span>ReactJS</span>
            <span>Redux</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>NodeJS</span>
            <span>Express</span>
            <span>Sequelize</span>
            <span>PostgresSQL</span>
            <span>RESTful API</span>
            <span>Socket.io</span>
            <span>Jest</span>
            <span>Enzyme</span>
            <span>Heroku</span>
            <span>TDD</span>
            <span>GIT</span>
            {/* <h2>Technologies I am into</h2>
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
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
