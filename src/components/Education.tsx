import { Element } from 'react-scroll';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import {
  EducationCardProps,
  IntensiveCourse,
  IntensiveCourseProps,
} from '../types/IntensiveCourse';

const EducationCard: React.FC<EducationCardProps> = ({ year, degree, university }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex h-full flex-col rounded-lg bg-mistGray-50 p-8 shadow-lg">
        <div className="mb-3 flex items-center gap-2">
          <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rioGrande-600 text-white">
            <FaGraduationCap size={20} />
          </div>
          <h2 className="text-2xl text-mistGray-950">{year}</h2>
        </div>
        <div className="flex-grow">
          <p className="font-Kanit text-2xl font-semibold tracking-wide">{degree}</p>
          <p className="mt-3 inline-flex items-center text-mistGray-950">
            {university}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC<IntensiveCourseProps> = ({ intensiveCourses }) => {
  const educationData = [
    {
      year: "2018 - Bachelor's Degree",
      degree: 'Business Administration',
      university: 'Estácio de Sá University',
    },
    {
      year: '2020 - Graduate Course',
      degree: 'Strategic People Management',
      university: 'Estácio de Sá University',
    },
    {
      year: '2022 - Gradute Course',
      degree: 'Project Management',
      university: 'Estácio de Sá University',
    },
  ];

  const renderCourses = (course: IntensiveCourse, index: number) => {
    return (
      <li
        data-course={`${index + 1}`}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="courses relative w-full p-2 sm:w-1/2"
        key={course.id}
      >
        <div className="flex h-full items-center justify-between rounded bg-mistGray-50 p-4">
          <div className="flex items-center">
            <FaCheckCircle
              className="mr-4 h-6 w-6 flex-shrink-0 text-rioGrande-600"
              aria-hidden="true"
            />
            <span className="font-semibold tracking-wide">{course.course}</span>
          </div>
          <span className="max-xs:hidden font-semibold tracking-wide text-mistGray-300">
            {course.place}
          </span>
        </div>
      </li>
    );
  };

  return (
    <Element name="education">
      <section aria-label="Education section" className="bg-mistGray-950">
        <div className="xs:pt-16 container max-w-[90rem] px-4 pt-6 sm:pt-32">
          <div className="flex justify-center">
            <p className="mb-4 max-w-2xl text-center text-xl leading-relaxed text-mistGray-500">
              Dive into my educational track: a Bachelor's in{' '}
              <span className="text-mistGray-50">Business Administration</span>,
              followed by two enriching{' '}
              <span className="text-mistGray-50">graduate courses</span>. Now, I'm
              adding a creative edge to my profile, specializing in{' '}
              <span className="text-mistGray-50">UI Design</span> and{' '}
              <span className="text-mistGray-50">Front-End Development</span> through
              intensive <span className="text-mistGray-50">online courses</span>.
              Explore below!
            </p>
          </div>

          {/* Education */}
          <div className="flex flex-wrap justify-center">
            {educationData.map((data, index) => (
              <EducationCard
                key={index}
                year={data.year}
                degree={data.degree}
                university={data.university}
              />
            ))}
          </div>

          {/* Courses */}
          <h1 className="mb-4 mt-8 text-center text-2xl font-semibold text-mistGray-50 sm:text-3xl">
            Intensive Courses
          </h1>
          <ol className="-mx-2 flex flex-wrap-reverse sm:mx-auto lg:w-4/5">
            {intensiveCourses?.map(renderCourses)}
          </ol>
          <div className="xs:py-8 flex flex-col place-items-center py-3 sm:py-16">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-center text-base font-semibold text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500 sm:text-xl"
            >
              Check LinkedIn for Certifications...
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
