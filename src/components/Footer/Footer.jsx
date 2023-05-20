import React from 'react';
import { menuItems } from '../Header/Header';
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer aria-label='Footer, the end' className='bg-mistGray-900'>
      <div className='container flex flex-col items-center py-16 sm:px-6 lg:px-8'>
        <a
          href='http://barataribeiro.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center flex-wrap uppercase font-Kanit font-semibold text-2xl tracking-widest text-mistGray-50'>
          Barata
          <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal px-1'>
            &#60;/&#62;
          </span>
          Ribeiro
        </a>

        <p className='mt-6 max-w-md text-center leading-relaxed text-mistGray-50'>
          Feel free to take an in-depth look at my projects, and let's discuss
          the possibility of working together. I am eager to collaborate with
          fellow professionals in the industry.
        </p>

        <nav aria-label='Footer menu' className='mt-6'>
          <ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className='text-mistGray-50 transition hover:text-royalBlue-500 hover:underline'
                  href={item.url}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul
          aria-label='Social and email'
          className='mt-6 flex justify-center gap-6 md:gap-8'>
          <li>
            <a
              href='https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/'
              rel='noreferrer'
              target='_blank'
              className='text-mistGray-50 transition-colors hover:text-royalBlue-500'>
              <span className='sr-only'>LinkedIn</span>
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href='http://barataribeiro.com/'
              rel='noreferrer'
              target='_blank'
              className='text-mistGray-50 transition-colors hover:text-royalBlue-500'>
              <span className='sr-only'>GitHub</span>
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href='mailto:j.mendes1920@gmail.com'
              rel='noreferrer'
              target='_blank'
              className='text-mistGray-50 transition-colors hover:text-royalBlue-500'>
              <span className='sr-only'>Send Mail</span>
              <FaMailBulk />
            </a>
          </li>
        </ul>

        <p className='text-center text-slate-50 mt-6'>
          Copyright © {year} - <span>Some rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
