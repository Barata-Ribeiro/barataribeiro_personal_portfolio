import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import ProjectOne from '/public/assets/img/projectsImages/steelManeMotors.jpg';
import ProjectTwo from '/public/assets/img/projectsImages/surfbot.jpg';
import ProjectThree from '/public/assets/img/projectsImages/animais-fantasticos.jpg';
import ProjectFour from '/public/assets/img/projectsImages/gitpop.jpg';
import ProjectFive from '/public/assets/img/projectsImages/spectre_band.jpg';

const Projects = () => {
  const projectList = [
    {
      title: 'Spectre',
      desc: 'Website developed for a fictional rock band called Spectre. This project showcases an engaging and essential website, leveraging contemporary web technologies, including HTML5, CSS3, and vanilla JavaScript.',
      img: ProjectFive,
      alt: 'spectre band',
      tech: ['HTML', 'CSS', 'JavaScript', 'Vite.js'],
      repo: 'https://github.com/Barata-Ribeiro/spectre_band',
      demo: 'https://barata-ribeiro.github.io/spectre_band/',
    },
    {
      title: 'GitPop',
      desc: 'GitPop is a user-friendly web application that leverages the GitHub API to display the most popular repositories of any GitHub user and their profile stats. Using GitPop, users can explore trending projects and gain insights into their coding prowess or that of others.',
      img: ProjectFour,
      alt: 'gitpop',
      tech: ['React', 'Vite.js', 'Tailwind CSS'],
      repo: 'https://github.com/Barata-Ribeiro/GitPop',
      demo: 'https://barata-ribeiro.github.io/GitPop/',
    },
    {
      title: 'Fantastic Beasts',
      desc: 'Project developed during the JavaScript ES6+ course at Origamid. This project demonstrates a mastery of front-end development with JavaScript, showcasing creativity and practical application of programming knowledge.',
      img: ProjectThree,
      alt: 'Fantastic Beasts',
      tech: ['JavaScript', 'HTML', 'CSS'],
      repo: 'https://github.com/Barata-Ribeiro/animais-fantasticos',
      demo: 'https://barata-ribeiro.github.io/animais-fantasticos/',
    },
    {
      title: 'Surfbot',
      desc: 'Project developed from scratch for a fictional surfing school. The design was created during the "Advanced UI Design" course from Origamid. I wrote the code on my own to consolidate the learning process from other classes.',
      img: ProjectTwo,
      alt: 'Surfbot',
      tech: ['JavaScript', 'HTML', 'CSS'],
      repo: 'https://github.com/Barata-Ribeiro/surfbot',
      demo: 'https://barata-ribeiro.github.io/surfbot/',
    },
    {
      title: 'SteelMane Motorcycles',
      desc: 'Project developed during the "UI Design for Beginners" and the "HTML and CSS for Beginners" courses from Origamid. The SteelMane Motorcycles brand is entirely fictional, with the purpose of showcasing customized and totally original motorcycles.',
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
        <div className='container max-w-[90rem] sm:py-32 xs:py-16 py-6'>
          <div className='flex justify-evenly items-center flex-wrap gap-8'>
            {projectList.map((project, index) => (
              <ProjectCard
                key={index}
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
