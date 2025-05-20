import Image from "next/image"
import AboutAvatar from "../../public/assets/img/about-avatar.png"

export default function About() {
    return (
        <section
            id="about"
            aria-label="About section"
            className="container my-40 flex max-w-6xl snap-center flex-wrap items-center justify-center gap-5 px-1 md:snap-start md:px-0 lg:justify-between"
            aria-labelledby="about-title">
            <Image
                src={AboutAvatar}
                alt="Avatar"
                className="aspect-square h-full w-full max-w-96 justify-self-center md:justify-self-auto"
            />
            <article className="font-Kanit w-max justify-self-center md:justify-self-end">
                {/*TITLE*/}
                <h1
                    id="about-title"
                    className="text-mist-gray-950 dark:text-mist-gray-50 mb-10 text-4xl leading-none font-medium">
                    <span className="text-rio-grande-600">.</span>About me
                </h1>
                {/*INTRO*/}
                <div className="text-mist-gray-950 dark:text-mist-gray-50 mb-5 flex gap-4">
                    <span aria-hidden className="bg-rio-grande-700 mb-1 h-24 w-1"></span>
                    <div className="self-end">
                        <h2 className="text-4xl leading-none font-light">Hello, there...</h2>
                        <h3 className="text-4xl leading-none font-semibold">I&apos;m Barata Ribeiro</h3>
                    </div>
                </div>
                {/*PARAGRAPHS*/}
                <div className="font-Roboto text-mist-gray-700 dark:text-mist-gray-400 w-full max-w-md leading-7 break-words whitespace-normal">
                    <p className="mb-4">
                        With a solid academic foundation in{" "}
                        <em
                            title="Business Administration"
                            className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            Business Administration
                        </em>{" "}
                        and graduate courses in{" "}
                        <em
                            title="Strategic People Management"
                            className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            Strategic People Management
                        </em>{" "}
                        and{" "}
                        <em
                            title="Project Management"
                            className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            Project Management
                        </em>
                        , I want to blend strategy and execution. My goal is to create and deliver projects that not
                        only look good but also work efficiently in practice.{" "}
                    </p>
                    <p className="mb-4">
                        Right now, I&apos;m diving into the world of{" "}
                        <em
                            title="Full-stack Development"
                            className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            Full-stack Development
                        </em>{" "}
                        and{" "}
                        <em
                            title="UI Design"
                            className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            UI Design
                        </em>
                        {/*
                         */}
                        , aiming to design eye-catching interfaces that prioritize user experience and satisfaction. I
                        can’t wait to use my developing set of skills to contribute to the success of forward-thinking
                        teams and organizations. Let&apos;s make great things happen!
                    </p>
                    <p>
                        I’ve learned quite a lot throughout my projects. Based in{" "}
                        <em title="Brazil" className="text-mist-gray-950 dark:text-mist-gray-50 font-medium not-italic">
                            Brazil
                        </em>
                        {/*
                         */}
                        , I will let you know that I am ready to be part of your project no matter where I am.
                    </p>
                </div>
            </article>
        </section>
    )
}
