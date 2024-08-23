import React from 'react'
import Features from '../OCHI/Features'

function ChildComponent() {


  
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
      name:'carda'


  },
]

  
  return (
    <div className='bg-slate-700 w-full h-screen'>
       <Features 
           cdata={cardsdata[0]}
            ></Features>

           
    </div>
  )
}

export default ChildComponent
