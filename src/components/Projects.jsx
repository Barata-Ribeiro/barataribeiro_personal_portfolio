import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./Utils/ProjectCard";
import ProjectOne from "/assets/img/projectsImages/steelManeMotors.jpg";
import ProjectTwo from "/assets/img/projectsImages/surfbot.jpg";
import ProjectThree from "/assets/img/projectsImages/animais-fantasticos.jpg";
import ProjectFour from "/assets/img/projectsImages/gitpop.jpg";
import ProjectFive from "/assets/img/projectsImages/spectre_band.jpg";
import ProjectSix from "/assets/img/projectsImages/delightful-indulgence.jpg";
import ProjectSeven from "/assets/img/projectsImages/dogs.jpg";
import ProjectEight from "/assets/img/projectsImages/sector-67-blog.jpg";

const Projects = () => {
  const projectList = [
    {
      id: "sector-67-blog",
      title: "Sector 67 Blog",
      desc: "A course project of a fictional blog incremented from the original for learning purposes of the Angular environment. It uses AI-generated data to simulate the real thing.",
      img: ProjectEight,
      alt: "Sector 67 Blog",
      tech: ["Angular", "TypeScript", "HTML", "CSS"],
      repo: "https://github.com/Barata-Ribeiro/dio_angular_blog",
      demo: "https://dio-angular-blog-delta.vercel.app/",
    },
    {
      id: "dogs",
      title: "Dogs",
      desc: "A course project of a social network, which allows photo sharing, interaction, and statistics analysis. It's like Instagram, but for your canine friends.",
      img: ProjectSeven,
      alt: "Dogs",
      tech: ["React", "React Router", "React Hooks", "CSS Modules", "Vite.js"],
      repo: "https://github.com/Barata-Ribeiro/Dogs",
      demo: "https://dogs-lake.vercel.app/",
    },
    {
      id: "delightful-indulgence",
      title: "Delightful Indulgence",
      desc: "Website for a fictitious dessert shop that creates gourmet desserts for couples. Created from Figma to code, emphasizing the application of React Router.",
      img: ProjectSix,
      alt: "Delightful Indulgence",
      tech: ["React", "React Router", "CSS Modules", "Vite.js"],
      repo: "https://github.com/Barata-Ribeiro/delightful_indulgence",
      demo: "https://delightful-indulgence.vercel.app/",
    },
    {
      id: "spectre-band",
      title: "Spectre",
      desc: "Website for a fictional rock band. Its goals to display typography concepts I've learned, also showcasing contemporary web tec to enhance the user experience.",
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
      tech: ["React", "Tailwind CSS", "Vite.js"],
      repo: "https://github.com/Barata-Ribeiro/GitPop",
      demo: "https://barata-ribeiro.github.io/GitPop/",
    },
    {
      id: "fantastic-beasts",
      title: "Fantastic Beasts",
      desc: "A course project which showcases front-end skills by creating effects from scratch with JavaScript. It demonstrates creativity and practical coding applications.",
      img: ProjectThree,
      alt: "Fantastic Beasts",
      tech: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Barata-Ribeiro/animais-fantasticos",
      demo: "https://barata-ribeiro.github.io/animais-fantasticos/",
    },
    {
      id: "surfbot",
      title: "Surfbot",
      desc: "Project from an advanced UI design course, dedicated to a fictional surf school, which I coded from scratch for an enhanced learning experience of other technologies.",
      img: ProjectTwo,
      alt: "Surfbot",
      tech: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Barata-Ribeiro/surfbot",
      demo: "https://barata-ribeiro.github.io/surfbot/",
    },
    {
      id: "steel-mane-motors",
      title: "SteelMane Motorcycles",
      desc: "Course project showcasing customized motorcycles for a fictional brand, created during a UI design and HTML/CSS beginner's course. It demonstrates originality and customization.",
      img: ProjectOne,
      alt: "SteelMane Motorcycles",
      tech: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/Barata-Ribeiro/steelmane-motorcycles",
      demo: "https://barata-ribeiro.github.io/steelmane-motorcycles/",
    },
  ];

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
            {projectList.slice(0, 6).map(renderProjects)}
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
