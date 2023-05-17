import React from 'react';
import Hamburger from 'hamburger-react';

const Header = () => {
  // State for the burger menu
  const [nav, setNav] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => setNav(!nav);

  // Styles that are too large
  const navStyle = 'fixed w-full h-[102px] flex justify-between items-center m-auto px-[120px] bg-mistGray-50 text-mistGray-900';

  const mobileStyle = 'absolute top-0 left-0 w-full h-screen bg-mistGray-50 flex flex-col justify-center items-center';

  return (
    <header>
      <nav className={navStyle}>
        {/* logo */}
        <div>
          <h1>LOGO</h1>
        </div>

        {/* menu */}
        <ul className='hidden sm:flex'>
          <li>
            <a className='navlink' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='navlink' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='navlink' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a className='navlink' href='#contact'>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10'>
          <Hamburger rounded size={25} toggled={isOpen} toggle={setOpen} label='Show menu' />
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : mobileStyle}>
          <li className='py-6 text-4xl'>
            <a href='#'>Home</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='#about'>About</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
