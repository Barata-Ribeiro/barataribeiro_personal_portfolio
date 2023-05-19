import React from 'react';
import Illustration from '../../assets/illustration.jpg';
import SocialButton from '../Global/SocialButton';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

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
          <img className='h-[500px]' src={Illustration} alt='' />
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
            <div>
              <SocialButton social={<FaLinkedinIn />} />
              <SocialButton social={<FaGithub />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
