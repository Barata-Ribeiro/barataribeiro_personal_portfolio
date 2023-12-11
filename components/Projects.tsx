'use client';

import Carousel from '@/components/Carousel';
import { useState } from 'react';

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

export const Projects = ({ projects }: ProjectsProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  return (
    <section id='projects' className='flex items-center flex-col'>
      <div className='justify-center flex-1 max-w-6xl mx-auto'>
        <div className='px-4 mb-5 md:text-center md:mb-20'>
          <p className='mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400'>
            Projects
          </p>
          <h2 className='text-2xl md:text-4xl leading-tight text-mistGray-950 dark:text-mistGray-50'>
            What I&apos;ve been up to
          </h2>
          <div className='flex w-32 mt-3 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
            <div className='flex-1 h-2 dark:bg-rioGrande-200 bg-rioGrande-700'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-400 bg-rioGrande-800'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-300 bg-rioGrande-600'></div>
          </div>
        </div>
      </div>
      <Carousel
        slides={projects.map((project) => project.img)}
        onSlideChange={setCurrentProjectIndex}
      />
      <div className='project-info'>
        <h3>{currentProject.title}</h3>
        <p>{currentProject.desc}</p>
        {/* ... additional project details ... */}
      </div>
    </section>
  );
};
