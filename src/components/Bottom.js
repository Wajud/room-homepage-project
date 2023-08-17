import React from 'react';
import aboutdark from "./images/image-about-dark.jpg"
import aboutlight from "./images/image-about-light.jpg"

const Bottom = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-7'>

        <div className='md:col-start-1 md:col-end-3'>
            <img className='w-full h-full object-cover' src={aboutdark} alt="about-dark" />
        </div>
      
        <div className='py-8 px-6 md:col-start-3 md:col-end-6'>
            <h1 className='text-xl font-bold mb-4 uppercase'>about our furniture</h1>
            <p className='text-gray-400'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>

        <div className='md:col-start-6 md:col-end-8'>
            <img className='w-full object-cover h-full' src={aboutlight} alt="about-light" />
        </div>
      
    </div>
  )
}

export default Bottom
