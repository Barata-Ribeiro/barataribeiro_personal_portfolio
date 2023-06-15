import React from 'react';
import { Element } from 'react-scroll';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const Education = () => {
  const intensiveCourses = [
    { course: 'UI Design for Beginners', place: 'Origamid' },
    { course: 'HTML & CSS for Beginners', place: 'Origamid' },
    { course: 'CSS Grid Layout & CSS Flexbox', place: 'Origamid' },
    { course: 'Programming Logic', place: 'Udemy' },
    { course: 'Responsive Web Design', place: 'freeCodeCamp' },
    { course: 'Algorithms', place: 'Curso em Video' },
    { course: 'Advanced UI Design', place: 'Origamid' },
    { course: 'JavaScript ES6+', place: 'Origamid' },
    { course: 'Advanced Typography', place: 'Origamid' },
    { course: 'Complete React JS', place: 'Origamid' },
  ];

  return (
    <Element name='education'>
      <section className='mb-[7.5rem]'>
        <article>
          {/* TITLE */}
          <div className='flex flex-col items-center mb-6'>
            <h1 className='font-Kanit text-mistGray-950 text-6xl text-center'>
              <span className='text-rioGrande-600'>.</span>Education
            </h1>
            <p className='text-mistGray-600 max-w-[34rem] text-center leading-relaxed'>
              With a bachelor's in{' '}
              <span className='text-mistGray-950'>Business Administration</span>
              , and two graduate courses in the field, I am currently
              specializing in{' '}
              <span className='text-mistGray-950'>UI Design</span> and
              <span className='text-mistGray-950'>
                {' '}
                Front-end development
              </span>{' '}
              through intensive online courses. I aim to combine analytical and
              strategic skills with creative abilities to create efficient and
              intuitive user interfaces.
            </p>
          </div>

          {/* Education */}
          <div className='flex justify-center w-[1220px] gap-4'>
            <div className='w-max'>
              <div className='flex rounded-lg h-full bg-mistGray-950 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-50 text-2xl'>
                    2018 - Bachelor's Degree
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-mistGray-50 font-Kanit text-2xl text-semibold tracking-wide'>
                    Business Administration
                  </p>
                  <p className='mt-3 text-mistGray-50 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
            <div className='w-max'>
              <div className='flex rounded-lg h-full bg-mistGray-950 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-50 text-2xl'>
                    2020 - Graduate Course
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-mistGray-50 font-Kanit text-2xl text-semibold tracking-wide'>
                    Strategic People Management
                  </p>
                  <p className='mt-3 text-mistGray-50 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
            <div className='w-max'>
              <div className='flex rounded-lg h-full bg-mistGray-950 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-50 text-2xl'>
                    2022 - Gradute Course
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-mistGray-50 font-Kanit text-2xl text-semibold tracking-wide'>
                    Project Management
                  </p>
                  <p className='mt-3 text-mistGray-50 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className='w-[960px] flex flex-col place-items-center mx-auto mt-8'>
          {/* COURSES */}
          <h1 className='sm:text-3xl text-2xl font-semibold text-center text-mistGray-950 mb-4'>
            Intensive Courses
          </h1>
          <ol className='flex flex-wrap-reverse gap-4 mx-3'>
            {intensiveCourses.map((course, index) => (
              <li
                data-course={`${index + 1}`}
                className='relative courses w-[28.75rem]'
                key={index}>
                <div className='flex justify-between bg-mistGray-950 rounded p-4 h-full items-center'>
                  <div className='flex items-center'>
                    <FaCheckCircle className='text-royalBlue-600 w-6 h-6 flex-shrink-0 mr-4' />
                    <span className='text-mistGray-50 font-semibold tracking-wide'>
                      {course.course}
                    </span>
                  </div>
                  <span className='text-mistGray-300 font-semibold tracking-wide max-xs:hidden'>
                    {course.place}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>
    </Element>
  );
};

export default Education;
