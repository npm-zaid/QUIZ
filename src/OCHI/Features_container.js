import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Features from './Features'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);




const cardsdata=[
    {
        Img1:'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png',
        Img2:'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg',
        Text1:'fyde',
        Text2:'vise',
        title1:'audit',
        title2:'copywriting',
        title3:'sales deck',
        title4:'slides design' ,
        title5:'agency',
        title6:'company presentation' ,
       


    },
    {
        Img1:'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg',
        Img2:'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png',
        Text1:'trawa',
        Text2:'premium blend',
        title1:'rudit',
        title2:'zopywriting',
        title3:'oales deck',
        title4:'ylides design' ,
        title5:'mngency',
        title6:'Qompany presentation' ,
       
    },
    {
        Img1:'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png',
        Img2:'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png',
        Text1:'Cardboard Spaceship',
        Text2:'AH2 & Matt Horn',
        title1:'rudit',
        title2:'zopywriting',
        title3:'oales deck',
        title4:'ylides design' ,
        title5:'mngency',
        title6:'Qompany presentation',
       
    },
]






function Features_container() {


    useGSAP(()=>{
        gsap.to(".trigger .mover",{
            duration:3,
            transform:"translateX(-210%)",
            scrollTrigger:{
                trigger:".trigger",
                scroller:"body",
                scrub:2,
                start:'top 0%',
                end:'top -100%',
                pin:true
            }
        })
    })
    

  return (
    <div  className='feature-wrapper min-h-screen bg-stone-900 rounded-3xl overflow-x-hidden'>
        <div className=' heading lg:p-16 p-10 border-b-[1px] border-stone-700 '><h1 className='font-small lg:text-6xl text-4xl font-[300] text-stone-500'>Featured project</h1></div>
      <div className='trigger border-3 '>
        <div className='mover flex '>
            <Features 
           cdata={cardsdata[0]}
            ></Features>

            <Features
           cdata={cardsdata[1]}
            ></Features>
            
            <Features
            cdata={cardsdata[2]}
            ></Features>
        </div>
        
        </div>

      </div>
    
  )
}

export default Features_container
