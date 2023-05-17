import React from 'react';
import Buttons from './Buttons';

const Hero = () => {
  return (
    <main name='home' className='w-full h-screen bg-mistGray-50'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='leading-5'>
          I'm <span className='uppercase font-Kanit text-5xl font-semibold leading-4'>Barata Ribeiro</span>
        </p>
        <p className='font-Kanit text-2xl font-light leading-5'>an aspiring Front-End Developer.</p>
        <p className='leading-7 text-sm max-w-[55ch]'>
          Business grad passionate about bridging strategy and execution, expanding into front-end development and UI design for visually appealing,
          user-friendly interfaces.
        </p>
        <div>
          <Buttons btnText={'Check Work'} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
