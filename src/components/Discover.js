import React from 'react'
import iconArrow from "./images/icon-arrow.svg"
import nextIcon from "./images/icon-angle-right.svg"
import previousIcon from "./images/icon-angle-left.svg"


const Discover = ({previousSlide, nextSlide, number, headers, paragraphs}) => {


  return (
    <div className='relative flex flex-col justify-center md:w-1/2'>

      <div className='px-6 pt-8 md:px-12'>
        <h1 className='text-2xl font-bold mb-4'>{headers[number]}</h1>
        <p className='text-gray-400'>{paragraphs[number]}</p>
      </div>
      
      <div className='mt-8 flex items-center gap-8  px-6 md:px-12 pb-8 md:pb-0 hover:text-gray-500 hover:cursor-pointer'>
        <p className='uppercase font-bold tracking-[0.4em]'>shop now</p>
        <img src={iconArrow} alt="icon-arrow" />
      </div>

      <div className='absolute left-0 bottom-0 bg-black hidden md:flex'>
        <img className='font-bold text-3xl px-4 py-2 hover:bg-gray-600 cursor-pointer' src={previousIcon} alt="" onClick = {previousSlide}/>
        <img className='font-bold text-3xl px-4 py-2  hover:bg-gray-600 cursor-pointer' src={nextIcon} alt="" onClick={nextSlide}/>
      </div>

    </div>
  )
}

export default Discover
