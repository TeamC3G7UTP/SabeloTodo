import React from "react";

//-----Icons-----
import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, Home, PeopleAltOutlined } from "@mui/icons-material";


function SabelotodoHeaders(){
  return( 
      <div className="stHeader">
        <div className="stHeader-content">
          <div className="stHeader__logo">
            <img src="#" alt="logo"/>

            <div className="stHeader__icons">
              <div className="stHeader__icon"><Home /></div>
              <div className="stHeader__icon"><FeaturedPlayListOutlined/></div>
              <div className="stHeader__icon"><AssignmentTurnedInOutlined/></div>
              <div className="stHeader__icon"><PeopleAltOutlined/></div>
            </div>

          </div>
        </div>
      </div>
  )
}
export default SabelotodoHeaders