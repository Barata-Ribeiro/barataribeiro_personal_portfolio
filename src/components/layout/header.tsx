'use client';

import Logo from '@/components/layout/logo';
import MiniLogo from '@/components/layout/mini-logo';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { LiquidButton } from '../ui/shadcn-io/liquid-button';

interface MenuItem {
    title: string;
    href: string;
}

const MENU_ITEMS: MenuItem[] = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
];

export default function Header() {
    const [isNarrowScreen, setIsNarrowScreen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const mobileMenuRef = useRef<HTMLUListElement | null>(null);

    // Event Listener and resizeObserver for the mobile menu
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) setIsNarrowScreen(entry.contentRect.width < 315);
        });
        resizeObserver.observe(document.body);

        setIsNarrowScreen(globalThis.window.innerWidth < 315);

        globalThis.window.addEventListener('click', handleClickOutside);
        return () => {
            globalThis.window.removeEventListener('click', handleClickOutside);
            resizeObserver.disconnect();
        };
    }, []);

    // Resize Observer to get the header height
    useEffect(() => {
        const headerElement = headerRef.current;
        if (headerElement) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) setHeaderHeight(entry.target.clientHeight);
            });

            resizeObserver.observe(headerElement);

            return () => {
                if (headerElement !== null) resizeObserver.unobserve(headerElement);
            };
        }
    }, []);

    function handleMenuClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    // Smooth scroll handler for anchor links
    function handleSmoothScroll(
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        url: string,
        closeMenu?: () => void,
    ) {
        const match = new RegExp(/\/?#(.+)/).exec(url);
        if (match) {
            event.preventDefault();
            const targetId = match[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const yOffset = -headerHeight; // offset for fixed header
                const y = targetElement.getBoundingClientRect().top + globalThis.window.pageYOffset + yOffset;
                globalThis.window.scrollTo({ top: y, behavior: 'smooth' });
                if (closeMenu) closeMenu();
            }
        }
    }

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 w-full border-b border-black/30 bg-foreground/90 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150"
        >
            <nav
                className="flex items-center justify-between px-1 sm:px-5 lg:container lg:px-0"
                aria-label="Main Navigation"
                role="navigation"
            >
                {isNarrowScreen ? <MiniLogo aria-hidden="true" /> : <Logo aria-hidden="true" />}

                <NavigationMenu className="hidden font-Comfortaa lg:flex">
                    <NavigationMenuList className="gap-3">
                        {MENU_ITEMS.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <LiquidButton variant="secondary" onClick={(e) => handleSmoothScroll(e, item.href)}>
                                    {item.title}
                                </LiquidButton>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    );
}
