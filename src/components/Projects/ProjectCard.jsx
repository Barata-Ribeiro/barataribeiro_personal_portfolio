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
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 1060) setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className='rounded-xl relative overflow-hidden shadow-lg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        className={
          hover
            ? 'w-full rounded-xl block transition-transform scale-105'
            : 'w-full rounded-xl block transition-transform'
        }
        src={projectImg}
        alt={projectAlt}
      />
      <div
        className={
          hover
            ? 'h-full w-full bg-gradient-to-t from-mistGray-950 via-mistGray-900 to-transparent rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-10 text-center text-sm transition-all'
            : 'h-0 w-full bg-gradient-to-t from-mistGray-950 via-mistGray-900 to-transparent rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-10 text-center text-sm transition-all'
        }>
        <h3 className='font-Kanit text-mistGray-100 text-3xl font-semibold tracking-wide mt-[50%]'>
          <span className='text-rioGrande-600 mr-1'>.</span>
          {projectTitle}
        </h3>
        <p className='text-mistGray-50 font-light text-base leading-relaxed'>
          {projectDesc}
        </p>
        <div className='flex flex-wrap justify-starts items-center text-xs text-white font-medium gap-2 mt-4'>
          {projectTech.map((tech) => (
            <span
              key={tech}
              className='px-2 py-1 rounded bg-mistGray-500 font-semibold'>
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </div>
        <div className='flex justify-between items-center gap-2 mt-4'>
          <a
            href={projectRepo}
            target='_blank'
            rel='noreferrer noopener'
            className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg bg-royalBlue-500 
              border-2 border-royalBlue-600 text-mistGray-50 text-sm font-semibold tracking-wide
              
              hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`}>
            Repository <FaCode />
          </a>
          <a
            href={projectDemo}
            target='_blank'
            rel='noreferrer noopener'
            className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg bg-royalBlue-500 
              border-2 border-royalBlue-600 text-mistGray-50 text-sm font-semibold tracking-wide
              
              hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`}>
            Demo <FaRegPlayCircle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
