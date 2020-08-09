import React from 'react'
import './index.css'

const Experience = () => {
  return (
    <div id="experience">
      <div>
        <h1 className="heading">Experience</h1>
        <h2 className="company">
          <p className="company-name">Publicis.Sapient</p>{' '}
          <p className="period">January 2018 - Aug 2019</p>
        </h2>
        <h2 className="company-designation">Front End Developer</h2>
        <p>
          I have worked for 1.5 year as a Front End Developer Consultant. During
          that time I worked on the following 2 projects:
        </p>
        <div className="consultant-container">
          <div className="GS">
            <h3>Consultant at Goldman Sachs</h3>
            <p>
              I worked on redesigning the existing global trading portal to make
              the product effecient, market competitive and modify the UI to
              make it intutive. I converted wireframes into a pixel perfect,
              responsive, cross browser supportable website using HTML, CSS,
              SASS. In addition, developed functionalities to place trades,
              verify trades, show error and warning using snack bar, display
              trade summary using modal, etc. using ReactJS, Redux, JavaScript.
              I wrote test cases, in Enzyme and Jest, to test high-quality web
              and to ensure the working of functionality
            </p>
          </div>
          <div className="FBPH">
            <h3>Consultant at Federal Bank of Philadelphia</h3>
            <p>
              As a front end development team, we designed education website for
              the client to add functionalities, provide a modern user interface
              for better user experience. I built reusable components to perform
              functionalities like filtering, sorting, pagination using ReactJS,
              Redux, JavaScript. In addition, I also created responsive web
              pages from Zeplin wireframes, using HTML, CSS that were supported
              across different browsers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
