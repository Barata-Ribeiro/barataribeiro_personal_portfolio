import { FaCheckCircle, FaGraduationCap } from "react-icons/fa"
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
  degree: string
  university: string
}

interface HigherEducationProps {
  highEducationCourses: HigherEducationCourse[]
}

type DataEducation = IntensiveCourseProps & HigherEducationProps

const renderCourses = (course: IntensiveCourse, index: number) => {
  return (
    <li
      data-course={`${index + 1}`}
      className="courses relative w-full p-2 sm:w-1/2"
      key={course.id}
    >
      <div className="flex h-full items-center justify-between rounded bg-white p-4 dark:bg-mistGray-800">
        <div className="flex items-center">
          <FaCheckCircle
            className="mr-4 h-6 w-6 flex-shrink-0 text-rioGrande-600"
            aria-hidden="true"
          />
          <span className="font-semibold tracking-wide text-mistGray-950 dark:text-mistGray-50">
            {course.course}
          </span>
        </div>
        <span className="font-semibold tracking-wide text-mistGray-300 max-xs:hidden">
          {course.place}
        </span>
      </div>
    </li>
  )
}

const renderHigherEducation = (
  course: HigherEducationCourse,
  index: number
) => {
  return (
    <div className="w-full sm:w-fit lg:w-1/3 lg:p-2" key={`hec-${index + 1}`}>
      <div className="flex h-full flex-col rounded-lg bg-mistGray-200 p-8 shadow-lg dark:bg-mistGray-900">
        <div className="mb-3 flex items-center gap-2">
          <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rioGrande-600 text-white">
            <FaGraduationCap size={20} />
          </div>
          <h2 className="text-2xl text-mistGray-950 dark:text-mistGray-50">
            {course.year}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="font-Kanit text-2xl font-semibold tracking-wide">
            {course.degree}
          </p>
          <p className="mt-3 inline-flex items-center text-mistGray-950 dark:text-mistGray-50">
            {course.university}
          </p>
        </div>
      </div>
    </div>
  )
}

export const Education = ({
  intensiveCourses,
  highEducationCourses,
}: DataEducation) => {
  return (
    <section
      id="education"
      aria-label="Education section"
      role="region"
      className="mb-4 flex items-center"
    >
      <h1 className="sr-only">Education and Courses</h1>
      <div className="mx-auto max-w-6xl flex-1 justify-center">
        <div className="mb-8 px-4 md:text-center">
          <p className="mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400">
            Education
          </p>
          <h2 className="text-2xl leading-tight text-mistGray-950 dark:text-mistGray-50 md:text-4xl">
            How I learned things
          </h2>
          <div className="mt-3 flex w-32 overflow-hidden rounded md:mx-auto">
            <div className="h-2 flex-1 bg-rioGrande-700 dark:bg-rioGrande-200"></div>
            <div className="h-2 flex-1 bg-rioGrande-800 dark:bg-rioGrande-400"></div>
            <div className="h-2 flex-1 bg-rioGrande-600 dark:bg-rioGrande-300"></div>
          </div>
        </div>
        <div className="max-w-[90rem] px-4">
          <div className="flex justify-center">
            <p className="mb-4 max-w-2xl text-left text-xl leading-relaxed text-mistGray-600 dark:text-gray-400 md:text-center">
              Dive into my educational track: a Bachelor&apos;s in{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Business Administration
              </span>
              , followed by two enriching{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                graduate courses
              </span>
              . Now, I&apos;m adding a creative edge to my profile, specializing
              in{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                UI Design
              </span>{" "}
              and{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Front-End Development
              </span>{" "}
              through intensive{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                online courses
              </span>
              . Explore below!
            </p>
          </div>

          {/* Education */}
          <div
            className="flex flex-wrap justify-center gap-4 lg:gap-0"
            aria-label="List of Higher Education"
          >
            {highEducationCourses?.map(renderHigherEducation)}
          </div>

          {/* Courses */}
          <h1 className="mb-4 mt-8 text-center text-2xl font-semibold text-mistGray-950 dark:text-mistGray-50 sm:text-3xl">
            Intensive Courses
          </h1>
          <ol
            className="-mx-2 flex flex-wrap-reverse sm:mx-auto lg:w-4/5"
            role="list"
            aria-label="List of Intensive Courses"
          >
            {intensiveCourses?.map(renderCourses)}
          </ol>
          <div className="flex flex-col place-items-center py-3 xs:py-8 sm:py-16">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Check LinkedIn for Certifications"
              className="text-center text-base font-semibold text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500 sm:text-xl"
            >
              Check LinkedIn for Certifications...
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
