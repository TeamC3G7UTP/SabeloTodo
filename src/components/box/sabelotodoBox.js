import React from 'react'
import "./SabelotodoBox.css"
//-----Icons-----
import { Avatar } from '@mui/material'

function SabelotodoBox() {
  return (
    <div className='sabelotodoBox'>
      <div className='sabelotodoBox__info'>
        <Avatar/>
      </div>

      <div className='sabelotodoBox__sabelotodo'>
        <p>Cual es tu pregunta!</p>
      </div>

    </div>
  )
}

export default SabelotodoBox
