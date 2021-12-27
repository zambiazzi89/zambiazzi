import './Header.css'
import { Logo } from '../Logo'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ThemeToggle } from './ThemeToggle'

export const Header = ({ darkTheme, setDarkTheme, activeButton }) => {
  return (
    <div className="header-background">
      <header className="App-header">
        <a href="#home">
          <Logo id="logo" />
        </a>
        <nav>
          <ul>
            <li>
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
            <li>
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
            <li className="nav-button">
              <a
                href="https://github.com/zambiazzi89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icons" />
              </a>
            </li>
            <li className="nav-button">
              <a
                href="https://linkedin.com/in/zambiazzi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icons" />
              </a>
            </li>
            <li
              className="nav-button"
              title="Theme"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              <ThemeToggle darkTheme={darkTheme} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
