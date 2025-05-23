import LinkButton from "@/components/general/link-button"
import ProjectCard from "@/components/project-card"

export interface Project {
    id: string
    title: string
    desc: string
    img: string
    alt: string
    tech: string[]
    repo: string
    demo: string
}

export interface ProjectProps {
    projects: Project[]
}

export default function Projects({ projects }: Readonly<ProjectProps>) {
    return (
        <section
            id="projects"
            aria-label="Project section"
            className="bg-mist-gray-300 snap-center px-1 pt-32 md:snap-start md:px-0">
            <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-full grid grid-cols-1 gap-5 justify-self-center sm:grid-cols-2 lg:col-span-2">
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectCard project={project} key={project.id + "-" + index} />
                    ))}
                </div>
                <h1
                    className="font-Kanit text-mist-gray-400 order-first col-span-full h-max w-max justify-self-center text-right text-7xl leading-none font-semibold tracking-wide uppercase sm:text-8xl md:text-9xl lg:order-last lg:col-span-2 lg:justify-self-end lg:text-[12rem]"
                    aria-label="Projects"
                    title="Projects">
                    <span className="text-rio-grande-600">.</span>Proj
                    <br />
                    ects
                </h1>
            </div>
            <div className="container mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {projects.slice(2, 6).map((project, index) => (
                    <ProjectCard project={project} key={project.id + "-" + index} />
                ))}
            </div>
            <div className="container flex items-center justify-center pt-16 pb-32">
                <LinkButton
                    href="https://github.barataribeiro.com/"
                    className="transation-colors font-Comfortaa text-mist-gray-600 hover:text-royal-blue-600 focus:text-royal-blue-700 active:text-royal-blue-800 text-base font-semibold underline underline-offset-4 sm:text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub">
                    Check GitHub for not listed projects...
                </LinkButton>
            </div>
        </section>
    )
}
