import { LinkButton } from '@/components/shared/LinkButton';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';

export const Hero = () => {
  return (
    <section className='flex flex-wrap' id='home'>
      <div className='w-full sm:w-8/12 mb-10'>
        <div className='container mx-auto h-full sm:p-10'>
          <div className='px-4 lg:flex lg:flex-col sm:mt-64 mt-24 items-start h-fit'>
            <h1
              id='hero-heading'
              className='font-Kanit text-5xl font-semibold uppercase tracking-wider dark:text-mistGray-50 text-mistGray-950'>
              <span className='-mr-2 font-Roboto text-[1.25rem] font-normal normal-case tracking-normal'>
                I&apos;m
              </span>{' '}
              Barata Ribeiro
            </h1>

            <p className='mb-1 font-Kanit text-2xl font-light dark:text-mistGray-300 text-mistGray-400'>
              Front-End Developer & UI Designer.
            </p>

            <p
              id='hero-description'
              className='max-w-lg leading-relaxed text-mistGray-600 dark:text-mistGray-500'>
              Business grad passionate about bridging strategy and execution,
              expanding into front-end development and UI design for visually
              appealing, user-friendly interfaces.
            </p>

            <div className='mt-8 flex flex-wrap gap-4 items-start'>
              <LinkButton
                href='https://github.barataribeiro.com/'
                title='Visit my GitHub profile'
                aria-label='Visit my GitHub profile'
                rel='noopener noreferrer'
                target='_blank'
                additionalStyles='flex gap-2 items-center font-Kanit border-2 tracking-wider bg-royalBlue-600 text-royalBlue-50 py-2 px-4 hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 border-royalBlue-700'>
                <IoLogoGithub size={18} /> GitHub
              </LinkButton>
              <LinkButton
                href='/'
                additionalStyles='font-Kanit tracking-wider border-2 border-mistGray-300 bg-mistGray-50 hover:bg-mistGray-300 text-mistGray-300 hover:text-mistGray-50 py-2 px-4 whitespace-nowrap'
                download>
                Download C.V.
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/assets/img/heroImage.jpg'
        alt='Hero image of blue light ornaments'
        width={5760}
        height={3840}
        blurDataURL='/assets/img/heroImage.jpg'
        placeholder='blur'
        className='w-full h-72 object-cover object-center sm:h-[62.5rem] sm:w-4/12 sm:rounded-b-lg italic'
      />
    </section>
  );
};
