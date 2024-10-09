import React from 'react'
import { projectsData } from '../data'
const Projects = () => {
  return (
    <>
      <div className='w-auto h-auto bg-transparent'>
        {projectsData.map((element,index)=>(
         <div className='w-auto h-auto rounded-sm bg-gray-600 p-2 mt-2 pl-2 shadow-md' key={index}>
          <article className='text-base text-black font-mono italic hover:non-italic hover:text-gray-800'>Project name: {element.data.name}</article>
          <article  className='text-base text-black font-serif italic hover:non-italic hover:text-gray-800'>Project state: {element.data.state}</article>
          <article  className='text-base text-black font-serif italic hover:non-italic hover:text-gray-800'>Organisation : {element.data.organisation}</article>
          <div className='flex gap-2 items-center pt-1 pb-2 h-auto w-auto'>
           {element.data.techStack.map((value,index)=>(
           <div className='text-3xl text-black hover:text-teal-400 mr-2 ml-2' key={index}>{value}</div> 
          ))} 
          </div>
          
          
        </div> 
        ))}
        
      </div>
    </>
  )
}

export default Projects