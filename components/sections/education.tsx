import LinkButton from "@/components/general/link-button"
import tw from "@/utils/tw"
import { Fragment } from "react"
import { twMerge } from "tailwind-merge"

export interface IntensiveCourse {
    id: string
    course: string
    place: string
}

interface IntensiveCourseProps {
    intensiveCourses: IntensiveCourse[]
}

export interface HigherEducationCourse {
    year: string
    type: string
    degree: string
    university: string
}

interface HigherEducationProps {
    highEducationCourses: HigherEducationCourse[]
}

type DataEducation = IntensiveCourseProps & HigherEducationProps

export default function Education({ intensiveCourses, highEducationCourses }: DataEducation) {
    const pseudoElement = tw`before:bg-rio-grande-600 before:absolute before:bottom-0.5 before:-left-3 before:h-5 before:w-1 before:content-['']`

    return (
        <section
            id="education"
            aria-label="Education section"
            className="bg-mist-gray-900 snap-center px-1 pt-32 md:snap-start md:px-0">
            <div className="container grid grid-cols-1 items-start justify-center md:grid-cols-2">
                <h1
                    className="font-Kanit text-mist-gray-950 w-max place-self-center text-right text-7xl leading-none font-semibold tracking-wide uppercase sm:text-8xl md:place-self-auto md:text-9xl"
                    aria-label="Education"
                    title="Education">
                    <span className="text-rio-grande-600">.</span>Educ
                    <br />
                    ation
                </h1>

                <div className="grid grid-rows-[1fr_auto] gap-10">
                    <div className="grid grid-rows-[auto_1fr] gap-5">
                        <p className="text-mist-gray-300 h-max w-full leading-7 text-pretty">
                            Dive into my educational track: a Bachelor&apos;s in{" "}
                            <em title="Business Administration" className="text-mist-gray-50 not-italic">
                                Business Administration
                            </em>
                            , followed by two enriching graduate courses. Now, I&apos;m adding a creative edge to my
                            profile, specializing in{" "}
                            <em title="UI Design" className="text-mist-gray-50 not-italic">
                                UI Design
                            </em>{" "}
                            and{" "}
                            <em title="Full-stack Development" className="text-mist-gray-50 not-italic">
                                Full-stack Development
                            </em>{" "}
                            through intensive online courses. <br />
                            Explore below!
                        </p>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {highEducationCourses.map(course => (
                                <div
                                    key={course.degree}
                                    className="bg-mist-gray-950 flex h-full w-full flex-col gap-12 place-self-center rounded-lg p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:w-1/2 md:w-full">
                                    <div className="w-full max-w-[200px] grow">
                                        <h4 className="font-roboto text-mist-gray-300 mb-3 text-sm leading-tight">
                                            {course.type}
                                        </h4>
                                        <h2 className="font-Kanit text-mist-gray-50 text-lg leading-tight font-bold tracking-wide">
                                            <span className="text-rio-grande-600">.</span>
                                            {course.degree.split("\n").map((line, index) => (
                                                <Fragment key={line + "-" + index}>
                                                    {line}
                                                    {index < course.degree.split("\n").length - 1 && <br />}
                                                </Fragment>
                                            ))}
                                        </h2>
                                    </div>
                                    <p className="text-mist-gray-300 flex items-center justify-between">
                                        UNESA{" "}
                                        <span className="text-mist-gray-800 text-xs leading-none">{course.year}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-auto w-max sm:mx-0">
                        <h2
                            className={twMerge(
                                pseudoElement,
                                "font-Kanit text-mist-gray-300 relative mb-6 text-xl leading-none tracking-wide",
                            )}>
                            Intensive Courses
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {[...intensiveCourses].reverse().map((item, index) => (
                                <li className="text-mist-gray-50 font-medium tracking-wide" key={item.id + "-" + index}>
                                    {item.course}{" "}
                                    <span className="font-Comfortaa text-mist-gray-700 ml-5 hidden select-none sm:inline-block">
                                        / {item.place}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container flex items-center justify-center py-8">
                <LinkButton
                    href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
                    className="transation-colors font-Comfortaa text-mist-gray-100 hover:text-royal-blue-600 focus:text-royal-blue-700 active:text-royal-blue-800 text-base font-semibold underline underline-offset-4 sm:text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn">
                    Check LinkedIn for Certifications...
                </LinkButton>
            </div>
        </section>
    )
}
