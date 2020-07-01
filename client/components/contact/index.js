import React from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
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
      <a href="https://www.linkedin.com/in/mohanabansal/" target="_blank" />
      <a href="https://github.com/mohanabansal/" target="_blank" />
    </div>
  )
}

export default Contact
