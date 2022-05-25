import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import { useOnScreen } from './functions/useOnScreen'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [activeButton, setActiveButton] = useState('')
  const projectsRef = useRef()
  const contactRef = useRef()
  const projectsOnScreen = useOnScreen(projectsRef, '-50%')
  const contactOnScreen = useOnScreen(contactRef, '-50%')

  useEffect(() => {
    if (projectsOnScreen) {
      setActiveButton('projects')
    } else if (contactOnScreen) {
      setActiveButton('contact')
    } else {
      setActiveButton('')
    }
  }, [projectsOnScreen, contactOnScreen])

  return (
    <div id="app" className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        activeButton={activeButton}
      />
      <Home />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}

export default App
