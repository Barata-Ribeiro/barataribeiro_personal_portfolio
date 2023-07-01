import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';

const ProjectCard = ({ projectTitle, projectDesc, projectTech, projectImg, projectAlt, projectRepo, projectDemo }) => {
    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => {
        if (window.innerWidth > 1060) setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const isMobileDevice = () => {
        return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 1024px)').matches;
    };

    const handleClick = () => {
        if (isMobileDevice()) {
            setHover((prevHover) => !prevHover);
        }
    };

    const hoverClass = hover ? 'scale-105' : '';
    const divHoverClass = hover ? 'h-full' : 'h-0';

    return (
        <div
            className='rounded-xl relative overflow-hidden shadow-lg'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
            tabIndex={0}>
            <LazyLoadImage className={`w-full rounded-xl inline-block transition-transform ${hoverClass}`} effect='black-and-white' src={projectImg} alt={projectAlt} />
            <div
                className={`${divHoverClass} w-full bg-gradient-to-t from-mistGray-950 via-mistGray-900 to-transparent rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-10 text-center text-sm transition-all`}>
                <h3 className='font-Kanit text-mistGray-100 text-3xl font-semibold tracking-wide sm:mt-[50%] mt-[20%]'>
                    <span className='text-rioGrande-600 mr-1'>.</span>
                    {projectTitle}
                </h3>
                <p className='text-mistGray-50 font-light text-base leading-relaxed'>{projectDesc}</p>
                <div className='flex flex-wrap justify-starts items-center text-xs text-white font-medium gap-2 mt-4'>
                    {projectTech.map((tech) => (
                        <span key={tech} className='px-2 py-1 rounded bg-mistGray-500 font-semibold'>
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between items-center gap-2 mt-4'>
                    <a
                        onClick={(e) => e.stopPropagation()}
                        href={projectRepo}
                        target='_blank'
                        rel='noreferrer noopener'
                        className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg bg-royalBlue-500 
              border-2 border-royalBlue-600 text-mistGray-50 text-sm font-semibold tracking-wide
              hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`}>
                        Repository <FaCode />
                    </a>
                    <a
                        onClick={(e) => e.stopPropagation()}
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

ProjectCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectTech: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectImg: PropTypes.string.isRequired,
    projectAlt: PropTypes.string.isRequired,
    projectRepo: PropTypes.string.isRequired,
    projectDemo: PropTypes.string.isRequired,
};

export default ProjectCard;
