import React from "react";
import { Element } from "react-scroll";
import aboutImage from "/assets/img/about-photo.jpg";
import SocialButtons from "./Utils/SocialButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

const About = () => {
  return (
    <Element name="about">
      <section
        aria-label="About section"
        className="bg-mistGray-950 md:shadow-about"
      >
        <div className="container max-w-[90rem] px-4">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <LazyLoadImage
              className="md:h-[48rem] md:w-[31.25rem] sm:h-96 sm:w-96 h-fit w-full object-cover sm:rounded-lg rounded-none max-sm:hidden"
              src={aboutImage}
              effect="black-and-white"
              alt="Photograph of a computer screen showing javascript code"
            />
            <div className="flex flex-col items-start sm:items-end my-6 sm:my-0 max-sm:items-center">
              <div>
                <div className="text-left sm:text-right max-sm:text-center">
                  <h2 className="text-2xl text-mistGray-700 leading-tight">
                    João Mendes Jorge{" "}
                    <span className="text-mistGray-50">Barata Ribeiro</span>
                  </h2>
                  <h3 className="font-Kanit text-mistGray-50 font-thin text-xl leading-tight">
                    Front-end Developer & UI Designer
                  </h3>
                </div>
                <p className="max-w-xl text-mistGray-500 sm:text-right xs:text-justify leading-relaxed mt-4 text-center">
                  With a solid academic foundation in{" "}
                  <span className="text-mistGray-50">
                    Business Administration
                  </span>{" "}
                  and graduate courses in{" "}
                  <span className="text-mistGray-50">
                    Strategic People Management
                  </span>{" "}
                  and{" "}
                  <span className="text-mistGray-50">Project Management</span>,
                  I want to blend strategy and execution. My goal is to create
                  and deliver projects that not only look good but also work
                  efficiently in practice. Right now, I'm diving into the world
                  of{" "}
                  <span className="text-mistGray-50">
                    Front-end Development
                  </span>{" "}
                  and <span className="text-mistGray-50">UI Design</span>,
                  aiming to design eye-catching interfaces that prioritize user
                  experience and satisfaction. I can’t wait to use my developing
                  set of skills to contribute to the success of forward-thinking
                  teams and organizations. Let's make great things happen!
                </p>
              </div>
              <span className="text-mistGray-50"></span>
              <div className="flex justify-start sm:justify-end items-center gap-2">
                <SocialButtons
                  href={
                    "https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
                  }
                  title={"LinkedIn profile"}
                  icon={<FaLinkedinIn size={25} />}
                  text={"LinkedIn"}
                />
                <SocialButtons
                  href={"https://github.barataribeiro.com/"}
                  title={"GitHub profile"}
                  icon={<FaGithub size={25} />}
                  text={"GitHub"}
                />
                <SocialButtons
                  href={"mailto:j.mendes1920@gmail.com"}
                  title={"Send Email"}
                  icon={<SiMaildotru size={25} />}
                  text={"Email"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
