import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./Utils/ProjectCard";
import ProjectOne from "/assets/img/projectsImages/steelManeMotors.jpg";
import ProjectTwo from "/assets/img/projectsImages/surfbot.jpg";
import ProjectThree from "/assets/img/projectsImages/animais-fantasticos.jpg";
import ProjectFour from "/assets/img/projectsImages/gitpop.jpg";
import ProjectFive from "/assets/img/projectsImages/spectre_band.jpg";
import ProjectSix from "/assets/img/projectsImages/delightful-indulgence.jpg";

const Projects = () => {
  const projectList = [
    {
      id: "delightful-indulgence",
      title: "Delightful Indulgence",
      desc: "Website for a fictitious dessert shop that creates gourmet desserts for couples. Through Figma towards coding, with the purpose of training React and React Router.",
      img: ProjectSix,
      alt: "Delightful Indulgence",
      tech: ["React", "React Router", "CSS Modules", "Vite.js"],
      repo: "https://github.com/Barata-Ribeiro/delightful_indulgence",
      demo: "https://barata-ribeiro.github.io/delightful_indulgence",
    },
    {
      id: "spectre-band",
      title: "Spectre",
      desc: "Website for a fictional rock band. First, for training typography concepts, it also showcases contemporary web technologies to create a compelling user experience.",
      img: ProjectFive,
      alt: "Spectre Band",
      tech: ["HTML", "CSS", "JavaScript", "Vite.js"],
      repo: "https://github.com/Barata-Ribeiro/spectre_band",
      demo: "https://barata-ribeiro.github.io/spectre_band/",
    },
    {
      id: "gitpop",
      title: "GitPop",
      desc: "A user-friendly web app that displays trending GitHub repositories and profile stats by leveraging the GitHub API. An insightful tool for exploring coding prowess.",
      img: ProjectFour,
      alt: "gitpop",
      tech: ["React", "Vite.js", "Tailwind CSS"],
      repo: "https://github.com/Barata-Ribeiro/GitPop",
      demo: "https://barata-ribeiro.github.io/GitPop/",
    },
    {
      id: "fantastic-beasts",
      title: "Fantastic Beasts",
      desc: "Showcasing front-end development skills, this project was developed during an complete JavaScript course. It displays creativity and practical programming applications.",
      img: ProjectThree,
      alt: "Fantastic Beasts",
      tech: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Barata-Ribeiro/animais-fantasticos",
      demo: "https://barata-ribeiro.github.io/animais-fantasticos/",
    },
    {
      id: "surfbot",
      title: "Surfbot",
      desc: "A project for a fictional surf school. Created during an advanced UI design course. With basic web tech, I wrote the code from scratch to enhance learning from other courses.",
      img: ProjectTwo,
      alt: "Surfbot",
      tech: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Barata-Ribeiro/surfbot",
      demo: "https://barata-ribeiro.github.io/surfbot/",
    },
    {
      id: "steel-mane-motors",
      title: "SteelMane Motorcycles",
      desc: "A project showcasing customized motorcycles for a fictional brand, developed during a UI design and HTML/CSS beginner's course. It demonstrates originality and customization.",
      img: ProjectOne,
      alt: "SteelMane Motorcycles",
      tech: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/Barata-Ribeiro/steelmane-motorcycles",
      demo: "https://barata-ribeiro.github.io/steelmane-motorcycles/",
    },
  ];

  return (
    <Element name="projects">
      <section aria-label="Project section" className="bg-mistGray-900">
        <div className="container max-w-[90rem] sm:pt-32 xs:pt-16 pt-6 px-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {projectList.map((project) => (
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
            ))}
          </div>
        </div>
        <div className="flex flex-col place-items-center sm:py-16 xs:py-8 py-3">
          <a
            href="https://github.com/Barata-Ribeiro"
            rel="noreferrer"
            target="_blank"
            className="sm:text-xl text-base font-semibold text-center text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500"
          >
            Check GitHub for other projects...
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
