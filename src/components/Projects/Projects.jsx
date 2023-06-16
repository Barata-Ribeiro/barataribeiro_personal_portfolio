import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import ProjectOne from '/public/assets/img/projectsImages/steelManeMotors.jpg';
import ProjectTwo from '/public/assets/img/projectsImages/surfbot.jpg';
import ProjectThree from '/public/assets/img/projectsImages/animais-fantasticos.jpg';
import ProjectFour from '/public/assets/img/projectsImages/gitpop.jpg';
import ProjectFive from '/public/assets/img/projectsImages/spectre_band.jpg';

const Projects = () => {
  return (
    <Element name='projects'>
      <section aria-label='Project section' className='bg-mistGray-900'>
        <div className='container max-w-[1440px] sm:py-32 xs:py-16 py-6'>
          <div className='flex justify-evenly items-center flex-wrap gap-8'>
            <ProjectCard
              projectTitle={'Spectre'}
              projectDesc={
                'Website developed for a fictional rock band called Spectre. This project showcases an engaging and essential website, leveraging contemporary web technologies, including HTML5, CSS3, and vanilla JavaScript.'
              }
              projectImg={ProjectFive}
              projectAlt={'spectre band'}
              projectTech={['HTML', 'CSS', 'JavaScript', 'Vite.js']}
              projectRepo={'https://github.com/Barata-Ribeiro/spectre_band'}
              projectDemo={'https://barata-ribeiro.github.io/spectre_band/'}
            />
            <ProjectCard
              projectTitle={'GitPop'}
              projectDesc={
                'GitPop is a user-friendly web application that leverages the GitHub API to display the most popular repositories of any GitHub user and their profile stats. Using GitPop, users can explore trending projects and gain insights into their coding prowess or that of others.'
              }
              projectImg={ProjectFour}
              projectAlt={'gitpop'}
              projectTech={['React', 'Vite.js', 'Tailwind CSS']}
              projectRepo={'https://github.com/Barata-Ribeiro/GitPop'}
              projectDemo={'https://barata-ribeiro.github.io/GitPop/'}
            />
            <ProjectCard
              projectTitle={'Fantastic Beasts'}
              projectDesc={
                'Project developed during the JavaScript ES6+ course at Origamid. This project demonstrates a mastery of front-end development with JavaScript, showcasing creativity and practical application of programming knowledge.'
              }
              projectImg={ProjectThree}
              projectAlt={'Fantastic Beasts'}
              projectTech={['JavaScript', 'HTML', 'CSS']}
              projectRepo={
                'https://github.com/Barata-Ribeiro/animais-fantasticos'
              }
              projectDemo={
                'https://barata-ribeiro.github.io/animais-fantasticos/'
              }
            />
            <ProjectCard
              projectTitle={`Surfbot`}
              projectDesc={
                'Project developed from scratch for a fictional surfing school. The design was created during the "Advanced UI Design" course from Origamid. I wrote the code on my own to consolidate the learning process from other classes.'
              }
              projectImg={ProjectTwo}
              projectAlt={'Surfbot'}
              projectTech={['JavaScript', 'HTML', 'CSS']}
              projectRepo={'https://github.com/Barata-Ribeiro/surfbot'}
              projectDemo={'https://barata-ribeiro.github.io/surfbot/'}
            />
            <ProjectCard
              projectTitle={`SteelMane Motorcycles`}
              projectDesc={
                'Project developed during the "UI Design for Beginners" and the "HTML and CSS for Beginners" courses from Origamid. The SteelMane Motorcycles brand i entirely fictional, with the purpose of showcasing customized and totally original motorcycles.'
              }
              projectImg={ProjectOne}
              projectAlt={'SteelMane Motorcycles'}
              projectTech={['HTML', 'CSS', 'JavaScript']}
              projectRepo={
                'https://github.com/Barata-Ribeiro/steelmane-motorcycles'
              }
              projectDemo={
                'https://barata-ribeiro.github.io/steelmane-motorcycles/'
              }
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
