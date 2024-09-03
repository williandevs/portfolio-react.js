import React from 'react';
import AboutImg from '../../assets/willian.png';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div id='About' className='text-white md:flex items-center md:justify-between overflow-hidden border-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div className='md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0'>
                <img className='w-full max-w-xs md:max-w-sm rounded-lg' src={AboutImg} alt="Willian Figueiredo" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-6'>Sobre</h2>
                <p className='text-sm md:text-lg leading-relaxed mb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minima molestiae. Id quas sequi facere perferendis officia, accusantium pariatur eveniet porro.
                </p>
                <div>
                    <div className='flex items-start gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-semibold mb-2'>Front End</h3>
                            <p className='text-sm md:text-base leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa nam debitis quod nobis? Vel optio incidunt nisi debitis quibusdam cum facilis fugiat et obcaecati, illo exercitationem eius accusamus! Aspernatur!
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-semibold mb-2'>Back End</h3>
                            <p className='text-sm md:text-base leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa nam debitis quod nobis? Vel optio incidunt nisi debitis quibusdam cum facilis fugiat et obcaecati, illo exercitationem eius accusamus! Aspernatur!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; // Alterado para exportação padrão
