import React, { useState } from "react";
import "./Post.css"
//-----Icons-----
import { Avatar } from '@mui/material'
import { 
  ArrowDownwardOutlined, 
  ArrowUpwardOutlined, 
  ChatBubbleOutline, 
  MoreHorizOutlined, 
  RepeatOneOutlined, 
  ShareOutlined,
  Close
} from '@mui/icons-material';
import Modal from 'react-modal';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
  },
};

function Post() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }

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
          <button onClick={ openModal } className='post__btnAnswer'>Pregunta</button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={ closeModal }
            style={customStyles}
            contentLabel="Modal"
            shouldCloseOnEsc
            center
            shouldCloseOnOverlayClick
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
          <Close onClick={ closeModal }/>
          <div className="modal__question">
            <h1>Esta es la pregunta.</h1>
            <p>preguntado por: {""}</p><span className="name">Nombre de Usuario</span>{""}en{""}<span>Fecha</span>
          </div>

          <div className="modal__answer">
            <ReactQuill placeholder="Ingrese su pregunta."/>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={closeModal}>Cacelar</button>
                      <button type="submit" className="add">Agregar Pregunta</button>
          </div>
          </Modal>

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
