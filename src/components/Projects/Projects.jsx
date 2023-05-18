import React from 'react';
import { FaCode, FaPlayCircle } from 'react-icons/fa';
import bgImage from '../../assets/neom-anozjF6uqI0-unsplash.jpg';
import ImageCard from './ImageCard';

const Projects = () => {
  return (
    <section className='grid-flow-row grid-cols-3'>
      <ImageCard imgSrc={bgImage}>
        <h3 className='font-Kanit text-xl font-bold text-mistGray-50 mb-2'>Lorem Ipsum</h3>
        <p className='text-mistGray-50'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi totam distinctio, neque, veritatis laboriosam, sapiente vitae aliquid explicabo.
        </p>
        <div>
          <button className='mr-2 btn'>
            <FaCode className='h-10 w-10 text-mistGray-50' />
          </button>
          <button>
            <FaPlayCircle className='h-10 w-10 text-mistGray-50' />
          </button>
        </div>
      </ImageCard>
    </section>
  );
};

export default Projects;
