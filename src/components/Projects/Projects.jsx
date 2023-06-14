import React from 'react';
import { Element } from 'react-scroll';
import ProjectOne from '/public/assets/img/projects/surfbot.jpg';
import ProjectTwo from '/public/assets/img/projects/steelManeMotors.jpg';
import ProjectThree from '/public/assets/img/projects/animaisFantasticos.jpg';
import ProjectFour from '/public/assets/img/projects/gitpop.jpg';
import ProjectFive from '/public/assets/img/projects/spectreBand.jpg';
import Slider from './Slider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const slides = [
    { id: 1, src: ProjectOne, alt: 'Surfbot' },
    { id: 2, src: ProjectTwo, alt: 'SteelMane Motorcycles' },
    { id: 3, src: ProjectThree, alt: 'Animais Fantásticos' },
    { id: 4, src: ProjectFour, alt: 'GitPop' },
    { id: 5, src: ProjectFive, alt: 'Spectre' },
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
                  className='max-w-[1400px] flex-shrink-0 rounded-2xl'
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
