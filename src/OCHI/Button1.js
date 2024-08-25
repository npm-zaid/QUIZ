import React from 'react'
import { Link } from 'react-router-dom';

function Button1(props) {
  return (
    <>

    <Link to="/Ochi" className='lg:text-xl text-lg  text-nowrap block w-fit hover:text-black relative lg:px-3 lg:py-2 p-2  text-stone-400 border  border-stone-400 rounded-full before:bg-[#CDEA68]  before:h-[100%] before:w-[100%] before:absolute before:left-0 before:bottom-0 before:translate-y-[110%] before:ease-in before:duration-200 hover:before:translate-y-0 before:rounded-full hover:before:rounded-xl overflow-hidden ' ><p className='relative '>{props.Title}</p></Link>

</>

  )
}

export default Button1
