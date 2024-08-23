import React from 'react'

function Button2() {
  return (
    <a href='' className='group  text-slate-100 flex items-center justify-center bg-black w-fit px-1  rounded-full'>
         <p className='text-xl uppercase p-5'>read more</p>
         <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center overflow-hidden'>
         <i className="arrow ri-arrow-right-up-line bg-[#cdea68] rounded-full p-1 leading-[2px] text-[2px] text-black transition-all ease-in-out delay-150 duration-500 group-hover:p-4 group-hover:text-3xl group-hover:leading-[30px] "></i>
         </span>
            </a>
  )
}

export default Button2
