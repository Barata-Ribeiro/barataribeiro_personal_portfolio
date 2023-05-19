import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Button = ({ buttonText }) => {
  return (
    <button
      className={`
      flex justify-between items-center
      gap-x-1 mt-6 py-3 px-8
      bg-royalBlue-600 text-mistGray-50
      border-2 border-royalBlue-700 rounded-lg
      font-Kanit font-semibold tracking-wider
      hover:bg-mistGray-50 hover:border-royalBlue-600 hover:text-royalBlue-600 hover:gap-x-4 transition-all
    `}>
      {buttonText} <HiArrowNarrowRight size={20} />
    </button>
  );
};

export default Button;
