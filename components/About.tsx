import { SocialButton } from "@/components/shared/SocialButton"
import Image from "next/image"
import { ReactNode, memo } from "react"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { SiMaildotru } from "react-icons/si"

interface SocialButtonsItems {
  href: string
  title: string
  icon: ReactNode
  text: string
}

const socialButtonsItems: SocialButtonsItems[] = [
  {
    href: "https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/",
    title: "Visit my LinkedIn profile",
    icon: <FaLinkedinIn size={25} aria-label="LinkedIn logo" />,
    text: "LinkedIn",
  },
  {
    href: "https://github.barataribeiro.com/",
    title: "Visit my GitHub profile",
    icon: <FaGithub size={25} aria-label="GitHub logo" />,
    text: "GitHub",
  },
  {
    href: "mailto:j.mendes1920@gmail.com",
    title: "Send me an Email",
    icon: <SiMaildotru size={25} aria-label="Email logo" />,
    text: "Email",
  },
]

const SocialButtonMemo = memo(SocialButton)

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About section"
      role="region"
      className="flex items-center"
    >
      <div className="mx-auto max-w-6xl flex-1 justify-center">
        <div className="mb-8 px-4 md:text-center">
          <p className="mb-2 text-lg font-semibold text-rioGrande-800 dark:text-rioGrande-400">
            About me
          </p>
          <h2 className="text-2xl leading-tight text-mistGray-400 dark:text-mistGray-700 md:text-4xl">
            <span className="max-md:block">João Mendes Jorge </span>

            <span className="text-mistGray-950 dark:text-mistGray-50">
              Barata Ribeiro
            </span>
          </h2>
          <div className="mt-3 flex w-32 overflow-hidden rounded md:mx-auto">
            <div className="h-2 flex-1 bg-rioGrande-700 dark:bg-rioGrande-200"></div>
            <div className="h-2 flex-1 bg-rioGrande-800 dark:bg-rioGrande-400"></div>
            <div className="h-2 flex-1 bg-rioGrande-600 dark:bg-rioGrande-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
            <Image
              src="/assets/img/about-photo.jpg"
              alt="Photograph of a computer screen showing javascript code"
              width={1480}
              height={920}
              className="relative h-96 w-full object-cover italic sm:rounded-lg lg:h-full"
              sizes="100vw"
            />
          </div>
          <div className="mb-10 w-full px-4 lg:mb-0 lg:mt-56 lg:w-1/2">
            <h2 className="mb-4 border-l-4 border-rioGrande-700 py-3 pl-2 font-Kanit text-2xl leading-tight text-mistGray-950 dark:border-rioGrande-500 dark:text-mistGray-300 sm:font-thin">
              Front-end Developer & UI Designer
            </h2>
            <p className="mb-4 text-base leading-7 text-mistGray-600 dark:text-gray-400">
              With a solid academic foundation in{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Business Administration
              </span>{" "}
              and graduate courses in{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Strategic People Management
              </span>{" "}
              and{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Project Management
              </span>
              , I want to blend strategy and execution. My goal is to create and
              deliver projects that not only look good but also work efficiently
              in practice. Right now, I&apos;m diving into the world of{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                Front-end Development
              </span>{" "}
              and{" "}
              <span className="text-mistGray-950 dark:text-mistGray-50">
                UI Design
              </span>
              , aiming to design eye-catching interfaces that prioritize user
              experience and satisfaction. I can’t wait to use my developing set
              of skills to contribute to the success of forward-thinking teams
              and organizations. Let&apos;s make great things happen!
            </p>
            <div
              role="navigation"
              aria-label="Social media links"
              className="flex items-center justify-start gap-2 sm:justify-start"
            >
              {socialButtonsItems.map((item, index) => (
                <SocialButtonMemo
                  key={`button-${index}-${item.title}`}
                  href={item.href}
                  icon={item.icon}
                  additionalStyles="border-2 text-mistGray-50
                  border-royalBlue-700 bg-royalBlue-600 p-2 hover:border-royalBlue-600
                  hover:bg-mistGray-50 hover:text-royalBlue-600"
                  title={item.title}
                  aria-label={item.title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.text}
                </SocialButtonMemo>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
