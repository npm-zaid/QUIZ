import React from 'react'
import { Link } from 'react-router-dom';
function Button3(props) {
  return (
    <>
      
      <Link to="/insight" className='lg:text-lg  text-nowrap w-fit  capitalize text-center text-stone-300 before:ml-auto before:w-0 before:h-[2px] before:bg-[#CDEA68] before:block  after:w-0 after:h-[2px] after:bg-[#CDEA68] after:block before:transition-all ease-in-out duration-1000 after:transition-all ease-in-out duration-1000 hover:after:w-full hover:before:w-full  '>{props.Title}</Link>

    </>
  )
}

export default Button3
