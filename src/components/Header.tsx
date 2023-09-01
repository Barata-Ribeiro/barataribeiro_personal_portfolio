import React from 'react';
import { MenuLinks } from '../types/Components/MenuLinks';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';

export const menuItems: MenuLinks[] = [
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

  const handleClick = (event: React.SyntheticEvent) => {
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

  const renderMenu = (item: MenuLinks, additionalClasses: string) => (
    <li className={`font-Kanit ${additionalClasses}`} key={item.url}>
      <Link
        className="relative cursor-pointer p-3 transition-all duration-75 hover:rounded-lg hover:bg-mistGray-100"
        to={item.url}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
        tabIndex={0}
        role="menuitem"
        aria-label={`Scroll to ${item.text}`}
        onClick={() => nav && setNav(false)}
      >
        {item.text}
      </Link>
    </li>
  );

  return (
    <header
      className={
        shadow
          ? 'sticky top-0 z-50 h-[6.25rem] w-full bg-mistGray-50 shadow-lg'
          : 'sticky top-0 z-50 h-[6.25rem] w-full bg-mistGray-50'
      }
      role="banner"
    >
      <nav
        aria-label="Site main navigation"
        role="navigation"
        className="container flex max-w-[90rem] items-center justify-between px-4 max-md:pt-3 max-sm:pt-[1rem]"
      >
        {/* logo */}
        {miniLogo ? (
          <Link
            spy={true}
            className="flex items-center py-5 font-Kanit text-2xl font-semibold uppercase"
            to="top"
          >
            <span className="mr-2 border-r-2 border-rioGrande-600 pr-2 font-Comfortaa font-bold tracking-normal text-rioGrande-600">
              &#60;/&#62;
            </span>
            <h1
              title="Barata Ribeiro Logo"
              className="leading-none tracking-wider text-mistGray-950"
            >
              Barata
              <br />
              Ribeiro
            </h1>
          </Link>
        ) : (
          <a className="py-5" href="./">
            <h1
              title="Barata Ribeiro Logo"
              className="font-Kanit text-xl font-semibold uppercase tracking-widest text-mistGray-950 sm:text-2xl md:text-4xl"
            >
              Barata{' '}
              <span className="font-Comfortaa font-bold tracking-normal text-rioGrande-600">
                &#60;/&#62;
              </span>{' '}
              Ribeiro
            </h1>
          </a>
        )}

        {/* menu */}
        <ul className="hidden sm:flex">
          {menuItems?.map((item) => renderMenu(item, 'my-0 ml-2 text-2xl'))}
        </ul>

        {/* Hamburger */}
        <button onClick={handleClick} className="z-50 sm:hidden">
          <Hamburger
            rounded
            size={25}
            toggled={nav}
            toggle={setNav}
            label="Show menu"
            aria-haspopup="true"
            aria-controls="mobile-menu"
            aria-expanded={nav}
          />
        </button>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          role="menu"
          className={
            nav
              ? 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-mistGray-50'
              : 'hidden'
          }
        >
          {menuItems.map((item) => renderMenu(item, 'm-2 p-3 text-3xl font-semibold'))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
