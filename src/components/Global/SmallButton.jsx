import React from 'react';

const SmallButton = ({
  href,
  icon,
  title,
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  return (
    <a
      className={`
      block mt-6 p-3 bg-royalBlue-600 
      text-mistGray-50 border-2 border-royalBlue-700 
      rounded-lg font-Kanit font-semibold tracking-wider 
      hover:bg-mistGray-50 hover:border-royalBlue-600 
      hover:text-royalBlue-600 hover:mx-2 hover:px-6 transition-all
`}
      href={href}
      title={title}
      target={target}
      rel={rel}>
      {icon}
    </a>
  );
};

export default SmallButton;
