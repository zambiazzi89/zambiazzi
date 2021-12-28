import React, { useState } from 'react'
import './Header.css'
import { Logo } from '../Logo'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { ThemeToggle } from './ThemeToggle'

export const Header = ({ darkTheme, setDarkTheme, activeButton }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="header-background">
      <header className="App-header">
        <a href="#home" onClick={() => setToggleMenu(false)}>
          <Logo id="logo" />
        </a>
        <nav>
          <MdMenu
            onClick={() => setToggleMenu(!toggleMenu)}
            className="menu-button nav-button icons"
          />
          <ul className={`${toggleMenu ? 'dropdown-open' : 'dropdown-closed'}`}>
            <li onClick={() => setToggleMenu(false)}>
              <a
                href="#projects"
                className={`${
                  activeButton === 'projects'
                    ? 'active-nav-button'
                    : 'nav-button'
                }`}
              >
                Projects
              </a>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <a
                href="#contact"
                className={`${
                  activeButton === 'contact'
                    ? 'active-nav-button'
                    : 'nav-button'
                }`}
              >
                Contact
              </a>
            </li>
            <li className="nav-button" onClick={() => setToggleMenu(false)}>
              <a
                href="https://github.com/zambiazzi89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icons" />
              </a>
            </li>
            <li className="nav-button" onClick={() => setToggleMenu(false)}>
              <a
                href="https://linkedin.com/in/zambiazzi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icons" />
              </a>
            </li>
          </ul>
          <li
            className="nav-button"
            title="Theme"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            <ThemeToggle darkTheme={darkTheme} />
          </li>
        </nav>
      </header>
    </div>
  )
}
