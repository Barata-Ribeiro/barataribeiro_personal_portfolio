'use client';

import Carousel from '@/components/Carousel';
import Link from 'next/link';
import { memo, useMemo, useState } from 'react';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  tech: string[];
  repo: string;
  demo: string;
}

interface ProjectsProps {
  projects: Project[];
}

const CarouselMemo = memo(Carousel);

export const Projects = ({ projects }: ProjectsProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const carouselSlides = useMemo(
    () => projects.map((project) => project),
    [projects]
  );

  return (
    <section
      id='projects'
      aria-label='Project section'
      role='region'
      className='flex items-center flex-col'>
      <h1 className='sr-only'>My Projects</h1>
      <div className='justify-center flex-1 max-w-6xl mx-auto'>
        <div className='px-4 mb-4 md:text-center'>
          <p className='mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400'>
            Projects
          </p>
          <h2 className='text-2xl md:text-4xl leading-tight text-mistGray-950 dark:text-mistGray-50'>
            What I&apos;ve been up to
          </h2>
          <div className='flex w-32 mt-3 overflow-hidden rounded md:mx-auto'>
            <div className='flex-1 h-2 dark:bg-rioGrande-200 bg-rioGrande-700'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-400 bg-rioGrande-800'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-300 bg-rioGrande-600'></div>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <div id='project-info' className='max-w-md text-center flex-1'>
            <h3 className='font-Kanit text-xl text-mistGray-950 dark:text-mistGray-100 font-semibold tracking-wide'>
              <span className='mr-1 text-rioGrande-600 text-4xl'>.</span>{' '}
              {currentProject.title}
            </h3>
            <p className='text-base font-light leading-relaxed text-mistGray-950 dark:text-mistGray-50'>
              {currentProject.desc}
            </p>
            <div className='mt-2 flex flex-wrap items-center justify-start gap-2 text-xs font-medium text-mistGray-600 dark:text-white'>
              {currentProject.tech.map((tech) => (
                <span
                  key={tech}
                  className='grow rounded bg-mistGray-200 dark:bg-mistGray-300 px-2 py-1 font-semibold'>
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </span>
              ))}
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
              <Link
                onClick={(e) => e.stopPropagation()}
                href={currentProject.repo}
                aria-label='Open Repository'
                target='_blank'
                rel='noreferrer noopener'
                className='flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500'>
                Repository <FaCode />
              </Link>
              <a
                onClick={(e) => e.stopPropagation()}
                href={currentProject.demo}
                aria-label='See Demo'
                target='_blank'
                rel='noreferrer noopener'
                className='flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500'>
                Demo <FaRegPlayCircle />
              </a>
            </div>
          </div>
          <CarouselMemo
            slides={carouselSlides}
            onSlideChange={setCurrentProjectIndex}
          />
        </div>
      </div>
    </section>
  );
};
