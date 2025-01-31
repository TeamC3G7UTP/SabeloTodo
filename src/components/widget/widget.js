import React from 'react'
import { WidgetContent } from '../index'
import "./Widget.css"

function Widget() {
  return (
    <div className='widget'>

      <div className='widget__header'>
        <h5>Espacio para seguidores</h5>
      </div>
      <div className='widget__contents'>
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget