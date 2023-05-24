import React from 'react';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';

export const menuItems = [
  { text: 'Home', url: 'home' },
  { text: 'About', url: 'about' },
  { text: 'Projects', url: 'projects' },
  { text: 'Education', url: 'education' },
];

const Header = () => {
  // State for the burger menu
  const [nav, setNav] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setNav(!nav);
    setOpen(!isOpen);
  };

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <header className='fixed top-0 bg-mistGray-50 w-full'>
      <nav
        aria-label='Site main navigation'
        className='container max-w-[1440px] flex justify-between items-center'>
        {/* logo */}
        <a className='py-5 max-sm:pl-3' href='./'>
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
                className='navlink relative p-3 cursor-pointer'
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
                className='navlink relative pb-4 cursor-pointer'
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}>
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
