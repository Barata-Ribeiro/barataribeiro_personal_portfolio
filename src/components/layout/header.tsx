'use client';

import Logo from '@/components/layout/logo';
import MiniLogo from '@/components/layout/mini-logo';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { LiquidButton } from '@/components/ui/shadcn-io/liquid-button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import useIsMobile from '@/hooks/useIsMobile';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { type MouseEvent, useEffect, useRef, useState } from 'react';

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
    const { isMobile, isLoading } = useIsMobile();
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLHeadingElement | null>(null);

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
                className="flex items-center justify-between not-lg:px-4 lg:container"
                aria-label="Main Navigation"
                role="navigation"
            >
                {isMobile ? <MiniLogo aria-hidden /> : <Logo aria-hidden />}

                {!isMobile && !isLoading && (
                    <NavigationMenu className="font-Comfortaa">
                        <NavigationMenuList className="gap-3">
                            {MENU_ITEMS.map((item, index) => (
                                <NavigationMenuItem key={`nav-${item.title}-${index}`}>
                                    <LiquidButton variant="secondary" onClick={(e) => handleSmoothScroll(e, item.href)}>
                                        {item.title}
                                    </LiquidButton>
                                </NavigationMenuItem>
                            ))}
                            <NavigationMenuItem>
                                <Button className="animate-heartbeat hover:bg-blue-600/70" asChild>
                                    <Link
                                        href="/barataribeiro_resume.pdf"
                                        download="barataribeiro_resume"
                                        title="Download Barata Ribeiro's Resume"
                                        aria-label="Download Barata Ribeiro's Resume"
                                    >
                                        Download
                                    </Link>
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                )}

                {isMobile && !isLoading && (
                    <Sheet>
                        <SheetTrigger className="block cursor-pointer rounded-md p-2 transition-colors hover:bg-background/10 lg:hidden">
                            <MenuIcon aria-hidden size={24} className="text-background" />
                        </SheetTrigger>
                        <SheetContent className="bg-sidebar">
                            <SheetHeader>
                                <MiniLogo isSidebar aria-hidden />
                                <DialogTitle className="sr-only">Menu</DialogTitle>
                                <DialogDescription className="sr-only">Navigation Menu</DialogDescription>
                            </SheetHeader>
                            {/* TODO: Menu items for mobile */}
                        </SheetContent>
                    </Sheet>
                )}
            </nav>
        </header>
    );
}
