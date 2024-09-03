import React from 'react';
import { SiReact, SiDjango } from 'react-icons/si'; // Ícones para React e Django
import { FaPython, FaBootstrap } from 'react-icons/fa'; // Ícones para Python e Bootstrap
import { RiTailwindCssFill } from 'react-icons/ri'; // Ícone para Tailwind CSS
import Experiencia1 from '../../assets/s4md.png'; // Substitua pelo caminho correto da sua imagem

const Experience = () => {
    return (
        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold mb-6 text-center'>Experiência</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Seção de ícones à esquerda */}
                <div className='md:col-span-2 flex flex-wrap gap-4 justify-center'>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-lg'>
                        <FaPython color='#FFD448' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-lg'>
                        <SiDjango color='#32AC7B' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-lg'>
                        <RiTailwindCssFill color='#0FB8D6' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-lg'>
                        <FaBootstrap color='#6C39B4' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-lg'>
                        <SiReact color='#61DAFB' size={50} />
                    </span>
                </div>

                {/* Seção de experiências à direita */}
                <div className='md:col-span-1 flex flex-col gap-4'>
                    <div className='flex gap-4 bg-slate-950 bg-opacity-60 p-4 rounded-lg items-center shadow-lg'>
                        <img src={Experiencia1} width={50} alt="Experiência" className='rounded-lg shadow-md' />
                        <div className='text-white text-sm'>
                            <h2 className='font-semibold leading-tight mb-1'>Desenvolvedor Web - Django</h2>
                            <p className='font-light leading-tight mb-2'>
                                set 2023 - atual
                            </p>
                            <ul className='list-disc pl-4'>
                                <li>- Work as a software developer</li>
                                <li>- Junior developer</li>
                            </ul>
                        </div>
                    </div>

                    {/* Adicione mais seções de experiência aqui se necessário */}
                    <div className='flex gap-4 bg-slate-950 bg-opacity-60 p-4 rounded-lg items-center shadow-lg'>
                        <img src={Experiencia1} width={50} alt="Experiência" className='rounded-lg shadow-md' />
                        <div className='text-white text-sm'>
                            <h2 className='font-semibold leading-tight mb-1'>Desenvolvedor Web - Django</h2>
                            <p className='font-light leading-tight mb-2'>
                                set 2023 - atual
                            </p>
                            <ul className='list-disc pl-4'>
                                <li>- Work as a software developer</li>
                                <li>- Junior developer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
