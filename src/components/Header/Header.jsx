import React from 'react';
import Logo from '../../assets/logo.svg';
import Hamburger from 'hamburger-react';

const Header = () => {
  // State for the burger menu
  const [nav, setNav] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => setNav(!nav);

  // Styles that are too large
  const navStyle = `sticky z-10 w-full h-[102px] bottom-0 flex justify-between items-center m-auto md:px-[330px] bg-mistGray-50 text-mistGray-900`;
  const mobileStyle = `absolute top-0 left-0 w-full h-screen bg-mistGray-50 flex flex-col justify-center items-center`;

  const menuItems = [
    { text: 'Home', url: '#hero' },
    { text: 'About', url: '#about' },
    { text: 'Projects', url: '#projects' },
    { text: 'Contact', url: '#contact' },
  ];

  return (
    <header>
      <nav className={navStyle}>
        {/* logo */}
        <div>
          <a href='./'>
            <img
              src={Logo}
              alt='Logo Barata Ribeiro'
              className='h-[60px] max-h-full p-2'
            />
          </a>
        </div>

        {/* menu */}
        <ul className='hidden sm:flex'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className='navlink' href={item.url}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10'>
          <Hamburger
            rounded
            size={25}
            toggled={isOpen}
            toggle={setOpen}
            label='Show menu'
          />
        </div>

        {/* Mobile Menu */}
        <ul className={nav ? mobileStyle : 'hidden'}>
          {menuItems.map((item, index) => (
            <li key={index} className='py-6 text-4xl'>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
