import React from "react";
import Heading from "./Utils-Components/Heading";
import ProjectCard from "./Utils-Components/ProjectCard";
import { PROJECTS } from "../utils/projects";
const Projects = ({ refer }) => {
  return (
    <section className="flex flex-col gap-6 items-center " id="projects">
      <Heading title={"My Works"} refer={refer} />
      <div></div>
      <div className=" w-[70vw] flex gap-10 justify-center items-start flex-wrap  ">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
