import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button2 from './Button2';
gsap.registerPlugin(ScrollTrigger);

function About() {

  const ref=useRef(null)

useGSAP(()=>{
  gsap.from('.upper h1',{
    y:60,
    scrollTrigger:{
      trigger:'.upper',
      scroller:'body',
      start:'top 65%',
      end:'top 45%',
      scrub:2
    }
  })
})

useEffect(()=>{

  const mouseEnter=()=>{
   
    gsap.to('.img-wrapper',{
      scale:.95,
      duration:.5
  });

  gsap.to('.img-wrapper .img',{
      scale:1.1,
      duration:.5
  });

  }

  const mouseLeave=()=>{
    gsap.to('.img-wrapper',{
      scale:1,
      duration:.5
  });

  gsap.to('.img-wrapper .img',{
      scale:1,
      duration:.5
  });
  }

    
ref.current.addEventListener("mouseenter",mouseEnter)
ref.current.addEventListener("mouseleave",mouseLeave)



})


  return (
    <div  className=' about-wrapper min-h-screen bg-[#CDEA68] rounded-t-[2rem]'>
           
            <div className='upper lg:px-14 px-7 py-28 lg:text-justify text- text-small lg:text-[3.8vw] text-[7vw] lg:leading-[4.5vw] leading-[27px]   '>
            <div className='layer overflow-hidden'><h1>Ochi is a strategic presentation agency for forward-</h1></div>
        <div className='layer overflow-hidden'> <h1 >thinking businesses that need to <span className='underline'>raise funds</span>, <span className='underline'>sell</span></h1></div>
        <div className='layer overflow-hidden'> <h1><span className='underline'>prod­ucts</span>, <span className='underline'>show com­plex ideas</span>, <span className='underline'>and hire great peo­ple.</span></h1></div>
             </div>
         
      <div className='lower lg:grid lg:gap-0  grid-cols-12 lg:px-14  px-7 text-xl lg:pt-6 pt-14 lg:pb-0 pb-10 text-zinc-700 font-[100] border-y border-y-black'>
        <div className='col-span-6  mb-7 lg:mb-0 lg:text-xl text-2xl  '>what you can expect:</div>
        <div className='col-span-3 lg:h-[60vh] h-[50vh] flex flex-col gap-14 items-center '>
             <h5>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h5>
            <h5>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h5>
        </div>
        <div className='col-span-3 flex flex-col gap-2 justify-center lg:items-end '>
            <p>S :</p>
            <a className='underline' href="">instagram</a><a className='underline' href="">behance</a><a className='underline' href="">facebook</a><a className='underline' href="">linkedin</a>
            </div> 
      </div>
 
      <div className='lowest lg:grid grid-cols-12 lg:p-10 px-7 py-10 lg:flex-none flex flex-col-reverse lg:items-start items-center' >
                <div className='col-span-6 flex flex-col '>
                  <h5 className='text-[3.8vw] lg:visible invisible '>our approach :</h5>
                  <Button2  ></Button2>
               </div>
                <div ref={ref} className='col-span-6 lg:h-[70vh]'><div className=' h-full   img-wrapper overflow-hidden rounded-3xl'><img className='img h-[100%] w-[100%] object-cover ' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg'></img></div></div>
            </div> 

    </div>
  )
}

export default About
