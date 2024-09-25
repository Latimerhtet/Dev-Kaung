import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[350px] flex flex-col gap-2 border-2 border-dashed border-slate-400 p-4 rounded-md hover:scale-110 transition-all duration-300 ease-in-out">
      <img
        src={project.photos[0]}
        alt={project.title}
        className="w-[400px] object-cover h-[250px] rounded-md"
      />
      <div className=" flex flex-col gap-4">
        <a
          href={project.github_link}
          target="_blank"
          className="text-lg font-semibold"
        >
          {project.title}
        </a>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex gap-3 flex-wrap w-[85%]">
          {project.tech.map((technology) => (
            <p
              className={`text-sm p-1 rounded-md ${technology.color} ${technology.text}`}
              key={technology.name}
            >
              {technology.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
