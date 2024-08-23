import React from 'react'
import Button3 from './Button3'
import Cursor from '../Side-Project-ideas/Cursor'

function Footer() {

    const data=[
        {
            title:'Home'
        },
        {
            title:'Work'
        },
        {
            title:'insight'
        },
        {
            title:'contact'
        }
        ,{
            title:'202-1965 W 4th AveVancouver, Canada'
        }
        ,{
            title:'hello@ochi.design'
        }
    ]

    const cursordata=[
        {
            icon:<i className="text-[3rem] ri-instagram-fill"></i>
        },
        {
            icon:<i className="text-[3rem] ri-behance-fill"></i>
        },
        {
            icon:<i className="text-[3rem] ri-facebook-fill"></i>
        },
        {
            icon:<i className="text-[3rem] ri-linkedin-fill "></i>
        }
    ]

  return (
    <div className='h-screen w-full overflow-hidden bg-stone-800 pt-10 flex flex-col  justify-around'>


      <div className='lg:px-16 px-7 flex lg:flex-row flex-col lg:gap-0 gap-[4rem]  justify-between '>
        <div className='left flex gap-10 justify-around'>
        <div><i className="ri-home-4-line text-[#CDEA68] text-xl flex flex-col items-center justify-center"></i><Button3 Title={data[0].title}></Button3></div>
            <div><i className="ri-briefcase-line text-[#CDEA68] text-xl flex flex-col items-center justify-center"></i><Button3 Title={data[1].title}></Button3></div>
            <div><i className="ri-crosshair-2-line text-[#CDEA68] text-xl flex flex-col items-center justify-center"></i><Button3 Title={data[2].title}></Button3></div>
            <div><i className="ri-contacts-line text-[#CDEA68] text-xl flex flex-col items-center justify-center"></i><Button3 Title={data[3].title}></Button3></div>
           
        </div>
        <div className='right flex gap-5 flex-col'>
            <div className='flex gap-3 justify-center items-center'><i className="ri-map-pin-line text-[#CDEA68] text-xl"></i><Button3 Title={data[4].title}></Button3></div>
            <div className='flex gap-3 justify-center items-center'><i class="ri-mail-send-line text-[#CDEA68] text-xl"></i><Button3 Title={data[5].title}></Button3></div>
        </div>
      </div>

      <div className=' flex items-center justify-center lg:py-28 lg:gap-10 gap-3'>
        <Cursor   icon={cursordata[0].icon}></Cursor>
        <Cursor icon={cursordata[1].icon}></Cursor>
        <Cursor icon={cursordata[2].icon}></Cursor>
        <Cursor icon={cursordata[3].icon}></Cursor>

    </div>

    <div className='lg:p-10 '>
        <h1 className='lg:text-[18vw] text-[20vw] text-stone-700 leading-10 text-nowrap font-[900]'>we are ochi</h1>
    </div>
    
    </div>
  )
}

export default Footer
