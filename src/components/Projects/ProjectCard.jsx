import React from 'react';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';

const ProjectCard = ({
  projectTitle,
  projectDesc,
  projectTech,
  projectImg,
  projectAlt,
  projectRepo,
  projectDemo,
}) => {
  return (
    <div className='flex flex-wrap items-center max-md:px-4'>
      <div className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl rounded-lg md:w-80 w-full'>
        <img
          alt={projectAlt}
          src={projectImg}
          className='max-h-50 w-full object-cover'
        />
        <div className='bg-mistGray-50 w-full p-4'>
          <h3 className='font-Kanit text-mistGray-950 text-2xl font-semibold tracking-wide'>
            <span className='text-rioGrande-600 mr-1'>.</span>
            {projectTitle}
          </h3>
          <p className='text-mistGray-700 font-light text-sm leading-relaxed'>
            {projectDesc}
          </p>
          <div className='flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium'>
            {projectTech.map((tech) => (
              <span
                key={tech}
                className='m-1 px-2 py-1 rounded bg-mistGray-500 font-semibold'>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            ))}
          </div>
          <div className='flex justify-between items-center'>
            <a
              href={projectRepo}
              target='_blank'
              rel='noreferrer noopener'
              className={`flex items-center gap-2 cursor-pointer mt-3 px-2 py-1 rounded-lg bg-royalBlue-500 
              border-2 border-royalBlue-600 text-mistGray-50 text-sm font-semibold tracking-wide
              
              hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`}>
              Repository <FaCode />
            </a>
            <a
              href={projectDemo}
              target='_blank'
              rel='noreferrer noopener'
              className={`flex items-center gap-2 cursor-pointer mt-3 px-2 py-1 rounded-lg bg-royalBlue-500 
              border-2 border-royalBlue-600 text-mistGray-50 text-sm font-semibold tracking-wide
              
              hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`}>
              Demo <FaRegPlayCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
