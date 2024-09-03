import React from 'react';
import ProjectCard from './ProjectCard'; 

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projetos</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard 
          title="CMS Institucional"
          main="Desenvolvemos um CMS para pequenas e médias empresas utilizando Django e Bootstrap. Este sistema facilita a gestão de conteúdo e oferece uma interface intuitiva para os administradores."
          demoLink="https://suporcont.com.br/home/"
          githubLink="https://github.com/exemplo/projeto"
        />
       
        
        
      </div>
    </div>
  );
};

export default Projects;
