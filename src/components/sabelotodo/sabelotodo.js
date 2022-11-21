import React from "react";
import {SabelotodoHeaders, Sidebar, Feed, Widget} from "../index";
import "./Sabelotodo.css";
import "./resposive-modal.css"
function Sabelotodo(){
  return(
    <div className="sabelotodo">
      <SabelotodoHeaders />

      <div className="sabelotodo__contents">
        
        <div className="sabelotodo__content">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>

      </div>
    </div>
  )
}
export default Sabelotodo;