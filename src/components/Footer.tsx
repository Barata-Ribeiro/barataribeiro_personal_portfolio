import { Link } from 'react-scroll';
import { menuItems } from './Header';
import { MenuLinks } from '../types/Components/MenuLinks';
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';
import { SocialLink } from '../types/Components/SocialLinks';

const socialLinks: SocialLink[] = [
  {
    url: 'https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/',
    icon: <FaLinkedinIn size={40} aria-label="LinkedIn" />,
    label: 'LinkedIn',
  },
  {
    url: 'https://github.barataribeiro.com/',
    icon: <FaGithub size={40} aria-label="GitHub" />,
    label: 'GitHub',
  },
  {
    url: 'mailto:j.mendes1920@gmail.com',
    icon: <FaMailBulk size={40} aria-label="Email" />,
    label: 'Send Mail',
  },
];

const renderFooterMenu = (item: MenuLinks) => {
  return (
    <li
      className="border-r pr-2 leading-none text-mistGray-50 last:border-none last:pr-0"
      key={item.url}
    >
      <Link
        className={`cursor-pointer hover:text-royalBlue-100`}
        to={item.url}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
        aria-label={`Scroll to ${item.text}`}
      >
        {item.text}
      </Link>
    </li>
  );
};

const Footer = () => (
  <footer className="box-border min-w-full bg-[#201F1D]">
    <div className="pb-4 pt-6 sm:pt-8">
      {/* INTRO TEXT */}
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="font-Kanit text-[2.5rem] uppercase leading-none text-mistGray-50">
          Get in Touch
        </h1>
        <p className="max-w-md text-center leading-relaxed text-mistGray-50 max-sm:px-4">
          Feel free to take an in-depth look at my projects, and let's discuss the
          possibility of working together. I am eager to collaborate with fellow
          professionals in the industry.
        </p>
      </div>

      {/* MENU */}
      <nav
        className="mt-10 flex flex-col items-center justify-center gap-10"
        aria-label="Footer navigation"
      >
        <a className="self-center p-3" aria-label="Navigate to homepage" href="./">
          <h1
            title="Barata Ribeiro Logo"
            className="max-xs:text-xl font-Kanit font-semibold uppercase leading-none tracking-widest text-mistGray-50 sm:text-3xl"
          >
            Barata{' '}
            <span className="font-Comfortaa font-bold leading-4 tracking-normal text-rioGrande-600">
              &#60;/&#62;
            </span>{' '}
            Ribeiro
          </h1>
        </a>
        <ul className="flex gap-2 self-center max-sm:text-sm">
          {menuItems.map(renderFooterMenu)}
        </ul>
      </nav>

      {/* SOCIAL */}
      <ul
        aria-label="Social and email"
        className="my-10 flex items-center justify-center gap-6"
      >
        {socialLinks.map(({ url, icon, label }: SocialLink) => (
          <li key={url}>
            <a
              href={url}
              aria-label={label}
              rel="noreferrer"
              target="_blank"
              className="text-mistGray-50 transition-colors hover:text-royalBlue-500"
            >
              <span className="sr-only">{label}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>

      {/* END MENU */}
      <p className="text-center text-xs text-mistGray-600">
        <span className="block">Copyright &copy; 2023 - Barata Ribeiro</span> All
        content referenced herein are the properties of their respective owners.
      </p>
    </div>
  </footer>
);

export default Footer;
