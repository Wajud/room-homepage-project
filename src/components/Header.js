import React from 'react'
import hamburger from "./images/icon-hamburger.svg"
import closeMenu from "./images/icon-close.svg"
import nextIcon from "./images/icon-angle-right.svg"
import previousIcon from "./images/icon-angle-left.svg"


const Header = ({previousSlide, nextSlide, headerImages, number, closedNav, setClosedNav}) => {
   
  return (
    <div className="md:w-1/2">
        <div className='relative h-[80vh]'>
            <div className='-z-10 absolute left-0 right-0'>
                <img className='w-full h-[80vh] object-cover' src={headerImages[number]} alt="" />
            </div>

            {/* Increase and reduce */}
            <div className='absolute right-0 bottom-0 bg-black flex md:hidden'>
                <img className='font-bold text-3xl px-4 py-2 hover:bg-gray-600 cursor-pointer' src={previousIcon} alt="" onClick = {previousSlide}/>
                <img className='font-bold text-3xl px-4 py-2  hover:bg-gray-600 cursor-pointer' src={nextIcon} alt="" onClick={nextSlide}/>
                   
            </div>

            <div className='hidden md:flex px-6 pt-8 lg:px-16 gap-12 lg:gap-16 text-white font-bold'>
                <h1>room</h1>
                <ul className='flex justify-between gap-6 lg:gap-8'>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-white'><a href="/">home</a></li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-white'><a href="/">shop</a></li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-white'><a href="/">about</a></li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-white'><a href="/">contact</a></li>
                </ul>
                
            </div>

            <>
            { closedNav ? 
            <div className='py-4 px-6 flex items-center md:hidden'>
                <div>
                    <img className="w-4 h-4" src={hamburger} onClick = {()=>setClosedNav(false)} alt="" />
                </div>
             
                <h1 className='text-white text-center font-bold text-2xl w-full'>room</h1>
            </div> :

            <div className='py-6 -mt-6 md:hidden'>
                <div className=' py-6 px-6 bg-white flex justify-between items-center'>
                     <div>
                        <img className="w-4 h-4" src={closeMenu} onClick={()=>setClosedNav(true)} alt="" />
                    </div>

                    <div className='w-3/4'>
                        <ul className='text-black font-bold flex justify-between w-full'>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black'><a href="/">home</a></li>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black'><a href="/">shop</a></li>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black'><a href="/">about</a></li>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black'><a href="/">contact</a></li>
                        </ul>
                    
                    </div>
                    
                </div>
                <div className='w-full h-[100vh] bg-gray-400 opacity-90 z-20'></div>
                
            </div> }
            </> 
       
        </div>
    </div>
    
  )
}

export default Header
