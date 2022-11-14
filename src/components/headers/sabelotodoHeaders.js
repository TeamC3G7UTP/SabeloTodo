import React from "react";
import "./sabelotodoHeader.css";

//-----Icons-----
import { 
  BallotOutlined, 
  Groups3Outlined, 
  Home, 
  MarkChatReadOutlined, 
  NotificationsOutlined, 
  Search,
} from "@mui/icons-material";
import { Avatar, Button} from "@mui/material";
import logo from "../assets/svg/logo-st.svg";

function SabelotodoHeaders(){
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
                <Button>Preguntar</Button>
        </div>
      </div>
  )
}
export default SabelotodoHeaders