import React from 'react';
import { Element } from 'react-scroll';
import ProjectOne from '/assets/img/projects/surfbot.jpg';
import ProjectTwo from '/assets/img/projects/steelManeMotors.jpg';
import ProjectThree from '/assets/img/projects/animaisFantasticos.jpg';
import ProjectFour from '/assets/img/projects/gitpop.jpg';
import ProjectFive from '/assets/img/projects/spectreBand.jpg';
import Slider from './Slider';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const slides = [
    {
      id: 1,
      src: ProjectOne,
      alt: 'Surfbot',
      title: 'Surfbot',
      description: `Developed a surfing school website from scratch, based on the "Advanced UI Design" course. Implemented the instructor's design to enhance UI skills and solidify coding proficiency.`,
      tags: ['HTML', 'CSS', 'JavaScript'],
      repositoryUrl: 'https://github.com/Barata-Ribeiro/surfbot',
      liveDemoUrl: 'https://barata-ribeiro.github.io/surfbot/',
    },
    {
      id: 2,
      src: ProjectTwo,
      alt: 'SteelMane Motorcycles',
      title: 'SteelMane Motorcycles',
      description:
        'Created a fictional brand website, showcasing custom and original motorcycles. Developed during the "UI Design for Beginners" and "HTML and CSS for Beginners" courses.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      repositoryUrl: 'https://github.com/Barata-Ribeiro/steelmane-motorcycles',
      liveDemoUrl: 'https://barata-ribeiro.github.io/steelmane-motorcycles/',
    },
    {
      id: 3,
      src: ProjectThree,
      alt: 'Animais Fantásticos',
      title: 'Animais Fantásticos',
      description:
        'Fantastic Beasts website project demonstrating advanced JavaScript skills. Effects and features were created from scratch during the JavaScript ES6+ course at Origamid.',
      repositoryUrl: 'https://github.com/Barata-Ribeiro/animais-fantasticos',
      tags: ['JavaScript', 'HTML', 'CSS'],
      liveDemoUrl: 'https://barata-ribeiro.github.io/animais-fantasticos/',
    },
    {
      id: 4,
      src: ProjectFour,
      alt: 'GitPop',
      title: 'GitPop',
      description:
        "Web app to explore popular GitHub repositories and user profiles. Leveraging GitHub's API, GitPop provides insights into trending projects and showcases coding expertise.",
      tags: ['React', 'Vite.js', 'Tailwind CSS'],
      repositoryUrl: 'https://github.com/Barata-Ribeiro/GitPop',
      liveDemoUrl: 'https://barata-ribeiro.github.io/GitPop/',
    },
    {
      id: 5,
      src: ProjectFive,
      alt: 'Spectre',
      title: 'Spectre Band',
      description:
        'Official website for Spectre, a fictional rock band. Utilized HTML5, CSS3, and vanilla JavaScript. Integrated Vite.js for accelerated development and personal skill enhancement.',
      tags: ['HTML', 'CSS', 'Vite.js', 'JavaScript'],
      repositoryUrl: 'https://github.com/Barata-Ribeiro/spectre_band',
      liveDemoUrl: 'https://barata-ribeiro.github.io/spectre_band/',
    },
  ];

  return (
    <>
      <Element name='projects'>
        <section className='mt-[4.5rem] mb-[7.5rem]'>
          <div className='flex flex-col items-center mb-6'>
            <h1 className='font-Kanit text-mistGray-950 text-6xl text-center'>
              <span className='text-rioGrande-600'>.</span>My projects
            </h1>
            <p className='text-mistGray-600 max-w-[28.75rem] text-center leading-relaxed'>
              Through these projects, I am determined to hone my skills in
              designing visually striking and intuitive interfaces, and
              ultimately establish myself as a competent professional in the
              field.
            </p>
          </div>
          <div className='max-w-[87.5rem]'>
            <Slider slides={slides} />
          </div>
        </section>
      </Element>
    </>
  );
};

export default Projects;
