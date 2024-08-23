import React from 'react'

function Button3(props) {
  return (
    <>
      
      <a className='text-lg w-fit text-nowrap capitalize text-center text-stone-300 before:ml-auto before:w-0 before:h-[2px] before:bg-[#CDEA68] before:block  after:w-0 after:h-[2px] after:bg-[#CDEA68] after:block before:transition-all ease-in-out duration-1000 after:transition-all ease-in-out duration-1000 hover:after:w-full hover:before:w-full  '>{props.Title}</a>

    </>
  )
}

export default Button3
