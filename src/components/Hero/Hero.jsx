import React from 'react';
import Decorator from '../../assets/decorator.svg';
import Buttons from '../Global/Buttons';

const Hero = () => {
  const mainStyle = `
    flex justify-between items-start w-full h-screen flex-row max-md:flex-col
    mt-12 md:mt-24 md:px-[330px] max-md:px-6 md:pt-[200px] max-md:pt-[180px]
    gradient-background
  `;

  return (
    <main className={mainStyle}>
      <style>
        {`
          .gradient-background {
            background: linear-gradient(180deg, #f7f7f5 50%, #272623 100%);
          }
        `}
      </style>
      <div className='max-md:self-center'>
        <h3
          className={`
          before:content-["I'm"] before:text-[16px] before:font-roboto before:font-normal before:normal-case before:text-mistGray-700 
          uppercase font-Kanit text-5xl font-semibold
          `}>
          Barata Ribeiro
        </h3>
        <p className='font-Kanit text-2xl font-light mb-1'>
          An aspiring Front-End Developer.
        </p>
        <p className='leading-7 text-sm max-w-md'>
          Business grad passionate about bridging strategy and execution,
          expanding into front-end development and UI design for visually
          appealing, user-friendly interfaces.
        </p>
        <Buttons btnText='Check Work' />
      </div>
      <div className='hidden md:block'>
        <img
          className='fill-current text-black w-[442px] h-[256px] ml-14'
          src={Decorator}
          alt='Code decorator'
        />
      </div>
    </main>
  );
};

export default Hero;
