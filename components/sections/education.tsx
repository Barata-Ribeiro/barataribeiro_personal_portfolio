import { Fragment } from "react"
import tw from "@/utils/tw"
import { twMerge } from "tailwind-merge"
import LinkButton from "@/components/general/link-button"

interface IntensiveCourse {
  id: string
  course: string
  place: string
}

interface IntensiveCourseProps {
  intensiveCourses: IntensiveCourse[]
}

interface HigherEducationCourse {
  year: string
  type: string
  degree: string
  university: string
}

interface HigherEducationProps {
  highEducationCourses: HigherEducationCourse[]
}

type DataEducation = IntensiveCourseProps & HigherEducationProps

export default function Education({
  intensiveCourses,
  highEducationCourses,
}: DataEducation) {
  const pseudoElement = tw`before:absolute before:-left-3 before:bottom-0.5 before:h-5 before:w-1 before:bg-rioGrande-600 before:content-['']`

  return (
    <section
      id="education"
      aria-label="Education section"
      role="region"
      className="bg-mistGray-900 px-1 pt-32 md:px-0"
    >
      <div className="container grid grid-cols-1 items-start justify-center md:grid-cols-2">
        <h1
          className="w-max place-self-center font-Kanit text-7xl font-semibold uppercase leading-none tracking-wide sm:text-8xl md:place-self-auto md:text-9xl"
          aria-label="Education"
          title="Education"
        >
          <span className="text-rioGrande-600">.</span>Educ
          <br />
          ation
        </h1>

        <div className="grid grid-rows-[1fr_auto] gap-10">
          <div className="grid grid-rows-[auto_1fr] gap-5">
            <p className="h-max w-full text-pretty leading-7 text-mistGray-300">
              Dive into my educational track: a Bachelor&apos;s in{" "}
              <em
                title="Business Administration"
                className="not-italic text-mistGray-50"
              >
                Business Administration
              </em>
              , followed by two enriching graduate courses. Now, I&apos;m adding a
              creative edge to my profile, specializing in{" "}
              <em title="UI Design" className="not-italic text-mistGray-50">
                UI Design
              </em>{" "}
              and{" "}
              <em
                title="Full-stack Development"
                className="not-italic text-mistGray-50"
              >
                Full-stack Development
              </em>{" "}
              through intensive online courses. <br />
              Explore below!
            </p>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {highEducationCourses.map((course) => (
                <div
                  key={course.degree}
                  className="flex h-full w-full flex-col gap-12 place-self-center rounded-lg bg-mistGray-950 p-5 sm:w-1/2 md:w-full"
                >
                  <div className="w-full max-w-[200px] flex-grow">
                    <h4 className="font-roboto mb-3 text-sm leading-tight text-mistGray-300">
                      {course.type}
                    </h4>
                    <h2 className="font-Kanit text-lg font-bold leading-tight tracking-wide text-mistGray-50">
                      <span className="text-rioGrande-600">.</span>
                      {course.degree.split("\n").map((line, index) => (
                        <Fragment key={index}>
                          {line}
                          {index < course.degree.split("\n").length - 1 && <br />}
                        </Fragment>
                      ))}
                    </h2>
                  </div>
                  <p className="text-mistGray-300">UNESA</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={twMerge(
                pseudoElement,
                "relative mb-6 font-Kanit text-xl leading-none tracking-wide text-mistGray-300"
              )}
            >
              Intensive Courses
            </h2>
            <ul className="flex flex-col gap-4">
              {intensiveCourses.map((item, index) => (
                <li className="text-mistGray-50" key={item + "-" + index}>
                  {item.course}{" "}
                  <span className="ml-5 text-mistGray-700">/ {item.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-6">
        <LinkButton
          href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
          className="transation-colors m-auto text-base font-semibold text-mistGray-100 underline underline-offset-4 hover:text-royalBlue-600 focus:text-royalBlue-700 active:text-royalBlue-800 sm:text-xl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          Check LinkedIn for Certifications...
        </LinkButton>
      </div>
    </section>
  )
}
