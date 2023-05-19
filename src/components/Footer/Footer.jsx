import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-mistGray-900'>
      <div className='container flex flex-col items-center py-10'>
        <a
          href='http://barataribeiro.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center uppercase font-Kanit font-semibold tracking-wider text-mistGray-50'>
          Barata{' '}
          <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal'>
            &#60;/&#62;
          </span>{' '}
          Ribeiro
        </a>
        <p className='text-center text-slate-50 mt-2'>
          Copyright © {year} -{' '}
          <span className='cursor-pointer'>Some rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
