import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';
import { ProjectCardProps } from '../../types/SharedComponents/ProjectCardProps';

const ProjectCard: FC<ProjectCardProps> = ({
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

  const isMobileDevice = () => {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(max-width: 1024px)').matches
    );
  };

  const isSmallScreen = () => {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(max-width: 300px)').matches
    );
  };

  const handleClick = () => {
    if (isMobileDevice()) {
      setHover((prevHover) => !prevHover);
    }
  };

  const titleClass =
    isMobileDevice() && projectTitle.split(' ')[0].length >= 10
      ? 'text-2xl'
      : 'text-3xl';

  return (
    <div
      className="rounded-xl relative overflow-hidden shadow-lg ${mobileSize}"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      <LazyLoadImage
        className={`inline-block w-full rounded-xl transition-all ${
          hover ? 'scale-105' : ''
        }`}
        effect="blur"
        src={projectImg}
        alt={projectAlt}
      />
      <div
        className={`${
          hover ? 'h-full' : 'h-0'
        } absolute bottom-0 left-0 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-t from-mistGray-950 via-mistGray-900 to-transparent px-10 text-center text-sm transition-all`}
      >
        <h3
          className={`font-Kanit text-mistGray-100 ${titleClass} mt-[20%] font-semibold tracking-wide sm:mt-[50%]`}
        >
          <span className="mr-1 text-rioGrande-600">.</span>
          {projectTitle}
        </h3>
        <p
          className={`text-base font-light leading-relaxed text-mistGray-50 ${
            isSmallScreen() ? 'hidden' : ''
          }`}
        >
          {projectDesc}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-start gap-2 text-xs font-medium text-white">
          {projectTech.map((tech) => (
            <span
              key={tech}
              className="grow rounded bg-mistGray-500 px-2 py-1 font-semibold"
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <a
            onClick={(e) => e.stopPropagation()}
            href={projectRepo}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500`}
          >
            Repository <FaCode />
          </a>
          <a
            onClick={(e) => e.stopPropagation()}
            href={projectDemo}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500`}
          >
            Demo <FaRegPlayCircle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
