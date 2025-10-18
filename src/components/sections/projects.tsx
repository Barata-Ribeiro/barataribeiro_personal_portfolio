import { Project } from '@/app/types';
import Link from 'next/link';
import ProjectCard from '../project-card';

export interface ProjectProps {
    projects: Project[];
}

export default function Projects({ projects }: Readonly<ProjectProps>) {
    return (
        <section
            id="projects"
            aria-label="Project section"
            className="snap-center bg-foreground/50 pt-40 md:snap-start md:px-0"
        >
            <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-full grid grid-cols-1 gap-5 justify-self-center sm:grid-cols-2 lg:col-span-2">
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectCard key={project.id + '-' + index} {...project} />
                    ))}
                </div>
                <h1
                    className="order-first col-span-full h-max w-max justify-self-center text-right font-Kanit text-7xl leading-none font-semibold tracking-wide text-foreground/60 uppercase sm:text-8xl md:text-9xl lg:order-last lg:col-span-2 lg:justify-self-end lg:text-[12rem]"
                    aria-label="Projects"
                    title="Projects"
                >
                    <span className="text-secondary">.</span>Proj
                    <br />
                    ects
                </h1>
            </div>
            <div className="container mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {projects.slice(2, 6).map((project, index) => (
                    <ProjectCard key={project.id + '-' + index} {...project} />
                ))}
            </div>

            <div className="container flex items-center justify-center py-20">
                <Link
                    href="https://github.barataribeiro.com/"
                    className="transation-colors font-Comfortaa text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary/90 focus-visible:text-primary/70 active:text-primary/80 sm:text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                >
                    Check GitHub for not listed projects...
                </Link>
            </div>
        </section>
    );
}
