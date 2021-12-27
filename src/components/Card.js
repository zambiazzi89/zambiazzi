import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import './Card.css'

export const Card = ({
  image,
  imageSmallGIF,
  imageGIF,
  title,
  description,
  tools,
  githubURL,
}) => {
  const [showGifCard, setShowGifCard] = useState(false)
  const [showSmallGif, setShowSmalGif] = useState(false)

  return (
    <div className="project-card">
      <div
        onMouseEnter={() => setShowSmalGif(true)}
        onMouseLeave={() => setShowSmalGif(false)}
        onClick={() => setShowGifCard(!showGifCard)}
      >
        {showSmallGif ? (
          <img className="project-image" src={imageSmallGIF} alt="Project" />
        ) : (
          <img className="project-image static" src={image} alt="Project" />
        )}
      </div>
      <div className="project-description">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
        <div className="tools-container">
          <div className="tools-icons">{tools.map((tool) => tool)}</div>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <FaGithub className="project-github-icon" />
          </a>
        </div>
      </div>
      {showGifCard && (
        <div className="gif-card-background">
          <div className="gif-card-container">
            <button onClick={() => setShowGifCard(false)}>x</button>
            <img src={imageGIF} alt="Project" />
          </div>
        </div>
      )}
    </div>
  )
}
