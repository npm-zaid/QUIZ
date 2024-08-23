import React from 'react'
import logo from 'C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/logo001.svg'
import Button1 from './Button1'


const data=[
    {
        title:'©️ 2019-2022'
    },
    {
        title:'rating 5.0 on cluth' 
    },
    {
        title:'business bootcamp alumni'
    }
   
  ]

function Achievement() {
  return (
    <div className='min-h-[100vh] bg-[#000000] lg:grid grid-cols-12 lg:px-16 px-7 gap-6 items-center lg:justify-center lg-py:0 py-10'>
      <div className='col-span-6 lg:h-[70vh] h-[40vh] bg-[#004D43] rounded-2xl relative  '><img className='lg:w-[12vw] w-[35vw]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={logo}></img> <div className='absolute lg:bottom-10 bottom-5 lg:left-10 left-4 '><Button1 Title={data[0].title}></Button1></div></div>
      <div className='col-span-3 lg:h-[70vh] h-[40vh] bg-[#212121] rounded-2xl relative lg:my-0 my-7'><img className='lg:w-[12vw] w-[35vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img><div  className='absolute lg:bottom-10 bottom-8 lg:left-[4rem] left-[4.5rem]'><Button1 Title={data[1].title}></Button1></div></div>
      <div className='col-span-3 lg:h-[70vh] h-[40vh] bg-[#212121] rounded-2xl relative'><img className='lg:w-[10vw] w-[35vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img><div className='absolute lg:bottom-10 bottom-4 lg:left-[1rem] left-[2rem]'><Button1 Title={data[2].title}></Button1></div></div>
   
    </div>
  )
}

export default Achievement
