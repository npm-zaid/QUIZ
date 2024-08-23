import React from 'react'

function Button1(props) {
  return (
    <>

    <a href='' className='text-xl text-nowrap block w-fit hover:text-black relative px-4 py-1 text-stone-400 border  border-stone-400 rounded-full before:bg-[#CDEA68;]  before:h-[100%] before:w-[100%] before:absolute before:left-0 before:bottom-0 before:translate-y-full before:ease-in before:duration-200 hover:before:translate-y-0 before:rounded-full hover:before:rounded-xl overflow-hidden' ><p className='relative z-99'>{props.Title}</p></a>
</>
  )
}

export default Button1
