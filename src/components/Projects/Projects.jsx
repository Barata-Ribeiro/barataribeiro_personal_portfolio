import React from 'react';
import { Element } from 'react-scroll';
import ProjectOne from '/assets/img/projects/surfbot.jpg';
import ProjectTwo from '/assets/img/projects/steelManeMotors.jpg';
import ProjectThree from '/assets/img/projects/animaisFantasticos.jpg';
import ProjectFour from '/assets/img/projects/gitpop.jpg';
import ProjectFive from '/assets/img/projects/spectreBand.jpg';
import Slider from './Slider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const slides = [
    {
      id: 1,
      src: ProjectOne,
      alt: 'Surfbot',
      title: 'Surfbot',
      description:
        'This website was developed from scratch for a fictional surfing school. The design of the website was created during the "Advanced UI Design" course from Origamid. The course\'s instructor created the design to teach advanced UI design techniques. I wrote the code on my own to consolidate the learning process from other classes.',
      repositoryUrl: 'https://github.com/Barata-Ribeiro/surfbot',
      liveDemoUrl: 'https://barata-ribeiro.github.io/surfbot/',
    },
    {
      id: 2,
      src: ProjectTwo,
      alt: 'SteelMane Motorcycles',
      title: 'SteelMane Motorcycles',
      description:
        'This website was developed during the "UI Design for Beginners" and the "HTML and CSS for Beginners" courses from Origamid. The brand is entirely fictional, with the purpose of showcasing customized and totally original motorcycles.',
      repositoryUrl: 'https://github.com/Barata-Ribeiro/steelmane-motorcycles',
      liveDemoUrl: 'https://barata-ribeiro.github.io/steelmane-motorcycles/',
    },
    {
      id: 3,
      src: ProjectThree,
      alt: 'Animais Fantásticos',
      title: 'Animais Fantásticos',
      description:
        'Animais Fantásticos (Fantastic Beasts) is a website project developed during the JavaScript ES6+ course at Origamid. This project showcases a variety of skills learned by creating various effects from scratch using JavaScript.',
      repositoryUrl: 'https://github.com/Barata-Ribeiro/animais-fantasticos',
      liveDemoUrl: 'https://barata-ribeiro.github.io/animais-fantasticos/',
    },
    {
      id: 4,
      src: ProjectFour,
      alt: 'GitPop',
      title: 'GitPop',
      description:
        "web application designed for those who want to explore GitHub user's most popular repositories and their profile stats. Leveraging the power of GitHub's API, GitPop allows you to dive into the world of trending projects and discover coding prowess.",
      repositoryUrl: 'https://github.com/Barata-Ribeiro/GitPop',
      liveDemoUrl: 'https://barata-ribeiro.github.io/GitPop/',
    },
    {
      id: 5,
      src: ProjectFive,
      alt: 'Spectre',
      title: 'Spectre Band',
      description:
        'This project is the official website of Spectre, a fictional rock band. It showcases using technologies such as HTML5, CSS3, and vanilla JavaScript. Primarily, this endeavor served as a personal hands-on training experience to sharpen my skills, and the project seamlessly integrates Vite.js to accelerate development.',
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
            <p className='text-mistGray-600 max-w-[460px] text-center leading-relaxed'>
              Through these projects, I am determined to hone my skills in
              designing visually striking and intuitive interfaces, and
              ultimately establish myself as a competent professional in the
              field.
            </p>
          </div>
          <div className='max-w-[1400px]'>
            <Slider>
              {slides.map((slide) => (
                <LazyLoadImage
                  key={slide.id}
                  src={slide.src}
                  alt={slide.alt}
                  height={600}
                  width={1400}
                  className='max-w-[1400px] flex-shrink-0'
                  style={{
                    boxShadow: 'inset 0px 0px 50px -5px rgba(39, 38, 35, 0.25)',
                  }}
                  effect='blur'
                />
              ))}
            </Slider>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Projects;
