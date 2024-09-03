import React from 'react';
import bannerImg from '../../assets/banner.png';

const ProjectCard = ({ title, main, demoLink, githubLink }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col w-full md:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img src={bannerImg} alt="Project Banner" className='w-full h-48 md:h-60 object-cover rounded-t-2xl' />
      <h3 className='px-4 text-xl md:text-2xl font-bold text-white mt-4'>{title}</h3>
      <p className='px-4 text-sm md:text-md text-white leading-tight py-2'>{main}</p>
      <div className='mt-4 px-4 flex justify-center gap-4'>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className='text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105'>
            Demonstração
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className='text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105'>
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
