import React from 'react';
import { Element } from 'react-scroll';
import Button from './Utils/MainButton';

const Hero = () => {
  return (
    <Element name='home'>
      <main
        aria-label='Site home page'
        className='bg-mistGray-950 bg-heroBackground bg-center bg-cover bg-no-repeat h-screen w-full'>
        <div className={`container max-w-[90rem] sm:py-64 py-40 px-4`}>
          {/* Hero info */}
          <div className='flex flex-col items-start leading-none text-mistGray-950 max-sm:items-center max-sm:text-center'>
            <div>
              <h1 className='uppercase font-Kanit font-semibold tracking-wider text-5xl text-mistGray-50'>
                <span className='normal-case font-Robot text-[1.25rem] font-normal tracking-normal -mr-2'>
                  I'm
                </span>{' '}
                Barata Ribeiro
              </h1>
              <p className='font-Kanit text-mistGray-200 font-light text-2xl mb-1'>
                an aspiring Front-End Developer.
              </p>
              <p className='leading-relaxed max-w-lg text-mistGray-600'>
                Business grad passionate about bridging strategy and execution,
                expanding into front-end development and UI design for visually
                appealing, user-friendly interfaces.
              </p>
            </div>
            <Button
              buttonText={'GitHub'}
              href={'https://github.com/Barata-Ribeiro'}
              title={'GitHub'}
            />
          </div>
        </div>
      </main>
    </Element>
  );
};

export default Hero;
