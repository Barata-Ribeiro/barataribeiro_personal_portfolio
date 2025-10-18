import { Project } from '@/app/types';
import { Badge } from '@/components/ui/badge';
import { CardBody, CardContainer, CardItem } from '@/components/ui/shadcn-io/3d-card';
import Image from 'next/image';

export default function ProjectCard(project: Readonly<Project>) {
    return (
        <CardContainer className="inter-var h-full" containerClassName="py-0 items-stretch">
            <CardBody className="group/card relative flex h-full flex-col justify-between rounded-xl border border-foreground-darker/[0.1] bg-background p-4">
                <div>
                    <CardItem
                        translateZ="50"
                        className="font-Kanit text-xl font-bold tracking-wide text-foreground-darker"
                    >
                        <span className="text-secondary">.</span>
                        {project.title}
                    </CardItem>

                    <CardItem as="p" translateZ="60" className="mt-2 text-sm text-foreground">
                        {project.desc}
                    </CardItem>

                    <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                            src={project.img}
                            height={1000}
                            width={1000}
                            className="h-48 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                            alt={project.alt}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </CardItem>

                    <CardItem translateZ="80" className="mt-4 flex w-full flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <Badge variant="outline" className="select-none" key={`tech-${index}-${tech}`}>
                                {tech}
                            </Badge>
                        ))}
                    </CardItem>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.repo}
                        target="__blank"
                        rel="noopener noreferrer"
                        aria-label="Repository link"
                        title="Repository link"
                        className="rounded-xl px-4 py-2 text-xs font-normal"
                    >
                        Repo
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.demo}
                        target="__blank"
                        rel="noopener noreferrer"
                        aria-label="Demonstration link"
                        title="Demonstration link"
                        {...(project.demo ? {} : { 'data-disabled': true, tabIndex: -1 })}
                        className="inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground transition-all outline-none hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-[>svg]:px-3 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                        Demo
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
