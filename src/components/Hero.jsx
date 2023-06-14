import React from 'react';
import { Element } from 'react-scroll';
import Avatar from '/public/assets/img/avatar.jpg';
import MainButton from './utils/Button';

const Hero = () => {
  const avatarStyle = {
    height: '6rem',
    width: '6rem',
    background: `url(${Avatar}) no-repeat center/cover`,
    borderRadius: '50%',
  };

  return (
    <Element name='home'>
      <main className='' aria-label='Site home page'>
        <div className={`mt-[13rem] mb-[7.5rem]`}>
          {/* Hero info */}
          <div className='flex flex-col items-center leading-none text-mistGray-950 text-center gap-6'>
            <div style={avatarStyle}></div>
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
              <p className='leading-7 max-w-lg text-mistGray-600'>
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
