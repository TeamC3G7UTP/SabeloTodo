import React from 'react'
import "./Post.css"
import { Modal } from "react-modal"
//-----Icons-----
import { Avatar } from '@mui/material'
import { 
  ArrowDownwardOutlined, 
  ArrowUpwardOutlined, 
  ChatBubbleOutline, 
  Close, 
  MoreHorizOutlined, 
  RepeatOneOutlined, 
  ShareOutlined 
} from '@mui/icons-material'


function Post() {
  return (
    <div className="post">

      <div className="post__info">
        <Avatar/>
        <h4>Nombre de Usuario</h4>
        <small>Fecha</small>
      </div>

      <div className="post__body">
        <div className='post__question'>
          <p>Esta es la pregunta</p>
          <button className='post__btnAnswer'>Pregunta</button>
        </div>
      </div>

      <div className="post__footer">
        <div className='post__footerAction'>
          <ArrowUpwardOutlined/>
          <ArrowDownwardOutlined/>
        </div>
        <RepeatOneOutlined/>
        <ChatBubbleOutline/>
        <div className="post__footerLeft">
          <ShareOutlined/>
          <MoreHorizOutlined/>
        </div>

        <p style={{
            color: 'rgba (0,0,0,0.5)',
            fontSize: '12px',
            fontWeight: 'bold',
            margin: '10px 0',
          }}>
          Pregunta 1
        </p>

        <div style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "2px solid #61a4bc54",
        }}
        className="post__answer">

          <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '10px 5px',
              borderTop: '2px solid #61a4bc54',
              }}className="post-answer-container">
            
            <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#61A4BC",
              }}className='post-answered'>
              
              <Avatar/>
              <div style={{
                    margin: "0px 10px",
                }}className='post-info'>
                  
                <p>Nombre de Usuario</p>
                <span>Fecha</span>
              </div>

            </div>
          </div>

          <div className='post-answer'>
            Este es el test de preguntas
          </div>

        </div>

      </div>
    </div>
  )
}

export default Post
