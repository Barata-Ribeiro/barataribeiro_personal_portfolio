import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';
import ImageOne from '../../assets/neom-anozjF6uqI0-unsplash.jpg';

const Projects = () => {
  return (
    <Element name='projects'>
      <section aria-label='Project section' className='bg-mistGray-900'>
        <div className='container max-w-[1440px] sm:py-32 max-sm:py-16 max-xs:py-6'>
          <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            <ProjectCard imgSrc={ImageOne} alt='Mountain'>
              <h3 className='font-Kanit font-semibold text-xl text-mistGray-950 mb-2'>
                Mountain
              </h3>
              <p className='text-mistGray-950 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className='px-6 pt-4 pb-2'>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Repository <FaCode />
                  </a>
                </span>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Demo <FaRegPlayCircle />
                  </a>
                </span>
              </div>
            </ProjectCard>
            <ProjectCard imgSrc={ImageOne} alt='Mountain'>
              <h3 className='font-Kanit font-semibold text-xl text-mistGray-950 mb-2'>
                Mountain
              </h3>
              <p className='text-mistGray-950 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className='px-6 pt-4 pb-2'>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Repository <FaCode />
                  </a>
                </span>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Demo <FaRegPlayCircle />
                  </a>
                </span>
              </div>
            </ProjectCard>
            <ProjectCard imgSrc={ImageOne} alt='Mountain'>
              <h3 className='font-Kanit font-semibold text-xl text-mistGray-950 mb-2'>
                Mountain
              </h3>
              <p className='text-mistGray-950 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className='px-6 pt-4 pb-2'>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Repository <FaCode />
                  </a>
                </span>
                <span className='block bg-mistGray-200 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-700 mr-2 mb-2 hover:bg-royalBlue-500 hover:text-mistGray-50'>
                  <a className='flex justify-center items-center gap-2 cursor-pointer'>
                    Demo <FaRegPlayCircle />
                  </a>
                </span>
              </div>
            </ProjectCard>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
