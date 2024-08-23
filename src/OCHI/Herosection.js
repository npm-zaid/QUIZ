
import heropic from 'C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/content-image01.jpg'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Herosection() {


  useGSAP(()=>{
    gsap.to('.odd',{
      x:170,
      duration:1.5,
      ease: "power4.inOut",
    })
  })


  const cursor = useRef(null);

  useEffect(() => {
  
    const handleMouseMove = (event) => {
      gsap.to(cursor.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 1,
        ease: "back.out(1.7)",
      });
    };

    

    window.addEventListener('mousemove', handleMouseMove);

   
  }, []);





  return (
    <div  className=' min-h-screen bg-stone-900'>
        <div ref={cursor} className="cursor-follower fixed  w-[4vw] h-[4vw] rounded-full border-2 border-dotted border-[#CDEA68] cursor-pointer z-9 "><div className='bg-[#CDEA68] h-1/2 w-1/2 rounded-full absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] '></div></div>
      <div className='hero-wrapper h-[80vh] lg:h-[88vh] lg:px-12  pl-7 lg:text-[10vw] text-[15vw] font-big text-[#6e6e6f] flex flex-col justify-center uppercase lg:pt-8  lg:leading-[8vw] leading-[14vw] '>
        <h1 >we create</h1>
        <div className='flex relative z-0 '><img className='lg:w-[11vw] lg:mt-3 lg:h-[7vw] lg:rounded-lg w-[6rem] lg: absolute my-3' src={heropic}></img><h1 className='odd text-nowrap bg-stone-900'>eye opening</h1></div>
        <h1>presentation</h1>
      </div>
      <div className='hero-bottom py-8 border-t border-zinc-600 text-[#6e6e6f] flex lg:flex-row flex-col justify-between lg:px-12 px-7 lg:text-[1.2rem] text-[.9rem] lg:items-center items-start lg:gap-0 gap-3'>
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <a  className='btn flex lg:gap-3 gap-2 items-center' href='/'><p className='btn-para border border-zinc-500 rounded-3xl lg:p-2 lg:px-4 p-2 uppercase'>start the project</p><span className='btn-icon border border-zinc-500 rounded-full lg:px-2 px-[7px] lg:text-[1.9rem] text-[1.4rem]'><i class="ri-arrow-right-up-line"></i></span></a>


      </div>
    </div>
  )
}

export default Herosection
