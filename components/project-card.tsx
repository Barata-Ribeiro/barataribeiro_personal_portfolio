import { Project } from "@/components/sections/projects"
import Image from "next/image"
import LinkButton from "@/components/general/link-button"

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
    return (
        <article className="flex max-w-sm flex-col items-start justify-between overflow-hidden rounded bg-mistGray-50 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:bg-mistGray-900">
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
                    <p className="text-base text-mistGray-700 dark:text-mistGray-400">{project.desc}</p>
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
            <div className="flex h-max w-full flex-wrap gap-2 justify-self-end px-6 pb-6">
                {project.tech.map((tech, index) => (
                    <span
                        key={tech + "-" + index}
                        className="block flex-grow select-none rounded-full bg-mistGray-200 px-3 py-1 text-center text-sm font-semibold text-mistGray-700"
                    >
                        #{tech}
                    </span>
                ))}
            </div>
        </article>
    )
}
