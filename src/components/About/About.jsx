import React from 'react';
import { Element } from 'react-scroll';
import aboutImage from '../../assets/illustration.jpg';
import SocialButtons from '../Global/SmallButton';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

const About = () => {
  return (
    <Element name='about'>
      <section aria-label='About section' className='bg-mistGray-950'>
        <div className='container max-w-[1440px] sm:py-[72px] max-sm:py-[36px]'>
          <div className='flex justify-start items-center text-5xl max-sm:justify-center'>
            <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal'>
              &#60;
            </span>
            <h1 className='font-Kanit font-semibold text-mistGray-50 px-1'>
              About
            </h1>
            <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal'>
              /&#62;
            </span>
          </div>
          <div className='flex justify-between items-center flex-col sm:flex-row'>
            <img
              className='h-auto w-full max-w-md sm:h-[500px] sm:w-auto'
              src={aboutImage}
              alt='Photograph of a computer screen showing javascript code'
            />
            <div className='flex flex-col items-start sm:items-end mt-6 sm:mt-0 max-sm:items-center'>
              <div>
                <div className='text-left sm:text-right max-sm:text-center'>
                  <h2 className='text-2xl text-mistGray-700 leading-tight'>
                    João Mendes Jorge{' '}
                    <span className='text-mistGray-50'>Barata Ribeiro</span>
                  </h2>
                  <h3 className='font-Kanit text-mistGray-50 font-thin text-xl leading-tight'>
                    Front-end Developer & UI Designer
                  </h3>
                </div>
                <p className='max-w-xl text-mistGray-500 text-left sm:text-right leading-relaxed mt-3 max-sm:text-center'>
                  As a business administration graduate with graduate courses in
                  <span className='text-mistGray-50'>
                    {' '}
                    Strategic People Management
                  </span>{' '}
                  and{' '}
                  <span className='text-mistGray-50'>Project Management</span>,
                  I'm passionate about merging strategy and execution to deliver
                  well-managed, visually engaging, and practical projects.
                  Currently, I am broadening my expertise by diving into
                  <span className='text-mistGray-50'>
                    {' '}
                    Front-end Development
                  </span>{' '}
                  and <span className='text-mistGray-50'>UI Design</span>,
                  intending to craft visually appealing and user-friendly
                  interfaces that elevate user experiences. In addition, I am
                  eager to leverage my unique skill set to contribute to the
                  success of innovative teams and organizations.
                </p>
              </div>
              <span className='text-mistGray-50'></span>
              <div className='flex justify-start sm:justify-end items-center gap-2 mt-4'>
                <SocialButtons
                  href={
                    'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/'
                  }
                  title={'LinkedIn profile'}
                  icon={<FaLinkedinIn />}
                />
                <SocialButtons
                  href={'http://barataribeiro.com/'}
                  title={'GitHub profile'}
                  icon={<FaGithub />}
                />
                <SocialButtons
                  href={'mailto:j.mendes1920@gmail.com'}
                  title={'Send Email'}
                  icon={<SiMaildotru />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
