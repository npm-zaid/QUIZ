import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";



function Marquee() {

useGSAP(()=>{
    gsap.to('.mover h1',{
        x:'-100%',
        duration:7,
        repeat:-1,
        ease:'none'
    })
})


  return ( 
   <>
  <div data-scroll data-scroll-speed=".2" className=' wrapper bg-[#004D43] lg:rounded-t-[2rem]  rounded-t-[1rem] lg:h-[60vh] h-[45vh] flex items-center justify-center font-[900]  overflow-hidden'>
    <div className='lg:h-[75%] h-[70%] mover border-y border-slate-500 w-full flex text-nowrap lg:text-[25rem]  text-[16rem] font-big lg:leading-[15rem]  leading-[13rem] text-white uppercase'>
        <h1 >we are ochi.</h1>
        <h1 >we are ochi.</h1>
        <h1 >we are ochi.</h1>
        <h1 >we are ochi.</h1>
        <h1 >we are ochi.</h1>
        <h1 >we are ochi.</h1>
    </div>
  </div>
   </>
  )
}

export default Marquee
