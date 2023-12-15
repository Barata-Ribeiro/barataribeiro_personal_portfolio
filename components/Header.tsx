'use client';

import { LinkButton } from '@/components/shared/LinkButton';
import { Logo } from '@/components/shared/Logo';
import { MiniLogo } from '@/components/shared/MiniLogo';
import { debounce } from 'lodash';
import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

interface MenuItem {
  text: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { text: 'Home', url: '/#home' },
  { text: 'About', url: '/#about' },
  { text: 'Projects', url: '/#projects' },
  { text: 'Education', url: '/#education' },
];

const LinkButtonMemo = memo(LinkButton);
const LogoMemo = memo(Logo);
const MiniLogoMemo = memo(MiniLogo);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = debounce(
      () => setIsScrolled(window.scrollY > 90),
      100
    );
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect screen width to resize logo
  useEffect(() => {
    const checkScreenSize = debounce(
      () => setIsNarrowScreen(window.innerWidth < 315),
      100
    );
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const checkIfMobileScreen = debounce(() => {
      setIsMobile(window.innerWidth < 1024);
      setIsMenuOpen(false);
    }, 100);
    checkIfMobileScreen();
    window.addEventListener('resize', checkIfMobileScreen);
    return () => window.removeEventListener('resize', checkIfMobileScreen);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    }
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      role='banner'
      className={`sticky top-0 w-full bg-mistGray-50 z-40 ${
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
              ? 'flex flex-col gap-8 justify-center items-center fixed inset-0 bg-mistGray-100 dark:bg-mistGray-900 overflow-hidden'
              : 'hidden'
          }`}>
          {menuItems.map((item, index) => (
            <li key={`nav-${index}-${item.url}`}>
              <Link
                href={item.url}
                aria-label={item.text}
                onClick={handleLinkClick}
                scroll={true}
                className={`font-Kanit hover:rounded-lg transition-all cursor-pointer py-1 px-4 ${
                  isMenuOpen && isMobile
                    ? 'hover:bg-mistGray-50 dark:hover:bg-mistGray-950 text-4xl'
                    : 'hover:bg-mistGray-100 dark:hover:bg-mistGray-900 text-xl'
                }`}>
                <span
                  ref={index === 0 ? firstMenuItemRef : null}
                  tabIndex={index === 0 ? 1 : index + 1}>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
          <li
            className={`sm:hidden ${
              isMenuOpen && isMobile && 'border-t-2 border-mistGray-400 pt-12'
            }`}>
            <LinkButton
              href='/barataribeiro_resume.pdf'
              tabIndex={isMenuOpen ? menuItems.length + 1 : -1}
              onClick={handleLinkClick}
              download='barataribeiro_resume'
              additionalStyles='font-Kanit !text-xl border-2 tracking-wider bg-royalBlue-600 text-royalBlue-50 py-4 px-8 hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 border-royalBlue-700'>
              Download CV
            </LinkButton>
          </li>
        </ul>

        <div className='flex gap-4'>
          <LinkButton
            href='/barataribeiro_resume.pdf'
            download='barataribeiro_resume'
            additionalStyles='font-Kanit border-2 tracking-wider bg-royalBlue-600 text-royalBlue-50 py-2 px-4 hover:border-royalBlue-600 hover:bg-mistGray-50 hover:text-royalBlue-600 border-royalBlue-700 max-sm:hidden'>
            Download CV
          </LinkButton>
          <button
            className='lg:hidden block z-50'
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? (
              <IoClose size={32} />
            ) : (
              <IoMenu size={32} className='text-mistGray-950' />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
