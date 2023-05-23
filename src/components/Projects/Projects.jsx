import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';
import ProjectOne from '../../assets/img/projectsImages/steelManeMotors.jpg';
import ProjectTwo from '../../assets/img/projectsImages/surfbot.jpg';

const Projects = () => {
  return (
    <Element name='projects'>
      <section aria-label='Project section' className='bg-mistGray-900'>
        <div className='container max-w-[1440px] sm:py-32 max-sm:py-16 max-xs:py-6'>
          <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            {/* CARD 1 */}
            <ProjectCard imgSrc={ProjectOne} alt='SteelMane Motorcycles'>
              <h3 className='font-Kanit font-semibold text-xl text-mistGray-950 mb-2'>
                SteelMane Motorcycles
              </h3>
              <p className='text-mistGray-950 '>
                This website was developed during the "UI Design for Beginners"
                and the "HTML and CSS for Beginners" courses from Origamid. The
                brand is entirely fictional, with the purpose of showcasing
                customized and totally original motorcycles.
              </p>
              <div className='px-6 pt-4 pb-2'>
                <span className='block bg-royalBlue-700 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-50 border-2 border-mistGray-50 mr-2 mb-2 hover:bg-mistGray-50 hover:text-royalBlue-700 hover:border-2 hover:border-royalBlue-700'>
                  <a
                    href='https://github.com/Barata-Ribeiro/steelmane-motorcycles'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex justify-center items-center gap-2 cursor-pointer'>
                    Repository <FaCode />
                  </a>
                </span>
                <span className='block bg-royalBlue-700 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-50 border-2 border-mistGray-50 mr-2 mb-2 hover:bg-mistGray-50 hover:text-royalBlue-700 hover:border-2 hover:border-royalBlue-700'>
                  <a
                    href='https://barata-ribeiro.github.io/steelmane-motorcycles/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex justify-center items-center gap-2 cursor-pointer'>
                    Demo <FaRegPlayCircle />
                  </a>
                </span>
              </div>
            </ProjectCard>

            {/* CARD 2 */}
            <ProjectCard imgSrc={ProjectTwo} alt='Surfbot'>
              <h3 className='font-Kanit font-semibold text-xl text-mistGray-950 mb-2'>
                Surfbot
              </h3>
              <p className='text-mistGray-950 '>
                This is a website developed from scratch for a fictional surfing
                school. The design of the website was created during the
                "Advanced UI Design" course from Origamid. I wrote the code on
                my own to consolidate the learning process from other courses.
              </p>
              <div className='px-6 pt-4 pb-2'>
                <span className='block bg-royalBlue-700 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-50 border-2 border-mistGray-50 mr-2 mb-2 hover:bg-mistGray-50 hover:text-royalBlue-700 hover:border-2 hover:border-royalBlue-700'>
                  <a
                    href='https://github.com/Barata-Ribeiro/surfbot'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex justify-center items-center gap-2 cursor-pointer'>
                    Repository <FaCode />
                  </a>
                </span>
                <span className='block bg-royalBlue-700 rounded-full px-3 py-1 text-sm font-semibold text-mistGray-50 border-2 border-mistGray-50 mr-2 mb-2 hover:bg-mistGray-50 hover:text-royalBlue-700 hover:border-2 hover:border-royalBlue-700'>
                  <a
                    href='https://barata-ribeiro.github.io/surfbot/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex justify-center items-center gap-2 cursor-pointer'>
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
