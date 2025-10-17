import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Comfortaa, Kanit, Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

const comfortaa = Comfortaa({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-comfortaa',
    display: 'swap',
});

const kanit = Kanit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-kanit',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://barataribeiro.com/'),
    title: 'Barata Ribeiro | Portfolio',
    description:
        'Welcome to my portfolio, where I display my work as a Full-stack Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.',
    authors: {
        name: 'João Mendes J. B. Ribeiro',
        url: 'https://www.linkedin.com/in/barataribeiro/',
    },
    keywords: [
        'portfolio',
        'full-stack developer',
        'ui designer',
        'web developer',
        'react',
        'nextjs',
        'tailwindcss',
        'typescript',
        'javascript',
        'html',
        'css',
        'web design',
        'user experience',
        'user interface',
        'digital solutions',
    ],
    openGraph: {
        title: 'Barata Ribeiro | Portfolio',
        url: 'https://barataribeiro.com/',
        description:
            'Welcome to my portfolio, where I display my work as a Full-stack Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Barata Ribeiro | Portfolio',
        site: 'https://barataribeiro.com/',
        description:
            'Welcome to my portfolio, where I display my work as a Full-stack Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const fontVariables = `${roboto.variable} ${comfortaa.variable} ${kanit.variable}`;

    return (
        <html lang="en" className="scroll-smooth md:scroll-auto" suppressHydrationWarning>
            <body className={cn(fontVariables, 'antialiased')}>{children}</body>
        </html>
    );
}
