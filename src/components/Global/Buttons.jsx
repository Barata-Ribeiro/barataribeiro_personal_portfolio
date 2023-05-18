import React from 'react';

const Buttons = ({ btnText }) => {
  const baseStyle =
    'flex justify-between items-center bg-royalBlue-500 border-2 border-royalBlue-600 rounded-lg py-2 px-6 mt-6 shadow font-Kanit text-sm font-semibold tracking-widest text-mistGray-50 cursor-pointer';

  const hoverStyle =
    'hover:text-royalBlue-500 hover:border-royalBlue-500 hover:bg-mistGray-50';

  const btnStyle = `${baseStyle} ${hoverStyle}`;

  return (
    <button className={btnStyle}>
      {btnText}
      <svg
        className='w-4 h-4 ml-1'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
          clipRule='evenodd'></path>
      </svg>
    </button>
  );
};

export default Buttons;
