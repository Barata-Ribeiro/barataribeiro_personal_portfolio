import GitHub from '@/components/icons/github';
import LinkedIn from '@/components/icons/linkedin';
import Mail from '@/components/icons/mail';
import Link from 'next/link';
import { type ReactNode } from 'react';

interface SocialLink {
    title: string;
    href: string;
    icon: ReactNode;
    label: string;
}

interface MenuItem {
    title: string;
    href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/barataribeiro/',
        icon: <LinkedIn aria-hidden className="size-14" />,
        label: 'LinkedIn Profile',
    },
    {
        title: 'GitHub',
        href: 'https://github.barataribeiro.com/',
        icon: <GitHub aria-hidden className="size-14" />,
        label: 'GitHub Profile',
    },
    {
        title: 'Email',
        href: 'mailto:jmj@barataribeiro.com',
        icon: <Mail aria-hidden className="size-14" />,
        label: 'Email',
    },
];

const MENU_ITEMS: MenuItem[] = [
    { title: 'Home', href: '/#home' },
    { title: 'About', href: '/#about' },
    { title: 'Projects', href: '/#projects' },
    { title: 'Education', href: '/#education' },
];

export default function Footer() {
    return (
        <footer className="bg-[#201F1D]">
            <div className="container pt-6 pb-4 sm:pt-8">
                {/* INTRO TEXT */}
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="font-Kanit text-2xl leading-none text-background uppercase sm:text-[2.5rem]">
                        Get in Touch
                    </h1>
                    <p className="max-w-md text-center leading-relaxed text-background max-sm:px-4">
                        Feel free to take an in-depth look at my projects, and let&apos;s discuss the possibility of
                        working together. I am eager to collaborate with fellow professionals in the industry.
                    </p>
                </div>

                {/* MENU */}
                <nav className="mt-10 flex flex-col items-center justify-center gap-10" aria-label="Footer navigation">
                    <Link className="self-center p-3" href="/" aria-hidden="true">
                        <h1
                            title="Barata Ribeiro Logo"
                            className="font-Kanit leading-none font-semibold tracking-widest text-background uppercase max-xs:text-xl sm:text-3xl"
                        >
                            Barata{' '}
                            <span className="font-Comfortaa leading-4 font-bold tracking-normal text-secondary">
                                &#60;/&#62;
                            </span>{' '}
                            Ribeiro
                        </h1>
                    </Link>

                    <ul className="flex gap-2 self-center max-sm:text-sm">
                        {MENU_ITEMS.map((item) => (
                            <li
                                key={item.title}
                                className="border-r border-background/10 pr-2 leading-none last:border-none last:pr-0"
                            >
                                <Link
                                    className="block p-3 font-Comfortaa text-background hover:text-primary"
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* SOCIAL */}
                <ul aria-label="Social and email" className="my-10 flex items-center justify-center gap-6">
                    {SOCIAL_LINKS.map((link) => (
                        <li key={link.title}>
                            <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="cursor-pointer text-background transition-colors select-none hover:text-primary"
                            >
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* COPYRIGHT */}
                <p className="text-center text-xs">
                    <span className="block">Copyright &copy; 2023 ~ {new Date().getFullYear()} - Barata Ribeiro</span>{' '}
                    All content referenced herein are the properties of their respective owners.
                </p>
            </div>
        </footer>
    );
}
