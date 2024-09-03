import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
      <span className='text-xl font-bold tracking-wide'>Portfolio</span>

      <ul className={`${
        menu ? 'block' : 'hidden'
      } w-full py-2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:gap-6 md:w-auto`}>
        <li className='text-md transition-all duration-300 p-1 md:p-0 w-full md:w-auto'>
          <a href='#About' className='hover:text-gray-300 block text-center md:inline-block'>Sobre</a>
        </li>
        <li className='text-md transition-all duration-300 p-1 md:p-0 w-full md:w-auto'>
          <a href='#Experience' className='hover:text-gray-300 block text-center md:inline-block'>Experiência</a>
        </li>
        <li className='text-md transition-all duration-300 p-1 md:p-0 w-full md:w-auto'>
          <a href='#Projects' className='hover:text-gray-300 block text-center md:inline-block'>Projetos</a>
        </li>
        <li className='text-md transition-all duration-300 p-1 md:p-0 w-full md:w-auto'>
          <a href='#Footer' className='hover:text-gray-300 block text-center md:inline-block'>Contato</a>
        </li>
      </ul>

      {showMenu ? (
        <RiMenuLine
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all'
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all'
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
