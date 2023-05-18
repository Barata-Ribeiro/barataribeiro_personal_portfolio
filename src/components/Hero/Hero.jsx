import React from 'react';
import Buttons from '../Global/Buttons';

const Hero = () => {
  const mainStyle =
    'container flex justify-between items-center flex-wrap w-10/12 h-screen mx-auto md:flex-row my-12 md:my-24';
  const textStyle =
    'max-w-content mx-auto px-8 flex flex-col justify-center h-full lg:w-1/2';
  const nameStyle = 'uppercase font-Kanit text-5xl font-semibold leading-4';
  const titleStyle = 'font-Kanit text-2xl font-light leading-5 mb-1';
  const descStyle = 'leading-7 text-sm max-w-md';
  const svgStyle = 'fill-current text-black w-52';

  return (
    <main name='home' className={mainStyle}>
      <div className={textStyle}>
        <p className='leading-5'>
          I'm
          <span className={nameStyle}> Barata Ribeiro </span>
        </p>
        <p className={titleStyle}>An aspiring Front-End Developer.</p>
        <p className={descStyle}>
          Business grad passionate about bridging strategy and execution,
          expanding into front-end development and UI design for visually
          appealing, user-friendly interfaces.
        </p>
        <div>
          <Buttons btnText='Check Work' />
        </div>
      </div>
      <div className='w-full lg:w-1/2 lg:py-6 text-center'>
        <svg className={svgStyle} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
        </svg>
      </div>
    </main>
  );
};

export default Hero;
