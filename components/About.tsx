import { SocialButton } from '@/components/shared/SocialButton';
import Image from 'next/image';
import { ReactNode } from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

interface SocialButtonsItems {
  href: string;
  title: string;
  icon: ReactNode;
  text: string;
}

export const About = () => {
  const socialButtonsItems: SocialButtonsItems[] = [
    {
      href: 'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/',
      title: 'Visit my LinkedIn profile',
      icon: <FaLinkedinIn size={25} aria-label='LinkedIn logo' />,
      text: 'LinkedIn',
    },
    {
      href: 'https://github.barataribeiro.com/',
      title: 'Visit my GitHub profile',
      icon: <FaGithub size={25} aria-label='GitHub logo' />,
      text: 'GitHub',
    },
    {
      href: 'mailto:j.mendes1920@gmail.com',
      title: 'Send me an Email',
      icon: <SiMaildotru size={25} aria-label='Email logo' />,
      text: 'Email',
    },
  ];
  return (
    <section
      id='about'
      aria-label='About section'
      role='region'
      className='flex items-center'>
      <div className='justify-center flex-1 max-w-6xl mx-auto'>
        <div className='px-4 mb-8 md:text-center'>
          <p className='mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400'>
            About me
          </p>
          <h2 className='text-2xl md:text-4xl leading-tight text-mistGray-400 dark:text-mistGray-700'>
            <span className='max-md:block'>João Mendes Jorge </span>

            <span className='text-mistGray-950 dark:text-mistGray-50'>
              Barata Ribeiro
            </span>
          </h2>
          <div className='flex w-32 mt-3 overflow-hidden rounded md:mx-auto'>
            <div className='flex-1 h-2 dark:bg-rioGrande-200 bg-rioGrande-700'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-400 bg-rioGrande-800'></div>
            <div className='flex-1 h-2 dark:bg-rioGrande-300 bg-rioGrande-600'></div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
            <Image
              src='/assets/img/about-photo.jpg'
              alt='Photograph of a computer screen showing javascript code'
              width={1480}
              height={920}
              blurDataURL='/assets/img/about-photo.jpg'
              placeholder='blur'
              className='relative italic object-cover w-full h-96 sm:rounded-lg lg:h-full'
            />
          </div>
          <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 lg:mt-56'>
            <h2 className='py-3 pl-2 mb-4 text-2xl sm:font-thin font-Kanit leading-tight text-mistGray-950 border-l-4 border-rioGrande-700 dark:border-rioGrande-500 dark:text-mistGray-300'>
              Front-end Developer & UI Designer
            </h2>
            <p className='mb-4 text-base leading-7 text-mistGray-600 dark:text-gray-400'>
              With a solid academic foundation in{' '}
              <span className='text-mistGray-950 dark:text-mistGray-50'>
                Business Administration
              </span>{' '}
              and graduate courses in{' '}
              <span className='text-mistGray-950 dark:text-mistGray-50'>
                Strategic People Management
              </span>{' '}
              and{' '}
              <span className='text-mistGray-950 dark:text-mistGray-50'>
                Project Management
              </span>
              , I want to blend strategy and execution. My goal is to create and
              deliver projects that not only look good but also work efficiently
              in practice. Right now, I&apos;m diving into the world of{' '}
              <span className='text-mistGray-950 dark:text-mistGray-50'>
                Front-end Development
              </span>{' '}
              and{' '}
              <span className='text-mistGray-950 dark:text-mistGray-50'>
                UI Design
              </span>
              , aiming to design eye-catching interfaces that prioritize user
              experience and satisfaction. I can’t wait to use my developing set
              of skills to contribute to the success of forward-thinking teams
              and organizations. Let&apos;s make great things happen!
            </p>
            <div
              role='navigation'
              aria-label='Social media links'
              className='flex items-center justify-start gap-2 sm:justify-start'>
              {socialButtonsItems.map((item, index) => (
                <SocialButton
                  key={`button-${index}-${item.title}`}
                  href={item.href}
                  icon={item.icon}
                  additionalStyles='border-2 text-mistGray-50
                  border-royalBlue-700 bg-royalBlue-600 p-2 hover:border-royalBlue-600
                  hover:bg-mistGray-50 hover:text-royalBlue-600'
                  title={item.title}
                  aria-label={item.title}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {item.text}
                </SocialButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
