import Image from "next/image"
import HeroImage from "../../public/assets/img/hero-image.jpg"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import LinkButton from "@/components/general/link-button"

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 rounded-md bg-mistGray-950 opacity-30"></div>
      <Image src={HeroImage} alt="Hero Image" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-20 font-Kanit text-mistGray-50">
        <h1 className="text-7xl font-semibold tracking-widest">
          <span className="font-Roboto text-4xl font-normal tracking-normal">I’m</span>{" "}
          Barata Ribeiro
        </h1>
        <h2 className="text-8xl font-light">Full-stack Developer</h2>
        <div className="flex items-center gap-20">
          <hr className="h-1 w-64 rounded bg-mistGray-50" />
          <LinkButton
            href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </LinkButton>
          <LinkButton
            href="https://github.barataribeiro.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={24} />
          </LinkButton>
          <hr className="h-1 w-64 rounded bg-mistGray-50" />
        </div>
        <p className="max-w-lg text-center font-Roboto leading-7">
          Business grad passionate about bridging strategy and execution, expanding into
          Full-stack development and UI design for visually appealing, user-friendly
          interfaces.
        </p>
      </div>
    </section>
  )
}
