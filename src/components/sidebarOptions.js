import React from 'react';
import "./css/sidebarOptions.css";

//---------imgs----------
import Desing from "./img/svg/Designer_Flatline.svg";
import DataAnalysis from "./img/svg/Data_processing _Flatline.svg";
import Startups from "./img/svg/Startup_Flatline.svg";
import Blockchain from "./img/svg/Ethereum_Flatline.svg";
import Fitness from "./img/svg/Fitness_Flatline.svg";
import SoftSkills from "./img/svg/Team_meeting_Flatline.svg";
import Economy from "./img/svg/Currency_Flatline.svg";
import Dev from "./img/svg/Web_Developer_Flatline.svg";

function sidebarOptions() {
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
          <p>SoftSkills</p>
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

export default sidebarOptions;
