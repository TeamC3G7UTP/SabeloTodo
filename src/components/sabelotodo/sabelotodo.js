import React from "react";
import {SabelotodoHeaders, Sidebar, Feed, Widget} from "../index";
import "./sabelotodo.css";

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