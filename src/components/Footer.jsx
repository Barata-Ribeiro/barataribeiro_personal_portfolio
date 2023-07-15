import React from "react";
import { Link } from "react-scroll";
import { menuItems } from "./Header";
import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";

const renderFooterMenu = (item) => {
  return (
    <li
      className="text-mistGray-50 border-r last:border-none pr-2 last:pr-0 leading-none"
      key={item.url}
    >
      <Link
        className={`cursor-pointer hover:text-royalBlue-100`}
        to={item.url}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        {item.text}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#201F1D] min-w-full box-border">
      <div className="sm:pt-8 pt-6 pb-4">
        {/* INTRO TEXT */}
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-Kanit text-[2.5rem] text-mistGray-50 uppercase leading-none">
            Get in Touch
          </h1>
          <p className="max-w-md text-mistGray-50 leading-relaxed text-center max-sm:px-4">
            Feel free to take an in-depth look at my projects, and let's discuss
            the possibility of working together. I am eager to collaborate with
            fellow professionals in the industry.
          </p>
        </div>

        {/* MENU */}
        <nav className="flex flex-col justify-center items-center gap-10 mt-10">
          <a className="p-3 self-center" href="./">
            <h1
              alt="Barata Ribeiro Logo"
              className="uppercase font-Kanit font-semibold text-mistGray-50 sm:text-3xl max-xs:text-xl tracking-widest leading-none"
            >
              Barata{" "}
              <span className="font-Comfortaa font-bold leading-4 text-rioGrande-600 tracking-normal">
                &#60;/&#62;
              </span>{" "}
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
          className="flex justify-center items-center gap-6 my-10"
        >
          <li>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/"
              rel="noreferrer"
              target="_blank"
              className="text-mistGray-50 transition-colors hover:text-royalBlue-500"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn size={40} />
            </a>
          </li>
          <li>
            <a
              href="https://github.barataribeiro.com/"
              rel="noreferrer"
              target="_blank"
              className="text-mistGray-50 transition-colors hover:text-royalBlue-500"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub size={40} />
            </a>
          </li>
          <li>
            <a
              href="mailto:j.mendes1920@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="text-mistGray-50 transition-colors hover:text-royalBlue-500"
            >
              <span className="sr-only">Send Mail</span>
              <FaMailBulk size={40} />
            </a>
          </li>
        </ul>

        {/* END MENU */}
        <p className="text-mistGray-600 text-center text-xs">
          <span className="block">Copyright &copy; 2023 - Barata Ribeiro</span>{" "}
          All content referenced herein are the properties of their respective
          owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
