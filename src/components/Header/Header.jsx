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
  const [miniLogo, setMiniLogo] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setNav(!nav);
  };

  React.useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'unset';
  }, [nav]);

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  React.useEffect(() => {
    const handleLogo = () => {
      if (window.innerWidth < 315) setMiniLogo(true);
      else setMiniLogo(false);
    };
    handleLogo();
    window.addEventListener('resize', handleLogo);
    return () => {
      window.removeEventListener('resize', handleLogo);
    };
  }, []);

  return (
    <header
      className={
        shadow
          ? 'fixed top-0 bg-mistGray-50 shadow-lg w-full z-50 h-[6.25rem]'
          : 'fixed top-0 bg-mistGray-50 w-full z-50 h-[6.25rem]'
      }>
      <nav
        aria-label='Site main navigation'
        className='container max-w-[90rem] flex justify-between items-center px-4 max-md:pt-3 max-sm:pt-4 max-[22.5rem]:pt-[0.375rem]'>
        {/* logo */}
        {miniLogo ? (
          <a
            className='py-5 uppercase font-Kanit font-semibold flex items-center text-2xl'
            href='./'>
            <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal mr-2 border-r-2 border-rioGrande-600 pr-2'>
              &#60;/&#62;
            </span>
            <h1
              alt='Barata Ribeiro Logo'
              className='text-mistGray-950 tracking-wider leading-none'>
              Barata
              <br />
              Ribeiro
            </h1>
          </a>
        ) : (
          <a className='py-5' href='./'>
            <h1
              alt='Barata Ribeiro Logo'
              className='uppercase font-Kanit font-semibold md:text-4xl text-mistGray-950 tracking-widest sm:text-2xl text-xl'>
              Barata{' '}
              <span className='font-Comfortaa font-bold text-rioGrande-600 tracking-normal'>
                &#60;/&#62;
              </span>{' '}
              Ribeiro
            </h1>
          </a>
        )}

        {/* menu */}
        <ul className='hidden sm:flex'>
          {menuItems.map((item) => (
            <li className='my-0 ml-2 font-Kanit text-2xl' key={item.url}>
              <Link
                className='relative p-3 cursor-pointer hover:bg-mistGray-100 hover:rounded-lg transition-all duration-75'
                to={item.url}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={handleClick} className='sm:hidden z-50'>
          <Hamburger
            rounded
            size={25}
            toggled={nav}
            toggle={setNav}
            label='Show menu'
          />
        </button>

        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? 'absolute top-0 left-0 w-full h-screen bg-mistGray-50 flex flex-col justify-center items-center'
              : 'hidden'
          }>
          {menuItems.map((item) => (
            <li
              className='m-2 p-3 font-Kanit text-3xl font-semibold'
              key={item.url}>
              <Link
                className='relative py-2 px-4 cursor-pointer hover:bg-mistGray-100 hover:rounded-lg transition-all duration-75'
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
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

export default React.memo(Header);
