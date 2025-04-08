import LinkButton                               from "@/components/general/link-button"
import Image                                    from "next/image"
import { FaAnglesDown, FaGithub, FaLinkedinIn } from "react-icons/fa6"
import HeroImage                                from "../../public/assets/img/hero-image.jpg"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex h-screen flex-grow snap-center flex-col md:snap-start"
            aria-label="Hero/Home section"
            aria-labelledby="hero-title"
        >
            <div className="container m-auto flex flex-col items-center justify-center gap-10 px-1 text-center font-Kanit text-mist-gray-50 md:gap-20 md:px-0">
                <h1
                    id="hero-title"
                    className="text-4xl font-semibold tracking-widest sm:text-4xl md:text-6xl lg:text-7xl"
                >
                    <span className="font-Roboto text-base font-normal tracking-normal max-sm:block sm:text-xl md:text-4xl">
                        I’m
                    </span>{ " " }
                    Barata Ribeiro
                </h1>
                <h2 className="text-5xl font-light leading-none tracking-tight md:text-7xl lg:text-8xl">
                    Full-stack Developer
                </h2>
                <div className="flex w-full items-center justify-center gap-5 sm:gap-10 md:gap-20">
                    <hr className="h-1 max-w-96 flex-grow rounded bg-mist-gray-50" aria-hidden />
                    <LinkButton
                        href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
                        className="flex-shrink"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn size={ 24 } />
                    </LinkButton>
                    <LinkButton
                        href="https://github.barataribeiro.com/"
                        className="flex-shrink"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub size={ 24 } />
                    </LinkButton>
                    <hr className="h-1 max-w-96 flex-grow rounded bg-mist-gray-50" aria-hidden />
                </div>
                <p className="max-w-lg font-Roboto leading-7">
                    Business grad passionate about bridging strategy and execution, expanding into Full-stack
                    development and UI design for visually appealing, user-friendly interfaces.
                </p>
                <LinkButton
                    href="#projects"
                    aria-label="Check Projects Bellow"
                    title="Check Projects Bellow"
                    className="flex items-center gap-2 rounded-md bg-transparent px-5 py-3 font-Comfortaa text-mist-gray-50 shadow-[rgba(247,_247,_245,_1)_0px_0px_0px_2px,_rgba(39,_38,_35,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] backdrop-blur hover:backdrop-brightness-125 active:backdrop-brightness-90 sm:px-8 sm:py-4 md:px-10 md:py-5"
                >
                    Check Projects Bellow <FaAnglesDown size={ 24 } className="animate-bounce max-md:hidden" />
                </LinkButton>
            </div>
            <div className="absolute inset-0 -z-10 rounded-md bg-mist-gray-950 opacity-30"></div>
            <Image src={ HeroImage } alt="Hero Image" className="-z-20 object-cover" fill />
        </section>
    )
}
