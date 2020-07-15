import React, {Component} from 'react'
import {FaBars, FaRegWindowClose} from 'react-icons/fa'
import './index.css'

class Menubar extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    console.log('clicked')
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  render() {
    return (
      <div id={this.state.clicked ? 'menu-open' : 'menu'}>
        <button type="button" onClick={this.handleClick}>
          {!this.state.clicked ? (
            <FaBars className="hamburger" />
          ) : (
            <FaRegWindowClose className="hamburger-close" />
          )}
        </button>
        {/* <div className = "menu-items"> */}
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
        {/* <a>
          <button type="button">Click</button>
        </a> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Menubar
