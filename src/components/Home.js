import React from 'react'
import './Home.css'
import { ArrowButton } from './ArrowButton'

export const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="name-description">
        <h1>
          Hey there, I'm <span>Diego</span>!
        </h1>
        <p className="subheader-1">
          <span>Software Engineering</span> new graduate
        </p>
        <p className="subheader-2">
          Based in <span>NYC</span> | Cloud and Custom Apps Consultant for{' '}
          <span>Capgemini</span>
        </p>
      </div>
      <a href="#projects">
        <ArrowButton />
      </a>
    </div>
  )
}
