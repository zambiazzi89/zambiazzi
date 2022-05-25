import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import './Card.css'
import { ImageLoader } from './ImageLoader'

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

  return (
    <div className="project-card">
      <div
        className="project-image"
        onClick={() => setShowGifCard(!showGifCard)}
      >
        <div className="img-hover-message">Click to see demo!</div>
        <ImageLoader imgSrc={image} />
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
            <ImageLoader className="project-gif" imgSrc={imageGIF} />
          </div>
        </div>
      )}
    </div>
  )
}
