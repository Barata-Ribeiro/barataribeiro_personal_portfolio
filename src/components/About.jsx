import React from 'react';
import { Element } from 'react-scroll';
import AboutPicture from '/assets/img/about-picture.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SocialButton from './utils/SocialButton';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

const About = () => {
  const shadowEffect = {
    boxShadow:
      'inset 0px 48px 0px 0px rgba(247,247,245,1), inset 0px -48px 0px 0px rgba(247,247,245,1)',
  };

  return (
    <Element name='about'>
      <section style={shadowEffect} className='bg-mistGray-950 px-[50px]'>
        <div className='flex justify-between items-center gap-5'>
          <LazyLoadImage
            key='about-picture'
            className='max-w-[460px] rounded-2xl'
            src={AboutPicture}
            alt='Photograph of a computer screen with JavaScript code'
            effect='blur'
          />
          <div>
            <div className='text-left'>
              <h2 className='text-2xl text-mistGray-700 leading-tight'>
                João Mendes Jorge{' '}
                <span className='text-mistGray-50'>Barata Ribeiro</span>
              </h2>
              <h3 className='font-Kanit text-mistGray-50 font-thin text-xl leading-tight'>
                Front-end Developer & UI Designer
              </h3>
            </div>
            <p className='max-w-xl text-mistGray-500 text-justify leading-relaxed mt-4'>
              With a solid academic foundation in{' '}
              <span className='text-mistGray-50'>Business Administration</span>{' '}
              and graduate courses in{' '}
              <span className='text-mistGray-50'>
                Strategic People Management
              </span>{' '}
              and <span className='text-mistGray-50'>Project Management</span>,
              I want to blend strategy and execution. My goal is to create and
              deliver projects that not only look good but also work efficiently
              in practice. Right now, I'm diving into the world of{' '}
              <span className='text-mistGray-50'>Front-end Development</span>{' '}
              and <span className='text-mistGray-50'>UI Design</span>, aiming to
              design eye-catching interfaces that prioritize user experience and
              satisfaction. I can’t wait to use my developing set of skills to
              contribute to the success of forward-thinking teams and
              organizations. Let's make great things happen!
            </p>
            <div className='flex justify-start sm:justify-end items-center gap-2'>
              <SocialButton
                href={
                  'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/'
                }
                title={'LinkedIn profile'}
                icon={<FaLinkedinIn size={25} />}
                text={'LinkedIn'}
              />
              <SocialButton
                href={'http://barataribeiro.com/'}
                title={'GitHub profile'}
                icon={<FaGithub size={25} />}
                text={'GitHub'}
              />
              <SocialButton
                href={'mailto:j.mendes1920@gmail.com'}
                title={'Send Email'}
                icon={<SiMaildotru size={25} />}
                text={'Email'}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;