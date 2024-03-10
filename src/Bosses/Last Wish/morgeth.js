import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import '../Bosspage.css';

function Morgeth() {
    return (
        <div>
          <TopBar />
          <BossSearchBar/>
          <div className="container">
            <div className="bossInfo">
              <h1> Boss Info </h1>
              <p> Stack right
              </p>              
            </div>
            <div className="weaponAdvice">
              <h1> Loadout Recommendations </h1>
              <p> 
                Well + Izi rocket swap
              </p>
            </div>
          </div>
      </div>
    );
  }
export default Morgeth;