import React from 'react';
import { Element } from 'react-scroll';
import Slider from './Slider';

const Projects = () => {
  return (
    <>
      <Element name='projects'>
        <section className='mt-[4.5rem] mb-[7.5rem]'>
          <div className='mb-6'>
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
          <Slider />
        </section>
      </Element>
    </>
  );
};

export default Projects;
