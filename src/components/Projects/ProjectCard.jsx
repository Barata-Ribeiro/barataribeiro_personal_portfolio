import React from 'react';

const ProjectCard = ({ children, imgSrc, alt }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg bg-mistGray-50'>
      <img className='w-full' src={imgSrc} alt={alt} />
      <div className='px-6 py-4'>{children}</div>
    </div>
  );
};

export default ProjectCard;
