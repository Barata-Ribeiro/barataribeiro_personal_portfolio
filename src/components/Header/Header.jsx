import React from 'react';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';

export const menuItems = [
  { text: 'Home', url: 'home' },
  { text: 'About', url: 'about' },
  { text: 'Projects', url: 'projects' },
  { text: 'Contact', url: 'contact' },
];

const Header = () => {
  // State for the burger menu
  const [nav, setNav] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className='w-full box-border'>
      <nav
        aria-label='Site main navigation'
        className='container max-w-[1440px] flex justify-between items-center'>
        {/* logo */}
        <a className='py-5' href='./'>
          <h1
            alt='Barata Ribeiro Logo'
            className='uppercase font-Kanit font-semibold text-4xl text-mistGray-950 tracking-widest max-md:text-2xl max-sm:text-xl'>
            Barata{' '}
            <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal'>
              &#60;/&#62;
            </span>{' '}
            Ribeiro
          </h1>
        </a>

        {/* menu */}
        <ul className='hidden sm:flex'>
          {menuItems.map((item, index) => (
            <li className='my-0 ml-2 font-Kanit text-2xl' key={index}>
              <Link
                className='relative p-3 navlink cursor-pointer'
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10' tabIndex={0}>
          <Hamburger
            rounded
            size={25}
            toggled={isOpen}
            toggle={setOpen}
            label='Show menu'
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? 'absolute top-0 left-0 w-full h-screen bg-mistGray-50 flex flex-col justify-center items-center'
              : 'hidden'
          }>
          {menuItems.map((item, index) => (
            <li
              className='m-2 p-3 font-Kanit text-3xl font-semibold'
              key={index}>
              <Link
                className='relative pb-4 navlink cursor-pointer'
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav(!nav)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
