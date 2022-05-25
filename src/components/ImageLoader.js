import React, { useState } from 'react'
import './ImageLoader.css'

export const ImageLoader = ({ imgSrc }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="img-container">
      {!loaded && (
        <div className="spinner">
          <div className="spinner-text">Loading</div>
          <div className="spinner-line"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt="Project"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  )
}
