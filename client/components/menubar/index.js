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
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  handleMenuItemClick = () => {
    this.setState({
      clicked: false,
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
        <div className="menu-left">
          <img src="/brand.png" />
        </div>
        <div className="menu-items">
          <a href="/#" onClick={this.handleMenuItemClick}>
            Home
          </a>
          <a href="/#projects" onClick={this.handleMenuItemClick}>
            Projects
          </a>
          <a href="/#experience" onClick={this.handleMenuItemClick}>
            Experience
          </a>
          <a href="/#resume" onClick={this.handleMenuItemClick}>
            Resume
          </a>
          <a href="/#contact" onClick={this.handleMenuItemClick}>
            Contact
          </a>
        </div>
        {/* <a>
          <button type="button">Click</button>
        </a> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Menubar
