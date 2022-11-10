import React from "react";
import SabelotodoHeaders from "../headers/sabelotodoHeaders";
import Sidebar from "../sidebar";
import Feed from "./feed";
import Widget from "../widget/widget";
import "./css/sabelotodo.css";

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