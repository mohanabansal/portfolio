import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {
  const [navbarOpen, setNavbar] = useState(false)
  return (
    // <div className="navbar">
    //   {/* <h1>Navbar Screen</h1> */}
    //   <div className = {navbarOpen ? 'hamburgerOpen' : 'hamburger'} onClick = {()=> setNavbar(!navbarOpen)}>
    //     <div className="bar1"></div>
    //     <div className="bar2"></div>
    //     <div className="bar3"></div>
    //     {navbarOpen && (
    //       <div className = 'menu'>
    //         <span>Home</span>
    //         <span>About</span>
    //         <span>Projects</span>
    //         <span>Contact</span>
    //         <span>Home</span>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="navbar">
      <div
        className={navbarOpen ? 'hamburgerOpen' : 'hamburger'}
        onClick={() => setNavbar(!navbarOpen)}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      {navbarOpen && (
        <div className="menu">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Connect</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
