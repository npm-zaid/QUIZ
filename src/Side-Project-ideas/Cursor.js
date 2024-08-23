import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Button1 from '../OCHI/Button1';

function Cursor(props) {
const cursor = useRef(null);


useEffect(()=>{

  const mousemove=(e)=>{
  const {clientX,clientY} = e;
  const{width,height,top,left}=cursor.current.getBoundingClientRect();
  const x= clientX-(left+width/2)
  console.log(x)
  const y = clientY-(top+height/2)
  gsap.to(cursor.current,{x:x})
  gsap.to(cursor.current,{y:y})
}


const mouseleave=()=>{
  gsap.to(cursor.current,{x:0,ease: "elastic.out(1,0.3)",})
  gsap.to(cursor.current,{y:0,ease: "elastic.out(1,0.3)",})
}

cursor.current.addEventListener("mousemove",mousemove)
cursor.current.addEventListener("mouseleave",mouseleave)

return()=>{
  cursor.current.removeEventListener("mousemove",mousemove);
  cursor.current.removeEventListener("mouseleave",mouseleave)
}

})

  return (
    <>
  
      <div ref={cursor}  className=' h-[80px] w-[80px] bg-[#CDEA68]  rounded-full flex items-center justify-center'><div>{props.icon}</div></div>

    
    </>
  )
}

export default Cursor
