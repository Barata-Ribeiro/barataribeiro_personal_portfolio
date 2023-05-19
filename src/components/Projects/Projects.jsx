import React from 'react';
import { FaCode, FaPlayCircle } from 'react-icons/fa';
import bgImage from '../../assets/neom-anozjF6uqI0-unsplash.jpg';
import ImageCard from './ImageCard';

const Projects = () => {
  return (
    <section className='py-16 md:px-[330px] bg-mistGray-900'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl'>
        <div>
          <ImageCard imgSrc={bgImage}>
            <h3 className='font-Kanit text-2xl md:text-3xl font-bold text-mistGray-50 mb-2'>
              Lorem Ipsum
            </h3>
            <p className='text-mistGray-50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              totam distinctio, neque, veritatis laboriosam, sapiente vitae
              aliquid explicabo.
            </p>
            <div className='flex mt-4'>
              <button className='mr-2 btn'>
                <FaCode className='h-6 w-6 md:h-10 md:w-10 text-mistGray-50' />
              </button>
              <button className='btn'>
                <FaPlayCircle className='h-6 w-6 md:h-10 md:w-10 text-mistGray-50' />
              </button>
            </div>
          </ImageCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
