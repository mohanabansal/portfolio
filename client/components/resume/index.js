import React from 'react'
import resume from '../../resumeContainer/MohanaBansalResume.pdf'
import './index.css'

const Resume = () => {
  return (
    <div id="resume">
      <h1 className="heading"> Resume</h1>
      <a href={resume} target="_blank" type="button">
        View Resume
      </a>
    </div>
  )
}

export default Resume
