import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { projectList } from "../helpers/ProjectList";


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              title={project.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
