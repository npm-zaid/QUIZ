import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

function Button4() {

    const goal = useRef()

useEffect(()=>{
    const enter=()=>{
        gsap.to('.span-mother',{
            position:'absolute',
        })
        gsap.to('.span-mother span',{
            transform:'translateY(1.2em)',
            duration:.2,
            stagger:.05
        })
        gsap.to('.span-mother2 span',{
            transform: 'translateY(0em)',
            duration:.2,
            stagger:.05
        })
    }


    const leave=()=>{
        gsap.to('.span-mother',{
            position:'relative',
        })
        gsap.to('.span-mother span',{
            transform:'translateY(0em)',
            duration:.2,
            stagger:.05
        })
        gsap.to('.span-mother2 span',{
            transform: 'translateY(-1.2em)',
            duration:.2,
            stagger:.05
        })
      
    }

    
     
goal.current.addEventListener("mouseenter",enter)
goal.current.addEventListener("mouseleave",leave)
      
})

  return (
    <div>
      
   
<button ref={goal} className='text-white rounded-2xl w-[95.02px] h-[42.66px] uppercase hover:text-blue-300 flex justify-center items-center'>

  <span class="span-mother flex overflow-hidden">
  {"button".split('').map((item,index)=><span>{item}</span>)}
  </span>
  <span class="span-mother2 flex absolute overflow-hidden">
  {"button".split('').map((item,index)=><span className='-translate-y-[1.2em]  '>{item}</span>)}
  </span>
</button>


    </div>
  )
}

export default Button4
