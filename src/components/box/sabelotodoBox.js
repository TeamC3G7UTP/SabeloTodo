import { Avatar } from '@mui/material'
import React from 'react'
import "./sabelotodoBox.css"

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
