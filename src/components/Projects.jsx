import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./Utils/ProjectCard";

const Projects = ({ projects }) => {
  const renderProjects = (project) => {
    return (
      <ProjectCard
        key={project.id}
        projectTitle={project.title}
        projectDesc={project.desc}
        projectImg={project.img}
        projectAlt={project.alt}
        projectTech={project.tech}
        projectRepo={project.repo}
        projectDemo={project.demo}
      />
    );
  };

  return (
    <Element name="projects">
      <section aria-label="Project section" className="bg-mistGray-900">
        <div className="container max-w-[90rem] sm:pt-32 xs:pt-16 pt-6 px-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {projects.slice(0, 6).map(renderProjects)}
          </div>
        </div>
        <div className="flex flex-col place-items-center sm:py-16 xs:py-8 py-3">
          <a
            href="https://github.barataribeiro.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="sm:text-xl text-base font-semibold text-center text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500"
          >
            Check GitHub for more projects...
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
