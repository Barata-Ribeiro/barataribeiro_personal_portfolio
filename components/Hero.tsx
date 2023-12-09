import { LinkButton } from '@/components/shared/LinkButton';
import { IoLogoGithub } from 'react-icons/io';

export const Hero = () => {
  return (
    <section className='relative bg-[url(/assets/img/cloudsBackground.jpg)] bg-cover bg-center bg-no-repeat h-screen w-full shadow-'>
      <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-left ltr:sm:text-left rtl:sm:text-right'>
          <h1
            id='hero-heading'
            className='font-Kanit text-5xl font-semibold uppercase tracking-wider text-mistGray-50'>
            <span className='-mr-2 font-Roboto text-[1.25rem] font-normal normal-case tracking-normal'>
              I&apos;m
            </span>{' '}
            Barata Ribeiro
          </h1>

          <p className='mb-1 font-Kanit text-2xl font-light text-mistGray-200'>
            Front-End Developer & UI Designer.
          </p>

          <p
            id='hero-description'
            className='max-w-lg leading-relaxed text-mistGray-600'>
            Business grad passionate about bridging strategy and execution,
            expanding into front-end development and UI design for visually
            appealing, user-friendly interfaces.
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
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
              additionalStyles='font-Kanit border-2 tracking-wider bg-mistGray-100 text-mistGray-400 py-2 px-4 hover:border-mistGray-100 hover:bg-mistGray-400 hover:text-mistGray-100 border-mistGray-400'
              download>
              Download C.V.
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
