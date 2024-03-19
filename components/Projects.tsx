"use client"

import Carousel from "@/components/Carousel"
import Link from "next/link"
import { memo, useMemo, useState } from "react"
import { FaCode, FaRegPlayCircle } from "react-icons/fa"

interface Project {
  id: string
  title: string
  desc: string
  img: string
  alt: string
  tech: string[]
  repo: string
  demo: string
}

interface ProjectsProps {
  projects: Project[]
}

const CarouselMemo = memo(Carousel)

export const Projects = ({ projects }: ProjectsProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const currentProject = projects[currentProjectIndex]

  const carouselSlides = useMemo(
    () => projects.map((project) => project),
    [projects]
  )

  return (
    <section
      id="projects"
      aria-label="Project section"
      role="region"
      className="flex flex-col items-center"
    >
      <h1 className="sr-only">My Projects</h1>
      <div className="mx-auto max-w-6xl flex-1 justify-center">
        <div className="mb-4 px-4 md:text-center">
          <p className="mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400">
            Projects
          </p>
          <h2 className="text-2xl leading-tight text-mistGray-950 dark:text-mistGray-50 md:text-4xl">
            What I&apos;ve been up to
          </h2>
          <div className="mt-3 flex w-32 overflow-hidden rounded md:mx-auto">
            <div className="h-2 flex-1 bg-rioGrande-700 dark:bg-rioGrande-200"></div>
            <div className="h-2 flex-1 bg-rioGrande-800 dark:bg-rioGrande-400"></div>
            <div className="h-2 flex-1 bg-rioGrande-600 dark:bg-rioGrande-300"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <CarouselMemo
            slides={carouselSlides}
            onSlideChange={setCurrentProjectIndex}
          />
          <div id="project-info" className="max-w-md flex-1 text-center">
            <h3 className="font-Kanit text-xl font-semibold tracking-wide text-mistGray-950 dark:text-mistGray-100">
              <span className="mr-1 text-4xl text-rioGrande-600">.</span>{" "}
              {currentProject.title}
            </h3>
            <p className="text-base font-light leading-relaxed text-mistGray-950 dark:text-mistGray-50">
              {currentProject.desc}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-start gap-2 text-xs font-medium text-mistGray-600 dark:text-white">
              {currentProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="grow rounded bg-mistGray-200 px-2 py-1 font-semibold dark:bg-mistGray-300"
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Link
                onClick={(e) => e.stopPropagation()}
                href={currentProject.repo}
                aria-label="Open Repository"
                target="_blank"
                rel="noreferrer noopener"
                className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500"
              >
                Repository <FaCode />
              </Link>
              <a
                onClick={(e) => e.stopPropagation()}
                href={currentProject.demo}
                aria-label="See Demo"
                target="_blank"
                rel="noreferrer noopener"
                className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-royalBlue-600 bg-royalBlue-500
              px-2 py-1 text-sm font-semibold tracking-wide text-mistGray-50
              hover:border-royalBlue-500 hover:bg-mistGray-50 hover:text-royalBlue-500"
              >
                Demo <FaRegPlayCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
