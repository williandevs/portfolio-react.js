import React from 'react';
import avatarimg from '../../assets/willian.png';
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20'>
      <div className='md:w-1/2 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-tight tracking-tighter mb-4'>
         <TextChange/>
        </h1>
        <p className='text-sm md:text-xl tracking-tight leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minima molestiae. Id quas sequi facere perferendis officia, accusantium pariatur eveniet porro, 
        </p>
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697]'>
          Contate-me
        </button>
      </div>
      
      <div className='md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'>
        <img className='w-full max-w-xs md:max-w-md' src={avatarimg} alt="Willian Figueiredo" />
      </div>
    </div>
  );
}

export default Home;
