import React from 'react';

const ImageCard = ({ children, imgSrc, ...props }) => {
  return (
    <div {...props} className='relative max-w-xs overflow-hidden rounded-lg group'>
      <img src={imgSrc} alt='' className='transition-transform group-hover:scale-110 duration-200' />
      <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
        <div className='p-4 text-white'>{children}</div>
      </div>
    </div>
  );
};

export default ImageCard;
