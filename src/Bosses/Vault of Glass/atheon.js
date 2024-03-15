import React from "react";
import TopBar from "../../TopBar";
import '../../App.css';
import BossSearchBar from "../bossSearchBar";
import YoutubeEmbed from "../YoutubeEmbed";

function Atheon() {
    return (
      <div>
      <TopBar />
      <BossSearchBar />
      <div className="bossContainer">
        <div className="bossInfo">
            <h1> Boss Info </h1>
            <p> 
              Have 1 person do the mechanics and the rest of the team kills themselves before the encounter starts. When the oracles have been destroyed, the team and respawn back in and kill Atheon.
            </p>
        </div>
        <div className="weaponAdvice">
            <h1> Loadout Recommendations </h1>
            <p> 
              Use a Well of Radiance and any heavy weapon that can deal a lot of damage. Thunderlord for the memes.
            </p>
            <h1>Video Demo</h1>
            <YoutubeEmbed embedId="oauAOg69Ce8"/>
        </div>
      </div> 
    </div>
    );
  }
export default Atheon;