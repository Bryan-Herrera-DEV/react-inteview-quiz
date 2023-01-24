import ImgLogoComponents from '@/shared/components/ImgLogoComponents/ImgLogoComponents';
import React from 'react';
import { navLinks } from '../../constants';

const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ImgLogoComponents Logo="LogoCompleteBlueWhite" className="w-[260px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, i) => (
          <li key={i} className="mx-4 font-poppins">
            <a
              href={`${link.path}`}
              className="text-white text-sm font-medium hover:text-reactBlue transition duration-300 ease-in-out"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
