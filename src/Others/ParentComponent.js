import React from 'react'
import Button1 from '../OCHI/Button1'
import ChildComponent from './ChildComponent.js'

function ParentComponent() {

const pdata=[
  {title:'submit'},
  {title:'p data'}
]
  
  return (
<>

<ChildComponent data = {pdata}></ChildComponent>
    

    </>
  )
}

export default ParentComponent
