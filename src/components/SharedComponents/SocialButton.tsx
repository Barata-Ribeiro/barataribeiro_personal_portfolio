import React, { FC } from 'react';
import { SocialButtonProps } from '../../types/SharedComponents/SocialButtonProps';

const SocialButton: FC<SocialButtonProps> = ({
  href,
  icon,
  title,
  target = '_blank',
  rel = 'noopener noreferrer',
  text,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  return (
    <a
      className={`
      mt-6 flex items-center rounded-lg border-2
      border-royalBlue-700 bg-royalBlue-600 p-2
      font-Kanit font-semibold tracking-wider text-mistGray-50
      transition hover:border-royalBlue-600
      hover:bg-mistGray-50 hover:text-royalBlue-600`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={href}
      title={title}
      target={target}
      rel={rel}
    >
      {icon}
      <p
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </p>
    </a>
  );
};

export default React.memo(SocialButton);
