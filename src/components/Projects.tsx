import { Element } from 'react-scroll';
import ProjectCard from './SharedComponents/ProjectCard';
import { Project, ProjectsProps } from '../types';

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const renderProjects = (project: Project) => {
    return (
      <ProjectCard
        key={project.id}
        projectTitle={project.title}
        projectDesc={project.desc}
        projectImg={project.img}
        projectAlt={project.alt}
        projectTech={project.tech}
        projectRepo={project.repo}
        projectDemo={project.demo}
      />
    );
  };

  return (
    <Element name="projects">
      <section aria-label="Project section" role="region" className="bg-mistGray-900">
        <h2 className="sr-only">My Projects</h2>
        <div className="xs:pt-16 container max-w-[90rem] px-4 pt-6 sm:pt-32">
          <div
            aria-label="List of projects"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
            role="list"
          >
            {projects.slice(0, 6).map(renderProjects)}
          </div>
        </div>
        <div className="xs:py-8 flex flex-col place-items-center py-3 sm:py-16">
          <a
            href="https://github.barataribeiro.com/"
            aria-label="Check GitHub for more projects"
            rel="noreferrer noopener"
            target="_blank"
            className="text-center text-base font-semibold text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500 sm:text-xl"
          >
            Check GitHub for more projects...
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
