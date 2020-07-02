import React from 'react'
import './index.css'

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="heading"> Resume</h1>
      <a href="/MohanaBansalResume.pdf" target="_blank" type="button">
        View Resume
      </a>
      <a href="/MohanaBansalResume.pdf" download target="_blank" type="button">
        Download Resume
      </a>
    </div>
  )
}

export default Resume
