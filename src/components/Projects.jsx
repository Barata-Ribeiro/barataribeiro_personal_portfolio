import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './Utils/ProjectCard';
import ProjectOne from '/assets/img/projectsImages/steelManeMotors.jpg';
import ProjectTwo from '/assets/img/projectsImages/surfbot.jpg';
import ProjectThree from '/assets/img/projectsImages/animais-fantasticos.jpg';
import ProjectFour from '/assets/img/projectsImages/gitpop.jpg';
import ProjectFive from '/assets/img/projectsImages/spectre_band.jpg';

const Projects = () => {
  const projectList = [
    {
      id: 'spectre-band',
      title: 'Spectre',
      desc: 'Website for a fictional rock band, Spectre, for training typography concepts. Showcases contemporary web technologies to create a compelling user experience.',
      img: ProjectFive,
      alt: 'spectre band',
      tech: ['HTML', 'CSS', 'JavaScript', 'Vite.js'],
      repo: 'https://github.com/Barata-Ribeiro/spectre_band',
      demo: 'https://barata-ribeiro.github.io/spectre_band/',
    },
    {
      id: 'gitpop',
      title: 'GitPop',
      desc: 'A user-friendly web app that displays trending GitHub repositories and profile stats by leveraging the GitHub API. An insightful tool for exploring coding prowess.',
      img: ProjectFour,
      alt: 'gitpop',
      tech: ['React', 'Vite.js', 'Tailwind CSS'],
      repo: 'https://github.com/Barata-Ribeiro/GitPop',
      demo: 'https://barata-ribeiro.github.io/GitPop/',
    },
    {
      id: 'fantastic-beasts',
      title: 'Fantastic Beasts',
      desc: 'Showcasing front-end development skills, this project was developed during an complete JavaScript course. It displays creativity and practical programming applications.',
      img: ProjectThree,
      alt: 'Fantastic Beasts',
      tech: ['JavaScript', 'HTML', 'CSS'],
      repo: 'https://github.com/Barata-Ribeiro/animais-fantasticos',
      demo: 'https://barata-ribeiro.github.io/animais-fantasticos/',
    },
    {
      id: 'surfbot',
      title: 'Surfbot',
      desc: 'A project for a fictional surf school. Created during an advanced UI design course. With basic web tech, I wrote the code from scratch to enhance learning from other courses.',
      img: ProjectTwo,
      alt: 'Surfbot',
      tech: ['JavaScript', 'HTML', 'CSS'],
      repo: 'https://github.com/Barata-Ribeiro/surfbot',
      demo: 'https://barata-ribeiro.github.io/surfbot/',
    },
    {
      id: 'steel-mane-motors',
      title: 'SteelMane Motorcycles',
      desc: "A project showcasing customized motorcycles for a fictional brand, developed during a UI design and HTML/CSS beginner's course. It demonstrates originality and customization.",
      img: ProjectOne,
      alt: 'SteelMane Motorcycles',
      tech: ['HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/Barata-Ribeiro/steelmane-motorcycles',
      demo: 'https://barata-ribeiro.github.io/steelmane-motorcycles/',
    },
  ];

  return (
    <Element name='projects'>
      <section aria-label='Project section' className='bg-mistGray-900'>
        <div className='container max-w-[90rem] sm:py-32 xs:py-16 py-6 px-4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
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
      </section>
    </Element>
  );
};

export default Projects;
