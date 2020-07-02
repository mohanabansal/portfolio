import React from 'react'
import resume from '../constants/MohanaBansalResume.pdf'
import './index.css'

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="heading"> Resume</h1>
      <a href={resume} target="_blank">
        View Resume
      </a>
      <a href={resume} download target="_blank" type="button">
        Download Resume
      </a>
    </div>
  )
}

export default Resume
