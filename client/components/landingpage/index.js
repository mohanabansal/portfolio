import React from 'react'
import Menubar from '../menubar'
import Home from '../home'
// import About from '../about'
import Projects from '../projects'
import Experience from '../experience'
import Contact from '../contact'
import Resume from '../resume'
import Footer from '../footer'

const LandingPage = () => {
  return (
    <div>
      <Menubar />
      <Home />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
