import React from 'react';
import { Element } from 'react-scroll';

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
        <div className='flex flex-col items-center mb-6'>
          <h1 className='font-Kanit text-mistGray-950 text-6xl text-center'>
            <span className='text-rioGrande-600'>.</span>Education
          </h1>
          <p className='text-mistGray-600 max-w-[34rem] text-center leading-relaxed'>
            With a bachelor's in{' '}
            <span className='text-mistGray-950'>Business Administration</span>,
            and two graduate courses in the field, I am currently specializing
            in <span className='text-mistGray-950'>UI Design</span> and
            <span className='text-mistGray-950'>
              {' '}
              Front-end development
            </span>{' '}
            through intensive online courses. I aim to combine analytical and
            strategic skills with creative abilities to create efficient and
            intuitive user interfaces.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default Education;
