import LinkButton  from "@/components/general/link-button"
import { Project } from "@/components/sections/projects"
import tw          from "@/utils/tw"
import Image       from "next/image"
import { twMerge } from "tailwind-merge"

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
    const buttonClasses = tw`bg-royal-blue-600 font-Comfortaa text-mist-gray-50 hover:bg-royal-blue-700 hover:text-mist-gray-50 active:bg-royal-blue-800 mt-6 inline-block rounded-lg px-6 py-3 text-sm`
    const isDemoEmpty = project.demo === ""
    return (
        <article className="bg-mist-gray-50 dark:bg-mist-gray-900 flex max-w-sm flex-col items-start justify-between overflow-hidden rounded-sm shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="">
                <div className="relative h-56 w-full">
                    <Image
                        src={ project.img }
                        alt={ project.alt }
                        className="object-cover object-top"
                        sizes="(min-width: 808px) 50vw, 100vw"
                        fill
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-Kanit mb-2 text-xl font-bold tracking-wide">
                        <span className="text-rio-grande-600">.</span>
                        { project.title }
                    </div>
                    <p className="text-mist-gray-700 dark:text-mist-gray-400 text-base">{ project.desc }</p>
                    <div className="flex gap-2">
                        <LinkButton
                            href={ project.repo }
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ buttonClasses }>
                            Repo
                        </LinkButton>
                        <LinkButton
                            href={ project.demo }
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ twMerge(
                                buttonClasses,
                                isDemoEmpty ? "pointer-events-none opacity-50 grayscale" : "",
                            ) }>
                            Demo
                        </LinkButton>
                    </div>
                </div>
            </div>
            <div className="flex h-max w-full flex-wrap gap-2 justify-self-end px-6 pb-6">
                { project.tech.map((tech, index) => (
                    <span
                        key={ tech + "-" + index }
                        className="bg-mist-gray-200 text-mist-gray-700 block grow rounded-full px-3 py-1 text-center text-sm font-semibold select-none">
                        #{ tech }
                    </span>
                )) }
            </div>
        </article>
    )
}
