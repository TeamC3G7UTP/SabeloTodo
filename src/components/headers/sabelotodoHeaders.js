import React from "react";
import "./SabelotodoHeader.css";

//-----Icons-----
import { 
  BallotOutlined,
  //Close,
  Groups3Outlined, 
  Home, 
  MarkChatReadOutlined, 
  NotificationsOutlined, 
  PeopleAltOutlined, 
  Search,
} from "@mui/icons-material";
import { Avatar, Button} from "@mui/material";
import logo from "../assets/svg/logo-st.svg";
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function SabelotodoHeaders(){

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() { setIsOpen(true); }

  function closeModal() { setIsOpen(false); }

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
                <Button onClick={ openModal}>Preguntar</Button>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                  shouldCloseOnEsc
                  center
                  shouldCloseOnOverlayClick
                >
                  <button onClick={closeModal}>x</button>
                  <div className="modal__title">
                    <h5>Agregar pregunta</h5>
                    <h5>Compartir link</h5>
                  </div>
                  <div className="modal__info">
                    <Avatar className="avatar"/>
                    <div className="modal__scop">
                      <PeopleAltOutlined />
                    </div>
                  </div>

                </Modal>
        </div>
      </div>
  )
}
export default SabelotodoHeaders