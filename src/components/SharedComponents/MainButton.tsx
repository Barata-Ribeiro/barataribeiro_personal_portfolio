import React, { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MainButtonProps } from '../../types/SharedComponents/MainButtonProps';

const MainButton: FC<MainButtonProps> = ({
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
      mt-6 flex max-w-max items-center justify-center gap-2 rounded-lg border-2
      border-royalBlue-700 bg-royalBlue-600 px-4 py-3
      font-Kanit text-sm font-semibold tracking-wider text-mistGray-50

      transition-all hover:border-royalBlue-600 hover:bg-mistGray-50 hover:px-8 hover:text-royalBlue-600`}
    >
      <FaGithub /> {buttonText}
    </a>
  );
};

export default React.memo(MainButton);
