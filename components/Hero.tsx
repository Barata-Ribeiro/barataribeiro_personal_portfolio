import { LinkButton } from "@/components/shared/LinkButton"
import Image from "next/image"
import { IoLogoGithub } from "react-icons/io"

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
      className="flex flex-wrap"
    >
      <div className="mb-10 w-full sm:w-8/12">
        <div className="container mx-auto h-full sm:p-10">
          <div className="mt-24 h-fit items-start px-4 sm:mt-64 lg:flex lg:flex-col">
            <h1
              id="hero-heading"
              className="font-Kanit text-5xl font-semibold uppercase tracking-wider text-mistGray-950 dark:text-mistGray-50"
            >
              <span className="-mr-2 font-Roboto text-[1.25rem] font-normal normal-case tracking-normal">
                I&apos;m
              </span>{" "}
              Barata Ribeiro
            </h1>

            <p className="mb-1 font-Kanit text-2xl font-light text-mistGray-400 dark:text-mistGray-300">
              Front-End Developer & UI Designer.
            </p>

            <p
              id="hero-description"
              className="max-w-lg leading-relaxed text-mistGray-600 dark:text-mistGray-500"
            >
              Business grad passionate about bridging strategy and execution,
              expanding into front-end development and UI design for visually
              appealing, user-friendly interfaces.
            </p>

            <div className="mt-8 flex flex-wrap items-start gap-4">
              <LinkButton
                href="https://github.barataribeiro.com/"
                title="Visit my GitHub profile"
                aria-label="Visit my GitHub profile"
                rel="noopener noreferrer"
                target="_blank"
                additionalStyles="flex gap-2 items-center font-Kanit border-2 tracking-wider bg-royalBlue-600 text-royalBlue-50 py-2 px-4 hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 border-royalBlue-700"
              >
                <IoLogoGithub size={18} /> GitHub
              </LinkButton>
              <LinkButton
                href="/barataribeiro_resume.pdf"
                additionalStyles="font-Kanit tracking-wider border-2 border-mistGray-300 bg-mistGray-50 hover:bg-mistGray-300 text-mistGray-300 hover:text-mistGray-50 py-2 px-4 whitespace-nowrap"
                download="barataribeiro_resume"
              >
                Download CV
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/heroImage.jpg"
        alt="Hero image of blue light ornaments"
        width={5760}
        height={3840}
        className="h-72 w-full object-cover object-center italic sm:h-[62.5rem] sm:w-4/12 sm:rounded-b-lg"
        priority
        sizes="100vw"
      />
    </section>
  )
}
