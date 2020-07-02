import React from 'react'
import Menubar from '../menubar'
import Home from '../home'
import Contact from '../contact'
import Resume from '../resume'
import Footer from '../footer'

const LandingPage = () => {
  return (
    <div>
      <Menubar />
      <Home />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
