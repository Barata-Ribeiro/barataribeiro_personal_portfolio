import React from 'react';
import Decorator from '../../assets/decorator.svg';
import Button from '../Global/MainButton';

const Hero = () => {
  return (
    <main
      id='home'
      className='h-screen w-full bg-gradient-to-b from-mistGray-50 from-50% to-mistGray-950'>
      <div className='container sm:pt-32 max-sm:pt-16 max-xs:pt-6 flex justify-between items-center flex-wrap'>
        {/* Hero info */}
        <div className='leading-none text-mistGray-950'>
          <h1 className='uppercase font-Kanit font-semibold tracking-wider text-5xl'>
            <span className='normal-case font-Robot text-[1.25rem] font-normal tracking-normal -mr-2'>
              I'm
            </span>{' '}
            Barata Ribeiro
          </h1>
          <p className='font-Kanit font-light text-3xl'>
            an aspiring Front-End Developer.
          </p>
          <p className='leading-relaxed max-w-lg'>
            Business grad passionate about bridging strategy and execution,
            expanding into front-end development and UI design for visually
            appealing, user-friendly interfaces.
          </p>
          <Button buttonText={'Check Work'} />
        </div>
        {/* Hero image */}
        <div>
          <img src={Decorator} alt='Decorator' className='' />
        </div>
      </div>
    </main>
  );
};

export default Hero;
