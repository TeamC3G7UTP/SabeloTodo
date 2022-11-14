import React from 'react';
import "./sidebarOptions.css";

//---------imgs----------
import Desing from "../assets/svg/Designer_Flatline.svg";
import DataAnalysis from "../assets/svg/Data_processing _Flatline.svg";
import Startups from "../assets/svg/Startup_Flatline.svg";
import Blockchain from "../assets/svg/Ethereum_Flatline.svg";
import Fitness from "../assets/svg/Fitness_Flatline.svg";
import SoftSkills from "../assets/svg/Team_meeting_Flatline.svg";
import Economy from "../assets/svg/Currency_Flatline.svg";
import Dev from "../assets/svg/Web_Developer_Flatline.svg";

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        
        <div className='sidebarOption'>
          <img src={Dev} alt="Dev" />
          <p>Developer</p>
        </div>

        <div className='sidebarOption'>
          <img src={DataAnalysis} alt="Dev" />
          <p>Data Analysis</p>
        </div>

        <div className='sidebarOption'>
          <img src={Desing} alt="Dev" />
          <p>Desing</p>
        </div>

        <div className='sidebarOption'>
          <img src={Blockchain} alt="Dev" />
          <p>Blockchain</p>
        </div>

        <div className='sidebarOption'>
          <img src={SoftSkills} alt="Dev" />
          <p>Soft Skills</p>
        </div>

        <div className='sidebarOption'>
          <img src={Startups} alt="Dev" />
          <p>Startups</p>
        </div>

        <div className='sidebarOption'>
          <img src={Economy} alt="Dev" />
          <p>Economy</p>
        </div>

        <div className='sidebarOption'>
          <img src={Fitness} alt="Dev" />
          <p>Fitness</p>
        </div>
    </div>
  )
}

export default SidebarOptions;
