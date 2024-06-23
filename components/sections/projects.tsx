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

export default function Projects({ projects }: ProjectProps) {
  return (
    <section
      id="projects"
      aria-label="Project section"
      role="region"
      className="h-full w-full bg-mistGray-300"
    >
      <div
        role="grid"
        className="container grid grid-cols-1 items-start justify-between md:grid-cols-2"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.id + "-" + index} />
          ))}
        </div>
        <h1
          className="w-max place-self-center text-right font-Kanit text-7xl font-semibold uppercase leading-none tracking-wide sm:text-8xl md:place-self-auto md:text-9xl"
          aria-label="Education"
          title="Education"
        >
          <span className="text-rioGrande-600">.</span>Proj
          <br />
          ects
        </h1>
      </div>
    </section>
  )
}
