import React from 'react';
import { Link } from 'react-scroll';

export const menuItems = [
  { text: 'Home', url: 'home' },
  { text: 'About', url: 'about' },
  { text: 'Projects', url: 'projects' },
  { text: 'Education', url: 'education' },
];

const Header = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <header className='fixed top-0 z-50 bg-mistGray-600 w-[1220px] mt-4 rounded-lg shadow-md'>
      <nav
        aria-label='Site main navigation'
        className='flex justify-between items-center py-[10px]'>
        <a className='p-3 self-center' href='./'>
          <h1
            alt='Barata Ribeiro Logo'
            className='uppercase font-Kanit font-semibold text-mistGray-950 text-2xl tracking-widest'>
            Barata{' '}
            <span className='font-Comfortaa font-bold leading-4 text-rioGrande-600 tracking-normal'>
              &#60;/&#62;
            </span>{' '}
            Ribeiro
          </h1>
        </a>

        <ul className='flex gap-2 self-center'>
          {menuItems.map((item) => (
            <li className='font-Kanit text-2xl' key={item.url}>
              <Link
                className={`p-3 cursor-pointer hover:bg-mistGray-500 rounded-lg`}
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
      </nav>
    </header>
  );
};

export default Header;
