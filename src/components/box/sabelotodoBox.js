import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sabelotodoBox.css"

function sabelotodoBox() {
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

export default sabelotodoBox
