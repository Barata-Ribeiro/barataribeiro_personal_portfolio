import React from 'react';
import { Element } from 'react-scroll';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const Education = () => {
  return (
    <Element name='education'>
      <section aria-label='Education section' className='bg-mistGray-950'>
        <div className='container max-w-[1440px] sm:py-32 max-sm:py-16 max-xs:py-6'>
          {/* Education */}
          <div className='flex flex-wrap justify-center'>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-950 text-2xl'>
                    2018 - Bachelor's Degree
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='font-Kanit text-2xl text-semibold tracking-wide'>
                    Business Administration
                  </p>
                  <p className='mt-3 text-mistGray-950 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-950 text-2xl'>
                    2020 - Graduate Course
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='font-Kanit text-2xl text-semibold tracking-wide'>
                    Strategic People Management
                  </p>
                  <p className='mt-3 text-mistGray-950 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                    <FaGraduationCap size={20} />
                  </div>
                  <h2 className='text-mistGray-950 text-2xl'>
                    2022 - Gradute Course
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='font-Kanit text-2xl text-semibold tracking-wide'>
                    Project Management
                  </p>
                  <p className='mt-3 text-mistGray-950 inline-flex items-center'>
                    Estácio de Sá University
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Courses */}
          <h1 className='sm:text-3xl text-2xl font-semibold text-center text-mistGray-50 mt-8 mb-4'>
            Intensive Courses
          </h1>
          <div className='flex flex-wrap-reverse lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
            {/* UI Design for Beginners */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    UI Design for Beginners
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Origamid
                </span>
              </div>
            </div>

            {/* HTML & CSS for Beginners */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    HTML & CSS for Beginners
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Origamid
                </span>
              </div>
            </div>

            {/* CSS Grid Layout & CSS Flexbox */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    CSS Grid Layout & CSS Flexbox
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Origamid
                </span>
              </div>
            </div>

            {/* Advanced UI Design */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    Advanced UI Design
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Origamid
                </span>
              </div>
            </div>

            {/* Complete JavaScript ES6+ */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    JavaScript ES6+
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Origamid
                </span>
              </div>
            </div>

            {/* Responsive Web Design */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    Responsive Web Design
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  freeCodeCamp
                </span>
              </div>
            </div>

            {/* Programming Logic */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    Programming Logic
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Udemy
                </span>
              </div>
            </div>

            {/* Algorithms */}
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='flex justify-between bg-gray-100 rounded p-4 h-full items-center'>
                <div className='flex'>
                  <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='font-semibold tracking-wide'>
                    Algorithms
                  </span>
                </div>
                <span className='text-mistGray-300 font-semibold tracking-wide'>
                  Curso em Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
