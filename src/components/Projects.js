import React from 'react'
import './Projects.css'
import rhinoStaticImg from '../images/rhino-static.png'
import rhinoSmallGIF from '../images/rhino-small.gif'
import rhinoLargeGIF from '../images/rhino-large.gif'
import rawsterStaticImg from '../images/rawster-static.png'
import rawsterSmallGIF from '../images/rawster-small.gif'
import rawsterGIF from '../images/rawster-large.gif'
import { Card } from './Card'
import {
  SiAndroid,
  SiJava,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiSqlite,
} from 'react-icons/si'

const ProjectIcons = {
  ANDROID: (
    <SiAndroid key="android-icon" className="project-icons" title="Android" />
  ),
  CSS3: <SiCss3 key="css-icon" className="project-icons" title="CSS" />,
  HTML5: <SiHtml5 key="html-icon" className="project-icons" title="HTML" />,
  JAVA: <SiJava key="java-icon" className="project-icons" title="Java" />,
  JAVASCRIPT: (
    <SiJavascript key="js-icon" className="project-icons" title="JavaScript" />
  ),
  MONGODB: (
    <SiMongodb key="mongo-icon" className="project-icons" title="MongoDB" />
  ),
  NODEJS: (
    <SiNodedotjs key="node-icon" className="project-icons" title="Node.js" />
  ),
  REACT: (
    <SiReact key="react-icon" className="project-icons" title="React.js" />
  ),
  SQLITE: (
    <SiSqlite key="SQLite-icon" className="project-icons" title="SQLite" />
  ),
}

export const Projects = ({ projectsRef }) => {
  return (
    <div ref={projectsRef} className="projects-container" id="projects">
      <Card
        image={rhinoStaticImg}
        imageSmallGIF={rhinoSmallGIF}
        imageGIF={rhinoLargeGIF}
        title="Sales Fulfillment Tool"
        description="Tool created to reduce human-error and increase efficiency for the order management position at Rhino Foods."
        tools={[
          ProjectIcons.HTML5,
          ProjectIcons.CSS3,
          ProjectIcons.JAVASCRIPT,
          ProjectIcons.REACT,
          ProjectIcons.NODEJS,
          ProjectIcons.MONGODB,
        ]}
        githubURL="https://github.com/zambiazzi89/sales-fulfillment-tool"
      />
      <Card
        image={rawsterStaticImg}
        imageSmallGIF={rawsterSmallGIF}
        imageGIF={rawsterGIF}
        title="Rawster"
        description="Android application that keeps track of inventory performing CRUD (Create, Read, Update, Delete) operations."
        tools={[ProjectIcons.ANDROID, ProjectIcons.JAVA, ProjectIcons.SQLITE]}
        githubURL="https://github.com/zambiazzi89/cs-360-project"
      />
    </div>
  )
}
