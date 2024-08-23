import React from 'react'
import Button3 from './Button3'

function Table_generator({ROW}) {
  return (
    <div className='flex items-center justify-between p-4 border border-stone-600 border-dotted '>
<Button3 Title={ROW.row1.btn1}></Button3>
<p className='capitalize'>{ROW.row1.p}</p>
<Button3 Title={ROW.row1.btn2}></Button3>
    </div>
  )
}

export default Table_generator
