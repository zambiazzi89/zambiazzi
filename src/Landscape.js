import { useState, useEffect } from 'react'
import { Clouds1, Clouds2 } from './Clouds'
import { Moon } from './Moon'
import { Sun } from './Sun'
import { Stars } from './Stars'
import { Mountain1, Mountain2, Mountain3 } from './Mountains'

export const Landscape = () => {
  const [scrollY, setScrollY] = useState(873.4)
  const handleScroll = () => {
    setScrollY(scrollY - window.scrollY / 2)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skyColor = `rgb(${30 + scrollY / 15},${26 + scrollY / 18},${
    29 + scrollY / 8
  })`
  return (
    <>
      <svg
        className="landscape-container"
        width="100%"
        viewBox="0 0 893 499"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="893" height="499" fill={skyColor} />
        <Stars id="stars" rotateX={scrollY} />
        <Sun />
        <Moon scrollY={scrollY} skyColor={skyColor} />
        <Mountain3 />
        <Clouds2 cloudsX={`${0 - scrollY * 0.5}`} cloudBG={scrollY} />
        <Mountain2 />
        <Clouds1 cloudsX={`${0 - scrollY * 0.5}`} cloudBG={scrollY} />
        <Mountain1 />
      </svg>
      {window.scrollY === 0 && <h3 className="scroll-tip">Scroll Down</h3>}
    </>
  )
}
