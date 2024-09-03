import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='Footer' className='bg-[#465697] text-white p-8 md:p-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Seção de direitos reservados */}
        <div className='text-center md:text-left mb-8 md:mb-0'>
          <p className='text-sm md:text-base'>© 2024 Todos os direitos reservados.</p>
        </div>

        {/* Lista de contatos */}
        <ul className='text-sm md:text-lg flex flex-col items-center md:items-start space-y-4'>
          <li className='flex items-center space-x-2'>
            <MdOutlineEmail size={24} />
            <a href="mailto:contato@dominio.com.br" className='hover:underline'>
              contato@dominio.com.br
            </a>
          </li>
          <li className='flex items-center space-x-2'>
            <CiLinkedin size={24} />
            <a href="https://www.linkedin.com/in/willianfigueiredo/" target="_blank" rel="noopener noreferrer" className='hover:underline'>
              LinkedIn
            </a>
          </li>
          <li className='flex items-center space-x-2'>
            <FaGithub size={24} />
            <a href="https://github.com/williandevs" target="_blank" rel="noopener noreferrer" className='hover:underline'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
