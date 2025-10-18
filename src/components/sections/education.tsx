import { HigherEducationCourse, IntensiveCourse } from '@/app/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Fragment } from 'react';

interface IntensiveCourseProps {
    intensiveCourses: IntensiveCourse[];
}

interface HigherEducationProps {
    highEducationCourses: HigherEducationCourse[];
}

type DataEducation = IntensiveCourseProps & HigherEducationProps;

export default function Education({ intensiveCourses, highEducationCourses }: DataEducation) {
    const pseudoElement = cn(
        "before:absolute before:bottom-0.5 before:-left-3 before:h-5 before:w-1 before:bg-secondary before:content-['']",
    );
    return (
        <section
            id="education"
            aria-label="Education section"
            className="snap-center bg-foreground-slightly-dark px-1 pt-20 md:snap-start md:px-0"
        >
            <div className="container grid grid-cols-1 items-start justify-center md:grid-cols-2">
                <h1
                    className="w-max place-self-center text-right font-Kanit text-7xl leading-none font-semibold tracking-wide text-foreground-darker/50 uppercase sm:text-8xl md:place-self-auto md:text-9xl"
                    aria-label="Education"
                    title="Education"
                >
                    <span className="text-secondary">.</span>Educ
                    <br />
                    ation
                </h1>

                <div className="grid grid-rows-[1fr_auto] gap-10">
                    <div className="grid grid-rows-[auto_1fr] gap-5">
                        <p className="h-max w-full leading-7 text-pretty text-background/70">
                            Dive into my educational track: a Bachelor&apos;s in{' '}
                            <em title="Business Administration" className="text-background not-italic">
                                Business Administration
                            </em>
                            , followed by two enriching graduate courses. Now, I&apos;m adding a creative edge to my
                            profile, specializing in{' '}
                            <em title="UI Design" className="text-background not-italic">
                                UI Design
                            </em>{' '}
                            and{' '}
                            <em title="Full-stack Development" className="text-background not-italic">
                                Full-stack Development
                            </em>{' '}
                            through intensive online courses. <br />
                            Explore below!
                        </p>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {highEducationCourses.map((course) => (
                                <div
                                    key={course.degree}
                                    className="flex h-full w-full flex-col gap-12 place-self-center rounded-lg bg-foreground-darker/50 p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:w-1/2 md:w-full"
                                >
                                    <div className="w-full max-w-[200px] grow">
                                        <h4 className="font-roboto mb-3 text-sm leading-tight text-muted/70">
                                            {course.type}
                                        </h4>
                                        <h2 className="font-Kanit text-lg leading-tight font-bold tracking-wide text-background">
                                            <span className="text-secondary">.</span>
                                            {course.degree.split('\n').map((line, index) => (
                                                <Fragment key={line + '-' + index}>
                                                    {line}
                                                    {index < course.degree.split('\n').length - 1 && <br />}
                                                </Fragment>
                                            ))}
                                        </h2>
                                    </div>
                                    <p className="flex items-center justify-between text-muted/70">
                                        UNESA{' '}
                                        <span className="text-xs leading-none text-foreground">{course.year}</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mx-auto w-max sm:mx-0">
                            <h2
                                className={cn(
                                    pseudoElement,
                                    'relative mt-4 font-Kanit text-xl leading-none tracking-wide text-background/70',
                                )}
                            >
                                Intensive Courses
                            </h2>
                        </div>
                        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
                            {[...intensiveCourses].reverse().map((course) => (
                                <li
                                    key={course.id}
                                    className="group flex transform items-center gap-3 rounded-full border border-background/10 bg-background/5 px-4 py-2 text-xs text-background transition-transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md"
                                >
                                    <span
                                        aria-hidden
                                        className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-secondary/90 shadow-sm"
                                    />

                                    <div className="flex flex-col">
                                        <span className="font-Kanit text-sm leading-tight font-medium tracking-wide text-background">
                                            {course.course}
                                        </span>
                                        <span className="font-Comfortaa text-[11px] leading-none text-muted/60">
                                            / {course.place}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container flex items-center justify-center pt-8 pb-20">
                <Link
                    href="https://www.linkedin.com/in/barataribeiro/details/certifications/"
                    className="transation-colors font-Comfortaa text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary/90 focus-visible:text-primary/70 active:text-primary/80 sm:text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    Check LinkedIn for Certifications...
                </Link>
            </div>
        </section>
    );
}
