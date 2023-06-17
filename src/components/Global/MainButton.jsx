import React from 'react';
import PropTypes from 'prop-types';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Button = ({
  buttonText,
  href,
  title,
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  return (
    <a
      href={href}
      title={title}
      rel={rel}
      target={target}
      className={`
      flex justify-between items-center
      gap-x-1 mt-6 py-3 px-8
      bg-royalBlue-600 text-mistGray-50
      border-2 border-royalBlue-700 rounded-lg
      font-Kanit font-semibold tracking-wider
      hover:bg-mistGray-50 hover:border-royalBlue-600 hover:text-royalBlue-600 hover:gap-x-4 transition-all
    `}>
      {buttonText} <HiArrowNarrowRight size={20} />
    </a>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;
