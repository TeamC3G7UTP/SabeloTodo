import React, { useState } from "react";
import "./SabelotodoHeader.css";

//-----Icons-----
import { 
  BallotOutlined,
  Close,
  ExpandMore,
  Groups3Outlined, 
  Home, 
  MarkChatReadOutlined, 
  NotificationsOutlined, 
  PeopleAltOutlined, 
  Search,
} from "@mui/icons-material";
import { Avatar, Button, Input} from "@mui/material";
import logo from "../assets/svg/logo-st.svg";
import Modal from 'react-modal';

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

function SabelotodoHeaders(){

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }

  const [inputUrl, setInputUrl] = useState("")

  return( 
      <div className="stHeader">
        <div className="stHeader-content">

          <div className="stHeader__logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="stHeader__icons">

            <div className="stHeader__icon"><Home/></div>

            <div className="stHeader__icon"><BallotOutlined/></div>

            <div className="stHeader__icon"><MarkChatReadOutlined/></div>

            <div className="stHeader__icon"><Groups3Outlined/></div>

            <div className="stHeader__icon"><NotificationsOutlined/></div>
            
          </div>

          <div className="stHeader__input">
            <Search/>
            <input type="text" placeholder="Busca en Sabelotodo"/>
          </div>

          <div className="stHeader__rem">
            <Avatar/>
          </div>
                <Button onClick={ openModal }>Preguntar</Button>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={ closeModal }
                  style={customStyles}
                  contentLabel="Modal"
                  shouldCloseOnEsc
                  center
                  shouldCloseOnOverlayClick
                >
                  <Close onClick={ closeModal }/>

                  <div className="modal__title">
                    <h5>Agregar pregunta</h5>
                    <h5>Compartir link</h5>
                  </div>

                  <div className="modal__info">
                    <Avatar className="avatar"/>
                    <div className="modal__scope">
                      <PeopleAltOutlined />
                      <p>Publico</p>
                      <ExpandMore />
                    </div>
                  </div>

                  <div className="modal__field">
                  <Input type=" text" placeholder="Inicia tu pregunta con un Porque, Como, Que, etc. "
                  />
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                    }}className="">
                    </div>

                    <input type="text"
                      style={{
                        margin: "5px 0",
                        border: "1px solid lightgray",
                        padding: "10px",
                        outline: "2px solid #000",
                      }}placeholder="Optional: Agrega un link para dar contexto."
                      value = {inputUrl}
                      onChange = {(e) => setInputUrl(e.targe.value) }
                      />

                      {inputUrl !== "" && 
                      <img style={{
                        height: "40vh",
                        objectFit: "contain",
                      }}
                      src={ inputUrl } alt="display image"/>
                      }
                      

                    <div className="modal__buttons">
                      <button className="cancel" onClick={closeModal}>Cacelar</button>
                      <button type="submit" className="add">Agregar Pregunta</button>
                    </div>


                  </div>
                </Modal>
        </div>
      </div>
  )
}
export default SabelotodoHeaders