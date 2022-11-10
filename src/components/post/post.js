import React from 'react'
import "./css/post.css"

//-----Icons-----
import { 
  ArrowDownwardOutlined, 
  ArrowUpwardOutlined, 
  ChatBubbleOutline, 
  MoreHorizOutlined, 
  RepeatOneOutlined, 
  ShareOutlined 
} from '@mui/icons-material'
import { Avatar } from '@mui/material'

function post() {
  return (
    <div className="post">

      <div className="post__info">
        <Avatar/>
        <h4>Nombre de Usuario</h4>
        <small>Fecha</small>
      </div>

      <div className="post__body">
        <p>Esta es la pregunta</p>
        <button className='post__btnAnswer'>Pregunta</button>
      </div>

      <div classname="post__footer">
        <div className='post__footerAtion'>
          <ArrowUpwardOutlined/>
          <ArrowDownwardOutlined/>
        </div>

        <RepeatOneOutlined/>
        <ChatBubbleOutline/>

        <div className="post__footerLeft">
          <ShareOutlined/>
          <MoreHorizOutlined/>
        </div>

        <p>Pregunta 1</p>
        <div classname="post__answer">
          <div className="post-answer-container">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default post
