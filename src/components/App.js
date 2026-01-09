import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    {name:'todo',desc:'Todo Application.'},
    {name:'cancer Prediction',desc:'Cancer prediction using AI/ML.'}
  ])

  const RenderProjects = projects.map((project)=>{
    return (
      <div className="ns-wrapper" >
        <h1 data-ns-test='project-name' >{project.name}</h1>
        <h6 data-ns-test='project-description' >{project.desc}</h6>
      </div>
    )
  })

  return (
    <div id="main">
      {RenderProjects}
    </div>
  )
}


export default App;
