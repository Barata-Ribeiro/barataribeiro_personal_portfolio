import { Project } from "@/components/sections/projects"
import Image from "next/image"
import LinkButton from "@/components/general/link-button"

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <article className="flex max-w-sm flex-col items-start justify-between overflow-hidden rounded bg-mistGray-50 shadow-lg">
      <div className="">
        <div className="relative h-56 w-full">
          <Image
            src={project.img}
            alt={project.alt}
            className="object-cover object-top"
            sizes="(min-width: 808px) 50vw, 100vw"
            fill
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 font-Kanit text-xl font-bold tracking-wide">
            <span className="text-rioGrande-600">.</span>
            {project.title}
          </div>
          <p className="text-base text-gray-700">{project.desc}</p>
          <LinkButton
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-royalBlue-600 px-6 py-3 font-Comfortaa text-sm text-mistGray-50 hover:bg-royalBlue-700 hover:text-mistGray-50 active:bg-royalBlue-800"
          >
            Repository
          </LinkButton>
        </div>
      </div>
      <div className="h-max w-full justify-self-end px-6 pb-2 pt-4">
        {project.tech.map((tech, index) => (
          <span
            key={tech + "-" + index}
            className="mb-2 mr-2 inline-block select-none rounded-full bg-mistGray-200 px-3 py-1 text-sm font-semibold text-mistGray-700"
          >
            #{tech}
          </span>
        ))}
      </div>
    </article>
  )
}
