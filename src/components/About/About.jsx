import React from 'react';
import aboutImage from '../../assets/illustration.jpg';
import SocialButtons from '../Global/SmallButton';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

const About = () => {
  return (
    <section className='bg-mistGray-950'>
      <div className='container sm:py-[72px] max-sm:py-[36px]'>
        <div className='flex justify-start items-center text-5xl'>
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
        <div className='flex justify-between items-center'>
          <img className='h-[500px]' src={aboutImage} alt='' />
          <div className='flex flex-col items-end'>
            <div>
              <div className='text-right'>
                <h2 className='text-2xl text-mistGray-700 leading-tight'>
                  João Mendes Jorge{' '}
                  <span className='text-mistGray-50'>Barata Ribeiro</span>
                </h2>
                <h3 className='font-Kanit text-mistGray-50 font-thin text-xl leading-tight'>
                  Front-end Developer & UI Designer
                </h3>
              </div>
              <p className='max-w-lg text-mistGray-500 text-right leading-relaxed mt-3'>
                Business admin grad merging strategy & execution for
                well-managed, engaging projects. Diving into{' '}
                <span className='text-mistGray-50'>Front-end Dev</span> &{' '}
                <span className='text-mistGray-50'>UI Design</span> for visually
                appealing interfaces & user experiences. Eager to contribute to
                innovative teams' success.
              </p>
            </div>
            <div className='flex justify-end items-center gap-2'>
              <SocialButtons
                href={
                  'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/'
                }
                icon={<FaLinkedinIn />}
              />
              <SocialButtons
                href={'http://barataribeiro.com/'}
                icon={<FaGithub />}
              />
              <SocialButtons
                href={'mailto:j.mendes1920@gmail.com'}
                icon={<SiMaildotru />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
