import React from 'react'
import './index.css'

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="heading"> Resume</h1>
      <div className="resume-button">
        <button type="button">
          <a href="/MohanaBansalResume.pdf" target="_blank">
            View Resume
          </a>
        </button>
        <button type="button">
          <a href="/MohanaBansalResume.pdf" download target="_blank">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  )
}

export default Resume
