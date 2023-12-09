'use client';

import { LinkButton } from '@/components/shared/LinkButton';
import { Logo } from '@/components/shared/Logo';
import { MiniLogo } from '@/components/shared/MiniLogo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

interface MenuItem {
  text: string;
  url: string;
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { text: 'Home', url: '/#home' },
    { text: 'About', url: '/#about' },
    { text: 'Projects', url: '/#projects' },
    { text: 'Education', url: '/#education' },
  ];

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 90);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect screen width to resize logo
  useEffect(() => {
    const checkScreenSize = () => setIsNarrowScreen(window.innerWidth < 315);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const checkIfMobileScreen = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsMenuOpen(false);
    };
    checkIfMobileScreen();
    window.addEventListener('resize', checkIfMobileScreen);
    return () => window.removeEventListener('resize', checkIfMobileScreen);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      role='banner'
      className={`sticky top-0 w-full bg-mistGray-50 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      aria-labelledby='header-title'>
      <h1 id='header-title' className='sr-only'>
        Website Header
      </h1>
      <nav
        role='navigation'
        aria-label='Main Navigation'
        className='container flex items-center justify-between'>
        {isNarrowScreen ? (
          <MiniLogo aria-hidden='true' />
        ) : (
          <Logo aria-hidden='true' />
        )}

        <ul
          className={`lg:flex items-center gap-4 ${
            isMenuOpen && isMobile
              ? 'flex flex-col gap-8 justify-center items-center fixed inset-0 bg-mistGray-100 overflow-hidden'
              : 'hidden'
          }`}>
          {menuItems.map((item, index) => (
            <li key={`nav-${index}-${item.url}`}>
              <Link
                href={item.url}
                aria-label={item.text}
                onClick={() => isMenuOpen && setIsMenuOpen(false)}
                scroll={true}
                className={`font-Kanit hover:rounded-lg transition-all cursor-pointer py-1 px-4 ${
                  isMenuOpen && isMobile
                    ? 'hover:bg-mistGray-50 text-4xl'
                    : 'hover:bg-mistGray-100 text-xl'
                }`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex gap-4'>
          <LinkButton
            href='/'
            download={true}
            additionalStyles='font-Kanit border-2 tracking-wider bg-royalBlue-600 text-royalBlue-50 py-2 px-4 hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 border-royalBlue-700'>
            Download C.V.
          </LinkButton>
          <button
            className='lg:hidden block z-50'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
