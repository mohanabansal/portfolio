import React from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
import {FaLinkedin, FaGithub, FaRegEnvelopeOpen} from 'react-icons/fa'
// import {FaGithub} from 'react-icons/fa'
// import {FaRegEnvelopeOpen} from 'react-icons/fa'

import './index.css'

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="heading">Let's connect</h1>
      <h2 className="contact-subheading">I'd love to hear from you</h2>
      <p className="contact-description">
        Whether you want to get in a technical discussion, talk about any
        project, discussion a potential job opportunity or anything else, I am
        here. <br />
        <br />
        You can find on either of the following platform:{' '}
      </p>
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

      {/* <span><FontAwesomeIcon icon={['fab', 'github']} /><a href="https://github.com/KuroiiJ"> GitHub </a></span> */}

      {/* <a href="https://github.com/mohanabansal/" target="_blank" /> */}
    </div>
  )
}

export default Contact
