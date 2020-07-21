import React, {Component} from 'react'
import {email} from '../reducer/email'
// import {HashLink as Link} from 'react-router-hash-link'
import {FaLinkedin, FaGithub, FaRegEnvelopeOpen} from 'react-icons/fa'
// import {FaGithub} from 'react-icons/fa'
// import {FaRegEnvelopeOpen} from 'react-icons/fa'

import './index.css'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      emailClassName: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  validateEmail = (emailaddress) => {
    console.log('in validEmail')
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(emailaddress).toLowerCase())
  }

  handleButtonClick = () => {
    const validEmail = this.validateEmail(this.state.email.trim())

    if (!validEmail) {
      this.setState({emailClassName: 'invalidEmail'})
    }

    if (this.state.name.trim() && validEmail && this.state.message.trim()) {
      email({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })()
      this.setState({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  handleKeyPress = () => {
    this.setState({
      emailClassName: '',
    })
  }

  render() {
    let disabled = true
    if (
      this.state.name.trim() &&
      this.state.email.trim() &&
      this.state.message.trim()
    ) {
      disabled = false
    }

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
        <div className="quick-note">
          <p>Drop me a quick note</p>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <input
            className={this.state.emailClassName}
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          ></input>
          <textarea
            placeholder="Message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <div className="send-button-container">
            <button
              type="button"
              disabled={disabled}
              onClick={this.handleButtonClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
