import React from 'react'
import Button3 from './Button3'
import Button1 from './Button1'
import Table_generator from './Table_generator'
import pic from 'C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/star.png'
import pic2 from 'C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/rating.png'

function Clients() {
    


    const data =[
        {
            title:'Karman Ventures'
        },
        {
            title:'investor deck'
        },
        {
            title:'sales deck'
        },
    ]


    const row = [
        {
            row1:{btn1:'Planetly fox',p:'nina walloch',btn2:'read'}
        },
        {
            row1:{btn1:'Workiz Easy',p:'tomer levy',btn2:'read'}
        },
        {
            row1:{btn1:'Hypercare Sym',p:'ellen kimkarde',btn2:'read'}
        },
        {
            row1:{btn1:'Officevibe',p:'bredangoss',btn2:'read'}
        },
        {
            row1:{btn1:'Premium Blend',p:'raff labriegrey',btn2:'read'}
        },
        {
            row1:{btn1:'Orderlion oly',p:'stefen strohmer',btn2:'read'}
        },
        {
            row1:{btn1:'Black Book',p:'jacci smith',btn2:'read'}
        },
        {
            row1:{btn1:'Trawa Energy',p:'david budde',btn2:'read'}
        },

       

    ]


  return (
    <div className='min-h-screen w-full bg-black '>
         <div className='headinglg:p-14 p-7 border-b-[1px] border-stone-700 '><h1 className='font-small lg:text-6xl text-3xl font-[300] text-stone-500 capitalize'>clients review's</h1></div>
      <div className='lg:grid grid-cols-12 gap-4 lg:p-14 p-7 text-lg text-stone-100'>
        <div className='col-span-3 bg-stone-900 lg:h-[70vh] lg:mb-0 mb-5 rounded-xl  shadow-2xl flex flex-col items-center justify-center gap-5 lg:p-0 p-5'><img className='lg:w-[40%] w-[30vw]' src={pic2}></img><div><Button3 Title={data[0].title}></Button3></div>
        </div>

        
        <div className='col-span-3 bg-stone-900 lg:h-[70vh] lg:mb-0 mb-5 rounded-xl flex flex-col lg:pl-5 lg:pt-5 gap-5 p-5 '>
            <p className='pb-10 text-stone-300'>Services :</p>
            <Button1 Title={data[2].title}></Button1>
            <Button1 Title={data[1].title}></Button1>
            </div>

        <div className='col-span-6 bg-stone-900 lg:h-[70vh]  rounded-xl pt-5 px-5  text-stone-300 '>
            <p className='pb-10 lg:text-xl text-2xl lg:text-start text-center'>William Barnes</p>
            <img className='lg:w-[8vw] w-[50vw] lg:mx-0 mx-auto rounded-lg' src='https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png'></img>
<p className='pt-9 '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
</p>
        </div>
      </div>

      <div className='client-data  bg-stone-800 rounded-xl lg:mx-14 text-stone-300 p-3'>
      <div className='flex justify-center items-center p-2'><img className='w-[40vh]' src={pic}></img></div>
    <Table_generator ROW={row[0]}></Table_generator>
    <Table_generator ROW={row[1]}></Table_generator>
    <Table_generator ROW={row[2]}></Table_generator>
    <Table_generator ROW={row[3]}></Table_generator>
    <Table_generator ROW={row[4]}></Table_generator>
    <Table_generator ROW={row[5]}></Table_generator>
    <Table_generator ROW={row[6]}></Table_generator>
    <Table_generator ROW={row[7]}></Table_generator>
    
      </div>

    </div>
  )
}

export default Clients
