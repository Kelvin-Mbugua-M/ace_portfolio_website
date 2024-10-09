import React from 'react'
import { serviceData } from '../data'
const Services = () => {
  return (
    
    <div className='w-full h-auto bg-transparent grid place-items-center grid-cols-[auto_auto]'>
      {serviceData.map((value,index)=>(
        <div className='w-72 h-auto pb-4 bg-gray-300/30 backdrop:blur-md rounded-md hover:bg-teal-400/50 hover:shadow-lg hover:shadow-teal-400 mt-4 mb-4' key={index}>
          
          <h1 className='text-2xl text-black font-semibold text-center mt-2 mb-2 hover:text-teal-400'>{value.umbrellaName}</h1>
          
          {value.umbrellaChildren.services.map((element,index)=>(
            <div key={index}>
              <article className='font-bold ml-4 italics hover:text-grey-900 hover:not-italic hover:text-teal-400'>{element.service}</article>
              <article className='font-light text-sm ml-6 text-balance hover:text-grey-900 hover:not-italic hover:text-teal-400'>{element.description}</article>
            </div>
          ))}
          <article className='text-sm text-center mr-2 ml-2 mt-3 text-gray-900'>{value.umbrellaChildren.footNote}</article>
        </div>
      ))}
        
      </div>
  )
}

export default Services