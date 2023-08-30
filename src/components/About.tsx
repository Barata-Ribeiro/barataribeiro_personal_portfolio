import React from 'react';
import { Element } from 'react-scroll';
import aboutImage from '/assets/img/about-photo.jpg';
import SocialButtons from './SharedComponents/SocialButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';
import { SocialButtonProps } from '../types/Components/SocialLinks';

const socialButtons: SocialButtonProps[] = [
  {
    href: 'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/',
    title: 'LinkedIn profile',
    icon: <FaLinkedinIn size={25} />,
    text: 'LinkedIn',
  },
  {
    href: 'https://github.barataribeiro.com/',
    title: 'GitHub profile',
    icon: <FaGithub size={25} />,
    text: 'GitHub',
  },
  {
    href: 'mailto:j.mendes1920@gmail.com',
    title: 'Send Email',
    icon: <SiMaildotru size={25} />,
    text: 'Email',
  },
];

const About: React.FC = () => {
  return (
    <Element name="about">
      <section aria-label="About section" className="bg-mistGray-950 md:shadow-about">
        <div className="container max-w-[90rem] px-4">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <LazyLoadImage
              className="h-fit w-full rounded-none object-cover max-sm:hidden sm:h-96 sm:w-96 sm:rounded-lg md:h-[48rem] md:w-[31.25rem]"
              src={aboutImage}
              effect="black-and-white"
              alt="Photograph of a computer screen showing javascript code"
            />
            <div className="my-6 flex flex-col items-start max-sm:items-center sm:my-0 sm:items-end">
              <div>
                <div className="text-left max-sm:text-center sm:text-right">
                  <h2 className="text-2xl leading-tight text-mistGray-700">
                    João Mendes Jorge{' '}
                    <span className="text-mistGray-50">Barata Ribeiro</span>
                  </h2>
                  <h3 className="font-Kanit text-xl font-thin leading-tight text-mistGray-50">
                    Front-end Developer & UI Designer
                  </h3>
                </div>
                <p className="xs:text-justify mt-4 max-w-xl text-center leading-relaxed text-mistGray-500 sm:text-right">
                  With a solid academic foundation in{' '}
                  <span className="text-mistGray-50">Business Administration</span> and
                  graduate courses in{' '}
                  <span className="text-mistGray-50">Strategic People Management</span>{' '}
                  and <span className="text-mistGray-50">Project Management</span>, I
                  want to blend strategy and execution. My goal is to create and deliver
                  projects that not only look good but also work efficiently in
                  practice. Right now, I'm diving into the world of{' '}
                  <span className="text-mistGray-50">Front-end Development</span> and{' '}
                  <span className="text-mistGray-50">UI Design</span>, aiming to design
                  eye-catching interfaces that prioritize user experience and
                  satisfaction. I can’t wait to use my developing set of skills to
                  contribute to the success of forward-thinking teams and organizations.
                  Let's make great things happen!
                </p>
              </div>
              <span className="text-mistGray-50"></span>
              <div className="flex items-center justify-start gap-2 sm:justify-end">
                {socialButtons.map(({ href, title, icon, text }) => (
                  <SocialButtons
                    key={href}
                    href={href}
                    title={title}
                    icon={icon}
                    text={text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
