import { close, menu } from '@/shared/assets/icons';
import ImgLogoComponents from '@/shared/components/ImgLogoComponents/ImgLogoComponents';
import { useState } from 'react';
import { navLinks } from '../../constants';
import ToggleTheme from './ToggleTheme';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ImgLogoComponents Logo="LogoCompleteBlueWhite" className="w-[260px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 overflow-hidden">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`font-poppins text-[16px] ${
              i === navLinks.length - 1 ? 'mr-4' : 'mr-10'
            }`}
          >
            <a
              href={`${link.path}`}
              className="text-white text-sm font-medium hover:text-reactBlue transition duration-300 ease-in-out"
            >
              {link.name}
            </a>
            
          </li>
        ))}
        <ToggleTheme />
        
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`font-poppins text-[16px] ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                <a
                  href={`${link.path}`}
                  className="text-white text-sm font-medium hover:text-reactBlue transition duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
