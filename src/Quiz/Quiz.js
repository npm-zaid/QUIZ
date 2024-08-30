import React, { useEffect } from 'react'
import './Quiz.css'
import { Qdata } from './Qdata'
import { useState,useRef } from 'react'
import gsap from 'gsap'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { useGSAP } from '@gsap/react'
import pic from "C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/trophy-transformed (1).png"

function Quiz() {

    let [index,setindex]=useState(0)
    let [Ques,setQues]=useState(Qdata[index])
    let [lock,setlock]=useState(false)
    let [score,setScore]=useState(0);
    let [result,setresult]=useState(false);
    let option1=useRef(null);
    let option2=useRef(null);
    let option3=useRef(null);
    let option4=useRef(null);
    let option_array=[option1,option2,option3,option4];


   const checkans = (e,ans) => {
   
if(lock==false){

  if (Ques.ans===ans){
    e.target.classList.add("effecto");
    setlock(true)
    setScore(Prev=>Prev+1)
  }

  else{
    e.target.classList.add("wrong");
    setlock(true)
    option_array[Ques.ans-1].current.classList.add("effecto");
}
}
    
}

const nxt =()=>{
  if(lock==true){

    if(index==Qdata.length-1){
      setresult(true);
      return 0;
    }

    setindex(++index);
    setQues(Qdata[index]);
    setlock(false);
    option_array.map((option)=>{
      option.current.classList.remove("effecto");
      option.current.classList.remove("wrong");
    })

  }
}

const reset = ()=>{
  setindex(0);
  setQues(Qdata[0]);
  setScore(0);
  setresult(false);
  setlock(false);
}


useGSAP(()=>{
  gsap.from(option1.current,{
    x:500,
    duration:1,
   ease: "elastic.out(1,0.3)",
  })

  gsap.from(option2.current,{
    x:-500,
    duration:1,
   ease: "elastic.out(1,0.3)",
  })

  gsap.from(option3.current,{
    x:500,
    duration:1,
   ease: "elastic.out(1,0.3)",
  })

  gsap.from(option4.current,{
    x:-500,
    duration:1,
   ease: "elastic.out(1,0.3)",
  })

  gsap.from("h2",{
    y:200,
    opacity:0,
    duration:1
  })
},[Ques])


useEffect(()=>{

  gsap.from("img",{
    y:200,
    opacity:0, 
    scale:0,
    ease: "circ.out",
    duration:1.1
  })

  gsap.from(".demo",{
    x:-500,
    rotate:-360,
    opacity:0,
    ease: "bounce.out",
    duration:1.5
  })

},[result])


  return (
    <div className='h-screen w-full bg-stone-800 overflow-hidden'>
        <div className='h-[18vh] flex items-center justify-center border-[.5px] border-[#1d1d1d] '><h1 className='uppercase  lg:text-[4vw] text-[10vw] tracking-[.3rem]  text-center font-[900] font-head lg:leading-[4vw] leading-[12vw] '>quiz game</h1></div>
        {result?<div className=' h-[83vh]  flex items-center justify-center flex-col gap-6 '>
          <img className='lg:w-[20vw] w-[60vw]' src={pic}></img>
          <div className=''><h3 className='text-stone-600 lg:text-[3vw] text-[7vw] bg-gradient-to-r from-[#f0d55d] to-[#dba400] inline-block text-transparent bg-clip-text'>score : <span className='demo inline-block text-[#ffc107]'>{score}</span> out of {Qdata.length}</h3></div>
          <button onClick={reset}>
     R E S E T
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
          </div>
        :
        <>
        <div className=' h-[83vh]  flex items-center  flex-col justify-around pt-5 '>
        <div className='overflow-hidden lg:px-0 px-5'><h2 className='lg:text-[2.5vw] text-[6.5vw] text-stone-800 '>{index+1}. {Ques.question}</h2></div>
        <div className=' lg:w-1/3 w-1/2 flex flex-col gap-7 uppercase text-stone-600 '>
        <div ref={option1} onClick={(e)=>{checkans(e,1)}} className='opt text-center p-2  lg:text-[1.5vw] text-md cursor-pointer'>{Ques.option1}</div>
        <div ref={option2} onClick={(e)=>{checkans(e,2)}} className='opt text-center p-2  lg:text-[1.5vw] text-md cursor-pointer'>{Ques.option2}</div>
        <div ref={option3} onClick={(e)=>{checkans(e,3)}} className='opt text-center p-2  lg:text-[1.5vw] text-md cursor-pointer'>{Ques.option3}</div>
        <div ref={option4} onClick={(e)=>{checkans(e,4)}}  className='opt text-center p-2  lg:text-[1.5vw] text-md cursor-pointer'>{Ques.option4}</div>
        </div>

        <button onClick={nxt}>
    N E X T
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
        <p className='text-stone-600 lg:text-[1vw] text-[3vw] '>{index+1} out of {Qdata.length}</p>
        </div>
        </>}
        

      
    </div>
  )
}

export default Quiz
