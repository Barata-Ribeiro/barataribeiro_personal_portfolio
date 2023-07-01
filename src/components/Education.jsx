import React from 'react';
import { Element } from 'react-scroll';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const Education = () => {
    const intensiveCourses = [
        { id: 'course1', course: 'UI Design for Beginners', place: 'Origamid' },
        { id: 'course2', course: 'HTML & CSS for Beginners', place: 'Origamid' },
        { id: 'course3', course: 'CSS Grid Layout & CSS Flexbox', place: 'Origamid' },
        { id: 'course4', course: 'Programming Logic', place: 'Udemy' },
        { id: 'course5', course: 'Responsive Web Design', place: 'freeCodeCamp' },
        { id: 'course6', course: 'Algorithms', place: 'Curso em Video' },
        { id: 'course7', course: 'Advanced UI Design', place: 'Origamid' },
        { id: 'course8', course: 'JavaScript ES6+', place: 'Origamid' },
        { id: 'course9', course: 'Advanced Typography', place: 'Origamid' },
        { id: 'course10', course: 'Complete React JS', place: 'Origamid' },
    ];

    return (
        <Element name='education'>
            <section aria-label='Education section' className='bg-mistGray-950'>
                <div className='container max-w-[90rem] sm:py-32 xs:py-16 py-6 px-4'>
                    <div className='flex justify-center'>
                        <p className='max-w-2xl text-mistGray-500 leading-relaxed mb-4 text-center text-xl'>
                            With a bachelor's in <span className='text-mistGray-50'>Business Administration</span>, with two <span className='text-mistGray-50'>graduate courses</span> in the field, I am currently
                            specializing in <span className='text-mistGray-50'>UI Design</span> and <span className='text-mistGray-50'>Front-end</span> development through online courses. I aim to combine analytical and
                            strategic skills with creative abilities to create efficient and intuitive user interfaces.
                        </p>
                    </div>

                    {/* Education */}
                    <div className='flex flex-wrap justify-center'>
                        <div className='p-4 md:w-1/3'>
                            <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                                        <FaGraduationCap size={20} />
                                    </div>
                                    <h2 className='text-mistGray-950 text-2xl'>2018 - Bachelor's Degree</h2>
                                </div>
                                <div className='flex-grow'>
                                    <p className='font-Kanit text-2xl text-semibold tracking-wide'>Business Administration</p>
                                    <p className='mt-3 text-mistGray-950 inline-flex items-center'>Estácio de Sá University</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 md:w-1/3'>
                            <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                                        <FaGraduationCap size={20} />
                                    </div>
                                    <h2 className='text-mistGray-950 text-2xl'>2020 - Graduate Course</h2>
                                </div>
                                <div className='flex-grow'>
                                    <p className='font-Kanit text-2xl text-semibold tracking-wide'>Strategic People Management</p>
                                    <p className='mt-3 text-mistGray-950 inline-flex items-center'>Estácio de Sá University</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 md:w-1/3'>
                            <div className='flex rounded-lg h-full bg-mistGray-50 p-8 flex-col shadow-lg'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rioGrande-600 text-white flex-shrink-0'>
                                        <FaGraduationCap size={20} />
                                    </div>
                                    <h2 className='text-mistGray-950 text-2xl'>2022 - Gradute Course</h2>
                                </div>
                                <div className='flex-grow'>
                                    <p className='font-Kanit text-2xl text-semibold tracking-wide'>Project Management</p>
                                    <p className='mt-3 text-mistGray-950 inline-flex items-center'>Estácio de Sá University</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses */}
                    <h1 className='sm:text-3xl text-2xl font-semibold text-center text-mistGray-50 mt-8 mb-4'>Intensive Courses</h1>
                    <ol className='flex flex-wrap-reverse lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
                        {intensiveCourses.map((course, index) => (
                            <li data-course={`${index + 1}`} className='relative courses p-2 sm:w-1/2 w-full' key={course.id}>
                                <div className='flex justify-between bg-mistGray-50 rounded p-4 h-full items-center'>
                                    <div className='flex items-center'>
                                        <FaCheckCircle className='text-rioGrande-600 w-6 h-6 flex-shrink-0 mr-4' aria-hidden='true' />
                                        <span className='font-semibold tracking-wide'>{course.course}</span>
                                    </div>
                                    <span className='text-mistGray-300 font-semibold tracking-wide max-xs:hidden'>{course.place}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <div className='flex flex-col place-items-center mt-6'>
                        <a
                            href='www.linkedin.com/in/joão-mendes-jorge-barata-ribeiro-645073118'
                            rel='noreferrer'
                            target='_blank'
                            className='sm:text-xl text-base font-semibold text-center text-mistGray-500 underline underline-offset-4 transition-colors hover:text-royalBlue-500'>
                            Check LinkedIn for Certifications...
                        </a>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Education;
