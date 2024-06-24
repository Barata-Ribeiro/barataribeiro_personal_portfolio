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
      className="bg-mistGray-300 px-1 py-32 md:px-0"
    >
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-full grid grid-cols-1 gap-5 justify-self-center lg:col-span-2 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard project={project} key={project.id + "-" + index} />
          ))}
        </div>
        <h1
          className="order-first col-span-full m-auto h-max w-max justify-self-center text-right font-Kanit text-7xl font-semibold uppercase leading-none tracking-wide text-mistGray-400 sm:text-8xl md:place-self-auto md:text-9xl lg:order-last lg:col-span-2 lg:text-[12rem]"
          aria-label="Projects"
          title="Projects"
        >
          <span className="text-rioGrande-600">.</span>Proj
          <br />
          ects
        </h1>
      </div>
      <div className="container mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.slice(2).map((project, index) => (
          <ProjectCard project={project} key={project.id + "-" + index} />
        ))}
      </div>
    </section>
  )
}
