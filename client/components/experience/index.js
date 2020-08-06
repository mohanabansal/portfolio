import React from 'react'
import './index.css'

const Experience = () => {
  return (
    <div>
      <div id="experience">
        <h1 className="heading">Experience</h1>
        <h2>Publicis.Sapient - January 2018 - Aug 2019</h2>
        <h2>Front End Developer</h2>
        <div className="consultant-container">
          <div className="GS">
            <h3>Consultant at Goldman Sachs</h3>
            <p>
              Redesigned the existing global trading portal to make the product
              efficient, data scalable and market competitive. Converted
              wireframes into a pixel perfect, responsive, cross browser
              supportable website using HTML, CSS, SASS. Developed
              functionalities to place trades, verify trades, show error and
              warning using snack bar, display trade summary using modal, etc.
              using ReactJS, Redux, JavaScript. Wrote test cases, in Enzyme and
              Jest, to test high-quality web and to ensure the working of
              functionality
            </p>
          </div>
          <div className="FBPH">
            <h3>Consultant at Federal Bank of Philadelphia</h3>
            <p>
              Designed education website for the client to add functionalities,
              provide a modern user interface for better user experience. Built
              reusable components to perform functionalities like filtering,
              sorting, pagination using ReactJS, Redux, JavaScript. Created
              responsive web pages from Zeplin wireframes, using HTML, CSS that
              were supported across different browsers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
