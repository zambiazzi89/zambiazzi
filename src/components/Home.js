import React from 'react'
import './Home.css'
import { ArrowButton } from './ArrowButton'

export const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="name-description">
        <h1>
          Hey there, I'm <p className="accent-color">Diego</p>,
        </h1>
        <h2>a Software Engineering student based in NYC</h2>
      </div>
      <a href="#projects">
        <ArrowButton />
      </a>
    </div>
  )
}
