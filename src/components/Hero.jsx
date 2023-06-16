import React from 'react';
import { Element } from 'react-scroll';
import Avatar from '/assets/img/avatar.jpg';
import MainButton from './utils/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  return (
    <Element name='home'>
      <main className='' aria-label='Site home page'>
        <div className={`mt-[13rem] mb-[7.5rem]`}>
          {/* Hero info */}
          <div className='flex flex-col items-center leading-none text-mistGray-950 text-center gap-6'>
            <LazyLoadImage
              key='avatar'
              height={96}
              width={96}
              className='rounded-full'
              src={Avatar}
              alt='avatar'
              effect='blur'
            />
            <div>
              <h1 className='uppercase font-Kanit font-semibold tracking-wider text-5xl text-mistGray-950'>
                <span className='normal-case font-Robot text-[0.875rem] font-normal tracking-normal -mr-2'>
                  I'm
                </span>{' '}
                Barata Ribeiro
              </h1>
              <p className='font-Kanit text-mistGray-800 font-light text-3xl mb-1'>
                an aspiring Front-End Developer.
              </p>
              <p className='leading-relaxed max-w-lg text-mistGray-600'>
                Business grad passionate about bridging strategy and execution,
                expanding into front-end development and UI design for visually
                appealing, user-friendly interfaces.
              </p>
            </div>
            <MainButton
              buttonText='GitHub'
              href='https://github.com/Barata-Ribeiro'
              title='GitHub'
            />
          </div>
        </div>
      </main>
    </Element>
  );
};

export default Hero;
