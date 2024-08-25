import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Button1 from './Button1';


function Features({cdata}) {

    //card-container 1
    const goal = useRef(null);
    useEffect(()=>{

        const mouseEnter=()=>{
            gsap.to('.span1',{
                y:0,
                duration:.4,
                stagger:.1,
                ease: "power4.out",
            });

            gsap.to('.card1',{
                scale:.95,
                duration:.5
            });

            gsap.to('.img1',{
                scale:1.1,
                duration:.5
            });
      }

      
      const mouseLeave=()=>{
        gsap.to('.span1',{
            y:'100%',
            duration:.4,
            stagger:.1,
            ease: "power4.out",
        })

        gsap.to('.card1',{
            scale:1,
            duration:.5
        });

        gsap.to('.img1',{
            scale:1,
            duration:.5
        });

      }



     
goal.current.addEventListener("mouseenter",mouseEnter)
goal.current.addEventListener("mouseleave",mouseLeave)
      

      
    



      })

      //card-container 2
      const goal2 = useRef(null);
      useEffect(()=>{

        const mouseEnter=()=>{
            gsap.to('.span2',{
                y:0,
                duration:.4,
                stagger:.1,
                ease: "power4.out",
            });

            gsap.to('.card2',{
                scale:.95,
                duration:.5
            });

            gsap.to('.img2',{
                scale:1.1,
                duration:.5
            });
      
      }
      
      
      const mouseLeave=()=>{
        gsap.to('.span2',{
            y:'100%',
            duration:.4,
            stagger:.1,
            ease: "power4.out",

        });

        gsap.to('.card2',{
            scale:1,
            duration:.5
        });

        gsap.to('.img2',{
            scale:1,
            duration:.5
        });
      }

      
goal2.current.addEventListener("mouseenter",mouseEnter)
goal2.current.addEventListener("mouseleave",mouseLeave)
      



      })






  return (
    
      <div className=' cards lg:grid grid-cols-12 lg:p-16 p-7 gap-10 h-screen shrink-0 w-full'>

        <div  className='card-container  lg:h-[70vh]  col-span-6 relative '>


        <div className='text-stone-500 text-2xl'><span><i class="ri-arrow-down-double-fill"></i></span>{cdata.Text1}</div>
        
            <p className='absolute overflow-hidden flex text-[12vw] uppercase left-full font-big text-[#CDEA68]  -translate-y-1/2  top-1/2 -translate-x-1/2 z-10 '>
            {cdata.Text1.split('').map((item)=><span className='span1 inline-block translate-y-full'>{item}</span>)}</p>
            
            <div ref={goal}  className={`card1 h-[100%] rounded-2xl overflow-hidden`}>
                <img className='img1 h-[100%] w-[100%] object-cover' src={cdata.Img1}></img>
            </div>

            <div className='flex gap-7 py-6 '>
                <Button1 Title={cdata.title1} ></Button1>
                <Button1 Title={cdata.title2}></Button1>
                <Button1 Title={cdata.title3}></Button1>
               
                </div>
        </div>
        
        <div  className='card-container  lg:h-[70vh] col-span-6 relative'>
        <div className='text-stone-500 text-2xl'><span><i class="ri-arrow-down-double-fill"></i></span>{cdata.Text2}</div>
        <p className='absolute overflow-hidden flex text-[12vw] uppercase right-full font-big text-[#CDEA68]  -translate-y-1/2  top-1/2 translate-x-1/2 z-10 '>
        {cdata.Text2.split('').map((item,index)=><span className='span2 inline-block translate-y-[100%]'>{item}</span>)}</p>
            <div ref={goal2}   className='card2 h-full  rounded-2xl overflow-hidden border border-slate-700'>
                <img className='img2 h-[100%] w-[100%] object-cover' src={cdata.Img2}></img>
            </div>
        
            <div className='flex items-start justify-start gap-7 py-6'>
                <Button1 Title={cdata.title5}></Button1>
                <Button1 Title={cdata.title6}></Button1>
                
                
                </div>
        </div>
      </div>
  )
}

export default Features
